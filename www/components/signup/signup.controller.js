(function () {
  'use strict';

  angular
    .module('app.signup')

    //============= START API CONSTANT =============//
    .constant('DistrictApi', {
      url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_districts"
    })
    //============= END API CONSTANT =============//

    .controller('SignupController', SignupController);

  SignupController.$inject = ['$state', '$http', 'DistrictApi', 'signupServiceData'];

  function SignupController($state, $http, DistrictApi, signupServiceData) {
    var vm = this;
    this.uid = "";

    console.log("Signup Controller");

    //====================START GLOBEL VARIABLE==================//
    this.name = "";
    this.mobileNumber = "";
    this.district = null;
    this.selectDistrict = [];
    this.termsAndCondition = "";
    this.distr = 0;
    //====================END GLOBEL VARIABLE==================//


    //====================START GET DISTRICT FROM SERVER==================//
    $http.get(DistrictApi.url).then(function successCallback(response) {
        vm.selectDistrict =  response.data.datas;
    }, function errorCallback(response) {
        console.log(response);
    });
    //====================END GET DISTRICT FROM SERVER==================//


    this.userSignup = function () {
      for(var i = 0; i < vm.selectDistrict.length; ++i) {
          if(vm.district == vm.selectDistrict[i].district_name) {
            var temp = i+1;
              break;
          }
      }

      //====================START SET DATA TO SERVICE==================//
      signupServiceData.setSignUpPageData(vm.name, vm.mobileNumber, temp);
      //====================END SET DATA TO SERVICE==================//

      $state.go('corporation');

    };

  }
})();
