/**
 * Created by taimoortariqdev on 1/20/2017.
 */


angular
  .module('app')
  .service('signupServiceData', signupServiceData);
  signupServiceData.$inject = [];


  function signupServiceData() {

      var vm = this;

      console.log("Data Storage Service");

      //=====OBJECT WHICH WILL BE SENT TO THE SERVE AND THIS IS SIGNUP OBJECT========//
      this.user = {name : '', phone: 0, distr: 0, corp: 0};


      //=======START DATA SAVE METHODS====//

      this.setSignUpPageData = function (name, phone, distr) {
          vm.user.name = name;
          vm.user.phone = phone;
          vm.user.distr = distr;
      };
      this.setCorporation = function (corp) {
        vm.user.corp = corp;
      };

    //=======END DATA SAVE METHODS====//


    //=======START DATA GET METHODS====//
      this.getUser = function () {
        return vm.user;
      };
    //=======END DATA GET METHODS====//

}
