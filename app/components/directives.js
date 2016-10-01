'use strict';

angular.module('myApp.directive', [])

.directive('prueba', [ function() {
  return function(scope, elm, attrs) {
    scope.prueba2 = "Prueba 2";
    elm.text("Prueba");
  };
}])
.directive('miDirectiva', [ function() {
  return {
    //templateUrl: 'ruta-y-nombre.html'
    template: '<span>{{name}}</span>',
    link: function(scope, elem, attr) {
      console.log("elem: ", elem);
      console.log("type: ", attr.type);
      scope.name = 'Jeff';
    }
  }
}]);
