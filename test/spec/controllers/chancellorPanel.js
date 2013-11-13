'use strict';

describe('Controller: ChancellorPanelCtrl', function () {

  // load the controller's module
  beforeEach(module('eosApp'));

  var ChancellorPanelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChancellorPanelCtrl = $controller('ChancellorPanelCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
