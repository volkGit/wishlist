(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('mainController', mainController);

    mainController.$inject = ['$http'];

    function mainController($http) {
        var vm = this;
        vm.products = [];
        vm.wishlist = [];
        vm.heightProducts = document.documentElement.clientHeight - 100 + 'px';
        vm.getResult = getResult;

        function getProducts() {
            $http.get('products.json').then(function(responce){
                vm.products = responce.data.products;
            });
        }

        function getResult() {
            vm.priceProducts = 0;

            for (let i = 0; i < vm.wishlist.length; i++) {
                vm.priceProducts += vm.wishlist[i].price;
            }
        }

        getProducts();
    }
})();
