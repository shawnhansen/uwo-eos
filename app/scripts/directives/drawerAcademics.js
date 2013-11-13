'use strict';

angular.module('eosApp')
  .directive('drawerAcademics', function () {
    return {
      templateUrl: 'views/drawers/drawer-academics.html',
      restrict: 'A'
    };
  });
