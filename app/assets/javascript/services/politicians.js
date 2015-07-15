angular.module("PoliticiansLibrary").factory('Politicians', function($resource){
  return $resource("https://transparencydata.com/api/1.0/aggregates/pols/top_9.json?cycle=:year&apikey=a100f4c82be646c4a94225263b9eec5e",
  {year: '@year',callback: "JSON_CALLBACK"},
  {getJSONP:{method: "JSONP",isArray: true}
});
});
