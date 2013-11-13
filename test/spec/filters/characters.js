'use strict';

describe('Filter: characters', function () {

  // load the filter's module
  beforeEach(module('eosApp'));

  // initialize a new instance of the filter before each test
  var characters;
  beforeEach(inject(function ($filter) {
    characters = $filter('characters');
  }));

  /*it('should return the input prefixed with "characters filter:"', function () {
    var text = 'angularjs';
    expect(characters(text)).toBe('characters filter: ' + text);
  });*/

});
