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
        }, 
        restrict: 'E', 
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
                        <button class="btn btn-primary mt5 btn-book btn-book-1" type="button" onclick="$(this).find(\'i\').toggleClass(\'fa-plus fa-minus\');$(this).toggleClass(\'btn-primary btn-danger\')" ng-click="addAlert()"><i class="fa fa-plus"></i></button> \
                        <button class="btn btn-primary mt5 btn-book btn-book-2" type="button"><i class="fa fa-play"></i></button> \
                    </div>'
    };
});

maptModule.directive('skillCard', function () {
    return {
        scope: {
            cardTitle: '@cardTitle'
            , relatedTopic: '@relatedTopic'
            , description: '@description'
            , icon: '@icon'
            , added: '@added'
        }, 
        restrict: 'E',
        replace: true
        , controller: function ($scope) {
            
        }
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
                                    <a href="index.html" target="_blank" class="btn btn-default "><i class="fa fa-plus fa-lg"></i> \
                                    <span class="hidden-xs ml5">Add to Completed Skills</span></a> <a href="card.html" class="btn btn-info ">View Skill Card <i class="fa fa-chevron-right ml5" aria-hidden="true"></i></a> </div> \
                                <!-- Desktop Buttons END --> \
                                <!-- Mobile Buttons START --> \
                                <div class="clearfix"></div> \
                                <div class="btn-group btn-group-justified visible-xs mt15"> <a href="card.html" class="btn btn-default "><i class="fa fa-plus fa-lg"></i> \
                                           </a> <a href="card.html" class="btn btn-info"><i class="fa fa-chevron-right ml5" aria-hidden="true"></i></a> </div> \
                                <!-- Mobile Buttons END --> \
                            </div> \
                            <!-- content START --> \
                            <div ng-transclude> \
                            </div> \
                            <!-- content END --> \
                        </div> \
                    </div>'
    };
});