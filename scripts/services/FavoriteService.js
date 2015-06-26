/**
 * Created by Alberto on 6/25/15.
 */
angular
    .module("jeviteca")
    .service("FavoriteService",[function(){


        //Favorites functions
        this.isLocalStorageEnable = function() {

            if(typeof (Storage) !== "undefined"){
                return true;
            }
            else{
                return false;
            }
        };

        this.isFavorite = function(scope,type){
            var fav = localStorage.getItem(scope.model.id + "_" + type);
            return fav === "1";
        };


        this.setFav = function(scope,type){
            localStorage.setItem(scope.model.id + "_" + type,"1");
        };


        this.deleteFav = function(scope,type){
            localStorage.removeItem(scope.model.id+ "_" + type);
        };


    }]);