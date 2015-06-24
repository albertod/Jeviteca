/**
 * Created by Alberto on 6/18/15.
 */
angular
    .module("jeviteca")
    .service("ApiService",["$http","Settings", function($http,Settings){


        this.obtainData = function(rute){

                return $http.get(Settings.apiDataURL + rute,{cache:true});

        };

    }]);