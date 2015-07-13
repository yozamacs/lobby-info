angular.module('PoliticiansLibrary').factory('Bios', function($resource){
  return $resource("https://www.govtrack.us/api/v2/person?q=:person");
});
