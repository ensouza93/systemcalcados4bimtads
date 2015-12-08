

angular.module('systemaCalcados').controller('EditcategoriaController', function($scope, $routeParams, $location, categoriaResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.categoria = new categoriaResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/categoria");
        };
        categoriaResource.get({categoriaId:$routeParams.categoriaId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.categoria);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.categoria.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/categoria");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/categoria");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.categoria.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});