var maptModule = angular.module('mapt', []);
maptAlert = function (message, type) {
    if (type === undefined) type = 'warning';
    var id = 'abc' + parseInt(Math.random() * 100000);
    var alertbox = $('#alertbox');
    if (alertbox.length == 0) {
        $('#wrapper').append('<div id="alertbox"></div>');
    }
    $('#alertbox').append('<div id="' + id + '" class="alert alert-' + type + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><span>' + message + '</span></div>');
    setTimeout(function () {
        $('#' + id).fadeOut(500, function () {
            $(this).css({
                "visibility": "hidden"
                , display: 'block'
            }).slideUp(500, function () {
                $(this).remove();
            });
        })
    }, 5000);
};
maptModule.directive('maptBook', function () {
    return {
        scope: {
            bookTitle: '@bookTitle'
            , coverImage: '@coverImage'
            , progress: '@progress'
        }, // inherits child scope from parent.
        restrict: 'E', // An Element Directive.
        replace: true
        , controller: function ($scope) {
            $scope.addAlert = function () {
                if ($scope.added == undefined) {
                    $scope.added = false;
                }
                if ($scope.added == true) {
                    maptAlert($scope.bookTitle + ' has been removed from your <a href="dashboard.html#future">queue</a>', 'danger');
                    $scope.added = false;
                }
                else {
                    maptAlert($scope.bookTitle + ' has been added to your <a href="dashboard.html#future">queue</a>');
                    $scope.added = true;
                }
                
            }
        }
        , template: '\
                    <div class="col-xs-6 col-sm-3 col-lg-2 text-center book"> \
                        <a href="index.html"><img class="img-responsive title-shadow" src="{{coverImage}}" title="{{bookTitle}}"></a> \
                        <div ng-show="progress" class="progress mt10 mb15"> \
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" style="width: {{progress}};"> <span class="sr-only">30% Complete</span> </div> \
                        </div> \
                        <button class="btn btn-primary mt5 btn-book btn-book-1" type="button"><i class="fa fa-plus" onclick="$(this).toggleClass(\'fa-plus fa-minus\');$(this).parent().toggleClass(\'btn-primary btn-danger\')" ng-click="addAlert()"></i></button> \
                        <button class="btn btn-primary mt5 btn-book btn-book-2" type="button"><i class="fa fa-play"></i></button> \
                    </div>'
    };
});