var i = 0;
$('.test').waypoint(function(direction) {

	if(direction === 'down' && !$(this.element).hasClass('animated')) {

		i++;

		$(this.element).addClass('item-animate');
		setTimeout(function() {

			$('body .test.item-animate').each(function(k) {
				var el = $(this);
				setTimeout(function() {
					var effect = el.data('animate-effect');
					if(effect === 'fadeIn') {
						el.addClass('fadeIn animated');
					} else {
						el.addClass('fadeInUp animated');
					}

					el.removeClass('item-animate');
				}, k * 300, 'easeInOutExpo');
			});

		}, 100);

	}

}, {
	offset: '85%'
});