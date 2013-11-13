'use strict';

angular.module('eosApp')
  .filter('fromNow', function () {
    return function(dateString) {
      return moment(new Date(dateString)).fromNow();
    };
  });
