'use strict';

var sc2timer = angular.module('sc2timer', [])
    .config(['$routeProvider', function($routeProvider){


    console.log('module & router---');

    //-------- ROUTES -----------------

    $routeProvider.when('/', {
        templateUrl: 'main.html',
        controller: mainCtrl
    });

    $routeProvider.otherwise({redirectTo: '/'});

}]);


function initCtrl($scope,$location, $rootScope){

    console.log('---init CTRL---');


}


