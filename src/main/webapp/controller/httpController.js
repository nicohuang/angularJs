var app = angular.module('UserApp', []);
app.controller('myUser', function ($scope, $http)
{
    $http.post("/user/hello2")
        .success
        (
            function (response)
            {
                $scope.users = response;
            }
        )
        .error(function (response)
        {
            $scope.abc = '123';
        });
});

app.controller('getUser', function ($scope, $http)
{
    $scope.getUser = function ()
    {
        $http(
            {
                method: 'POST',
                url: '/user/hello1',
                dataType:'json',
                data: {
                    'userName': $scope.userName,
                    'age': 25
                }
            }
        )
            .success
            (
                function (data,status,headers,cfg)
                {
                    $scope.user1 = data;
                    $scope.status = status;
                }
            )
            .error(function (data,status,headers,cfg)
            {
                $scope.abc = '123';
            });
    }
});