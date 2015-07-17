angular.module("PoliticiansLibrary").config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/politicians'
    })

    .when('/politicians', {
      templateUrl:  '/app/assets/templates/politicians/index.html',
      controller: "PoliticiansIndexController"
    })

    .when('/politicians/:year', {
      templateUrl:  '/app/assets/templates/politicians/show.html',
      controller: "PoliticiansShowController"
    })

    .when('/contributors/:pname/:year/:cont_id', {
      templateUrl:  '/app/assets/templates/contributors/show.html',
      controller: "ContributorsShowController"
    })

    .when('/credits' , {
      templateUrl: '/app/assets/templates/credits.html'
    })

    .when('/comments' , {
      templateUrl: '/app/assets/templates/comments.html',
      controller: "CommentsShowController"
    })
});
