'use strict';

angular.module('eosApp')
  .controller('ResearchNewsPanelCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.researchNews.posts[0];
      $scope.post.category = data.researchNews.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.researchNews.category.slug;
      $scope.slug = data.researchNews.category.slug;
      var presubstr = data.researchNews.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
    }).error(function() {
      // Some error occurred
    });
  });
