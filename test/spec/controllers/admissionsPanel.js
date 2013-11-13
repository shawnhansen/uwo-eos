'use strict';

describe('Controller: AdmissionsPanelCtrl', function () {

  // load the controller's module
  beforeEach(module('eosApp'));

  var AdmissionsPanelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdmissionsPanelCtrl = $controller('AdmissionsPanelCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
