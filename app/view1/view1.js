'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {

  var database = $rootScope.database;

  $scope.users = {};

  database.ref('users').on('value', function(items) {
    console.log("items: ", items.val());
    $scope.$apply(function() {
      $scope.users = items.val();
    });
  });

  $scope.addItem = function(user){
    var user = {
      username: user.name,
      email: user.email
    }
    // Recibir el ID con el que se le va a vincular
    //var newUserKey = firebase.database().ref().child('users').push().key;
    //console.log("newUserKey: ", newUserKey);
    database.ref('users').push(user);

  }

  $scope.removeItem = function(){

  }

}]);
