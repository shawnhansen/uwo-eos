'use strict';

describe('Filter: cleanDate', function () {

  // load the filter's module
  beforeEach(module('eosApp'));

  // initialize a new instance of the filter before each test
  var cleanDate;
  beforeEach(inject(function ($filter) {
    cleanDate = $filter('cleanDate');
  }));

  /*it('should return the input prefixed with "cleanDate filter:"', function () {
    var text = 'angularjs';
    expect(cleanDate(text)).toBe('cleanDate filter: ' + text);
  });*/

});
