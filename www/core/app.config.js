(function () {
  'use strict';

  angular
    .module('app')
    .config(configure);

  configure.$inject = [

    '$ionicConfigProvider'
    //'$ionicCloudProvider'
  ];

  function configure($ionicConfigProvider) {
    // Add your configuration here
    $ionicConfigProvider.tabs.position('bottom');
   /* $ionicCloudProvider.init({
      "core": {
        "app_id": "a8fc8b3d"
      },
      "push": {
        "sender_id": "477488430513",
        "pluginConfig": {
          "ios": {
            "badge": true,
            "sound": true
          },
          "android": {
            "iconColor": "#343434"
          }
        }
      }
    });*/
  }
})();
