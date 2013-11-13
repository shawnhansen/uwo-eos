'use strict';

angular.module('eosApp')
  .controller('CampusNewsPanelCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.campusNews.posts[0];
      $scope.post.category = data.campusNews.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.campusNews.category.slug;
      $scope.slug = data.campusNews.category.slug;
      var presubstr = data.campusNews.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
    }).error(function() {
      // Some error occurred
    });
  });
