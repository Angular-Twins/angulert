angular.module('angulertDemoApp', ['angulert']).

controller('AppCtrl', ['$scope', '$angulert', '$timeout', function ($scope, $angulert, $timeout) {
  $angulert.info({message:'awesome'});
  $timeout(function() {
    $angulert.info({message:'stuff'});
  }, 1000);
}]);