// app.js

(function(){
  var app = angular.module('spotifyApp', []);

  app.controller('SearchController', function($http, $scope){
    $scope.endpoints = [
      { name: 'artist' },
      { name: 'track' },
      { name: 'album' }
    ];
    $scope.selectedItem = '';

    $scope.$watch('searchTerm', function(newVal) {
      if (newVal) {
        $http.get('http://ws.spotify.com/search/1/'+ $scope.selectedItem.name +'.json?q=' + newVal).success(function(data) {
          $scope.results = data;
        });
      } else {
        $scope.results = [];
      }
    });

  });

})();
