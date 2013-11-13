'use strict';

angular.module('eosApp')
  .directive('drawerAdministration', function () {
    return {
      templateUrl: 'views/drawers/drawer-administration.html',
      restrict: 'A'
    };
  });
