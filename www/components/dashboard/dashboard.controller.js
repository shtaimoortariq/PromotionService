/**
 * Created by taimoortariqdev on 1/10/2017.
 */
(function() {
    'use strict';

    angular
        .module('app.dashboard')

        //============= START API CONSTANT =============//

        .constant('GetNews', {
          url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_news"
        })

        .constant('GetAdvertisement', {
          url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_ads"
        })



        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['GetNews', '$http', 'GetAdvertisement', '$scope'];

    /* @ngInject */
    function DashboardController(GetNews, $http, GetAdvertisement, $scope) {
        var vm = this;
        this.post = [];
        this.advertisement = [];
        console.log("DashboardController");


      //====================START GET News FROM SERVER==================//
      $http.post(GetNews.url, {"corp_id":1}).then(function successCallback(response) {
        console.log("True from Dashboard Api");
        console.log(response);
        vm.post = response.data.datas;
        console.log(vm.post);

      }, function errorCallback(response) {
        console.log("False from Dashboard Api");
        console.log(response);
      });
      //====================END GET News FROM SERVER==================//


      //====================START GetAdvertisement FROM SERVER==================//
      $http.post(GetAdvertisement.url, {"corp_id":1}).then(function successCallback(response) {
        console.log("True from GetAdvertisement Api");
        vm.advertisement = response.data.datas;
        console.log(vm.advertisement);

      }, function errorCallback(response) {
        console.log("False from GetAdvertisement Api");
      });
      //====================END GetAdvertisement FROM SERVER==================//


      this.data = {};
      this.data.bgColors = [];
      this.data.currentPage = 0;

      for (var i = 0; i < 10; i++) {
        this.data.bgColors.push("bgColor_" + i);
      }


        //some options to pass to our slider
        vm.data.sliderOptions = {
          initialSlide: 0,
          direction: 'horizontal', //or vertical
          speed: 300 //0.3s transition
        };

        //create delegate reference to link with slider
        vm.data.sliderDelegate = null;

        //watch our sliderDelegate reference, and use it when it becomes available
        $scope.$watch('data.sliderDelegate', function(newVal, oldVal) {
          if (newVal != null) {
            this.data.sliderDelegate.on('slideChangeEnd', function() {
              vm.data.currentPage = vm.data.sliderDelegate.activeIndex;
              //use this.$apply() to refresh any content external to the slider
              this.$apply();
            });
          }
        });
      }





})();
