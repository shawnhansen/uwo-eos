'use strict';

angular.module('eosApp')
  .directive('drawerAlumni', function () {
    return {
      templateUrl: 'views/drawers/drawer-alumni.html',
      restrict: 'A'
    };
  });
