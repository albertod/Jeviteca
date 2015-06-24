/**
 * Created by Alberto on 6/24/15.
 */
angular
    .module("jeviteca")
    .filter("foundedYearFilter", function() {

        return function( year ) {

            return "Founded in " + year;
        };

});