export const toastTemplates = {"default":{"html":"<div id=\"beacon-toast\" class=\"beacon-toast__base animated fadeIn\">\n  <div class=\"beacon-toast__content\">\n    <span id=\"beacon-text\">\n      <p id=\"beacon-text-content\">{{text}}</p>\n      <a id=\"beacon-open-wallet\" class=\"beacon-toast__wallet__link\">\n        Open\n        <svg\n          aria-hidden=\"true\"\n          focusable=\"false\"\n          data-prefix=\"fas\"\n          data-icon=\"external-link-alt\"\n          class=\"svg-inline--fa fa-external-link-alt fa-w-16\"\n          role=\"img\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n          viewBox=\"0 0 512 512\"\n        >\n          <path\n            fill=\"currentColor\"\n            d=\"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z\"\n          ></path>\n        </svg>\n      </a>\n    </span>\n\n    <svg\n      id=\"beacon-toast-button-expand\"\n      class=\"beacon-toast__more\"\n      aria-hidden=\"true\"\n      focusable=\"false\"\n      data-prefix=\"fas\"\n      data-icon=\"angle-down\"\n      class=\"svg-inline--fa fa-angle-down fa-w-10\"\n      role=\"img\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 320 512\"\n    >\n      <path\n        fill=\"currentColor\"\n        d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"\n      ></path>\n    </svg>\n    <svg\n      id=\"beacon-toast-button-close\"\n      class=\"beacon-toast__more\"\n      aria-hidden=\"true\"\n      focusable=\"false\"\n      data-prefix=\"fal\"\n      data-icon=\"times\"\n      class=\"svg-inline--fa fa-times fa-w-10\"\n      role=\"img\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox=\"0 0 320 512\"\n    >\n      <path\n        fill=\"currentColor\"\n        d=\"M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z\"\n      ></path>\n    </svg>\n  </div>\n  <div id=\"beacon-toast-loader\" class=\"progress-line\"></div>\n  <hr id=\"beacon-toast-loader-placeholder\" class=\"hide\" />\n  <div id=\"beacon-toast-list\" class=\"beacon-toast__more--action\"></div>\n</div>\n","css":":host {\n  --animation-duration: 300ms;\n  all: initial;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n.beacon-toast__base {\n  position: fixed;\n  top: 16px;\n  right: 16px;\n  z-index: 2147483000;\n  margin: 0 auto;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.1);\n  flex-direction: column;\n}\n@media (max-width: 576px) {\n  .beacon-toast__base {\n    top: 8px;\n    right: 8px;\n    left: 8px;\n  }\n  .beacon-toast__wallet__outer {\n    flex-wrap: wrap;\n  }\n  .beacon-toast__wallet__link {\n    display: flex;\n    margin-left: 12px !important;\n  }\n}\n\n.theme__light.beacon-toast__base {\n  background: #fff;\n}\n\n.theme__dark.beacon-toast__base {\n  background: #27334c;\n}\n\n.theme__dark p {\n  color: #6183ff;\n}\n\na {\n  text-decoration: none;\n  color: #3880ff;\n}\n\na svg {\n  width: 12px;\n  margin-left: 2px;\n}\n\na:visited {\n  color: #3880ff;\n}\n\nhr {\n  height: 1px;\n  color: rgba(0, 0, 0, 0.12);\n  background-color: rgba(0, 0, 0, 0.12);\n  border: none;\n  width: 100%;\n  margin: 0;\n  display: none;\n}\n\n.show {\n  display: block !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n#beacon-toast-list {\n  display: none;\n}\n\n.beacon-toast__upside_down {\n  transform: rotate(180deg);\n}\n\n.beacon-toast__content {\n  justify-content: space-between;\n  min-height: 56px;\n  height: 0;\n}\n\n.beacon-toast__action__item,\n.beacon-toast__powered a,\n.beacon-toast__wallet__container,\n#beacon-text,\n.beacon-toast__action__item p,\n.beacon-toast__wallet__outer {\n  align-items: center;\n}\n\n.beacon-toast__content,\n.beacon-toast__base,\n.beacon-toast__action__item,\n.beacon-toast__powered a,\n#beacon-text,\n.beacon-toast__wallet__container,\n.beacon-toast__wallet__outer {\n  display: flex;\n}\n\n.beacon-toast__content,\n.beacon-toast__action__item,\n.beacon-toast__powered a {\n  padding: 0 16px;\n  font-family: Roboto, Helvetica, sans-serif;\n}\n\n#beacon-text strong {\n  display: contents;\n}\n.beacon-toast__wallet__link {\n  margin-left: 8px;\n}\n.beacon-toast__wallet__link svg {\n  margin-left: 4px;\n}\n.beacon-toast__powered a {\n  margin: 4px 0 12px;\n  font-size: 12px;\n  opacity: 0.64;\n}\n\n.beacon-toast__powered svg {\n  width: 20px;\n  height: 20px;\n  margin: 0 2px 0 4px;\n}\n\n.beacon-toast__action__item {\n  font-size: 14px;\n  max-width: 40ch;\n}\n\n.beacon-toast__action__item p {\n  margin-right: 8px;\n}\n\n.beacon-toast__action__item__subtitle,\n.beacon-toast__powered a {\n  min-width: 88px;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.theme__dark .beacon-toast__powered a {\n  color: #7c99d6;\n}\n\n.beacon-toast__content__img {\n  width: 24px;\n  height: 24px;\n  margin-right: 4px;\n  image-rendering: -moz-crisp-edges; /* Firefox */\n  image-rendering: -o-crisp-edges; /* Opera */\n  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */\n  image-rendering: crisp-edges;\n  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */\n}\n\n.beacon-toast__more {\n  width: 14px;\n  transition: transform 0.5s;\n}\n\na,\n.beacon-toast__more {\n  cursor: pointer;\n}\n\na:hover {\n  opacity: 0.64;\n}\n\n.theme__dark .beacon-toast__more {\n  color: #7c99d6;\n}\n\n.beacon-toast__more--action {\n  margin: 8px 0;\n}\n\n#beacon-text {\n  padding-right: 24px;\n}\n\n#beacon-text-content {\n  display: flex;\n  align-items: center;\n}\n\n.progress-line,\n.progress-line:before {\n  height: 3px;\n  width: 100%;\n  margin: 0;\n}\n.progress-line {\n  background-color: #a7c4f7;\n  display: -webkit-flex;\n  display: flex;\n}\n.progress-line:before {\n  background-color: #3880ff;\n  content: '';\n  -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n@-webkit-keyframes running-progress {\n  0% {\n    margin-left: 0px;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0%;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n@keyframes running-progress {\n  0% {\n    margin-left: 0px;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0%;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n","poweredByBeacon":"<a href=\"https://walletbeacon.io\" target=\"_blank\">\n  powered by\n  <svg\n    id=\"f63e95a9-fd19-4487-bc1a-09eb2f066704\"\n    data-name=\"Guides\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    width=\"65\"\n    height=\"65\"\n    viewBox=\"0 0 65 65\"\n  >\n    <title>beacon_logo</title>\n    <path\n      fill=\"currentColor\"\n      d=\"M59.66,29.52v1.06c0,.37-.18,9.07-4.11,15.88S44.16,57.75,43.84,57.93l-.91.54-1.61-.93-9.19-5.3a14.68,14.68,0,0,1-1.63-1.06h0a14.09,14.09,0,0,1-1.29-1,17.63,17.63,0,0,1-2.56-2.7,18.58,18.58,0,0,1-2.56-4.51,21.53,21.53,0,0,1-1.5-9,6.21,6.21,0,0,1,2.93-.73c.25,0,.49,0,.74,0a18.29,18.29,0,0,0,1,7.93,15.06,15.06,0,0,0,6.67,8l8.93,5.16c.2-.13.43-.3.68-.48,2.26-1.6,6.42-4.92,8.86-9.13C55.12,39.94,55.8,34,56,31.57l-3.79-2.19a23,23,0,0,0,.6-3.83Z\"\n    />\n    <path\n      fill=\"currentColor\"\n      d=\"M49.22,11.43V23.89c0,.65,0,1.3-.1,1.94v0c-.06.55-.13,1.1-.24,1.63A18,18,0,0,1,47.82,31a19.11,19.11,0,0,1-2.62,4.49,21.37,21.37,0,0,1-7.07,5.8,6.08,6.08,0,0,1-2.42-2.84A18.1,18.1,0,0,0,42,33.7h0a15.12,15.12,0,0,0,3.58-9.81V13.6c-.21-.11-.47-.21-.74-.35-2.52-1.16-7.47-3.1-12.36-3.1-5.42,0-11,2.4-13.08,3.45V18a22.54,22.54,0,0,0-3.63,1.38V11.43l.92-.52c.33-.18,8-4.38,15.79-4.38s15.48,4.2,15.8,4.38Z\"\n    />\n    <path\n      fill=\"currentColor\"\n      d=\"M18,26.4,9,31.55q0,.35.06.78a31.63,31.63,0,0,0,3.49,12.28c2.71,4.71,7.55,8.3,9.53,9.64l3.79-2.19a23.33,23.33,0,0,0,3,2.44l-6.88,4-.92-.54c-.31-.18-7.75-4.69-11.68-11.5S5.36,30.92,5.35,30.56V29.49L7,28.55l9.17-5.29c.57-.32,1.14-.61,1.72-.87a13.46,13.46,0,0,1,1.55-.61A17.52,17.52,0,0,1,23,20.91a19.2,19.2,0,0,1,5.19,0,21.49,21.49,0,0,1,8.55,3.24,6.29,6.29,0,0,1-1.25,3.51,17.9,17.9,0,0,0-7.3-3.06A15.14,15.14,0,0,0,18,26.4Z\"\n    />\n  </svg>\n  Beacon\n</a>\n"}}