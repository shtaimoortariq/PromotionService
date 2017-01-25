/**
 * Created by taimoortariqdev on 1/10/2017.
 */


/**
 * Created by taimoortariqdev on 1/10/2017.
 */
(function() {
    'use strict';

    angular
        .module('app.corporation')


      //============= START API CONSTANT =============//

      .constant('SignUpApi', {
        url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_signup"
      })


      .constant('Muncipalities', {
        url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_municipalities"
      })



    .constant('List', {
      url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_news"
    })
      //============= END API CONSTANT =============//

      .controller('CorporationController', CorporationController);

    CorporationController.$inject = ['$state', 'signupServiceData', '$http',  'Muncipalities', 'SignUpApi', 'List'];


    function CorporationController($state, signupServiceData, $http, Muncipalities, SignUpApi, List) {
      console.log("CorporationController");
        var vm = this;
        var USER_STORAGE_KEY = 'promationservice_user';
        this.muncipalitiesList = [];
        this.selectDistrict = '';
        this.user = {}; //SIGNUP USER OBJECT


      //====================START GET Muncipalities FROM SERVER==================//
      $http.post(Muncipalities.url, {dist_id:1}).then(function successCallback(response) {
        vm.muncipalitiesList = response.data.datas;

      }, function errorCallback(response) {

      });
      //====================END GET Muncipalities FROM SERVER==================//

        this.goToSendReport = function () {

          //=====for corporation index=======//
          for(var i = 0; i < vm.muncipalitiesList.length; ++i) {
            if(vm.selectDistrict == vm.muncipalitiesList[i].municipality_name) {
              var temp = i+1;
              break;
            }
          }

          //=======START SIGNUP SERVICE MANUPILATION===========//
          signupServiceData.setCorporation(temp);
          vm.user = signupServiceData.getUser();
          //=======END SIGNUP SERVICE MANUPILATION===========//



          //============ start $http request to serve for signup============//
          $http.post(SignUpApi.url, vm.user).then(function (data) {
            console.log("Local storage");
            window.localStorage.setItem(USER_STORAGE_KEY,JSON.stringify(vm.user));
           $state.go('sendreport');
           }, function (error) {
           });
          //============end $http request to serve for signup============//

        }
    }
})();
