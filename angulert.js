var dependencies = [];

angular.module('angulert', dependencies)
.provider('$angulert', [function () {

  var _config = {};

  this.setConfig = function(config) {
    for(var prop in config) {
      _config[prop] = config[prop];
    }
  };

  this.$get = ['$rootScope', '$q', '$http', '$templateCache', '$controller',
    function($rootScope, $q, $http, $templateCache, $controller) {
      var _history = [];
      var _alerts = [];

      var angulertService = {
        addAlert: function(alert) {

        },
        deleteAlert: function(id) {

        },
        getAlert: function(id) {

        },
        updateAlert: function(alert) {

        },
        getHistory: function() {
          return _history;
        },
        deleteHistory: function() {
          _history = [];
        },
        getConfig: function() {
          return _config;
        }
      };

      return angulertService;
    }
  ]
}])

.directive('angulert', [function () {
  return {
    restrict: 'EA',
    link: function (scope, element, attrs) {

    }
  };
}]);