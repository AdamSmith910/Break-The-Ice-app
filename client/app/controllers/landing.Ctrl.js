angular.module('break') 
.controller('landingCtrl', function($scope,$location,moment){
    $scope.featured = [];
    $scope.title = "Break the ice";
    $scope.text = "landing controller for angular";
    $scope.categories = [];
    $scope.events = [
    {
        _id: "57484f8327b8d7460f0b3bb5",
        title : "X Games Austin",
        img : 'http://cdn.bmx.transworld.net/wp-content/blogs.dir/444/files/2016/02/2006-x-games12-dirt.jpg', 
        description : "A festival that highlights the intersection of sports and lifestyle that exists in action sports", 
        users_att : ['Sin','James','Adam'], 
        owners:['ryan'],
        creation_time: new Date("2016 05 28 21:00:00"),
        start_time: new Date("2016 06 02 13:00:00"),
        end_time: new Date("2016 06 03 18:00:00"),
        categories : ["Outdoors"]
    }
    ];

    $scope.events.forEach(function(event){
        event.timeFromNow = moment(event.start_time).fromNow();
        event.startInHour = parseInt(moment(event.start_time).diff(Date.now(),'hours')); //usful for events starting soon
        event.categories.forEach(function(category){
            if ($scope.categories.indexOf(category)===-1){
                $scope.categories.push(category);
            }
        });
    });
    $scope.orderedEvents = $scope.events.slice();
    $scope.orderedEvents = $scope.orderedEvents.sort(function(a,b){
        return a.startInHour - b.startInHour
    })
    $scope.featured = $scope.orderedEvents.slice(0,3);
    $scope.goToEvent = function(_id){
        console.log(_id);
        $location.path("/event/"+_id)
    }
})