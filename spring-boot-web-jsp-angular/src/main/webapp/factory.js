var application = angular.module('myFactoryApp',[]);

application.factory('myFactory', function(){
	var factoryObject = {};
	var number = 1;
	factoryObject.getNextSequence = function() {
		return number++;
	};
	return factoryObject;
});

application.controller('myFactoryCtrl', function($scope, myFactory) {
	$scope.nextSequence = function() {
		$scope.nextNumber = myFactory.getNextSequence();
	}
});