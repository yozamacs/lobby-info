angular.module("PoliticiansLibrary").factory('Politicians', function($resource,plConfig){
  var apiKey = plConfig.apiKey
  return $resource("//transparencydata.com/api/1.0/aggregates/pols/top_9.json?cycle=:year&apikey="+ apiKey,
  {year: '@year',callback: "JSON_CALLBACK"},
  {getJSONP:{method: "JSONP",isArray: true}
});
});
