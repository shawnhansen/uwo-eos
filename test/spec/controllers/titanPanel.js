'use strict';

describe('Controller: TitanPanelCtrl', function () {

  // load the controller's module
  beforeEach(module('eosApp'));

  var TitanPanelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TitanPanelCtrl = $controller('TitanPanelCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
