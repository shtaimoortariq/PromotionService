(function () {
  'use strict';

  angular
    .module('app')
    .config(configure);

  configure.$inject = [

    '$ionicConfigProvider',
    '$ionicCloudProvider',
    '$httpProvider'
  ];

  function configure($ionicConfigProvider, $ionicCloudProvider, $httpProvider) {
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

    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
  }
})();
