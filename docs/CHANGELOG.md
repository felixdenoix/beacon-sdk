# Changelog

## 0.6.0 (2020-05-21)

#### Breaking Changes

- **QR:** fixed a bug where the QR data object was stringified 2 times, resulting in an escaped string

#### Bug Fixes

- **P2P:** show QR Alert again if no peer has connected
- **P2P:** do not throw error when decryption fails, because this is expected to happen sometimes
- **P2P:** fixed error when persisting matrix room, resulting in an error when trying to read rooms from local storage
- **BigNumber:** use BigNumber instead of native BigInt to support Safari

## 0.5.0 (2020-05-15)

#### Internals

- **typescript:** update to 3.9.2
- **typescript:** enable strict mode

#### Bug Fixes

- **account-identifier:** pass Buffer to bs58check encode method

## 0.4.4 (2020-05-14)

#### Breaking Changes

- **p2p-communication-client:** make methods async

## 0.4.3 (2020-05-13)

#### Features

- **alert:** link to correct network

## 0.4.2 (2020-05-13)

#### Features

- **alert:** improve styling and wording

## 0.4.1 (2020-05-12)

#### Bug Fixes

- **alert:** inline beacon logo

## 0.4.0 (2020-05-12)

#### Internals

- **matrix:** replace `matrix-js-sdk` with internal implementation

## 0.3.0 (2020-05-08)

#### Breaking Changes

- **events:** pass overrides in constructor

#### Features

- **alert:** improve styling and wording
- **events:** send success events when receiving a beacon response

#### Bug Fixes

- **get-address-from-pubkey:** handle edpk public keys

## 0.2.0 (2020-04-30)

#### Breaking Changes

- **beacon:** remove read_address permission
- **account-identifier:** remove account identifier from beacon message

#### Features

- **beaconId:** generate keypair and use public key as `beaconId`
- **errors:** add human readable messages

#### Bug Fixes

- **transport:** fix detection of chrome extension

## 0.1.1 (2020-04-29)

#### Internals

- **exposed-promise:** use class instead of function to preserve internal state

#### Bug Fixes

- **active-account:** read active account as early as possible

## 0.1.0 (2020-04-29)

Initial stable beta release