angular
    .module('app.dashboard')

    .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['addsServiceData', '$state' ,'$stateParams', '$scope', '$interval'];

      /* @ngInject */
      function DashboardController(addsServiceData, $state, $stateParams, $scope, $interval) {
        var vm = this;
        this.post = [];
        this.advertisement = [];
        this.defaultAdPic = './img/sidebar.PNG';
        this.sliders = [];
        this.ads = [];
        this.temp = '';
        this.advertisement = JSON.parse($stateParams.data);
        this.ads = addsServiceData.returnAds();

        this.sliderImages = addsServiceData.returnAdvertisement();
        console.log(vm.sliderImages);
        console.log(vm.sliderImages.length);

        this.temp = this.ads[0];
        console.log(vm.ads);
        console.log(vm.temp);


        $interval(function () {
          var x = Math.floor((Math.random() * (vm.ads.length)));
          vm.temp = vm.ads[x];
          console.log(x);
        }, 5000);

        console.log(vm.advertisement);
        console.log("DashboardController");

        this.post = addsServiceData.returnNews();

        this.goToReadMore = function (index) {
          console.log(index);
          $state.go('menu.newsDetail', {data: JSON.stringify(vm.post[index])});
        };

        this.monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];

        this.dateObject = new Date();

        this.day = this.dateObject.getDate();
        this.month = this.monthNames[this.dateObject.getMonth()];
        this.year = this.dateObject.getFullYear();

        this.completeDate = this.day + " " + this.month + " " + this.year;
        console.log(vm.completeDate);

        $scope.options = {
          loop: false,
          effect: 'fade',
          speed: 500
        };

        $scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
          // data.slider is the instance of Swiper
          $scope.slider = data.slider;
        });

        $scope.$on("$ionicSlides.slideChangeStart", function (event, data) {
          console.log('Slide change is beginning');
        });

        $scope.$on("$ionicSlides.slideChangeEnd", function (event, data) {
          // note: the indexes are 0-based
          $scope.activeIndex = data.slider.activeIndex;
          $scope.previousIndex = data.slider.previousIndex;
        });

    }
