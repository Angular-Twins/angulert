'use strict';

describe('$angulert provider', function() {
  var angulertProvider;

  beforeEach(module('angulert'));
  beforeEach(module(function($angulertProvider) {
    angulertProvider = $angulertProvider;
  }));

  it('should exist', inject(function($angulert) {
    expect(angular).toBeDefined();
    expect(angulertProvider).toBeDefined();
    expect($angulert).toBeDefined();
    expect($angulert.getHistory()).toEqual([]);
  }));

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