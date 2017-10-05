var application = angular.module('myProviderApp3',[]);

application.service('fromService', function() {
	this.message = "This is from service";
});

application.factory('fromFactory', function() {
	var myFactory = {};
	myFactory.message = "This is from factory";
	return myFactory;
});

application.provider('fromProvider', function() {
	var m1 = "This is from provider";
	return {
		
		setName: function(name) {
			m1 += " " + name;
		},
		
		$get: function() {
			return {
				message: m1
			}
		}
	}
});

application.config(function(fromProviderProvider){
	fromProviderProvider.setName("hello");
});
application.controller('myProviderCtrl', function($scope, fromService, fromFactory, fromProvider){
	$scope.myMessage = [fromService.message,fromFactory.message,fromProvider.message];
});
