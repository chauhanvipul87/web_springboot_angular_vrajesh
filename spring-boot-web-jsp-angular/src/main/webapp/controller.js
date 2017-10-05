var app = angular.module('myRouteApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		template : 'Welcome user!'
	})
	.when('/anotheruser',{
		template : 'Welcome Another user!'
	})
	.when('/externalpage',{
		templateUrl : 'header.html'
	})
	.otherwise({
		redirectTo : '/'
	});
});