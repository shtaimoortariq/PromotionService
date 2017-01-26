(function () {
  'use strict';

  angular
    .module('app')
    .config(configure);

  configure.$inject = [

    '$ionicConfigProvider',
    '$ionicCloudProvider'
  ];

  function configure($ionicConfigProvider, $ionicCloudProvider) {
    // Add your configuration here
    $ionicConfigProvider.tabs.position('bottom');
    $ionicCloudProvider.init({
      "core": {
        "app_id": "b57bc73f"
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
    });
  }
})();
