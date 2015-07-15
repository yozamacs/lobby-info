angular.module("PoliticiansLibrary").factory('Contributors', function($resource){
  return $resource("//transparencydata.com/api/1.0/aggregates/pol/:cont_id/contributors.json?cycle=:year&limit=9&apikey=a100f4c82be646c4a94225263b9eec5e",
  {cont_id: '@cont_id', year: '@year',callback: "JSON_CALLBACK"},
  {getJSONP:{method: "JSONP",isArray: true}
  });
});
