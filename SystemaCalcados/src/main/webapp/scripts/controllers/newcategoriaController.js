
angular.module('systemaCalcados').controller('NewcategoriaController', function ($scope, $location, locationParser, categoriaResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.categoria = $scope.categoria || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/categoria/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        categoriaResource.save($scope.categoria, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/categoria");
    };
});