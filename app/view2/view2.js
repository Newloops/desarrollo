'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:id', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams) {

  console.log("$routeParams: ", $routeParams.id);
  var database = firebase.database();

  $scope.users = {};

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

  $scope.updateItem = function(user){
    var user = {
      username: user.name,
      email: user.email
    }
    database.ref('users/'+$routeParams.id).update(user, function(){
      console.log("Los datos se ha guardado");
    });
  }

}]);
