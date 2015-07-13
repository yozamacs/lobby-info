angular.module('PoliticiansLibrary').filter('splitState', function(){
  return function(phrase) {
    var word = phrase.split(':')
    return word[1]
  }
})
