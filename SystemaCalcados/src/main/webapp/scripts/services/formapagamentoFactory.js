angular.module('systemaCalcados').factory('formapagamentoResource', function($resource){
    var resource = $resource('rest/formapagamentos/:formapagamentoId',{formapagamentoId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});