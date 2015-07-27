angular.module("PoliticiansLibrary").factory('Politicians', function($resource,plConfig){
  return $resource("//transparencydata.com/api/1.0/aggregates/pols/top_9.json?cycle=:year&apikey=plConfig.apiKey",
  {year: '@year',callback: "JSON_CALLBACK"},
  {getJSONP:{method: "JSONP",isArray: true}
});
});
