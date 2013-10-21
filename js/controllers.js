'use strict';

function workCtrl($scope, $http){
	$http.get('work.json').success(function(data) {
    	$scope.works = data;
 	});

	$scope.orderProp = '-age';
}

function singleCtrl($scope, $routeParams, $http) {
	$http.get('work.json').success(function(data) {
    	$scope.works = data;
 	});

 	$scope.filterId = $routeParams.workId;
}