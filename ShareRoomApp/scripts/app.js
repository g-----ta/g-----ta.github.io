'use strict';

var app = angular
  .module('ShareRoomApp', [
    'ngAnimate',    
    'ngResource',
    'ngRoute',    
    'firebase',
    'toaster',
    'angularMoment'
  ])
  .constant('FURL', 'https://shareroomapp.firebaseio.com/')
  .run(function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the login page
      if (error === "AUTH_REQUIRED") {
        $location.path("/login");
      }
    });
  })  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'     
      })
      .when('/top', {
        templateUrl: 'views/top.html',
        controller: ''     
      })      
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'
      })      
      .when('/browse/:taskId', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .when('/myroom', {
        templateUrl: 'views/myroom.html',
        controller: ''
      })
      .when('/friend', {
        templateUrl: 'views/friend.html',
        controller: ''
      })      
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: ''
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController',
        resolve: {
          currentAuth: function(Auth) {
            return Auth.requireAuth();
          }
        }
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
