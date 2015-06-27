'use strict';

var app = angular
  .module('TabayamaApp', [
      'ngAnimate',
      'ngResource',
      'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/top.html',
      })
 		 .when('/introduction', {
 		 	templateUrl: 'views/introduction.html',
 		 }) 		 
 		 .when('/activity', {
 		 	templateUrl: 'views/activity.html',
 		 }) 		  		 		 
 		 .when('/cable', {
 		 	templateUrl: 'views/cable.html',
 		 })
 		 .when('/circle', {
 		 	templateUrl: 'views/circle.html',
 		 })
 		 .when('/cook', {
 		 	templateUrl: 'views/cook.html',
 		 })
 		 .when('/festival', {
 		 	templateUrl: 'views/festival.html',
 		 })
 		 .when('/kinua', {
 		 	templateUrl: 'views/kinua.html',
 		 })
 		 .when('/members', {
 		 	templateUrl: 'views/members.html',
 		 })
 		 .when('/riders_cafe', {
 		 	templateUrl: 'views/riders_cafe.html',
 		 })
 		 .when('/souvenir', {
 		 	templateUrl: 'views/souvenir.html',
 		 })
 		 .when('/volunteer', {
 		 	templateUrl: 'views/volunteer.html',
 		 })
 		 .when('/walking_tour', {
 		 	templateUrl: 'views/walking_tour.html',
 		 })
 		 .otherwise({
 		 	redirectTo: '/'
 		 });
 	});
