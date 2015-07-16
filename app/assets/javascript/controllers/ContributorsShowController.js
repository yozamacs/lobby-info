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

  $scope.getPicNum = function(num) {
        num = Number(num)
    console.log(num)
    console.log(num>100001)
    console.log(typeof num)
    if(num <10000) {
      return 1
    }
    else if(num>=100001&&num<50000) {
      return 2
    }
    else if(num>=500001&&num<200000) {
      return 3
    }
    else if(num>=200001&&num<500000) {
      return 4
    }
    else if(num>=500001&&num<1000000) {
      return 5
    }
    else if(num>=1000001&&num<5000000) {
      return 6
    }
    else if(num>=5000001&&num<10000000) {
      return 7
    }
    else if(num>=10000001&&num<15000000) {
      return 8
    }
    else if(num>=15000001&&num<20000000) {
      return 9
    }
    else {
      return 10
    }
  }

})
