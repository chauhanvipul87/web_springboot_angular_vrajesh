angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://localhost:8080/api/message/').
        then(function(response) {
        	alert(response.data);
            $scope.greeting = response.data;
        });
});