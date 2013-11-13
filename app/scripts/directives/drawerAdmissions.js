'use strict';

angular.module('eosApp')
  .directive('drawerAdmissions', function () {
    return {
      templateUrl: 'views/drawers/drawer-admissions.html',
      restrict: 'A'
    };
  });
