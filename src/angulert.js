var dependencies = [
  'templates/angulert-center.tpl.html',
  'templates/angulert.tpl.html'
];

angular.module('angulert', dependencies).
provider('$angulert', [function () {

  var _defaultConfig = {
    animation: true,
    position: 'nav',
    sounds: false
  };

  // var _plugins = ['angulert-sounds'];

  var _globalConfig = {};

  this.configure = function(config) {
    angular.extend(_globalConfig, config);
  };

  this.$get = ['$rootScope', '$q', '$http', '$templateCache', '$controller',
    function($rootScope, $q, $http, $templateCache, $controller) {

      var _serviceConfig = angular.extend({}, _defaultConfig, _globalConfig);
      var _history = [];
      var _alerts = [];

      var _idCounter = 0;

      var listeners = {
        enable: [],
        disable: [],
        addAlert: [],
        deleteAlert: [],
        getAlert: [],
        updateAlert: [],
        getHistory: [],
        deleteHistory: []
      };

      // listeners.addAlert.push();

      var angulertService = {
        disable: function() {
          _serviceConfig.disabled = true;
        },
        enable: function() {
          _serviceConfig.disabled = false;
        },
        setConfig: function(config) {
          angular.extend(_serviceConfig, config);
          // TODO: persist to localstorage
        },
        success: function(alert) {
          alert.classes = ['alert-success'];
          this.addAlert(alert);
        },
        warn: function(alert) {
          alert.classes = ['alert-warning'];
          this.addAlert(alert);
        },
        error: function(alert) {
          alert.classes = ['alert-danger'];
          this.addAlert(alert);
        },
        info: function(alert) {
          alert.classes = ['alert-info'];
          this.addAlert(alert);
        },
        addAlert: function(alert) {
          alert._id = alert._id || ++_idCounter;
          if (!_serviceConfig.disabled) {
            _alerts.push(alert);
            listeners.addAlert.forEach(function(listener) {
              listener(alert);
            });
          }
          return alert._id;
        },
        getAlert: function(id) {
          for (var i = _alerts.length - 1; i >= 0; i--) {
            if (_alerts[i]['_id'] == id) {
              return _alerts[i];
            }
          }
        },
        updateAlert: function(alert, id) {
          id = id || alert._id;
          for (var i = _alerts.length - 1; i >= 0; i--) {
            if (_alerts[i]['_id'] == id) {
              return _alerts.splice(i, 1, alert);
            }
          }
          return null;
        },
        deleteAlert: function(id) {
          for (var i = _alerts.length - 1; i >= 0; i--) {
            if (_alerts[i]['_id'] == id) {
              return _alerts.splice(i, 1);
            }
          }
          return null;
        },
        getAlerts: function() {
          return _alerts;
        },
        clearAlerts: function() {
          _alerts = [];
          _idCounter = 0;
        },
        getHistory: function() {
          return _history;
        },
        clearHistory: function() {
          _history = [];
        }
      };

      return angulertService;
    }
  ]
}]).
// DOM representation of angulert center display
directive('angulertCenter', ['$angulert', function($angulert) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'templates/angulert-center.tpl.html',
    link: function (scope, element, attrs) {
      scope.angulertService = $angulert;

      scope.deleteAlert = function(alert) {
        scope.angulertService.deleteAlert(alert._id);
      };

      scope.$watch('angulertService.getAlerts()', function(newValue, oldValue){
        scope.alerts = newValue;
      }, true);
    }
  };
}]).
// DOM representation of individual alerts
directive('angulert', [function() {
  return {
    restrict: 'EA',
    templateUrl: 'templates/angulert.tpl.html',
    link: function (scope, element, attrs) {

    }
  };
}]);