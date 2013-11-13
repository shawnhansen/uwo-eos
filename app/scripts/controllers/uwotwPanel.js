'use strict';

angular.module('eosApp')
  .controller('UwotwPanelCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.uwotw.posts[0];
      $scope.post.category = data.uwotw.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.uwotw.category.slug;
      $scope.slug = data.uwotw.category.slug;
      var presubstr = data.uwotw.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
    }).error(function() {
      // Some error occurred
    });
  });
