'use strict';

angular.module('eosApp')
  .controller('TopNavCtrl', function ($scope) {
    $scope.navitems = {
      'about': {
        'name': 'About',
        'showDrawer': false
      },
      'academics': {
        'name': 'Academics',
        'showDrawer': false
      },
      'athletics': {
        'name': 'Athletics',
        'showDrawer': false
      },
      'alumni': {
        'name': 'Alumni',
        'showDrawer': false
      },
      'admissions': {
        'name': 'Admissions',
        'showDrawer': false
      },
      'administration': {
        'name': 'Administration',
        'showDrawer': false
      },
      'resources': {
        'name': 'Resources',
        'showDrawer': false
      },
      'calendars': {
        'name': 'Calendars',
        'showDrawer': false
      },
      'titanServices': {
        'name': 'Titan Services',
        'showDrawer': false,
        'submenu': [
          {'name': 'Site Index'},
          {'name': 'Directory'},
          {'name': 'Titan Web'},
          {'name': 'Titan Files'},
          {'name': 'Titan Apps (email)'},
          {'name': 'My UW System'},
          {'name': 'Desire2Learn (D2L)'},
          {'name': 'Polk Library'},
          {'name': 'MyUWO'},
          {'name': 'Student Clubs & Orgs'},
          {'name': 'Titan Jobs'}
        ]
      }
    };
    $scope.hover = function(drawer) {
      drawer.showDrawer = ! drawer.showDrawer;
      return drawer.showDrawer;
    };
  });
