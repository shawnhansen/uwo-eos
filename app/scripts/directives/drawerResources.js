'use strict';

angular.module('eosApp')
  .directive('drawerResources', function () {
    return {
      templateUrl: 'views/drawers/drawer-resources.html',
      restrict: 'A'
    };
  });
