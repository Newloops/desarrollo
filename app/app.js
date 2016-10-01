'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.directive',
  'myApp.filter',
  'firebase'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller('MyCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

  // Inicializar Firebase
  var config = {
    apiKey: "AIzaSyDGQ3fN4TE-cShid9B5bxdc88cT2SORfOk",
    authDomain: "myapp-e3fa5.firebaseapp.com",
    databaseURL: "https://myapp-e3fa5.firebaseio.com",
    storageBucket: "myapp-e3fa5.appspot.com",
    messagingSenderId: "268475404644"
  };
  firebase.initializeApp(config);

  $rootScope.database = firebase.database();
}]);
