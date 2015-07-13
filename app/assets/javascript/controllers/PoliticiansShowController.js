angular.module("PoliticiansLibrary").controller("PoliticiansShowController",function(Politicians,$scope,$routeParams){
  $scope.politicians = Politicians.getJSONP({year: $routeParams.year});
  $scope.year = $routeParams.year;
  // console.log(Object.getOwnPropertyNames($scope.politicians))
  // console.log($scope.politicians.length)
  // console.log(Object.keys($scope.politicians))
  // if(Object.getOwnPropertyNames($scope.politicians) === 0) {
  //   $scope.isEmpty = true
  // }
  // else {
  //   $scope.isEmpty = false
  // }

})
