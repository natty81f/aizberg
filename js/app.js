'use strict';


// Declare app level module which depends on filters, and services
angular.module('wradio', 
	[
		'firebase',
		'wradio.controllers'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/home', {templateUrl: 'partials/home.html'}).
			when('/about', {templateUrl: 'partials/about.html'}).
			when('/contact', {templateUrl: 'partials/contact.html'}).
			when('/stuff', {templateUrl: 'partials/stuff.html'}).
			otherwise({redirectTo: '/home'});
	}]);
 

