(function() {
    'use strict';

    function CartProductController($timeout) {
        var vm = this;
        vm.isWishList = false;
        vm.updateWishlist = updateWishlist;

        function updateWishlist(product) {
            if (vm.product.quantity == 0) {
                vm.alertShow = true;
                $timeout(function(){
                    vm.alertShow = false;
                },3000);
                return;
            }

            if (!vm.isWishList) {
                vm.wishlist.push(product);
            } else {
                deleteWishlist(product.id);
            }

            if (!angular.isUndefined(vm.callback)) {
                vm.callback();
            }
            vm.isWishList = !vm.isWishList;
        }

        function deleteWishlist(id) {
            for (let i = 0; i < vm.wishlist.length; i++) {
                if (vm.wishlist[i].id == id) {
                    vm.wishlist.splice(i, 1);
                    continue;
                }
            }
        }
    }

    angular.module('app.components').component('cartProduct', {
        templateUrl: 'views/cartProduct.html',
        controller: CartProductController,
        controllerAs: 'dc',
        bindings: {
            product: '<',
            wishlist: '=',
            callback: '&?'
        }
    });

})();