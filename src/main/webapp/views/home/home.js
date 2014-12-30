'use strict';

angular.module('cupcakeHotline.views.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home/home.html'
  });
}]);
