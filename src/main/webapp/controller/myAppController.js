var phonecatControllers = angular.module('httpEngineControllers', []);

//以注入的方式来调用，服务名称可以改变
phonecatControllers.controller('TestCtrl', ['$scope', "httpEngine",
    function ($scope, httpEngine)
    {     //自定义,服务名称

        $scope.doUser = function ()
        {
            //请求地址
            var url = '/user/hello1';

            //请求体
            var data = {
                'userName': $scope.userName,
                'age': 25
            };

            //调用请求
            $scope.servicetest = httpEngine.postUrl(url, data);

            //请求结果
            $scope.servicetest
                .success
                (
                    function (data, status, headers, cfg)
                    {
                        $scope.user1 = data;
                        $scope.status = status;
                    }
                )
                .error(function (data, status, headers, cfg)
                {
                    $scope.abc1 = data;
                    $scope.abc2 = status;
                    $scope.abc3 = headers;
                    $scope.abc4 = cfg;
                });
        }
    }
]);