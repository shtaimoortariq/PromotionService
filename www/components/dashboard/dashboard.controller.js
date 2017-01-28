/**
 * Created by taimoortariqdev on 1/10/2017.
 */
(function () {
  'use strict';

  angular
    .module('app.dashboard')

    .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['GetNews', '$http', '$scope', 'addsServiceData', '$stateParams'];

  /* @ngInject */
    function DashboardController(GetNews, $http,  $scope, addsServiceData, $stateParams) {
      var vm = this;
      this.post = [];
      this.advertisement = [];
      this.advertisement = JSON.parse($stateParams.data);
      console.log(vm.advertisement);

      console.log("DashboardController");

      this.post = addsServiceData.returnNews();


      this.data = {};
      this.data.bgColors = [];
      this.data.currentPage = 0;

      for (var i = 0; i < 10; i++) {
        this.data.bgColors.push("bgColor_" + i);
      }


      //some options to pass to our slider
      /*vm.data.sliderOptions = {
        initialSlide: 0,
        direction: 'horizontal', //or vertical
        speed: 300 //0.3s transition
      };

      //create delegate reference to link with slider
      vm.data.sliderDelegate = null;

      //watch our sliderDelegate reference, and use it when it becomes available
      $scope.$watch('vm.data.sliderDelegate', function (newVal, oldVal) {
        if (newVal != null) {
          vm.data.sliderDelegate.on('slideChangeEnd', function () {
            vm.data.currentPage = vm.data.sliderDelegate.activeIndex;
            //use this.$apply() to refresh any content external to the slider
            this.$apply();
          });
        }
      });
*/


     /* $scope.options = {
        loop: false,
        effect: 'fade',
        speed: 500
      };

      $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
        // data.slider is the instance of Swiper
        $scope.slider = data.slider;
      });

      $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
        console.log('Slide change is beginning');
      });

      $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
        // note: the indexes are 0-based
        $scope.activeIndex = data.slider.activeIndex;
        $scope.previousIndex = data.slider.previousIndex;
      });

*/


    }
})();
