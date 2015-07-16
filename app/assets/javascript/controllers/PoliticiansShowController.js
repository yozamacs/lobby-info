angular.module("PoliticiansLibrary").controller("PoliticiansShowController",function(Politicians,$scope,$routeParams){
  Politicians.getJSONP({year: $routeParams.year}).$promise.then(function(politicians){
    $scope.politicians = politicians
  });
  $scope.year = $routeParams.year;

  // console.log(Object.getOwnPropertyNames($scope.politicians))

  // console.log(Object.keys($scope.politicians))
  $scope.isEmpty = function(){
    return($scope.politicians.length===0? true : false)
  }

  $scope.number = function(num){
    return new Array(num);
  };

})
