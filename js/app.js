(function() {
    'use strict';

    angular
        .module('app', [
            'app.controllers',
            'app.components'
        ])
        .run();

    angular.module('app.controllers', []);
    angular.module('app.components', []);

})();
