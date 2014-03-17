/*global angular */
var Dealer = angular.module('dealer', [])
    .config(function ($routeProvider, $locationProvider) {
        "use strict";
        $locationProvider
            .html5Mode(true).hashPrefix('!');
        $routeProvider
            .when('/dealer', {
                templateUrl: '/dealer/template/home.html'
            })
            .when('/dealer/keycounts', {
                templateUrl: '/dealer/template/keycounts.html',
                controller: 'KeyCountController'
            })
            .when('/dealer/palindrome', {
                templateUrl: '/dealer/template/palindrome.html',
                controller: 'PalindromeController'
            });
    });

Dealer.controller('NavController', function($scope, $location){
    "use strict";

    $scope.activeClass = function(path){
        var path = '/dealer' + path;
        if($location.path() === path){
            return 'active';
        } else {
            return '';
        }
    };
});

Dealer.controller('KeyCountController', function($scope){
    "use strict";

    var defaultText = "John,2\nJane,3\nJohn,4\nJane,5";
    $scope.textArea = defaultText;
    $scope.resultText = "";

    $scope.calculate = function(){
        var hash = {};

        var lines = $scope.textArea.split("\n");

        lines.forEach(function(line){
            var pair = line.split(',');
            var key = pair[0];
            var value = pair[1];

            if(hash[key] === undefined){
                hash[key] = parseInt(value);
            } else {
                hash[key] = hash[key] + parseInt(value);
            }
        });

        $scope.resultText = "";
        for(var key in hash){
            $scope.resultText += "The total for " + key + " is " + hash[key] + ".  ";
        }
        $scope.showResult = true;

    };

    $scope.resetText = function(){
        $scope.textArea = defaultText;
        $scope.showResult = false;
    };
});

Dealer.controller('PalindromeController', function($scope){
    "use strict";

    $scope.isPalindrome = function(){
        var fullArr = $scope.textInput.split("");
        var alphaNumArr = fullArr.slice(0);
        var index = 0;
        var isPal = true;

        //removing all non alphanumerics from charArr
        fullArr.forEach(function(letter){
            var result = letter.match(/[A-Za-z1-9]/);
            if(result === null){
                alphaNumArr.splice(index, 1);
                index--;
            }
            index++;
        });

        var middle = Math.floor(alphaNumArr.length / 2) - 1;
        var end = alphaNumArr.length - 1;

        for(var i = 0; i < middle; i++){
            if(alphaNumArr[i].toLowerCase() !== alphaNumArr[end].toLowerCase()){
                isPal = false;
                break;
            }
            end--;
        }

        if(isPal){
            $scope.resultText = "Its a palindrome!";
        } else {
            $scope.resultText = "This is no palindrome!";
        }

        $scope.showResult = true;
    };
});
