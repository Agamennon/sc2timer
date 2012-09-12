'use strict';


/**
 * modulo inicial em chaves outros modulos necessarios  no config o route provider seta as rotas do programa
 * @type {*}
 */
var tekna = angular.module('tekna', ['ngCookies','ngResource', 'gui-ui', 'services', 'filters'])
    .config(['$routeProvider', function($routeProvider){


    console.log('module & router---');

    //-------- ROUTES -----------------

    $routeProvider.when('/', {
        templateUrl: 'views/main/main.html',
        controller: mainCtrl
    });

    $routeProvider.when('/login', {
        templateUrl: 'views/login/login.html',
        controller: loginCtrl
    });

    $routeProvider.when('/cliente/cadastro', {
        templateUrl: 'views/cadastro/cadastroCliente.html',
        controller: cadastroClienteCtrl
    });

    $routeProvider.when('/cliente/detalhes', {
        templateUrl: 'views/detalhesCliente/detalhesCliente.html',
        controller: detalhesClienteCtrl
    });

    $routeProvider.when('/pedido', {
        templateUrl: 'views/pedido/novoPedido/novoPedido.html',
        controller: novoPedidoCtrl
    });

    $routeProvider.when('/pedido/detalhes', {
        templateUrl: 'views/pedido/detalhes/detalhesPedido.html',
        controller: detalhesPedidoCtrl
    });


    $routeProvider.when('/pedido/busca', {
        templateUrl: 'views/pedido/busca/buscaPedido.html',
        controller: buscaPedidoCtrl
    });


    $routeProvider.when('/testes', {
        templateUrl: 'views/testes/testes.html',
        controller: testesCtrl
    });


    $routeProvider.when('/pedido/faturar', {
        templateUrl: 'views/pedido/faturar/faturar.html',
        controller: faturarCtrl
    });


    $routeProvider.otherwise({redirectTo: '/'});

}]);


tekna.value('gui.config', {
    date: {
        yearRange:"1900:2099",
        changeYear:true
    }
});



function initCtrl($scope,$location, $rootScope){

    console.log('---init CTRL---');


    /**
     * o evento routeChangeSuccess é chamado sempre que uma nova rota for completada
     * se nao existem um objeto usuario vinculado ao rootScope redireciona para o login
     */
    $rootScope.$on('$routeChangeSuccess', function(ngEvent, route) {
        if (!$rootScope.usuario) {
            $location.path('/login');
        }

    });

}
initCtrl.$inject = ['$scope','$location', '$rootScope'];

