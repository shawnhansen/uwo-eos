'use strict';

describe('Filter: words', function () {

  // load the filter's module
  beforeEach(module('eosApp'));

  // initialize a new instance of the filter before each test
  var words;
  beforeEach(inject(function ($filter) {
    words = $filter('words');
  }));

  /*it('should return the input prefixed with "words filter:"', function () {
    var text = 'angularjs';
    expect(words(text)).toBe('words filter: ' + text);
  });*/

});
