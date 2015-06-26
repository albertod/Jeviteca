/**
 * Created by Alberto on 6/23/15.
 */
angular.module("jeviteca").directive("bandaDirectiveTabla",["FavoriteService",function(FavoriteService) {

    return {
        restrict: "AE",
        templateUrl: "views/BandaDirectiveTabla.html",
        replace: true,
        scope: {
            model: "="
        },
        link: function(scope)
        {
            scope.isLocalStorageEnable = FavoriteService.isLocalStorageEnable;
            scope.isFavorite = FavoriteService.isFavorite(scope,"banda");


            scope.markAs = function(type) {
                switch(type) {
                    case true :
                        FavoriteService.setFav(scope,"banda");
                        break;
                    case false :
                        FavoriteService.deleteFav(scope,"banda");
                        break;

                }
                scope.isFavorite = type;
            }
        }
    };

}]);