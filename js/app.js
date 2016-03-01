angular.module('AndreaGedrichSite', ['ui.router', 'ngMaterial'])
  .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('landing', {
        url: "/",
        templateUrl: "landing.html"
      })

    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "home.html"
      })

    $stateProvider
      .state('about', {
        url: "/about",
        templateUrl: "about.html"
      })

    $stateProvider
      .state('work', {
        url: "/work",
        templateUrl: "work.html"
      })

      $urlRouterProvider.otherwise("/");
  }
