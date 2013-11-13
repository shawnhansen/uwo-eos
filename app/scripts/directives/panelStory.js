'use strict';

angular.module('eosApp')
  .directive('panelStory', function () {
    return {
      templateUrl: 'views/panel-story.html',
      restrict: 'A'
    };
  });
