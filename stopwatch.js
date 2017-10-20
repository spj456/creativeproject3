var app = angular.module("myApp", []);
app.controller("myController", function ($scope, $timeout, $interval) {

    $scope.timerWithTimeout = 0;
    $scope.startTimerWithTimeout = function () {
        $scope.timerWithTimeout = 0;
        if ($scope.myTimeout) {
            $timeout.cancel($scope.myTimeout);
        }
        $scope.onTimeout = function () {
            $scope.timerWithTimeout++;
            $scope.myTimeout = $timeout($scope.onTimeout, 1000);
        }
        $scope.myTimeout = $timeout($scope.onTimeout, 1000);
    };

    $scope.resetTimerWithTimeout = function () {
        $scope.timerWithTimeout = 0;
        $timeout.cancel($scope.myTimeout);
    }
})
app.filter('hhmmssmm', function () {
    return function (time) {
        var sec_num = parseInt(time, 10);
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var milliseconds = sec_num - (hours * 3600) - (minutes * 60) - (seconds * 60);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        if (milliseconds < 10) { milliseconds = "0" + milliseconds; }
        var time = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
        return time;
    }
});