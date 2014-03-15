'use strict';

describe('$angulert provider', function() {

  beforeEach(module('angulert'));

  describe('angulert provider interface', function(){
    it('should have this public interface', module(function($angulertProvider){
      expect(angular.isFunction($angulertProvider.setConfig)).toBe(true);
    }));
  });

  describe('default provider', function(){

  });

  describe('configured provider', function(){
    beforeEach(module(function($angulertProvider){
      $angulertProvider.setConfig({ballsack:'ballsack'});  
    }));

    it('should have set config options', inject(function($angulert) {
      var config = $angulert.getConfig();
      expect(config.ballsack).toBe('ballsack');
    }));    
  });
  
});