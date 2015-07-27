angular.module("PoliticiansLibrary").factory('Contributors', function($resource,plConfig){
  return $resource("//transparencydata.com/api/1.0/aggregates/pol/:cont_id/contributors.json?cycle=:year&limit=9&apikey=plConfig.apiKey",
  {cont_id: '@cont_id', year: '@year',callback: "JSON_CALLBACK"},
  {getJSONP:{method: "JSONP",isArray: true}
  });
});
