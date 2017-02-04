(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  runBlock.$inject = ['$ionicPlatform', '$state', '$ionicPush', 'addsServiceData', '$q', '$rootScope', '$cordovaNetwork'];

  function runBlock($ionicPlatform, $state, $ionicPush, addsServiceData, $q, $rootScope, $cordovaNetwork) {

    $ionicPlatform.ready(function() {
        var vm = this;



      document.addEventListener("deviceready", function () {

        var type = $cordovaNetwork.getNetwork();
        var isOnline = $cordovaNetwork.isOnline();
        var isOffline = $cordovaNetwork.isOffline();

        console.log(type);
        console.log(isOnline);
        console.log(isOffline);

        var onlineState = "";
        // listen for Online event
        $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
          var onlineState = networkState;
          console.log(onlineState);

        });

        // listen for Offline event
        $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
          var offlineState = networkState;
        })

      }, false);

      addsServiceData.getNewsData().then(
        function (successNews) {
          console.log('APP.RUN: GET NEWS API TRUE');
          addsServiceData.getSliderImageDataFromServer().then(
            function (successAdvertisement) {
              console.log('APP.RUN: GET ADVERTISEMENT API SUCCESS', successAdvertisement);
              addsServiceData.getAdsFromServer().then(
                function (success) {
                  console.log('APP.RUN: GET ADS API SUCCESS', success);

                  var USER_STORAGE_KEY = 'promationservice_user';
                  var retrievedObject = localStorage.getItem(USER_STORAGE_KEY);
                  console.log("retrievedObject");
                  console.log(JSON.parse(retrievedObject));

                  if (retrievedObject) {
                    console.log("true");
                    $state.go('menu.dashboard', {data: JSON.stringify(successNews)});
                  }
                  else {
                    $state.go('signup');
                  }
                }, function (error) {
                  console.log("APP.RUN: GET ADS API FALSE");
                }
              );
            }, function (error) {
              console.log("APP.RUN: GET ADVERTISEMENT API FALSE");
            }
          );
        }, function (error) {
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
