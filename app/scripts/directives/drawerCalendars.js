'use strict';

angular.module('eosApp')
  .directive('drawerCalendars', function () {
    return {
      templateUrl: 'views/drawers/drawer-calendars.html',
      restrict: 'A'
    };
  });
