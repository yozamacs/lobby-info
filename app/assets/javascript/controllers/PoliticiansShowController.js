angular.module("PoliticiansLibrary").controller("PoliticiansShowController",function(Politicians,$scope,$routeParams){
  Politicians.getJSONP({year: $routeParams.year}).$promise.then(function(politicians){
    $scope.politicians = politicians
  });
  $scope.year = $routeParams.year;

  $scope.isEmpty = function(){
    return($scope.politicians.length===0? true : false)
  }

  $scope.number = function(num){
    return new Array(num);
  };

  $scope.search = function (item){
    return !!((item.seat.indexOf($scope.query || '') !== -1 || item.state.indexOf($scope.query || '') !== -1));
  }
})
