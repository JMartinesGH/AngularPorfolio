'use strict';

angular.module('portfolio', []).
  config(['$routeProvider',function($routeProvider){
  	$routeProvider.
  	  when('/', {templateUrl: 'partials/fullDetail.html', controller: workCtrl}).
  	  otherwise({redirectTo: '/all'});	
}]);