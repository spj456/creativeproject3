var app = angular.module("myApp", []);
app.controller("myController", function ($scope, $timeout, $interval) {

    $scope.timer = 0;
    $scope.startTimer = function () {
        $scope.timer = 0;
        if ($scope.myTimeout) {
            $timeout.cancel($scope.myTimeout);
        }
        $scope.onTimeout = function () {
            $scope.timer++;
            $scope.myTimeout = $timeout($scope.onTimeout, 1000);
        }
        $scope.myTimeout = $timeout($scope.onTimeout, 1000);
    };

    $scope.resetTimer = function () {
        $scope.timer = 0;
        $timeout.cancel($scope.myTimeout);
    }
})
app.filter('hhmmssmm', function () {
    return function (duration) {
        // var sec_num = parseInt(time, 10);
        // var hours = Math.floor(sec_num / 3600);
        // var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        // var seconds = sec_num - (hours * 3600) - (minutes * 60);
        // var milliseconds = sec_num;

        var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        // if (milliseconds < 10) {
        //     milliseconds = "0" + milliseconds;
        // }
        var time = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
        return time;
    }
});