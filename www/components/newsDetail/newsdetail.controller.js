(function () {
  'use strict';

  angular
    .module('app.newsDetail')

    //============= START API CONSTANT =============//
    /*.constant('DistrictApi', {
      url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_districts"
    })*/
    //============= END API CONSTANT =============//

    .controller('NewsDetailController', NewsDetailController);

  NewsDetailController.$inject = ['$state', '$http', 'addsServiceData', '$stateParams', '$interval'];

  function NewsDetailController($state, $http, addsServiceData, $stateParams, $interval) {
    var vm = this;
    this.post = [];
    this.defaultAdPic = './img/sidebar.PNG';
    this.post = JSON.parse($stateParams.data);
    //this.post = addsServiceData.returnNews();
    console.log(vm.post);
    this.ads = [];
    this.temp = '';
    this.ads = addsServiceData.returnAds();
    this.temp = this.ads[0];

    $interval(function() {
      var x = Math.floor((Math.random() * (vm.ads.length)));
      vm.temp = vm.ads[x];
    }, 5000);

  }
})();
