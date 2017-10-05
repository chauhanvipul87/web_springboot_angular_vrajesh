var application = angular.module('myProviderApp',[]);

application.provider('myProvider', function(){
	return {
		$get: function() {
			return {
				showHour: function(){
					var date = new Date();
					return date.getHours();
				}
			}
		}
	}
});

application.controller('myProviderCtrl', function($scope, myProvider) {
	$scope.myMessage = myProvider.showHour();
});