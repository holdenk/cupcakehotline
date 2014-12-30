'use strict';

// Declare app level module which depends on views, and components
angular.module('cupcakeHotline', [
  'ngRoute',
  'pascalprecht.translate',
  'cupcakeHotline.views'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])

.config(function($translateProvider) {
  $translateProvider.preferredLanguage('en_US');
  $translateProvider.useStaticFilesLoader({
    prefix: '/locale/',
    suffix: '.json'
  });
});
