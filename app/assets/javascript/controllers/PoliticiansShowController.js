angular.module("PoliticiansLibrary").controller("PoliticiansShowController",function(Politicians,$scope,$routeParams){
  Politicians.getJSONP({year: $routeParams.year}).$promise.then(function(politicians){
    $scope.politicians = politicians
  });
  $scope.year = $routeParams.year;
  $scope.isEmpty = function(){
    return($scope.politicians.length===0? true : false)
  }

})
