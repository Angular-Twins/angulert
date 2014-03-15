'use strict';

describe('$angulert provider', function() {

  beforeEach(module('angulert'));

  describe('angulert provider interface', function() {
    it('should have this public interface', module(function($angulertProvider) {
      expect(angular.isFunction($angulertProvider.setConfig)).toBe(true);
    }));
  });

  describe('default provider', function() {
    it('should have these default config values', inject(function($angulert) {

    }));
  });

  describe('configured provider', function() {
    beforeEach(module(function($angulertProvider) {
      var config = {
        animation: false
      };
      $angulertProvider.configure(config);
    }));

    it('should have set config options', inject(function($angulert) {
      
    }));

  });

});