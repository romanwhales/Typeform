//app.js
'use strict';

var formsApp = angular.module('formsApp',['ui.router','oc.lazyLoad']);

formsApp.config(['$ocLazyLoadProvider',function($ocLazyLoadProvider){
    $ocLazyLoadProvider.config({

    });
}]);

formsApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'views/home.html',
        controller:'HomeCtrl',
        resolve:{
            deps:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load({
                    name:'formsApp',
                    files:[
                        '../controllers/homeCtrl.js'
                    ]
                })
            }]
        }
    })
});

formsApp.value('api','http://localhost:3000');