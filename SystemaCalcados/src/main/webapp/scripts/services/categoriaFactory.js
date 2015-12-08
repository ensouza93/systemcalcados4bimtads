angular.module('systemaCalcados').factory('categoriaResource', function($resource){
    var resource = $resource('rest/categoria/:categoriaId',{categoriaId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});