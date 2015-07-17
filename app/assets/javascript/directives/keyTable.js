angular.module('PoliticiansLibrary').directive("keyTable", function(Politicians){
  return {
    restrict: 'E',
    templateUrl: '/app/assets/templates/directives/keyTable.html'
  }
})
