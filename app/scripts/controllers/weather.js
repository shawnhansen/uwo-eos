'use strict';

angular.module('eosApp')
  .controller('WeatherCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.weather = data.weather;
      var icon = data.weather.currently.icon;
      var skycons = new Skycons({'color': '#444'});
      switch(icon) {
        case 'clear-day':
          skycons.add('weather1', Skycons.CLEAR_DAY);
          break;
        case 'clear-night':
          skycons.add('weather1', Skycons.CLEAR_NIGHT);
          break;
        case 'partly-cloudy-day':
          skycons.add('weather1', Skycons.PARTLY_CLOUDY_DAY);
          break;
        case 'partly-cloudy-night':
          skycons.add('weather1', Skycons.PARTLY_CLOUDY_NIGHT);
          break;
        case 'cloudy':
          skycons.add('weather1', Skycons.CLOUDY);
          break;
        case 'rain':
          skycons.add('weather1', Skycons.RAIN);
          break;
        case 'sleet':
          skycons.add('weather1', Skycons.SLEET);
          break;
        case 'snow':
          skycons.add('weather1', Skycons.SNOW);
          break;
        case 'wind':
          skycons.add('weather1', Skycons.WIND);
          break;
        case 'fog':
          skycons.add('weather1', Skycons.FOG);
          break;
        default:
          skycons.add('weather1', Skycons.CLEAR_DAY);
      }
      skycons.play();
    }).error(function() {
      // Some error occurred
    });
  });
