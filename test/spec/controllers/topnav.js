'use strict';

describe('Controller: TopNavCtrl', function () {

  // load the controller's module
  beforeEach(module('eosApp'));

  var TopnavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopnavCtrl = $controller('TopNavCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
