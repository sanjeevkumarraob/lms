// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });


})


.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'search.html'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'settings.html'
      })
      .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "tabs.html"
      })
      .state('tabs.home', {
        url: "/home",
        views: {
          'home-tab': {
            templateUrl: "home.html",
            controller: 'HomeTabCtrl'
          }
        }
      })
      .state('tabs.facts', {
        url: "/facts",
        views: {
          'home-tab': {
            templateUrl: "facts.html"
          }
        }
      })
      .state('tabs.facts2', {
        url: "/facts2",
        views: {
          'home-tab': {
            templateUrl: "facts2.html"
          }
        }
      })
      .state('tabs.about', {
        url: "/about",
        views: {
          'about-tab': {
            templateUrl: "about.html",
            controller: "ContentCtrl"
          }
        }
      })
      .state('tabs.navstack', {
        url: "/navstack",
        views: {
          'about-tab': {
            templateUrl: "nav-stack.html"
          }
        }
      })
      .state('tabs.contact', {
        url: "/contact",
        views: {
          'contact-tab': {
            templateUrl: "contact.html",
            controller: "GlossaryCtrl"
          }
        }
      });


    $urlRouterProvider.otherwise("/tab/home");

  })
  .controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.showMenu = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.showRightMenu = function() {
      $ionicSideMenuDelegate.toggleRight();
    };
  })
  .controller('HomeTabCtrl', function($scope) {})
  .controller('ContentCtrl', function($scope) {
    $scope.contents = [{
      "header": "Introduction to the Unit"
    }, {
      "header": "Unit Objectives"
    }, {
      "header": "Definition of key terms in ICT (1 of 3)"
    }, {
      "header": "Definition of key terms in ICT (2 of 3)"
    }, {
      "header": "Definition of key terms in ICT (3 of 3)"
    }, {
      "header": "Quiz"
    }, {
      "header": "Components of Computers (1 of 9)"
    }, {
      "header": "Components of Computers (2 of 9)"
    }, {
      "header": "Components of Computers (3 of 9)"
    }, {
      "header": "Components of Computers (4 of 9)"
    }, {
      "header": "Components of Computers (5 of 9)"
    }, {
      "header": "Components of Computers (6 of 9)"
    }, {
      "header": "Components of Computers (7 of 9)"
    }, {
      "header": "Components of Computers (8 of 9)"
    }, {
      "header": "Components of Computers (9 of 9)"
    }, {
      "header": "Quiz"
    }, {
      "header": "Computer Hardware and Software"
    }, {
      "header": "Applications of Computers (1 of 15)"
    }, {
      "header": "Applications of Computers (2 of 15)"
    }, {
      "header": "Applications of Computers (3 of 15)"
    }, {
      "header": "Applications of Computers (4 of 15)"
    }, {
      "header": "Applications of Computers (5 of 15)"
    }, {
      "header": "Applications of Computers (6 of 15)"
    }, {
      "header": "Applications of Computers (7 of 15)"
    }, {
      "header": "Applications of Computers (8 of 15)"
    }, {
      "header": "Applications of Computers (9 of 15)"
    }, {
      "header": "Applications of Computers (10 of 15)"
    }, {
      "header": "Applications of Computers (11 of 15)"
    }, {
      "header": "Applications of Computers (12 of 15)"
    }, {
      "header": "Applications of Computers (13 of 15)"
    }, {
      "header": "Applications of Computers (14 of 15)"
    }, {
      "header": "Applications of Computers (15 of 15)"
    }, {
      "header": "Quiz"
    }, {
      "header": "What Have You Learnt?"
    }];
  })
  .controller('GlossaryCtrl', function($scope) {

    $scope.glossaryterms = [{
      "term": "CSW",
      "definition": "Commercial Sex Workers"
    }, {
      "term": "GBV",
      "definition": "Gender Based Violation"
    }, {
      "term": "USA",
      "definition": "United States of America"
    }, {
      "term": "MOHs",
      "definition": "Ministries of Health (Min Medical Services, Min Public Health and Sanitation)"
    }, {
      "term": "MOMS",
      "definition": "Ministry of Medical Services "
    }, {
      "term": "USAID",
      "definition": "United Stated Agency for International Development "
    }, {
      "term": "WHO",
      "definition": "World Health Organisation "
    }];
  });
