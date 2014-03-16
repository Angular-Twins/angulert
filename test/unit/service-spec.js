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

  it('should get alerts', inject(function($injector) {
    var $angulert = $injector.get('$angulert');
    $angulert.addAlert({
      message: 'Alert'
    });
    expect($angulert.getAlerts()).toEqual([{message: 'Alert'}]);
  }));

  it('should clear alerts', inject(function($injector) {
    var $angulert = $injector.get('$angulert');
    $angulert.addAlert({
      message: 'Alert'
    });
    $angulert.clearAlerts();
    expect($angulert.getAlerts().length).toEqual(0);
  }));

  describe('adding alerts', function() {
    var $angulert;

    beforeEach(inject(function($injector) {
      $angulert = $injector.get('$angulert');
      $angulert.clearAlerts();
    }));

    it('should add an alert', function() {
      $angulert.addAlert({
        message: 'Awesome Alert'
      });
      expect($angulert.getAlerts().length).toBe(1);
      expect($angulert.getAlerts()[0].message).toBe('Awesome Alert');
    });

    it('should add a success alert', function() {
      var alert = { message: 'Success alert'};
      $angulert.success(alert);
      expect(alert.classes).toEqual(['success']);
    });

    it('should add a warn alert', function() {
      var alert = { message: 'Warn alert'};
      $angulert.warn(alert);
      expect(alert.classes).toEqual(['warning']);
    });

    it('should add an error alert', function() {
      var alert = { message: 'Error alert'};
      $angulert.error(alert);
      expect(alert.classes).toEqual(['danger']);
    });

    it('should add an info alert', function() {
      var alert = { message: 'Info alert'};
      $angulert.info(alert);
      expect(alert.classes).toEqual(['info']);
    });

    it('should have a DOM element', function() {
      // TODO: make sure dom is accurately represented by the alert object
    });

    it('should increment unread alert count', function() {

    });

  });
});