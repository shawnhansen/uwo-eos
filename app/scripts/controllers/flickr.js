'use strict';

angular.module('eosApp')
  .controller('FlickrCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.photosets = data.flickr.photosets.photoset;
    }).error(function() {
      // Some error occurred
    });
  });
