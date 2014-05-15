angular.module('angulertDemoApp', ['angulert', 'title-notify']).

controller('AppCtrl', ['$scope', '$angulert', '$interval', function ($scope, $angulert, $interval) {
  $angulert.info({message:'awesome'});

  $scope.addMessages = function() {
    $angulert.error({
      message: 'Messages Messages Messages Messages Messages Messages Messages Messages Messages Messages Messages Messages Messages Messages Messages Messages Messages Messages Messages Messages',
      icon: 'envelope'
    });
  };
}]);
