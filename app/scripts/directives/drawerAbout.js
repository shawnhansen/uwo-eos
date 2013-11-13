'use strict';

angular.module('eosApp')
  .directive('drawerAbout', function () {
    return {
      templateUrl: 'views/drawers/drawer-about.html',
      restrict: 'A'
    };
  });
