var app = angular.module('myLoginApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'login.html'
	})
	.when('/dashboard',{
		resolve: {
			"check" : function($location, $rootScope) {
				if(!$rootScope.loggedIn ){
					$location.path('/');
				} 
			}
		},
		templateUrl : 'dashboard.html'
	})
	.otherwise({
		redirectTo : '/'
	});
});

app.controller('loginCntrl', function($scope, $location, $rootScope){
		$scope.submit = function() {
			if($scope.username == 'admin' && $scope.password == 'pass') {
				$rootScope.loggedIn = true;
				$location.path('/dashboard');
			}
		}
});