/**
 * Created by taimoortariqdev on 1/9/2017.
 */
(function() {
  'use strict';

  angular
    .module('app', [
      /* Shared modules */
      'ionic',
      'ionic.cloud',
      'app.core',
      'firebase',
      'ngCordova',

      /* Feature areas */

      'app.signup',
      'app.dashboard',
      'app.corporation',
      'app.sendreport'


    ]);

})();

