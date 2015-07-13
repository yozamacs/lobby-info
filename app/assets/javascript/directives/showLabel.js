angular.module('PoliticiansLibrary').directive("showLabel", function(Politicians){
  return {
    restrict: 'E',
    templateUrl: '/app/assets/templates/directives/showLabel.html'
  }
})
