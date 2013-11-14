'use strict';

angular.module('eosApp')
  .controller('HomeSliderCtrl', function ($scope) {
    $scope.slides = [
      {'name': 'Education',
       'title': 'University of Wisconsin Oshkosh',
       'subtitle': 'WHERE EXCELLENCE AND OPPORTUNITY MEET.',
       'image': 'images/pillar1.jpg'},
      {'name': 'Leadership',
       'title': 'University of Wisconsin Oshkosh',
       'subtitle': 'WHERE EXCELLENCE AND OPPORTUNITY MEET.',
       'image': 'images/pillar2.jpg'},
      {'name': 'Responsiveness',
       'title': 'University of Wisconsin Oshkosh',
       'subtitle': 'WHERE EXCELLENCE AND OPPORTUNITY MEET.',
       'image': 'images/pillar3.jpg'},
      {'name': 'Service',
       'title': 'University of Wisconsin Oshkosh',
       'subtitle': 'WHERE EXCELLENCE AND OPPORTUNITY MEET.',
       'image': 'images/pillar4.jpg'},
      {'name': 'Sustainability',
       'title': 'University of Wisconsin Oshkosh',
       'subtitle': 'WHERE EXCELLENCE AND OPPORTUNITY MEET.',
       'image': 'images/pillar1.jpg'},
    ];

    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
      $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
      return $scope.currentIndex === index;
    };

    $scope.prevSlide = function () {
      $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };
  });
