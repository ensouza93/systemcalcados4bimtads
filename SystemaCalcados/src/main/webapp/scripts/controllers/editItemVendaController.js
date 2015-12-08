

angular.module('systemaCalcados').controller('EditItemVendaController', function($scope, $routeParams, $location, ItemVendaResource , VendaResource) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.itemVenda = new ItemVendaResource(self.original);
            VendaResource.queryAll(function(items) {
                $scope.vendaSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.itemVenda.venda && item.id == $scope.itemVenda.venda.id) {
                        $scope.vendaSelection = labelObject;
                        $scope.itemVenda.venda = wrappedObject;
                        self.original.venda = $scope.itemVenda.venda;
                    }
                    return labelObject;
                });
            });
        };
        var errorCallback = function() {
            $location.path("/ItemVendas");
        };
        ItemVendaResource.get({ItemVendaId:$routeParams.ItemVendaId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.itemVenda);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.itemVenda.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/ItemVendas");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/ItemVendas");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.itemVenda.$remove(successCallback, errorCallback);
    };
    
    $scope.$watch("vendaSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.itemVenda.venda = {};
            $scope.itemVenda.venda.id = selection.value;
        }
    });
    
    $scope.get();
});