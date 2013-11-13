'use strict';

describe('Controller: FlickrCtrl', function () {

  // load the controller's module
  beforeEach(module('eosApp'));

  var FlickrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlickrCtrl = $controller('FlickrCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
