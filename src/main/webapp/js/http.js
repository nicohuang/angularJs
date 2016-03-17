var app = angular.module('NewsPub', []);
app.controller('myCtrl2', function($scope, $http) {
    $http.post("test.json")
        .success
        (
            function (response)
            {
                $scope.names = response.records;
            }
        );
});
