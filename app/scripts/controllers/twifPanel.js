'use strict';

angular.module('eosApp')
  .controller('TwifPanelCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.twif.posts[0];
      $scope.post.category = data.twif.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.twif.category.slug;
      $scope.slug = data.twif.category.slug;
      var presubstr = data.twif.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
    }).error(function() {
      // Some error occurred
    });
  });
