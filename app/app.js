/**
 * Created by root on 11/9/15.
 */

var app = angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngMessages',
    'ui.router'
]);

app.config(function($stateProvider){
    $stateProvider
        .state("facilities", {
            url : "/facilities?type",
            params : {
                type : null
            },
            templateUrl : "./templates/facilities.html",
            controller  : "FacilitiesController",
            controllerAs: "FC"
        })
})