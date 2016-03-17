var phonecatServices = angular.module('httpEngineServices', []);
//定义http请求格式
phonecatServices.service('httpEngine', ['$http',
    function ($http)
    {
        this.postUrl = function (url, data)
        {
            return $http(
                {
                    method: 'POST',
                    url: url,
                    dataType: 'json',
                    data: data
                }
            )
        };
    }
]);