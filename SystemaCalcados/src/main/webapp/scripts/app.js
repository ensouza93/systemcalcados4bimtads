'use strict';

angular.module('systemaCalcados',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Clientes',{templateUrl:'views/Cliente/search.html',controller:'SearchClienteController'})
      .when('/Clientes/new',{templateUrl:'views/Cliente/detail.html',controller:'NewClienteController'})
      .when('/Clientes/edit/:ClienteId',{templateUrl:'views/Cliente/detail.html',controller:'EditClienteController'})
      .when('/ItemVendas',{templateUrl:'views/ItemVenda/search.html',controller:'SearchItemVendaController'})
      .when('/ItemVendas/new',{templateUrl:'views/ItemVenda/detail.html',controller:'NewItemVendaController'})
      .when('/ItemVendas/edit/:ItemVendaId',{templateUrl:'views/ItemVenda/detail.html',controller:'EditItemVendaController'})
      .when('/Produtos',{templateUrl:'views/Produto/search.html',controller:'SearchProdutoController'})
      .when('/Produtos/new',{templateUrl:'views/Produto/detail.html',controller:'NewProdutoController'})
      .when('/Produtos/edit/:ProdutoId',{templateUrl:'views/Produto/detail.html',controller:'EditProdutoController'})
      .when('/Usuarios',{templateUrl:'views/Usuario/search.html',controller:'SearchUsuarioController'})
      .when('/Usuarios/new',{templateUrl:'views/Usuario/detail.html',controller:'NewUsuarioController'})
      .when('/Usuarios/edit/:UsuarioId',{templateUrl:'views/Usuario/detail.html',controller:'EditUsuarioController'})
      .when('/Vendas',{templateUrl:'views/Venda/search.html',controller:'SearchVendaController'})
      .when('/Vendas/new',{templateUrl:'views/Venda/detail.html',controller:'NewVendaController'})
      .when('/Vendas/edit/:VendaId',{templateUrl:'views/Venda/detail.html',controller:'EditVendaController'})
      .when('/categoria',{templateUrl:'views/categoria/search.html',controller:'SearchcategoriaController'})
      .when('/categoria/new',{templateUrl:'views/categoria/detail.html',controller:'NewcategoriaController'})
      .when('/categoria/edit/:categoriaId',{templateUrl:'views/categoria/detail.html',controller:'EditcategoriaController'})
      .when('/formapagamentos',{templateUrl:'views/formapagamento/search.html',controller:'SearchformapagamentoController'})
      .when('/formapagamentos/new',{templateUrl:'views/formapagamento/detail.html',controller:'NewformapagamentoController'})
      .when('/formapagamentos/edit/:formapagamentoId',{templateUrl:'views/formapagamento/detail.html',controller:'EditformapagamentoController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
