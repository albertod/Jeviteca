/**
 * Created by Alberto on 6/23/15.
 */
angular.module("jeviteca").directive("albumDirectiveTabla", function() {

    return {
        restrict: "AE",
        templateUrl: "views/AlbumDirectiveTabla.html",
        replace: true,
        scope: {
            model: "="
        },
        link: function(scope)
        {

        }
    };

});