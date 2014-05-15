angular.module('title-notify', ['angulert']).
directive('titleNotify', ['$angulert', function($angulert) {
  return {
    restrict: 'EA',
    link: function (scope, element, attrs) {
      scope.alertCount = $angulert.getCount();

      $angulert.registerAddAlertListener(function(alert) {
        scope.alertCount++;
      });

      $angulert.registerDeleteAlertListener(function(alert){
        scope.alertCount--;
      });

      // try this in compile phase?
      // element.prepend('({{alertCount}}) ');
    }
  };
}]);
