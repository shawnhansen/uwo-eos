'use strict';

describe('Directive: panelStory', function () {

  // load the directive's module
  beforeEach(module('eosApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  /*it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<panel-story></panel-story>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the panelStory directive');
  }));*/
});
