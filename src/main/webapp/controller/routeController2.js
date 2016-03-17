var app = angular.module('NewsPub',['ngRoute']);

function routeConfig($routeProvider)
{
    $routeProvider
        .when('/',
            {
                controller:'ListController',
                templateUrl:'list.html'
            })
        .when('/list',
            {
                controller:'ListController',
                templateUrl:'list.html'
            })
        .when('/add',
            {
                controller:'myCtrl2',
                templateUrl:'/test1.html'
            })
        .when('/edit/:id',
            {
                controller:'EditController',
                templateUrl:'edit.html'
            })
        .otherwise({redirectTo:'/'});
};

app.config(routeConfig);

var newsList = [{
    id: 1,
    title: 'title 1111',
    content: 'content 1111111'
}, {
    id: 2,
    title: 'title 2222',
    content: 'content 2222222'
}];

app.controller('ListController',function($scope)
{
    $scope.newsList = newsList;
});

//app.controller('AddController', function ($scope,$location)
//{
//    $scope.title = '';
//    $scope.content = '';
//    $scope.add = function()
//    {
//        newsList.push(
//            {
//                id:newsList.length+1,
//                title:$scope.title,
//                content:$scope.content
//            }
//        );
//        $location.path('list');
//    }
//
//});
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
app.controller("EditController",function($scope,$routeParams,$location)
{
    $scope.news = newsList[$routeParams.id - 1];
    $scope.update = function ()
    {
        newsList[$routeParams.id - 1] = $scope.news;

        $location.path('list');
    }
});
