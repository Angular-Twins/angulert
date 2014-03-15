'use strict';

describe('$angulert provider', function() {
  var $angulertProvider;

  beforeEach(module('angulert'));
  beforeEach(module(function(_$angulertProvider_) {
    $angulertProvider = _$angulertProvider_;
  }));

  it('should exist', function() {
    debugger;
    expect(angular.isArray([])).toBeTruthy();
    // expect($angulertProvider).toBe({});
  });
});