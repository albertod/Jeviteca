/**
 * Created by Alberto on 6/23/15.
 */
angular.module("jeviteca").directive("bandaDirectiveTabla", function() {

    return {
        restrict: "AE",
        templateUrl: "views/BandaDirectiveTabla.html",
        replace: true,
        scope: {
            model: "="
        },
        link: function(scope)
        {

        }
    };

});