'use strict';

angular.module('eosApp')
  .directive('topNavigation', function () {
    return {
      templateUrl: 'views/top-navigation.html',
      restrict: 'E'
    };
  });
