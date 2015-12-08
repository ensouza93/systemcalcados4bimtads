
angular.module('systemaCalcados').controller('NewformapagamentoController', function ($scope, $location, locationParser, formapagamentoResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.formapagamento = $scope.formapagamento || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/formapagamentos/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        formapagamentoResource.save($scope.formapagamento, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/formapagamentos");
    };
});