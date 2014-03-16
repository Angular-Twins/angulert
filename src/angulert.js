var dependencies = [];

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

      var addAlertToDom = function() {
        
      };

      listeners.addAlert.push(addAlertToDom);

      var angulertService = {

        disable: function() {
          _serviceConfig.disabled = true;
        },
        enable: function() {
          _serviceConfig.disabled = false;
        },
        success: function(alert) {
          alert.classes = ['success'];
          this.addAlert(alert);
        },
        warn: function(alert) {
          alert.classes = ['warning'];
          this.addAlert(alert);
        },
        error: function(alert) {
          alert.classes = ['danger'];
          this.addAlert(alert);
        },
        info: function(alert) {
          alert.classes = ['info'];
          this.addAlert(alert);
        },
        setConfig: function(config) {
          angular.extend(_serviceConfig, config);
          // TODO: persist to localstorage
        },
        addAlert: function(alert) {
          if (!_serviceConfig.disabled) {
            _alerts.push(alert);
            listeners.addAlert.forEach(function(listener) {
              listener(alert);
            });
          }
        },
        getAlert: function(id) {

        },
        getAlerts: function() {
          return _alerts;
        },
        clearAlerts: function() {
          _alerts = [];
        },
        updateAlert: function(alert) {

        },
        deleteAlert: function(id) {

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
directive('angulert-center', ['$angulert', function($angulert) {
  return {
    restrict: 'EA',
    link: function (scope, element, attrs) {

    }
  };
}]).
// DOM representation of individual alerts
directive('angulert', [function() {
  return {
    restrict: 'EA',
    link: function (scope, element, attrs) {

    }
  };
}]);



