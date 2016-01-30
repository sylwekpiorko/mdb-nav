angular.module('movieDBControllers',[])
.controller('MovieListController',function($scope, MovieListService,myMovieConfig) {
 $scope.loading = true;
 $scope.title = 'Popular Movies'
 var url = myMovieConfig.moviesEndpoint + '/popular?api_key=' + myMovieConfig.apiKey;
 MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results; /*res.filter(function(val){return val !== null});;*/
          $scope.loading = false;
      }
      ).catch(
        function(error) { 
          console.log('error', error)
        });
})
.controller('MovieUpcomingController',function($scope, MovieListService,myMovieConfig) {
 $scope.loading = true;
 $scope.title = 'Upcoming Movies'
 var url = myMovieConfig.moviesEndpoint + '/upcoming?api_key=' + myMovieConfig.apiKey;
 MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results; /*res.filter(function(val){return val !== null});;*/
          $scope.loading = false;
      }
      ).catch(
        function(error) { 
          console.log('error', error)
        });
})
.controller('MovieNowPlayingController',function($scope, MovieListService,myMovieConfig) {
 $scope.loading = true;
 $scope.title = 'Now Playing Movies'
 var url = myMovieConfig.moviesEndpoint + '/now_playing?api_key=' + myMovieConfig.apiKey;
 MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results; /*res.filter(function(val){return val !== null});;*/
          $scope.loading = false;
      }
      ).catch(
        function(error) { 
          console.log('error', error);
           
        });
})
.controller('MovieTopRatedController',function($scope, MovieListService,myMovieConfig) {
 $scope.loading = true;
 $scope.title = 'Top Rated Movies'
 var url = myMovieConfig.moviesEndpoint + '/top_rated?api_key=' + myMovieConfig.apiKey;
 MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results; /*res.filter(function(val){return val !== null});;*/
          $scope.loading = false;
      }
      ).catch(
        function(error) { 
          console.log('error', error)
        });
})
.controller('AboutController' ,function($scope) {
//
  $scope.title = 'About Us';
  $scope.maps = [{
    address: 'Trinity College Dublin, Dublin',
    zoom: 14,
    width: 400
    }, {
    address: '51st Street, New York, New York',
    zoom: 14,
    width: 400
    }];
  $scope.map = $scope.maps[0];
});