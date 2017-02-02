// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var sebanApp = angular.module('sebanApp', ['ngRoute', 'ngAnimate']);

    // configure our routes
    sebanApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/page-home.html',
                controller  : 'mainController'
            })
            // route for the contact page
            .when('/projektit', {
                templateUrl : 'pages/page-projektit.html',
                controller  : 'projektitController'
            })
            // route for the about page
            .when('/about', {
                templateUrl : 'pages/page-about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/page-contact.html',
                controller  : 'contactController'
            });

    });


    sebanApp.controller('mainController', function($scope) {
        $scope.pageClass = 'page-home';
        $scope.message = 'kotisivuilleni';
    });
    // projektit page controller
    sebanApp.controller('projektitController', function($scope) {
        $scope.pageClass = 'page-projektit';
        $scope.message = 'Tältä sivulta löytyy tietoa projekteistani, joita olen tehnyt ja joissa olen ollut mukana';
    });
    // about page controller
    sebanApp.controller('aboutController', function($scope) {
        $scope.pageClass = 'page-about';
        $scope.message = 'Kuka on Sebastian Hämäläinen?';

    });

    // contact page controller
    sebanApp.controller('contactController', function($scope) {
        $scope.pageClass = 'page-contact';
        $scope.message = 'Vastaan ytheydenottoon niin pian kuin mahdollista';
    });
