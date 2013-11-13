'use strict';

angular.module('eosApp')
  .controller('AdmissionsPanelCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.admissions.posts[0];
      $scope.post.category = data.admissions.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.admissions.category.slug;
      $scope.slug = data.admissions.category.slug;
      var presubstr = data.admissions.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
    }).error(function() {
      // Some error occurred
    });
  });
