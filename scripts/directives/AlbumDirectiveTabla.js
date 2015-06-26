/**
 * Created by Alberto on 6/23/15.
 */
angular.module("jeviteca").directive("albumDirectiveTabla",["FavoriteService",
    function(FavoriteService) {

    return {
        restrict: "AE",
        templateUrl: "views/AlbumDirectiveTabla.html",
        replace: true,
        scope: {
            model: "="

        },
        link: function(scope)
        {
            scope.isLocalStorageEnable = FavoriteService.isLocalStorageEnable;
            scope.isFavorite = FavoriteService.isFavorite(scope,"album");


            scope.markAs = function(type) {
                switch(type) {
                    case true :
                        FavoriteService.setFav(scope,"album");
                        break;
                    case false :
                        FavoriteService.deleteFav(scope,"album");
                        break;

                }
                scope.isFavorite = type;
            }

        }

    };

}]);