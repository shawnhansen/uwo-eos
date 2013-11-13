'use strict';

describe('Controller: ResearchNewsPanelCtrl', function () {

  // load the controller's module
  beforeEach(module('eosApp'));

  var ResearchNewsPanelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResearchNewsPanelCtrl = $controller('ResearchNewsPanelCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
