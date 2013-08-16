/*global jQuery */
/*!
 * DailyImage.js 0.1
 *
 * Copyright 2012, AJ Webb http://ajwebb.me
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 * @link https://github.com/webbushka/dailyImage
 *
 */

(function ($) {

	// -- Returns the image html
	function getImageHtml(settings) {
		var d = new Date(),
			date = d.getDay();

		return $('<img />', {
			'class': settings.imgClass,
			src: settings.imgPath + '/' + settings.nameArray[date] + '.' + settings.imgType,
			alt: settings.alt
		});
	}

	$.fn.dailyImage = function (options) {

		// -- Setup options
		var settings = $.extend({
			alt: 'Today\'s image',
			imgClass: 'daily-image',
			imgPath: 'img',
			imgType: 'png',
			nameArray: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
		}, options);

		return this.each(function () {
			// -- Store the object
			var $this = $(this);

			// -- Replacer replaces the placeholder with the desired image
			var replacer = function () {
				$this.before(getImageHtml(settings));
				$this.remove();
			};

			// -- Call replacer
			replacer();
		});
	};
})(jQuery);
