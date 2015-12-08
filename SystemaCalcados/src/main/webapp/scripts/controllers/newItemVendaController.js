
angular.module('systemaCalcados').controller('NewItemVendaController', function ($scope, $location, locationParser, ItemVendaResource , VendaResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.itemVenda = $scope.itemVenda || {};
    
    $scope.vendaList = VendaResource.queryAll(function(items){
        $scope.vendaSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("vendaSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.itemVenda.venda = {};
            $scope.itemVenda.venda.id = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/ItemVendas/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        ItemVendaResource.save($scope.itemVenda, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/ItemVendas");
    };
});