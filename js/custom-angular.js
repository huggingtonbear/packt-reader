//
// General code
//
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
//
// Angular code
//
var maptModule = angular.module('mapt', []);
maptModule.directive('maptBook', function () {
    return {
        scope: {
            bookTitle: '@bookTitle'
            , coverImage: '@coverImage'
            , progress: '@progress'
        }
        , restrict: 'E'
        , replace: true
        , controller: function ($scope) {
            $scope.addAlert = function () {
                if ($scope.added == undefined) {
                    $scope.added = false;
                }
                if ($scope.added == true) {
                    maptAlert($scope.bookTitle + ' has been removed from your <a href="dashboard.html#tab_future">queue</a>', 'danger');
                    $scope.added = false;
                }
                else {
                    maptAlert($scope.bookTitle + ' has been added to your <a href="dashboard.html#tab_future">queue</a>');
                    $scope.added = true;
                }
            }
        }
        , template: '\
                <div class="book-wrapper col-xs-6 col-sm-3 col-lg-2 "> \
                    <div class="text-center book"> \
                        <a href="index.html"><img class="img-responsive title-shadow" src="{{coverImage}}" title="{{bookTitle}}"></a> \
                        <div ng-show="progress" class="progress mt10 mb15"> \
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" style="width: {{progress}};"> <span class="sr-only">30% Complete</span> </div> \
                        </div> \
                        <button class="btn btn-primary mt5 btn-book btn-book-1" type="button" onclick="$(this).find(\'i\').toggleClass(\'fa-plus fa-minus\');$(this).toggleClass(\'btn-primary btn-danger\')" ng-click="addAlert()"><i class="fa fa-plus"></i></button> \
                        <button class="btn btn-primary mt5 btn-book btn-book-2" type="button"><i class="fa fa-play"></i></button> \
                    </div> \
                </div>'
    };
});
maptModule.directive('maptBookListItem', function () {
    return {
        scope: {
            bookTitle: '@bookTitle'
            , coverImage: '@coverImage'
            , releaseDate: '@releaseDate'
            , duration: '@duration'
            , productDescription: '@productDescription'
            , authors: '@authors'
            , progress: '@progress'
        }
        , restrict: 'E'
        , replace: true
        , controller: function ($scope) {
            $scope.addAlert = function () {
                if ($scope.added == undefined) {
                    $scope.added = false;
                }
                if ($scope.added == true) {
                    maptAlert($scope.bookTitle + ' has been removed from your <a href="dashboard.html#tab_future">queue</a>', 'danger');
                    $scope.added = false;
                }
                else {
                    maptAlert($scope.bookTitle + ' has been added to your <a href="dashboard.html#tab_future">queue</a>');
                    $scope.added = true;
                }
            }
        }
        , template: '\
                    <li class="list-group-item list-name">\
                        \
                    <div class="book-wrapper col-xs-6 col-sm-3 col-lg-2"> \
                        <div class="text-center book">\
                            <a href="index.html"><img class="img-responsive title-shadow" src="{{coverImage}}" title="{{bookTitle}}"></a> \
                            <div ng-show="progress" class="progress mt10 mb15"> \
                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" style="width: {{progress}};"> <span class="sr-only">30% Complete</span> </div> \
                            </div> \
                            <button class="btn btn-primary mt5 btn-book btn-book-1" type="button" onclick="$(this).find(\'i\').toggleClass(\'fa-plus fa-minus\');$(this).toggleClass(\'btn-primary btn-danger\')" ng-click="addAlert()"><i class="fa fa-plus"></i></button> \
                            <button class="btn btn-primary mt5 btn-book btn-book-2" type="button"><i class="fa fa-play"></i></button> \
                        </div> \
                    </div>\
                        <div class="col-xs-12 col-sm-9 col-lg-10">\
                          <h1><a href="index.html">{{bookTitle}}</a></h1>\
                          <p class="mb0">By {{authors}}</p>\
                          <small class="title-duration mr10">{{releaseDate}}</small>\
                          <small class="title-duration hidden-xs"><i class="fa fa-clock-o mr5"></i>{{duration}}</small>\
                          <p class="product-desc hidden-xs"><small>{{productDescription}}</small></p>\
                        </div>\
                    </li>'
    };
});
maptModule.directive('maptSkillCard', function () {
    return {
        scope: {
            cardTitle: '@cardTitle'
            , relatedTopic: '@relatedTopic'
            , description: '@description'
            , icon: '@icon'
            , added: '@added'
        }
        , restrict: 'E'
        , replace: true
        , controller: function ($scope) {}
        , transclude: true
        , template: '\
                    <div class="panel panel-card"> \
                        <div class="panel-icon"><i class="{{icon}}"></i></div> \
                        <div class="panel-body"> \
                            <div class="col-lg-6 mb15"> \
                                <h5>{{cardTitle}}  \
                                      </h5> <small class="title-duration mr10">Related Topic: <a href="#">{{relatedTopic}}</a></small> \
                                <p class="mt10"><small>{{description}}</small></p> \
                                <!-- Desktop Buttons START --> \
                                <div class="btn-group mt5 hidden-xs"> \
                                    <a href="index.html" target="_blank" class="btn btn-default "><i class="fa fa-check fa-lg"></i> \
                                    <span class="hidden-xs ml5">Mark as Complete</span></a> <a href="card.html" class="btn btn-info "><i class="fa fa-info-circle mr5" aria-hidden="true"></i> More info </a> </div> \
                                <!-- Desktop Buttons END --> \
                                <!-- Mobile Buttons START --> \
                                <div class="clearfix"></div> \
                                <div class="btn-group btn-group-justified visible-xs mt15"> <a href="card.html" class="btn btn-default "><i class="fa fa-check fa-lg"></i> \
                                           </a> <a href="card.html" class="btn btn-info"><i class="fa fa-chevron-right ml5" aria-hidden="true"></i></a> </div> \
                                <!-- Mobile Buttons END --> \
                            </div> \
                            <!-- content START --> \
                            <div ng-transclude> \
                            </div> \
                            <!-- content END --> \
                        </div> \
                    </div>'
        , link: function (scope, element, attributes) {
            var transcluded = $(element).find('[ng-transclude] > div').length;
            var insertCols = (3 - transcluded) * 2;
            var added = $(element).find('[ng-transclude]').prepend('<div class="col-lg-' + insertCols + '"></div>');
        }
    };
});