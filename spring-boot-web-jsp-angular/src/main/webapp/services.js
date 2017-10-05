var application = angular.module('myServiceApp',[]);

application.service('myService', function(){
	var number = 1;
	this.getNextSequence = function() {
		return number++;
	}
});

application.controller('myServiceCtrl', function($scope, myService) {
	$scope.nextSequence = function() {
		$scope.nextNumber = myService.getNextSequence();
	}
});