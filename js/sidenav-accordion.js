     $('#sidebar-nav .collapse').on('show.bs.collapse', function (e) {
    var actives = $('#sidebar-nav').find('.in, .collapsing');
    actives.each( function (index, element) {
        $(element).collapse('hide');
    })
});
      $('#filters .collapse').on('show.bs.collapse', function (e) {
	var actives = $('#filters').find('.in, .collapsing');
	actives.each( function (index, element) {
	    $(element).collapse('hide');
	})
})