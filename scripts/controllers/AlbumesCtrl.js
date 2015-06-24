angular
    .module("jeviteca")
    .controller("AlbumesCtrl",["$scope","Albumes",function($scope,Albumes){

                $scope.albumes = Albumes.data;

}]);
