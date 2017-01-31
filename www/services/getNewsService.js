/**
 * Created by taimoortariqdev on 1/26/2017.
 */




angular
  .module('app')

  //============= START API CONSTANT =============//
  .constant('GetNews', {
    url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_news"
  })

  .constant('HomeSlider', {
    url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_homesliders"
  })

  .constant('AdsApi', {
    url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_ads"
  })

  .service('addsServiceData', addsServiceData);
  addsServiceData.$inject = ['$http', 'GetNews', '$q', 'HomeSlider', 'AdsApi'];


function addsServiceData($http, GetNews, $q, HomeSlider, AdsApi) {

  var vm = this;
  this.post = [];
  this.SliderUrl = [];
  this.ads = [];
  console.log("Adds Storage Service");



  //====================START GET News FROM SERVER==================//
  this.getNewsData = function () {
    var deferred = $q.defer();
  $http.post(GetNews.url, {"corp_id":1})
    .then(function(response) {
      vm.post = response.data.datas;
      console.log(response);
      deferred.resolve(response);
      console.log('GET NEWS API TRUE');

  }, function (error) {
      deferred.reject(error);
      console.log('GET NEWS API FALSE');
    });

    return deferred.promise;
  };


  this.getSliderImageDataFromServer = function () {
    var deferred = $q.defer();
    $http.post(HomeSlider.url, {"corp_id": 1})
      .then(function successCallback(response) {
        vm.SliderUrl = response.data.datas;
        console.log('GET ADVERTISEMENT API TRUE');
        console.log(vm.SliderUrl);
        deferred.resolve(response.data.datas);
      }, function errorCallback(response) {
        console.log('GET ADVERTISEMENT API FALSE');
        deferred.reject(error);
      });
    return deferred.promise;
  };

  this.getAdsFromServer = function () {
    var deferred = $q.defer();
    $http.post(AdsApi.url, {"corp_id": 1})
      .then(function successCallback(response) {
        vm.ads = response.data.datas;
        console.log('GET ADS API TRUE');
        console.log(vm.ads);
        deferred.resolve(response.data.datas);
      }, function errorCallback(response) {
        console.log('GET ADS API FALSE');
        deferred.reject(error);
      });
    return deferred.promise;
  };

  //====================END GET News FROM SERVER==================//


  this.returnNews = function () {
    return vm.post;
  };


  this.returnAdvertisement = function () {
    return vm.SliderUrl;
  };

  this.returnAds = function () {
    return vm.ads;
  };
}
