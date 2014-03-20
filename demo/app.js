angular.module('angulertDemoApp', ['angulert']).

controller('AppCtrl', ['$scope', '$angulert', '$interval', function ($scope, $angulert, $interval) {
  $angulert.info({message:'awesome'});

  $scope.addBallsack = function() {
    $angulert.error({
      message: 'Ballsack ballsack ballsack ballsack ballsack Ballsack ballsack ballsack ballsack ballsack Ballsack ballsack ballsack ballsack ballsack Ballsack ballsack ballsack ballsack ballsack',
      icon: 'envelope'
    });
  };
  $scope.add2Ballsacks = function() {
    $angulert.error({
      message: 'ballsack ballsack ballsack ballsack ballsack ballsack ballsack ballsack',
      icon: 'envelope'
    });
  };
}]);