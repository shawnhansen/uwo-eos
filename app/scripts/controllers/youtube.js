'use strict';

angular.module('eosApp')
  .controller('YoutubeCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.videos = data.youtube.data.items;
    }).error(function() {
      // Some error occurred
    });
  });
