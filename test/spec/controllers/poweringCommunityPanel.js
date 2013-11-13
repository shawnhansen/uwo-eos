'use strict';

describe('Controller: PoweringCommunityPanelCtrl', function () {

  // load the controller's module
  beforeEach(module('eosApp'));

  var PoweringCommunityPanelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PoweringCommunityPanelCtrl = $controller('PoweringCommunityPanelCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
