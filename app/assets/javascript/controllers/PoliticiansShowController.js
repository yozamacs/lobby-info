angular.module("PoliticiansLibrary").controller("PoliticiansShowController",function(Politicians,$scope,$routeParams){
  Politicians.getJSONP({year: $routeParams.year}).$promise.then(function(politicians){
    $scope.politicians = politicians
    console.log($scope.politicians)
  });
  $scope.year = $routeParams.year;
  $scope.isEmpty = function(){
    return($scope.politicians.length===0? true : false)
  }
  // $scope.politicians = Politicians.getJSONP({year: $routeParams.year});
  // $scope.search = function (row) {
  //      return !!((row.seat.indexOf($scope.query || '') !== -1 || row.state.indexOf($scope.query || '') !== -1));
  //  };


})
