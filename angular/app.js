// app.js
angular.module('validationApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/angular/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: '/angular/register.html',
                controller: 'RegisterController'
            })
            .otherwise({ 
                redirectTo: '/' });
    }])
    .controller('LoginController', ['$scope', function ($scope) {
        $scope.showPassword = false;
        $scope.user = {
            username: '',
            password: '',
            role: ''
        };

        $scope.validate = function () {
            if (!$scope.user.username || !$scope.user.password) {
                alert('Both username and password are required.');
            } else {
                alert('Form submitted successfully.');
            }
        };
    }])
    .controller('RegisterController', ['$scope', function ($scope) {
        $scope.user = {
            username: '',
            password: '',
            confirmPassword: ''
        };

        $scope.register = function () {
            if (!$scope.user.username || !$scope.user.password || !$scope.user.confirmPassword) {
                alert('All fields are required.');
            } else if ($scope.user.password !== $scope.user.confirmPassword) {
                alert('Passwords do not match.');
            } else {
                alert('Registration successful!');
            }
        };
    }]);
