'use strict';

angular.module('eosApp')
  .controller('PoweringCommunityPanelCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.poweringCommunity.posts[0];
      $scope.post.category = data.poweringCommunity.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.poweringCommunity.category.slug;
      $scope.slug = data.poweringCommunity.category.slug;
      var presubstr = data.poweringCommunity.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
    }).error(function() {
      // Some error occurred
    });
  });
