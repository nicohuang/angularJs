var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.phones =
        [
            {
                "name":"good",
                "snippet":"中文"
            }
        ]
});
