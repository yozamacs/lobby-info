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

  var removeMiddleName = $scope.pname.split(" ")
  var finalName = removeMiddleName[0] + " " + removeMiddleName[removeMiddleName.length-2]
  $scope.bios = Bios.get({person: finalName})

  $scope.number = function(num){
    return new Array(num);
  };

  $scope.getPicNum = function(num) {
    if(num <=10000) {
      return 1
    }
    else if(num>=10001&&num<=20000) {
      return 2
    }
    else if(num>=20001&&num<=50000) {
      return 3
    }
    else if(num>=50001&&num<=75000) {
      return 4
    }
    else if(num>=75001&&num<=100000) {
      return 5
    }
    else if(num>=100001&&num<=250000) {
      return 6
    }
    else if(num>=250001&&num<=500000) {
      return 7
    }
    else {
      return 8
    }
  }

  $scope.search = function (row) {
       return !!((row.name.indexOf($scope.query || '') !== -1 || row.total_amount.indexOf($scope.query || '') !== -1));
   };

})
