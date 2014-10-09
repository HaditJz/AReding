(function($) {
	$.fn.buttonsetv = function() {
		$(':radio, :checkbox', this).wrap('<div style="margin: 0"/>');
		$(this).buttonset();
		$('label:first', this).removeClass('ui-corner-left').addClass('ui-corner-top');
		$('label:last', this).removeClass('ui-corner-right').addClass('ui-corner-bottom');
		var mw = 0, w;
		$('label', this).each(function(index) {
			w = $(this).parent().width() - 2;
			if (w > mw)
				mw = w;
		});
		$('label', this).each(function(index){
			$(this).width(mw);
		});
	};
})(jQuery);