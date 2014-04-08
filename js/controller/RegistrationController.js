PigE.controller('registrationController', function($scope, $location, APIService){
    "use strict";

    $scope.errorMsg = "";
    $scope.showError = false;
    $scope.getActive = false;
    $scope.makeActive = false;
    $scope.winActive = false;

    var accountType = null;
    var accountId = null;

    if(localStorage.getItem("accountId") !== null){
        accountId = localStorage.getItem("accountId");
    }

    if(accountId === null && $location.path() !== '/register'){
        $location.path('/register');
    }

    $scope.submitAccount = function(){
        if(accountType === null){
            formError("Please select account type");
            return;
        }

        var data = {
            'accountId': accountId,
            'accountType': accountType
        };

        console.log(data);
//        APIService.setAccountType(data).then(function(data){
//            $location.path('/register/accountinfo');
//        });
        if(accountType === 'get' || accountType === 'win'){
            $location.path('/register/account');
        } else if (accountType === 'make'){
            $location.path('/register/organization');
        }
    };

    $scope.selectType = function(type){
        setAccountType(type);
    };

    $scope.registerAccount = function(){
        if($scope.firstName === undefined || $scope.lastName === undefined || $scope.email=== undefined
            || $scope.phone === undefined || $scope. password === undefined){
            formError("Please complete the form before proceeding");
        } else if ($scope.passwordVerify !== $scope.password){
            formError("Passwords do not match");
        }

        var data = {
            'firstName': $scope.firstName,
            'lastName': $scope.lastName,
            'email': $scope.email,
            'phone': $scope.phone,
            'password': $scope.password
        };

        APIService.registerUser(data).then(function(data){
            $location.path('/register/setup');
            accountId = data.accountId;
            localStorage.setItem("accountId", data.accountId);
        });
    };

    function formError(msg){
        $scope.errorMsg = msg;
        $scope.showError = true;
    }

    function setAccountType(type){
        if(type === 'get'){
            $scope.getActive = true;
            $scope.makeActive = false;
            $scope.winActive = false;
        } else if (type === 'make'){
            $scope.getActive = false;
            $scope.makeActive = true;
            $scope.winActive = false;
        } else if (type === 'win'){
            $scope.getActive = false;
            $scope.makeActive = false;
            $scope.winActive = true;
        }
        accountType = type;
    }
});