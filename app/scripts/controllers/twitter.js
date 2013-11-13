'use strict';

angular.module('eosApp')
  .controller('TwitterCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.tweets = data.twitter;
    }).error(function() {
      // Some error occurred
    });
  });
