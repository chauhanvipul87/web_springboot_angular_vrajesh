var application = angular.module('myProviderApp2',[]);

application.provider('myPrd', function(){
	var greet;
	return {
		setGreeting: function(value) {
			greet = value;
		},
		
		$get: function() {
			return {
				showMessage: function(){
					var date = new Date();
					return greet + " It's " + date.getHours();
				},
				getHour: function(){
					var date = new Date();
					return date.getHours();
				}
			}
		}
	}
});

application.config(function(myPrdProvider){
	console.log(myPrdProvider.$get().getHour());
	var time = myPrdProvider.$get().getHour();
	if(time >0 && time <12) {
		myPrdProvider.setGreeting("Good Morning !");
	} else {
		myPrdProvider.setGreeting("Good Day !");
	}
	
	
});

application.controller('myProviderCtrl', function($scope, myPrd) {
	$scope.myMessage = myPrd.showMessage();
});