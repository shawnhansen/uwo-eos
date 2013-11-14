'use strict';

angular.module('eosApp')
  .directive('mainSlider', function () {
    return {
      templateUrl: 'views/main-slider.html',
      restrict: 'A'
    };
  });
