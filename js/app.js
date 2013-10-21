'use strict';

angular.module('portfolio', []).
  config(['$routeProvider',function($routeProvider){
  	$routeProvider.
  	  when('/', {templateUrl: 'partials/fullDetail.html', controller: workCtrl}).
  	  when('/:workId',{templateUrl: 'partials/singleDetail.html', controller: singleCtrl}).
  	  otherwise({redirectTo: '/all'});	
}]);