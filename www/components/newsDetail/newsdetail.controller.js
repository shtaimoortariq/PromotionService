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

  NewsDetailController.$inject = ['$state', '$http', 'addsServiceData'];

  function NewsDetailController($state, $http, addsServiceData) {
    var vm = this;
    this.post = [];

    this.post = addsServiceData.returnNews();
    console.log(vm.post);

  }
})();
