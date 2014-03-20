describe('angulert service', function() {

  beforeEach(module('angulert'));

  describe('angulert interface', function() {
    it('should have this public interface', inject(function($angulert) {
      expect(angular.isFunction($angulert.setConfig)).toBe(true);
      expect(angular.isFunction($angulert.disable)).toBe(true);
      expect(angular.isFunction($angulert.enable)).toBe(true);
      expect(angular.isFunction($angulert.success)).toBe(true);
      expect(angular.isFunction($angulert.warn)).toBe(true);
      expect(angular.isFunction($angulert.error)).toBe(true);
      expect(angular.isFunction($angulert.info)).toBe(true);
      expect(angular.isFunction($angulert.addAlert)).toBe(true);
      expect(angular.isFunction($angulert.getAlert)).toBe(true);
      expect(angular.isFunction($angulert.updateAlert)).toBe(true);
      expect(angular.isFunction($angulert.deleteAlert)).toBe(true);
      expect(angular.isFunction($angulert.getAlerts)).toBe(true);
      expect(angular.isFunction($angulert.clearAlerts)).toBe(true);
      expect(angular.isFunction($angulert.getHistory)).toBe(true);
      expect(angular.isFunction($angulert.clearHistory)).toBe(true);
    }));
  });

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
      expect(alert.classes).toEqual(['alert-success']);
    });

    it('should add a warn alert', function() {
      var alert = { message: 'Warn alert'};
      $angulert.warn(alert);
      expect(alert.classes).toEqual(['alert-warning']);
    });

    it('should add an error alert', function() {
      var alert = { message: 'Error alert'};
      $angulert.error(alert);
      expect(alert.classes).toEqual(['alert-danger']);
    });

    it('should add an info alert', function() {
      var alert = { message: 'Info alert'};
      $angulert.info(alert);
      expect(alert.classes).toEqual(['alert-info']);
    });

    it('should have a DOM element', function() {
      // TODO: make sure dom is accurately represented by the alert object
    });

    it('should increment unread alert count', function() {

    });

  });

  describe('updating alerts', function() {
    var $angulert;

    beforeEach(inject(function($injector) {
      $angulert = $injector.get('$angulert');
      $angulert.clearAlerts();
    }));

    it('should not update an alert without an id or passing an id', function() {
      expect($angulert.updateAlert({})).toBe(null);
      expect($angulert.getAlerts().length).toBe(0);
    });

    it('should not update an alert without a matching id', function() {
      var alert = {
        message: 'Awesome Alert',
        _id: '123id123'
      };
      $angulert.addAlert(alert);
      expect($angulert.updateAlert({message:'Different Alert', id:'notthisid'})).toBe(null);
      expect($angulert.getAlerts().length).toBe(1);

    });

    it('should update an alert given a matching id', function() {
      var alert = {
        message: 'Awesome Alert',
        _id: '123id123'
      };
      $angulert.addAlert(alert);
      alert.message = 'Changed Message';
      $angulert.updateAlert(alert);
      expect($angulert.getAlerts().length).toBe(1);
      expect($angulert.getAlert('123id123').message).toBe('Changed Message');
    });
  });

  describe('getting alerts', function() {
    var $angulert;

    beforeEach(inject(function($injector) {
      $angulert = $injector.get('$angulert');
      $angulert.clearAlerts();
    }));

    it('should get alerts', function() {
      $angulert.addAlert({
        message: 'Alert',
        _id: '123id123'
      });
      expect($angulert.getAlerts()).toEqual([{message: 'Alert',_id: '123id123'}]);
    });

    it('should get an alert by id', function() {
      $angulert.addAlert({
        message: 'Alert',
        _id: '123id123'
      });
      expect($angulert.getAlert('123id123')).toEqual({message: 'Alert',_id: '123id123'});
    });

  });

  describe('clearing alerts', function() {
    var $angulert;

    beforeEach(inject(function($injector) {
      $angulert = $injector.get('$angulert');
      $angulert.clearAlerts();
    }));

    it('should clear alerts', function() {
      $angulert.addAlert({
        message: 'Alert'
      });
      $angulert.clearAlerts();
      expect($angulert.getAlerts().length).toEqual(0);
    });
  });

  describe('deleting alerts', function() {
    var $angulert;

    beforeEach(inject(function($injector) {
      $angulert = $injector.get('$angulert');
      $angulert.clearAlerts();
    }));

    it('should not delete an alert without passing an id', function() {
      expect($angulert.deleteAlert()).toBe(null);
      $angulert.addAlert({
        message: 'Awesome Alert',
        _id: '123id123'
      });
      $angulert.deleteAlert();
      expect($angulert.getAlerts().length).toBe(1);
    });

    it('should not delete an alert without a matching id', function() {
      $angulert.addAlert({
        message: 'Awesome Alert',
        _id: '123id123'
      });
      $angulert.deleteAlert('dontfindme');
      expect($angulert.getAlerts().length).toBe(1);
    });

    it('should delete an alert given a matching id', function() {
      var id = $angulert.addAlert({
        message: 'Awesome Alert'
      });
      $angulert.deleteAlert(id);
      expect($angulert.getAlerts().length).toBe(0);
    });

  });

});