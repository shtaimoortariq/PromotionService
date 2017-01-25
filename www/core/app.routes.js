(function () {
  'use strict';

  angular
    .module('app')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routes($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    /*.state('tab', {
     url: '/tab',
     abstract: true,
     templateUrl: 'app/layout/tabs.html'
     })*/



      .state('signup', {
        url: '/signup',
        abstract: false,
        templateUrl: './components/signup/signup.html',
        controller: "SignupController"
      })

      .state('dashboard', {
        url: '/dashboard',
        abstract: false,
        templateUrl: './components/dashboard/dashboard.html',
        controller: "DashboardController"
      })

      .state('corporation', {
        url: '/corporation',
        abstract: false,
        templateUrl: './components/corporation/corporation.html',
        controller: "CorporationController"
      })

      .state('sendreport', {
        url: '/sendreport',
        abstract: false,
        templateUrl: './components/sendreport/sendreport.html',
        controller: "SendReportController"
      });



    // Each tab has its own nav history stack which is defined in the corresponding module.

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/dashboard');
  }

})();
