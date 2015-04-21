var ll = $('.home-body');
var lh = []
var wscroll = 0;
var wh = $(window).height();

function update_offsets(){
  $('.home-body').each(function(){
    var x = $(this).offset().top;
    lh.push(x);
  });
};

function lazy() {
  wscroll = $(window).scrollTop();
  for(i = 0; i < lh.length; i++){
    if(lh[i] <= wscroll + (wh - 200)){
      $('.home-body').eq(i).addClass('loaded');
    };
  };
};

// Page Load
update_offsets();
lazy();

$(window).on('scroll',function(){
  lazy();
});