'use strict';

describe('Controller: TwifPanelCtrl', function () {

  // load the controller's module
  beforeEach(module('eosApp'));

  var TwifPanelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TwifPanelCtrl = $controller('TwifPanelCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
