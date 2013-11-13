'use strict';

describe('Controller: UwotwPanelCtrl', function () {

  // load the controller's module
  beforeEach(module('eosApp'));

  var UwotwPanelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UwotwPanelCtrl = $controller('UwotwPanelCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
