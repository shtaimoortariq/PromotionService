(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  runBlock.$inject = ['$ionicPlatform', '$state', '$ionicPush', 'addsServiceData', '$q'];

  function runBlock($ionicPlatform, $state, $ionicPush, addsServiceData, $q) {

    $ionicPlatform.ready(function() {
        var vm = this;

        addsServiceData.getNewsData().then(
          function (success) {
            $state.go('dashboard')
          },function (error) {
            console.log("Wrong User");
          }
        );



      var USER_STORAGE_KEY = 'promationservice_user';
      var retrievedObject = localStorage.getItem(USER_STORAGE_KEY);
      console.log("retrievedObject");
      console.log(JSON.parse(retrievedObject));
/*      if(retrievedObject) {
        console.log("true");
        $state.go('dashboard');
      }*/


      // Hide the accessory bar by default (remove this to show the accessory bar
      // above the keyboard for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
      $ionicPush.register().then(function(t) {
        return $ionicPush.saveToken(t);
      }).then(function(t) {
        console.log('Token saved:', t.token);
      });

    });
  }
})();
