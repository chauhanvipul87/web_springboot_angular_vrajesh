var app = angular.module('myadvanceSearchApp',[]);
app.controller('advanceSearchCntrl', function($scope, $http){
		alert("1");
		$http.get('http://localhost:8080/data2.json')
		.then(function(response){
			alert("2");
			$scope.persons = response.data.records;
			alert("3");
		});
});