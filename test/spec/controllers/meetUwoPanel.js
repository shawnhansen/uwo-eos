'use strict';

describe('Controller: MeetUwoPanelCtrl', function () {

  // load the controller's module
  beforeEach(module('eosApp'));

  var MeetUwoPanelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeetUwoPanelCtrl = $controller('MeetUwoPanelCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
