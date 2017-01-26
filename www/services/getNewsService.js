/**
 * Created by taimoortariqdev on 1/26/2017.
 */




angular
  .module('app')

  //============= START API CONSTANT =============//
  .constant('GetNews', {
    url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_news"
  })

  .constant('GetAdvertisement', {
    url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_ads"
  })


  .service('addsServiceData', addsServiceData);
  addsServiceData.$inject = ['$http', 'GetNews', '$q', 'GetAdvertisement'];


function addsServiceData($http, GetNews, $q, GetAdvertisement) {

  var vm = this;
  this.post = [];
  this.advertisement = [];
  console.log("Adds Storage Service");

  var deferred = $q.defer();

  //====================START GET News FROM SERVER==================//
  this.getNewsData = function () {

  $http.post(GetNews.url, {"corp_id":1})
    .then(function(response) {
      vm.post = response.data.datas;
      console.log(response);
      deferred.resolve(response);


  }, function (error) {
      console.log(error);
      deferred.reject(error);
    });


    $http.post(GetAdvertisement.url, {"corp_id":1}).then(function successCallback(response) {
      console.log("True from GetAdvertisement Api");
      vm.advertisement = response.data.datas;
      console.log(vm.advertisement);

    }, function errorCallback(response) {
      console.log("False from GetAdvertisement Api");
    });

    return deferred.promise;
  };


  /*$http.post(GetNews.url, {"corp_id":1}).then(function successCallback(response) {
    console.log("True from  GET News Api");
    console.log(response);
    vm.post = response.data.datas;
    console.log(vm.post);

  }, function errorCallback(response) {
    console.log("False from  GET News Api");
    console.log(response);
  });
  *///====================END GET News FROM SERVER==================//


  this.returnNews = function () {
    return vm.post;
  };


  this.returnAdvertisement = function () {
    return vm.advertisement;
  }

}
