

angular.module('systemaCalcados').controller('EditformapagamentoController', function($scope, $routeParams, $location, formapagamentoResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.formapagamento = new formapagamentoResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/formapagamentos");
        };
        formapagamentoResource.get({formapagamentoId:$routeParams.formapagamentoId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.formapagamento);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.formapagamento.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/formapagamentos");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/formapagamentos");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.formapagamento.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});