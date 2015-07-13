angular.module('PoliticiansLibrary').filter('showState', function(){
  return function(state) {
  if(state!="") {
    return "of "+state;
  }
  else {
    return " ";
  }
}
});
