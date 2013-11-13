'use strict';

angular.module('eosApp')
  .controller('FacebookCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.fbposts = data.facebook.data;
    }).error(function() {
      // Some error occurred
    });
  });
