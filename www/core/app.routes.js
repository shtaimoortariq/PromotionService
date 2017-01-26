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


      .state('menu', {
          url: "/menu",
          templateUrl: "./components/menu/menu.html",
          controller: 'MenuController as menu',
          abstract: true
        }
      )
      .state('signup', {
        url: '/signup',
        abstract: false,
        templateUrl: './components/signup/signup.html',
        controller: "SignupController"
      })

      .state('menu.dashboard', {
        url: '/dashboard',
        abstract: false,
        views: {
          'menuContent': {
            templateUrl: './components/dashboard/dashboard.html',
            controller: "DashboardController"
          }
        }
      })

      .state('menu.corporation', {
        url: '/corporation',
        abstract: false,
        views: {
          'menuContent': {
            templateUrl: './components/corporation/corporation.html',
            controller: "CorporationController"
          }
        }
      })

      .state('menu.sendreport', {
        url: '/sendreport',
        abstract: false,
        views: {
          'menuContent': {
            templateUrl: './components/sendreport/sendreport.html',
            controller: "SendReportController"
          }
        }
      })
      .state('menu.newsDetail', {
        url: '/newsdetail',
        abstract: false,
        views: {
          'menuContent': {
            templateUrl: './components/newsDetail/newsDetail.html',
            controller: "NewsDetailController"
          }
        }
      });



    // Each tab has its own nav history stack which is defined in the corresponding module.

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/menu/dashboard');
  }

})();
