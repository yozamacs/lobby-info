angular.module("PoliticiansLibrary").controller("ContributorsShowController",function(Contributors,Bios,$scope,$routeParams){
  $scope.contributors = Contributors.getJSONP({year: $routeParams.year, cont_id: $routeParams.cont_id});
  $scope.year = $routeParams.year

  if($routeParams.pname.includes("(R)")) {
    $scope.pname = $routeParams.pname.replace("(R)","")
  }
  else if($routeParams.pname.includes("(D)")) {
    $scope.pname = $routeParams.pname.replace("(D)","")
  }
  else {
    $scope.pname = $routeParams.pname
  }

  $scope.bios = Bios.get({person: $scope.pname})

  $scope.number = function(num){
    return new Array(num);
  };
})
