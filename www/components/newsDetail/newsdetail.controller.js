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

  NewsDetailController.$inject = ['$state', '$http', 'DistrictApi', 'signupServiceData'];

  function NewsDetailController($state, $http, DistrictApi, signupServiceData) {
    var _self = this;


  }
})();
