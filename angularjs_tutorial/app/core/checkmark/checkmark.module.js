angular.
    module('core').
    filter('checkmark',function () {
       return function(input){
           // return input?'O':'X';
           return input ? '\u2713' : '\u2718';
       }
    });