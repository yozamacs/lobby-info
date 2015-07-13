angular.module('PoliticiansLibrary').filter('formatName', function(){
  return function(name) {
    var niceName = name.trim(',').split(/[\s,]+/)
    return niceName[1] + " " + niceName[0]
  }
})
