!function n(o,l,s){function i(t,e){if(!l[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(a)return a(t,!0);throw(r=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",r}r=l[t]={exports:{}},o[t][0].call(r.exports,function(e){return i(o[t][1][e]||e)},r,r.exports,n,o,l,s)}return l[t].exports}for(var a="function"==typeof require&&require,e=0;e<s.length;e++)i(s[e]);return i}({1:[function(e,t,r){"use strict";e("./slsp-courier-info"),e("./slsp-ill-signin-order-alert"),e("./prm-locations-after"),e("./prm-location-items-after"),e("./slsp-archives-htgi"),e("./slsp-archives-viewit"),e("./slsp-http-intercept-requests"),e("./prm-user-area-expandable-after"),e("./prm-loan-after"),e("./prm-personal-info-after"),e("./prm-alma-other-members-after");angular.module("viewCustom",["angularLoad","slspCourierInfo","slspIllSigninOrderAlert","ethLocationsAfterModule","ethLocationItemsAfterModule","slspArchivesHtgi","slspArchivesViewit","slspHttpInterceptRequests","slspUserAreaExpandableAfterModule","slspLoanAfterModule","slspPersonalInfoAfterModule","prmAlmaOtherMembersAfterModule"])},{"./prm-alma-other-members-after":2,"./prm-loan-after":5,"./prm-location-items-after":8,"./prm-locations-after":13,"./prm-personal-info-after":18,"./prm-user-area-expandable-after":24,"./slsp-archives-htgi":25,"./slsp-archives-viewit":27,"./slsp-courier-info":29,"./slsp-http-intercept-requests":31,"./slsp-ill-signin-order-alert":33}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.prmAlmaOtherMembersAfterModule=void 0;e=e("./slsp-collapse-other-inst/slsp-collapse-other-inst.module");(r.prmAlmaOtherMembersAfterModule=angular.module("prmAlmaOtherMembersAfterModule",[]).component("prmAlmaOtherMembersAfter",{bindings:{parentCtrl:"<"},template:'<slsp-collapse-other-inst-component after-ctrl="$ctrl"></slsp-collapse-other-inst-component><slsp-alma-other-members-after parent-ctrl="$parent.$ctrl"></slsp-alma-other-members-after>'})).requires.push(e.slspCollapseOtherInstModule.name)},{"./slsp-collapse-other-inst/slsp-collapse-other-inst.module":4}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),(r.slspCollapseOtherInstController=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parentCtrl=this.afterCtrl.parentCtrl,this.parentCtrl.isCollapsed=!0}).$inject=[]},{}],4:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.slspCollapseOtherInstModule=void 0;e=e("./slsp-collapse-other-inst.controller"),r.slspCollapseOtherInstModule=angular.module("slspCollapseOtherInstModule",[]).controller("slspCollapseOtherInstController",e.slspCollapseOtherInstController).component("slspCollapseOtherInstComponent",{bindings:{afterCtrl:"<"},controller:"slspCollapseOtherInstController",template:"\r\n"})},{"./slsp-collapse-other-inst.controller":3}],5:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.slspLoanAfterModule=void 0;e=e("./slsp-renew-item-text/slsp-renew-item-text.module");(r.slspLoanAfterModule=angular.module("slspLoanAfterModule",[]).component("prmLoanAfter",{bindings:{parentCtrl:"<"},template:'<slsp-renew-item-text-component after-ctrl="$ctrl"></slsp-renew-item-text-component>'})).requires.push(e.slspRenewItemTextModule.name)},{"./slsp-renew-item-text/slsp-renew-item-text.module":7}],6:[function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o)}Object.defineProperty(r,"__esModule",{value:!0}),(r.slspRenewItemTextController=(function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(o,[{key:"$onInit",value:function(){try{this.parentCtrl=this.afterCtrl.parentCtrl,this.getRenewText=function(){if(void 0!==this.parentCtrl.item.renewstatuses&&void 0!==this.parentCtrl.item.renewstatuses.renewstatus[0])return this.parentCtrl.item.renewstatuses.renewstatus[0]}}catch(e){console.error("***SLSP*** an error occured: slspRenewItemTextController\n\n"),console.error(e.message)}}}]),o)).$inject=[]},{}],7:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.slspRenewItemTextModule=void 0;e=e("./slsp-renew-item-text.controller"),r.slspRenewItemTextModule=angular.module("slspRenewItemTextModule",[]).controller("slspRenewItemTextController",e.slspRenewItemTextController).component("slspRenewItemTextComponent",{bindings:{afterCtrl:"<"},controller:"slspRenewItemTextController",template:'<div layout="row" class="LibInfo" layout-align="start center">\r\n    \r\n\r\n    <div class="md-subhead">\r\n    <span  class="md-subhead">{{$ctrl.getRenewText()}}</span>\r\n\r\n</div>\r\n<span></span>'})},{"./slsp-renew-item-text.controller":6}],8:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ethLocationItemsAfterModule=void 0;var n=e("./eth-location-items-filter/eth-location-items-filter.module"),e=e("./slsp-i-button/slsp-i-button.module"),r=r.ethLocationItemsAfterModule=angular.module("ethLocationItemsAfterModule",[]).component("prmLocationItemsAfter",{bindings:{parentCtrl:"<"},template:'<eth-location-items-filter-component after-ctrl="$ctrl"></eth-location-items-filter-component><slsp-i-button-component after-ctrl="$ctrl"></slsp-i-button-component>'});r.requires.push(n.ethLocationItemsFilterModule.name),r.requires.push(e.slspIButtonModule.name)},{"./eth-location-items-filter/eth-location-items-filter.module":10,"./slsp-i-button/slsp-i-button.module":12}],9:[function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.$timeout=e,this.$scope=t}Object.defineProperty(r,"__esModule",{value:!0}),(r.ethLocationItemsFilterController=(function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(o,[{key:"$onInit",value:function(){var n=this;try{this.parentCtrl=this.afterCtrl.parentCtrl,this.$scope.$watch("this.$ctrl.parentCtrl.loc.location.librarycodeTranslation",function(e,t,r){!r.$ctrl.parentCtrl.isLocationsFilterVisible&&e&&""!=e&&n.$scope.$watch("this.$ctrl.parentCtrl.loc.items",function(e){angular.isArray(e)&&1<e.length&&n.$timeout(function(){r.$ctrl.parentCtrl.isLocationsFilterVisible=!0},0)})},!0)}catch(e){console.error("***SLSP*** an error occured: ethLocationItemsFilterController\n\n"),console.error(e.message)}}}]),o)).$inject=["$timeout","$scope"]},{}],10:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ethLocationItemsFilterModule=void 0;e=e("./eth-location-items-filter.controller"),r.ethLocationItemsFilterModule=angular.module("ethLocationItemsFilterModule",[]).controller("ethLocationItemsFilterController",e.ethLocationItemsFilterController).component("ethLocationItemsFilterComponent",{bindings:{afterCtrl:"<"},controller:"ethLocationItemsFilterController"})},{"./eth-location-items-filter.controller":9}],11:[function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o)}Object.defineProperty(r,"__esModule",{value:!0}),(r.slspIButtonController=(function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(o,[{key:"$doCheck",value:function(){try{this.parentCtrl=this.afterCtrl.parentCtrl,this.getLibrary=function(){return this.parentCtrl.currLoc.location.librarycodeTranslation},this.getLibraryCode=function(){return this.parentCtrl.currLoc.location.libraryCode},this.getLanguage=function(){return this.parentCtrl.userSessionManagerService.$location.$$search.lang},this.biblinkText="Library",this.biblinkBase="https://registration.slsp.ch/libraries/?search="}catch(e){console.error("***SLSP*** an error occured: slspIButtonController\n\n"),console.error(e.message)}}}]),o)).$inject=[]},{}],12:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.slspIButtonModule=void 0;e=e("./slsp-i-button.controller"),r.slspIButtonModule=angular.module("slspIButtonModule",[]).controller("slspIButtonController",e.slspIButtonController).component("slspIButtonComponent",{bindings:{afterCtrl:"<"},controller:"slspIButtonController",template:'<div layout="row" class="LibInfo" layout-align="start center">\r\n    <span class="md-subhead">\r\n    <a ng-href="{{ $ctrl.biblinkBase }}{{ $ctrl.getLibraryCode() }}&lang={{ $ctrl.getLanguage() }}" target="_blank">\r\n        <img width="35px" ng-src="/discovery/custom/41SLSP_NETWORK-CENTRAL_PACKAGE/img/information.png" />{{ $ctrl.getLibrary() }}</a>\r\n        </span>\r\n</div>'})},{"./slsp-i-button.controller":11}],13:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ethLocationsAfterModule=void 0;e=e("./eth-locations-filter/eth-locations-filter.module");(r.ethLocationsAfterModule=angular.module("ethLocationsAfterModule",[]).component("prmLocationsAfter",{bindings:{parentCtrl:"<"},template:'<eth-locations-filter-component after-ctrl="$ctrl"></eth-locations-filter-component>'})).requires.push(e.ethLocationsFilterModule.name)},{"./eth-locations-filter/eth-locations-filter.module":15}],14:[function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.$timeout=e,this.$scope=t}Object.defineProperty(r,"__esModule",{value:!0}),(r.ethLocationsFilterController=(function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(o,[{key:"$onInit",value:function(){var n=this;try{this.parentCtrl=this.afterCtrl.parentCtrl,this.$scope.$watch("this.$ctrl.parentCtrl.locations[0].location.librarycodeTranslation",function(e,t,r){!r.$ctrl.parentCtrl.isLocationsFilterVisible&&e&&""!=e&&n.$timeout(function(){r.$ctrl.parentCtrl.isLocationsFilterVisible=!0},0)},!0)}catch(e){console.error("***ETH*** an error occured: ethLocationsFilterController\n\n"),console.error(e.message)}}}]),o)).$inject=["$timeout","$scope"]},{}],15:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ethLocationsFilterModule=void 0;e=e("./eth-locations-filter.controller"),r.ethLocationsFilterModule=angular.module("ethLocationsFilterModule",[]).controller("ethLocationsFilterController",e.ethLocationsFilterController).component("ethLocationsFilterComponent",{bindings:{afterCtrl:"<"},controller:"ethLocationsFilterController"})},{"./eth-locations-filter.controller":14}],16:[function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.$scope=e,this.$element=t}Object.defineProperty(r,"__esModule",{value:!0}),(r.slspEditPersonalDetailsController=(function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(o,[{key:"$doCheck",value:function(){try{this.parentCtrl=this.afterCtrl.parentCtrl;var e="en",t=this.$scope.$root.$$childHead.$ctrl.userSessionManagerService;t&&(e=t.getInterfaceLanguage()),this.detailsBaseEdu="https://eduid.ch/web/change-account-data/2/?lang="+e,this.detailsBaseReg="https://registration.slsp.ch/library-card/?lang="+e,this.exclude=["STAFF","11","12","13","14","15","16","91","92","99"],this.grpA=["11","91","92"],this.grpB=["12","13","14","15","16"],this.getPatronGrp=function(){if(void 0===this.parentCtrl.personalInfoService.personalInfo)return!1;var e=this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;return!this.exclude.includes(e)},this.grpLabelA=function(){if(void 0===this.parentCtrl.personalInfoService.personalInfo)return!1;var e=this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;return!!this.grpA.includes(e)},this.grpLabelB=function(){if(void 0===this.parentCtrl.personalInfoService.personalInfo)return!1;var e=this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;return!!this.grpB.includes(e)},this.buttonMove=function(){var e=angular.element(document.querySelector("prm-personal-info > div.layout-wrap.layout-align-center-start.layout-row > md-card:nth-child(2)")),t=angular.element(document.querySelector("#SLSPeditPersonalDetails"));e.append(t)}}catch(e){console.error("***SLSP*** an error occured: EditPersonalDetailsController\n\n"),console.error(e.message)}}}]),o)).$inject=["$scope"]},{}],17:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.slspEditPersonalDetailsModule=void 0;e=e("./slsp-edit-personal-details.controller"),r.slspEditPersonalDetailsModule=angular.module("slspEditPersonalDetailsModule",[]).controller("slspEditPersonalDetailsController",e.slspEditPersonalDetailsController).component("slspEditPersonalDetailsComponent",{bindings:{afterCtrl:"<"},controller:"slspEditPersonalDetailsController",template:'<span>{{ $ctrl.buttonMove() }}</span>\r\n<md-card ng-if="$ctrl.grpLabelA()" translate="customized.libraries.details" flex="100"\r\n    class="bar alert-bar courier-info">\r\n</md-card>\r\n<md-card ng-if="$ctrl.grpLabelB()" translate="customized.slsp.details" flex="100" class="bar alert-bar courier-info">\r\n</md-card>\r\n\r\n<div  layout="column">\r\n    <md-button ng-if="$ctrl.getPatronGrp()" href="{{ $ctrl.detailsBaseEdu }}" target="_blank" layout="row"\r\n        class="courier-info bar alert-bar layout-align-left-center layout-row" layout-align="left center">\r\n        <span class="md-subhead">\r\n            <prm-icon class="rotate-20 margin-right-small" icon-type="svg" svg-icon-set="primo-ui"\r\n                icon-definition="pencil">\r\n            </prm-icon>\r\n            <span class="md-subhead" translate="customized.personal.details">\r\n            </span>\r\n    </md-button>\r\n\r\n    <br />\r\n\r\n    <md-button ng-if="$ctrl.getPatronGrp()" href="{{ $ctrl.detailsBaseReg }}" target="_blank" layout="row"\r\n        class="courier-info bar alert-bar layout-align-left-center layout-row" layout-align="left center">\r\n        <prm-icon class="rotate-20 margin-right-small" icon-type="svg" svg-icon-set="primo-ui"\r\n            icon-definition="account-card-details">\r\n        </prm-icon><span class="md-subhead" translate="customized.libcard.number">\r\n\r\n        </span>\r\n    </md-button>\r\n</div>\r\n'})},{"./slsp-edit-personal-details.controller":16}],18:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.slspPersonalInfoAfterModule=void 0;e=e("./slsp-edit-personal-details/slsp-edit-personal-details.module");(r.slspPersonalInfoAfterModule=angular.module("slspPersonalInfoAfterModule",[]).component("prmPersonalInfoAfter",{bindings:{parentCtrl:"<"},template:'<slsp-edit-personal-details-component after-ctrl="$ctrl" id="SLSPeditPersonalDetails"></slsp-edit-personal-details-component>'})).requires.push(e.slspEditPersonalDetailsModule.name)},{"./slsp-edit-personal-details/slsp-edit-personal-details.module":17}],19:[function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.$parent=e.parent().parent()[0],this.parentCtrl=this.afterCtrl.parentCtrl,this.$window=t}Object.defineProperty(r,"__esModule",{value:!0}),(r.bcuLangSwitchController=(function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(o,[{key:"$onInit",value:function(){try{this.languages=["de","fr","it","en"],this.languages.includes(this.parentCtrl.lang)||this.changeLanguage("en")}catch(e){console.error("***BCUFR*** bcuLangSwitchControler $onInit"),console.error(e.message)}}},{key:"changeLanguage",value:function(e){this.parentCtrl.changeLangService.addLangParamToUrl(e);var t=this.parentCtrl;this.parentCtrl.i18nService.setLanguage(e).then(function(){t.$timeout(function(){return t.$state.go(t.$state.current,{lang:e},{reload:!0})})})}}]),o)).$inject=["$element"]},{}],20:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.bcuLangSwitchModule=void 0;e=e("./bcu-lang-switch.controller"),r.bcuLangSwitchModule=angular.module("bcuLangSwitchModule",[]).controller("bcuLangSwitchController",e.bcuLangSwitchController).component("bcuLangSwitchComponent",{bindings:{afterCtrl:"<"},controller:"bcuLangSwitchController",template:'<button class="md-button md-lang-button" ng-repeat="lang in $ctrl.languages" ng-class="{active: $ctrl.afterCtrl.parentCtrl.lang == lang}" ng-click="$ctrl.changeLanguage(lang)">{{lang}}</button>'})},{"./bcu-lang-switch.controller":19}],21:[function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.slspIllSigninOrderLoggedOutService=e,this.$scope=t}Object.defineProperty(r,"__esModule",{value:!0}),(r.slspIllSigninOrderLoggedOutController=(function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(o,[{key:"$doCheck",value:function(){try{return this.parentCtrl=this.afterCtrl.parentCtrl,this.$scope.usrNme=this.slspIllSigninOrderLoggedOutService.isGuest(),1!=this.$scope.usrNme?angular.element(document.querySelector("primo-explore")).removeClass("logged-out"):angular.element(document.querySelector("primo-explore")).addClass("logged-out")}catch(e){console.error("***SLSP*** an error occured: slspIllSigninOrderLoggedOutController\n\n"),console.error(e.message)}}}]),o)).$inject=["slspIllSigninOrderLoggedOutService","$scope"]},{}],22:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.slspIllSigninOrderLoggedOutModule=void 0;var n=e("./slsp-ill-signin-order-logged-out.controller"),e=e("./slsp-ill-signin-order-logged-out.service");r.slspIllSigninOrderLoggedOutModule=angular.module("slspIllSigninOrderLoggedOutModule",[]).factory("slspIllSigninOrderLoggedOutService",e.slspIllSigninOrderLoggedOutService).controller("slspIllSigninOrderLoggedOutController",n.slspIllSigninOrderLoggedOutController).component("slspIllSigninOrderLoggedOutComponent",{bindings:{afterCtrl:"<"},controller:"slspIllSigninOrderLoggedOutController"})},{"./slsp-ill-signin-order-logged-out.controller":21,"./slsp-ill-signin-order-logged-out.service":23}],23:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.slspIllSigninOrderLoggedOutService=["jwtHelper",function(t){function r(){try{if(!sessionStorage)return console.error("***SLSP*** no session storage"),null;var e=sessionStorage.getItem("primoExploreJwt");return e?t.decodeToken(e):null}catch(e){console.error("**SLSP*** an error occured: userService.getDecodedToken:"),console.error(e.message)}}return{isGuest:function(){try{var e=r();return e?!("GUEST"!==e.userGroup?e.userName:""):null}catch(e){console.error("***SLSP*** an error occured: userService.isGuest:"),console.error(e.message)}},getDecodedToken:r}}]},{}],24:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.slspUserAreaExpandableAfterModule=void 0;var n=e("./bcu-lang-switch/bcu-lang-switch.module"),e=e("./slsp-ill-signin-order-logged-out/slsp-ill-signin-order-logged-out.module"),r=r.slspUserAreaExpandableAfterModule=angular.module("slspUserAreaExpandableAfterModule",[]).component("prmUserAreaExpandableAfter",{bindings:{parentCtrl:"<"},template:'<bcu-lang-switch-component after-ctrl="$ctrl"></bcu-lang-switch-component><slsp-ill-signin-order-logged-out-component after-ctrl="$ctrl"></slsp-ill-signin-order-logged-out-component>'});r.requires.push(n.bcuLangSwitchModule.name),r.requires.push(e.slspIllSigninOrderLoggedOutModule.name)},{"./bcu-lang-switch/bcu-lang-switch.module":20,"./slsp-ill-signin-order-logged-out/slsp-ill-signin-order-logged-out.module":22}],25:[function(e,t,r){"use strict";e("./js/slsp-archives-htgi.module.js"),t.exports="slspArchivesHtgi"},{"./js/slsp-archives-htgi.module.js":26}],26:[function(e,t,r){"use strict";angular.module("slspArchivesHtgi",[]).controller("ArchivesHtgiController",[function(){this.$onInit=function(){try{if(!this.parentCtrl.item.pnx.display.source||0===this.parentCtrl.item.pnx.display.source.length)return;var e,t;this.source=this.parentCtrl.item.pnx.display.source[0],"ETH_MaxFrischArchiv"!==this.source&&"ETH_ThomasMannArchiv"!==this.source||(document.getElementById("full-view-container").classList.add("slsp-archives-hide"),t=(e=this.parentCtrl.item.pnx.control.originalsourceid[0]).substring(e.lastIndexOf(":")+1),"ETH_ThomasMannArchiv"===this.source?this.url="http://www.online.tma.ethz.ch/home/#/content/"+t:"ETH_MaxFrischArchiv"===this.source&&(this.url="http://maxfrischarchiv-online.ethz.ch/home/#/content/"+t))}catch(e){console.error("***SLSP*** an error occured: ArchivesHtgiController\n\n"),console.error(e.message)}}}]).component("almaHtgiSvcAfter",{bindings:{parentCtrl:"<"},controller:"ArchivesHtgiController",template:'\n        <div class="slsp-archives" ng-if="$ctrl.url">\n            <md-list layout="column" class="separate-list-items md-primoExplore-theme layout-column" role="list">\n                <md-list-item role="listitem" ng-href="{{$ctrl.url}}" target="_blank">\n                      <span>{{(\'customized.archives.\' + $ctrl.source + \'.linktext\' | translate)}}</span>\n                    <span>{{$ctrl.label}}</span>\n                    <div class="md-secondary">\n                        <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new" class="layout-margin"/>\n                    </div>\n                </md-list-item>\n            </md-list>\n            <div ng-if="$ctrl.source === \'ETH_ThomasMannArchiv\'" class="slsp-archives-additional-hint">\n                <div>\n                    <span translate="customized.archives.ETH_ThomasMannArchiv.text1">No request possible. The digitized item can be consulted in the Thomas Mann Archives reading room upon advance registration (</span>\n                    <a target="_blank" rel="noopener" ng-href="https://tma.ethz.ch/utils/kontakt.html">\n                        <span translate="customized.archives.ETH_ThomasMannArchiv.linktext2">Contact</span>\n                        <prm-icon external-link icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>\n                    </a>\n                    <span translate="customized.archives.ETH_ThomasMannArchiv.text2">).</span>\n                </div>\n            </div>\n            <div ng-if="$ctrl.source === \'ETH_MaxFrischArchiv\'" class="slsp-archives-additional-hint">\n                <div>\n                    <span translate="customized.archives.ETH_MaxFrischArchiv.text1">Informationen zu Bestellung und Benutzung siehe</span>\n                    <a target="_blank" rel="noopener" ng-href="http://maxfrischarchiv-online.ethz.ch/home/#/manual">\n                        <span translate="customized.archives.ETH_MaxFrischArchiv.linktext2">Bedienungshinweise</span>\n                        <prm-icon external-link icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>\n                    </a>\n                    <span translate="customized.archives.ETH_MaxFrischArchiv.text2">.</span>\n                </div>\n            </div>\n        </div>\n        '})},{}],27:[function(e,t,r){"use strict";e("./js/slsp-archives-viewit.module.js"),t.exports="slspArchivesViewit"},{"./js/slsp-archives-viewit.module.js":28}],28:[function(e,t,r){"use strict";angular.module("slspArchivesViewit",[]).component("prmSearchResultAvailabilityLineAfter",{bindings:{parentCtrl:"<"},controller:"ArchivesAvailabilityLineController"}).component("prmAlmaViewitAfter",{bindings:{parentCtrl:"<"},controller:"ArchivesViewitController",template:'\n        <div class="slsp-archives" ng-if="$ctrl.url">\n            <md-list layout="column" class="separate-list-items md-primoExplore-theme layout-column" role="list">\n                <md-list-item role="listitem" ng-href="{{$ctrl.url}}" target="_blank">\n                    <span>{{(\'customized.archives.\' + $ctrl.source + \'.linktext\' | translate)}}</span>\n                    <span>{{$ctrl.label}}</span>\n                    <div class="md-secondary">\n                        <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new" class="layout-margin"/>\n                    </div>\n                </md-list-item>\n            </md-list>\n            <div ng-if="$ctrl.source === \'ETH_Hochschularchiv\'" class="slsp-archives-additional-hint">\n                <div>\n                    <span translate="customized.archives.ETH_Hochschularchiv.text1">Informationen zu Bestellung und Benutzung siehe</span>\n                    <a target="_blank" rel="noopener" ng-href="http://archivdatenbank-online.ethz.ch/hsa/#/manual">\n                        <span translate="customized.archives.ETH_Hochschularchiv.linktext2">Bedienungshinweise</span>\n                        <prm-icon external-link icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>\n                    </a>\n                    <span translate="customized.archives.ETH_Hochschularchiv.text2">.</span>\n                </div>\n            </div>\n        </div>\n        '}).controller("ArchivesViewitController",["$translate",function(r){this.$onInit=function(){try{if(!this.parentCtrl.item.pnx.display.source||0===this.parentCtrl.item.pnx.display.source.length)return;if(this.source=this.parentCtrl.item.pnx.display.source[0],"ETH_Hochschularchiv"===this.source){if(this.parentCtrl.item.delivery.GetIt1&&0<this.parentCtrl.item.delivery.GetIt1.length&&this.parentCtrl.item.delivery.GetIt1[0].links&&0<this.parentCtrl.item.delivery.GetIt1[0].links.length){if(0<this.parentCtrl.item.delivery.GetIt1[0].links.filter(function(e){return!(!e.isLinktoOnline||""===e.link)}).length)return;r("nui.getit.service_howtogetit").then(function(e){var t=document.getElementById("fullView");angular.element(t.querySelector("h4[translate='nui.getit.service_viewit']")).text(e),angular.element(t.querySelector("#services-index span[translate='nui.getit.service_viewit']")).text(e)})}document.getElementById("full-view-container").classList.add("slsp-archives-hide");var e=this.parentCtrl.item.pnx.control.originalsourceid[0],t=e.substring(e.lastIndexOf(":")+1);"ETH_Hochschularchiv"===this.source&&(this.url="http://archivdatenbank-online.ethz.ch/hsa/#/content/"+t)}}catch(e){console.error("***SLSP*** an error occured: ArchivesViewitController\n\n"),console.error(e.message)}}}]).controller("ArchivesAvailabilityLineController",["$translate",function(r){this.$onInit=function(){var e,t=this;try{if(this.changeButton=!1,!this.parentCtrl.result.pnx.display.source||0===this.parentCtrl.result.pnx.display.source.length)return;if(this.source=this.parentCtrl.result.pnx.display.source[0],"ETH_Hochschularchiv"===!this.source)return;if(!this.parentCtrl.result.delivery.GetIt1||0==this.parentCtrl.result.delivery.GetIt1.length||!this.parentCtrl.result.delivery.GetIt1[0].links||0==this.parentCtrl.result.delivery.GetIt1[0].links.length)return;0===this.parentCtrl.result.delivery.GetIt1[0].links.filter(function(e){return!(!e.isLinktoOnline||""===e.link)}).length&&(r("delivery.code.no_inventory").then(function(e){t.changeButton=!0,t.changeButtonText=e}),(e=this.parentCtrl.$element[0])&&e.classList.add("slsp-hsa-no-online"))}catch(e){console.error("***SLSP*** an error occured: ArchivesAvailabilityLineController\n\n"),console.error(e.message)}},this.$doCheck=function(){try{var e;this.changeButton&&(e=this.parentCtrl.$element[0].querySelector(".availability-status"),angular.element(e)&&0<angular.element(e).length&&(angular.element(e).html(this.changeButtonText),this.changeButton=!1,this.changeButtonText=""))}catch(e){console.error("***ETH*** an error occured: ArchivesAvailabilityLineController $doCheck\n\n"),console.error(e.message)}}}])},{}],29:[function(e,t,r){"use strict";e("./js/slsp-courier-info.module.js"),t.exports="slspCourierInfo"},{"./js/slsp-courier-info.module.js":30}],30:[function(e,t,r){"use strict";angular.module("slspCourierInfo",[]).controller("CourierInfoController",["$element",function(e){this.form=e[0].parentElement,this.$doCheck=function(){var e,t=!1,r=2;void 0!==this.form.children[0].children[1]&&void 0!==this.form.children[0].children[1].children[0]?t=this.form.children[0].children[1].children[0]:void 0!==this.form.children[0].children[0]&&void 0!==this.form.children[0].children[0].children[0]&&(t=this.form.children[0].children[0].children[0],r=3),t&&t.children.length==r&&((e=document.createElement("DIV")).className="courier-info bar alert-bar",e.innerHTML="<h4>"+this.parentCtrl.$translate.instant("customize.fullview.feesTitle")+"</h4>\n\t\t<p>"+this.parentCtrl.$translate.instant("customize.fullview.feesInfo")+'</p>\n\t\t<p><a href="'+this.parentCtrl.$translate.instant("customize.fullview.feesUrl")+'"\n\t\ttarget="_blank">'+this.parentCtrl.$translate.instant("customize.fullview.feesLinkText")+"</a></p>",t.insertBefore(e,t.children[r-2]))}}]).component("prmRequestAfter",{bindings:{parentCtrl:"<"},controller:"CourierInfoController"})},{}],31:[function(e,t,r){"use strict";e("./js/slsp-http-intercept-requests.module.js"),t.exports="slspHttpInterceptRequests"},{"./js/slsp-http-intercept-requests.module.js":32}],32:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.slspHttpInterceptRequests=angular.module("slspHttpInterceptRequests",["ng"]).config(["$httpProvider",function(e){e.interceptors.push(["$q",function(t){return{request:function(e){return e},requestError:function(e){return t.reject(e)},responseError:function(e){return t.reject(e)},response:function(e){try{if(/primaws\/rest\/priv\/myaccount\/requests/.test(e.config.url)&&200==e.status&&"ok"==e.data.status){var t=angular.element(document.querySelector("primo-explore")).injector().get("$rootScope").$$childHead.$ctrl.userSessionManagerService.getUserLanguage()||window.appConfig["primo-view"]["attributes-map"].interfaceLanguage,r={en:["in transit","in process","on hold shelf"],de:["transfer","in bearbeitung","bereitgestellt"],fr:["en cours de transfert","en cours","sur le rayon des réservations"],it:["in transito","in processo","scaffale prenotazioni"]},n={en:["in transit","in process"],de:["transfer","in bearbeitung"],fr:["en cours de transfert","en cours"],it:["in transito","in processo"]};if(!Object.keys(r).includes(t))throw"No mapping found for holds: "+t;var o=RegExp(r[t].map(function(e){return e.toLowerCase()}).join("|"));if(e.data.data.holds.hold.map(function(e){o.test(e.holdstatus.toLowerCase())&&(e.cancel="N")}),!Object.keys(n).includes(t))throw"No mapping found for photocopies: "+t;var l=RegExp(n[t].map(function(e){return e.toLowerCase()}).join("|"));e.data.data.photocopies.photocopy.map(function(e){l.test(e.requeststatus.toLowerCase())&&(e.cancel="N")})}}catch(e){console.error(e)}return e}}}])}])},{}],33:[function(e,t,r){"use strict";e("./js/slsp-ill-signin-order-alert.module.js"),t.exports="slspIllSigninOrderAlert"},{"./js/slsp-ill-signin-order-alert.module.js":34}],34:[function(e,t,r){"use strict";angular.module("slspIllSigninOrderAlert",[]).controller("AlertMsgController",["$scope",function(e){var r=this;r.getAlert=function(){var e=r.parentCtrl.almaHowToGetitService.reqAlert._htmlMsg,t=angular.element(document.querySelector("primo-explore"));return 0<e.length?t.addClass("alert"):t.removeClass("alert")}}]).component("almaHowovpAfter",{bindings:{parentCtrl:"<"},controller:"AlertMsgController",template:'<div style="display:none">{{$ctrl.getAlert()}}</div>'})},{}]},{},[1]);
//# sourceMappingURL=custom.js.map
