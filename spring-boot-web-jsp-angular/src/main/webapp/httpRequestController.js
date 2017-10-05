var app = angular.module('myHttpRequestApp',[]);
app.controller('httpRequestCntrl', function($scope, $http){
		alert("1");
		$http.get('http://localhost:8080/data.json')
		.then(function(response){
			$scope.persons = response.data.records;
			
		});
});