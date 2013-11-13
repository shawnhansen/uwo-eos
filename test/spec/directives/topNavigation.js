'use strict';

describe('Directive: topNavigation', function () {

  // load the directive's module
  beforeEach(module('eosApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<top-navigation></top-navigation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the topNavigation directive');
  }));
});
