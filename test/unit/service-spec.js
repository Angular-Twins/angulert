describe('angulert service', function() {

  beforeEach(module('angulert'));

  describe('angulert interface', function() {
    it('should have this public interface', inject(function($angulert) {
      expect(angular.isFunction($angulert.setConfig)).toBe(true);
      expect(angular.isFunction($angulert.disable)).toBe(true);
      expect(angular.isFunction($angulert.enable)).toBe(true);
      expect(angular.isFunction($angulert.addAlert)).toBe(true);
      expect(angular.isFunction($angulert.getAlert)).toBe(true);
      expect(angular.isFunction($angulert.getAlerts)).toBe(true);
      expect(angular.isFunction($angulert.updateAlert)).toBe(true);
      expect(angular.isFunction($angulert.deleteAlert)).toBe(true);
      expect(angular.isFunction($angulert.clearAlerts)).toBe(true);
      expect(angular.isFunction($angulert.getHistory)).toBe(true);
      expect(angular.isFunction($angulert.clearHistory)).toBe(true);
    }));
  });

  describe('adding alerts', function() {
    var $angulert;

    beforeEach(inject(function($injector){
      $angulert = $injector.get('$angulert');
      $angulert.clearAlerts();
      $angulert.addAlert({
        message: 'Awesome Alert'
      });
    }));

    it('should add an alert', function() {
      expect($angulert.getAlerts().length).toBe(1);
      expect($angulert.getAlerts()[0].message).toBe('Awesome Alert');
    });

    it('should have a DOM element', function() {
      // TODO: make sure dom is accurately represented by the alert object
    });

    it('should increment unread alert count', function() {

    });

  });


});