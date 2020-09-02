import {
  Serializer,
  Client,
  BeaconMessage,
  WalletClientOptions,
  LocalStorage,
  TransportType,
  BeaconRequestOutputMessage,
  BeaconResponseInputMessage,
  AppMetadata,
  PermissionInfo,
  P2PTransport,
  P2PPairingRequest
} from '../..'
import { PermissionManager } from '../../managers/PermissionManager'
import { AppMetadataManager } from '../../managers/AppMetadataManager'
import { ConnectionContext } from '../../types/ConnectionContext'
import { IncomingRequestInterceptor } from '../../interceptors/IncomingRequestInterceptor'
import { OutgoingResponseInterceptor } from '../../interceptors/OutgoingResponseInterceptor'
import { BeaconRequestMessage } from '../../types/beacon/BeaconRequestMessage'

/**
 * The WalletClient has to be used in the wallet. It handles all the logic related to connecting to beacon-compatible
 * dapps and handling/responding to requests.
 */
export class WalletClient extends Client {
  private readonly permissionManager: PermissionManager
  private readonly appMetadataManager: AppMetadataManager

  /**
   * This array stores pending requests, meaning requests we received and have not yet handled / sent a response.
   */
  private pendingRequests: BeaconRequestMessage[] = []

  constructor(config: WalletClientOptions) {
    super({ storage: new LocalStorage(), ...config })
    this.permissionManager = new PermissionManager(new LocalStorage())
    this.appMetadataManager = new AppMetadataManager(new LocalStorage())
  }

  public async init(): Promise<TransportType> {
    return super.init(false)
  }

  /**
   * This method initiates a connection to the P2P network and registers a callback that will be called
   * whenever a message is received.
   *
   * @param newMessageCallback The callback that will be invoked for every message the transport receives.
   */
  public async connect(
    newMessageCallback: (
      message: BeaconRequestOutputMessage,
      connectionInfo: ConnectionContext
    ) => void
  ): Promise<boolean> {
    this.handleResponse = async (
      message: BeaconRequestMessage,
      connectionInfo: ConnectionContext
    ): Promise<void> => {
      if (!this.pendingRequests.some((request) => request.id === message.id)) {
        this.pendingRequests.push(message)
        await IncomingRequestInterceptor.intercept({
          message,
          connectionInfo,
          appMetadataManager: this.appMetadataManager,
          interceptorCallback: newMessageCallback
        })
      }
    }

    return super._connect()
  }

  /**
   * This method sends a response for a specific request back to the DApp
   *
   * @param message The BeaconResponseMessage that will be sent back to the DApp
   */
  public async respond(message: BeaconResponseInputMessage): Promise<void> {
    console.log('responding to message', message)
    const request = this.pendingRequests.find((pendingRequest) => pendingRequest.id === message.id)
    if (!request) {
      throw new Error('No matching request found!')
    }

    this.pendingRequests = this.pendingRequests.filter(
      (pendingRequest) => pendingRequest.id !== message.id
    )

    await OutgoingResponseInterceptor.intercept({
      senderId: await this.beaconId,
      request,
      message,
      permissionManager: this.permissionManager,
      appMetadataManager: this.appMetadataManager,
      interceptorCallback: async (response: BeaconMessage): Promise<void> => {
        await this.respondToMessage(response)
      }
    })
  }

  public async getAppMetadataList(): Promise<AppMetadata[]> {
    return this.appMetadataManager.getAppMetadataList()
  }

  public async getAppMetadata(senderId: string): Promise<AppMetadata | undefined> {
    return this.appMetadataManager.getAppMetadata(senderId)
  }

  public async removeAppMetadata(senderId: string): Promise<void> {
    return this.appMetadataManager.removeAppMetadata(senderId)
  }

  public async removeAllAppMetadata(): Promise<void> {
    return this.appMetadataManager.removeAllAppMetadata()
  }

  public async getPermissions(): Promise<PermissionInfo[]> {
    return this.permissionManager.getPermissions()
  }

  public async getPermission(accountIdentifier: string): Promise<PermissionInfo | undefined> {
    return this.permissionManager.getPermission(accountIdentifier)
  }

  public async removePermission(accountIdentifier: string): Promise<void> {
    return this.permissionManager.removePermission(accountIdentifier)
  }

  public async removeAllPermissions(): Promise<void> {
    return this.permissionManager.removeAllPermissions()
  }

  public async removePeer(id: P2PPairingRequest): Promise<void> {
    if ((await this.transport).type === TransportType.P2P) {
      const removePeerResult = ((await this.transport) as P2PTransport).removePeer(id)

      await this.removePermissionsForPeers([id])

      return removePeerResult
    }
  }

  public async removeAllPeers(): Promise<void> {
    if ((await this.transport).type === TransportType.P2P) {
      const peers: P2PPairingRequest[] = await ((await this.transport) as P2PTransport).getPeers()
      const removePeerResult = ((await this.transport) as P2PTransport).removeAllPeers()

      await this.removePermissionsForPeers(peers)

      return removePeerResult
    }
  }

  private async removePermissionsForPeers(peersToRemove: P2PPairingRequest[]): Promise<void> {
    const permissions = await this.permissionManager.getPermissions()

    const peerIdsToRemove = peersToRemove.map((peer) => peer.publicKey)
    // Remove all permissions with origin of the specified peer
    const permissionsToRemove = permissions.filter((permission) =>
      peerIdsToRemove.includes(permission.appMetadata.senderId)
    )
    const permissionIdentifiersToRemove = permissionsToRemove.map(
      (permissionInfo) => permissionInfo.accountIdentifier
    )
    await this.permissionManager.removePermissions(permissionIdentifiersToRemove)
  }

  /**
   * An internal method to send a BeaconMessage to the DApp
   *
   * @param message Send a message back to the DApp
   */
  private async respondToMessage(message: BeaconMessage): Promise<void> {
    const serializedMessage: string = await new Serializer().serialize(message)
    await (await this.transport).send(serializedMessage)
  }
}
