var application = angular.module('myShowDirectiveApp',[]);

application.controller('myShowDirectiveCtrl', function($scope){
	$scope.show = 'one';
	$scope.toggle = function (){
		$scope.show = $scope.show == 'one' ? 'two' : 'one';
	};
});