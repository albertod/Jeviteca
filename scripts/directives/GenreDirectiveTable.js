/**
 * Created by Alberto on 6/23/15.
 */
angular.module("jeviteca").directive("genreDirectiveTabla",["FavoriteService",function(FavoriteService) {

    return {
        restrict: "AE",
        templateUrl: "views/GenreDirectiveTabla.html",
        replace: true,
        scope: {
            model: "="
        },
        link: function(scope)
        {
            scope.isLocalStorageEnable = FavoriteService.isLocalStorageEnable;
            scope.isFavorite = FavoriteService.isFavorite(scope,"genero");


            scope.markAs = function(type) {
                switch(type) {
                    case true :
                        FavoriteService.setFav(scope,"genero");
                        break;
                    case false :
                        FavoriteService.deleteFav(scope,"genero");
                        break;

                }
                scope.isFavorite = type;
            }
        }
    };

}]);