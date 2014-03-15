describe('angulert service', function() {

  beforeEach(module('angulert'));

  describe('angulert interface', function() {
    it('should have this public interface', inject(function($angulert) {
      expect(angular.isFunction($angulert.addAlert)).toBe(true);
      expect(angular.isFunction($angulert.deleteAlert)).toBe(true);
      expect(angular.isFunction($angulert.getAlert)).toBe(true);
      expect(angular.isFunction($angulert.updateAlert)).toBe(true);
      expect(angular.isFunction($angulert.getHistory)).toBe(true);
      expect(angular.isFunction($angulert.deleteHistory)).toBe(true);
    }));
  });
  
});