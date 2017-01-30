(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  runBlock.$inject = ['$ionicPlatform', '$state', '$ionicPush', 'addsServiceData', '$q'];

  function runBlock($ionicPlatform, $state, $ionicPush, addsServiceData, $q) {

    $ionicPlatform.ready(function() {
        var vm = this;

      var USER_STORAGE_KEY = 'promationservice_user';
      var retrievedObject = localStorage.getItem(USER_STORAGE_KEY);
      console.log("retrievedObject");
      console.log(JSON.parse(retrievedObject));


        addsServiceData.getNewsData().then(
          function (successNews) {
            console.log('APP.RUN: GET NEWS API TRUE');
            addsServiceData.getNewsDataFromServer().then(
              function (successAdvertisement) {
                  console.log('APP.RUN: GET ADVERTISEMENT API SUCCESS', successAdvertisement);
                addsServiceData.getAdsFromServer().then(
                  function (success) {
                    console.log('APP.RUN: GET ADS API SUCCESS', success);
                    if(retrievedObject) {
                      console.log("true");
                      $state.go('menu.dashboard', {data: JSON.stringify(successNews)});
                    }
                  },function (error) {
                    console.log("APP.RUN: GET ADS API FALSE");
                  }
                );
              },function (error) {
                console.log("APP.RUN: GET ADVERTISEMENT API FALSE");
              }
            );
          },function (error) {
            console.log('APP.RUN: GET NEWS API FALSE');
          }
        );



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
