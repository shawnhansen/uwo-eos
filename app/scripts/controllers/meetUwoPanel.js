'use strict';

angular.module('eosApp')
  .controller('MeetUwoPanelCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.meetUwo.posts[0];
      $scope.post.category = 'Meet UWO';
      $scope.categoryURL = 'http://www.uwosh.edu/faces';
      $scope.slug = 'meet-uwo';
      var presubstr = data.meetUwo.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
    }).error(function() {
      // Some error occurred
    });
  });
