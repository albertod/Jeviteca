// Setter del módulo.
angular.module( "jeviteca", ["ngRoute", "route-segment", "view-segment"] );

angular
    .module( "jeviteca" )
    .config(["$routeSegmentProvider", "$routeProvider", function( $routeSegmentProvider, $routeProvider ) {

        $routeSegmentProvider.when( "/albumes", "albumes");
        $routeSegmentProvider.when( "/bandas",  "bandas");
        $routeSegmentProvider.when( "/generos", "generos");
        //$routeSegmentProvider.when( "/peliculas/:id/detalles", "detalle_pelicula" )

        $routeSegmentProvider.segment( "albumes", {
            controller: "AlbumesCtrl",
            templateUrl: "views/albumes.html",
            resolve: {
                Albumes: ["ApiService", function(ApiService) {
                    return ApiService.obtainData("/albums.json");
                }]
            }
        });


        $routeSegmentProvider.segment( "bandas", {
            controller: "BandasCtrl",
            templateUrl: "views/bandas.html",
            resolve: {
                Bandas: ["ApiService", function(ApiService) {
                    return ApiService.obtainData("/bands.json");
                }]
            }
        });

        $routeSegmentProvider.segment( "generos", {
            controller: "GenerosCtrl",
            templateUrl: "views/generos.html",
            resolve: {
                Generos: ["ApiService", function(ApiService) {
                    return ApiService.obtainData("/genres.json");
                }]
            }
        });

        //$routeSegmentProvider.segment( "detalle_pelicula", {
        //    controller: "DetallePelicula",
        //    templateUrl: "views/DetallePelicula.html",
        //    resolve: {
        //        Pelicula: ["ApiService", "$routeParams", function(ApiService, $routeParams) {
        //            return ApiService.obtenerDatos( "movie/" + $routeParams.id );
        //        }]
        //    }
        //});

        $routeProvider.otherwise({
            redirectTo: "/albumes"
        });

    }]);
