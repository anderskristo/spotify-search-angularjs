// app.js

(function(){
  var app = angular.module('spotifyApp', []);

  app.controller('SearchController', [ '$http', function($http){
    var search = this;
    search.results = [];
    $http.get('http://ws.spotify.com/search/1/track.json?q=' + search.term).success(function(data) {
        search.results = data;
    });
  }]);

})();