'use strict';

angular.module('eosApp')
  .controller('EventsCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.events = data.events.value.items;
    }).error(function() {
      // Some error occurred
    });
  });
