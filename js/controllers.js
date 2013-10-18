'use strict';

function workCtrl($scope, $http){
	$http.get('work.json').success(function(data) {
    	$scope.works = data;
 	});
	
	$scope.hello = "Hello, Buttface!";
	$scope.orderProp = '-age';
}