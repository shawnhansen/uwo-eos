'use strict';

angular.module('eosApp')
  .controller('ChancellorPanelCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.chancellor.posts[0];
      $scope.post.category = data.chancellor.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.chancellor.category.slug;
      $scope.slug = data.chancellor.category.slug;
      var presubstr = data.chancellor.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
    }).error(function() {
      // Some error occurred
    });
  });
