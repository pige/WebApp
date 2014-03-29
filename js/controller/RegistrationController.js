PigE.controller('registrationController', function($scope, $location, APIService){
    "use strict";

    $scope.registerAccount = function(){
        if($scope.firstName === undefined){

        } else if ($scope.lastName === undefined){

        } else if ($scope.email === undefined){

        } else if ($scope.phone === undefined){

        } else if ($scope.password === undefined){

        } else if ($scope.passwordVerify === undefined){

        }

        APIService.registerUser({
            'firstName': $scope.firstName,
            'lastName': $scope.lastName,
            'email': $scope.email,
            'phone': $scope.phone,
            'password': $scope.password
        });
    }
});