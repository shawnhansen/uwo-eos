'use strict';

angular.module('eosApp')
  .controller('TitanPanelCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.iAmATitan.posts[0];
      $scope.post.category = data.iAmATitan.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.iAmATitan.category.slug;
      $scope.slug = data.iAmATitan.category.slug;
      var presubstr = data.iAmATitan.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
    }).error(function() {
      // Some error occurred
    });
  });
