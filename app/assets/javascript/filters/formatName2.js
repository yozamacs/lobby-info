angular.module('PoliticiansLibrary').filter('formatName2', function(){
  return function(name) {
    var niceName = name.trim(',').split(/[\s,]+/)
    return niceName[0] + " " + niceName[1]
  }
})
