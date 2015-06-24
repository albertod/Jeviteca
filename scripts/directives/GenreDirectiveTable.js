/**
 * Created by Alberto on 6/23/15.
 */
angular.module("jeviteca").directive("genreDirectiveTabla", function() {

    return {
        restrict: "AE",
        templateUrl: "views/GenreDirectiveTabla.html",
        replace: true,
        scope: {
            model: "="
        },
        link: function(scope)
        {

        }
    };

});