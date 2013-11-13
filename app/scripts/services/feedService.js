'use strict';

angular.module('eosApp')
  .factory('feedService', ['$http', function ($http) {
    var doRequest = function() {
      return $http({
        method: 'GET',
        url: 'http://feeds.uwosh.edu/api/v1/index.php/combined',
        cache: true
      });
    };
    return {
      events: function() { return doRequest(); },
    };
  }]);
