(function($) {

    //custom scroll replacement to allow for interval-based 'polling'
    //rathar than checking on every pixel
    var uniqueCntr = 0;
    $.fn.scrolled = function(waitTime, fn) {
        if (typeof waitTime === 'function') {
            fn = waitTime;
            waitTime = 200;
        }
        var tag = 'scrollTimer' + uniqueCntr++;
        this.scroll(function() {
            var self = $(this);
            var timer = self.data(tag);
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                self.removeData(tag);
                fn.call(self[0]);
            }, waitTime);
            self.data(tag, timer);
        });
    };

    $.fn.AniView = function(options) {

        //some default settings. animateThreshold controls the trigger point
        //for animation and is subtracted from the bottom of the viewport.
        var settings = $.extend({
            animateThreshold: 0,
            scrollPollInterval: 20
        }, options);

        //keep the matched elements in a variable for easy reference
        var collection = this;

        //cycle through each matched element and wrap it in a block/div
        //and then proceed to fade out the inner contents of each matched element
        $(collection).each(function(index, element) {
            $(element).wrap('<div class="av-container"></div>');
            $(element).css('opacity', 0);
        });

        /**
         * returns boolean representing whether element's top is coming into bottom of viewport
         *
         * @param HTMLDOMElement element the current element to check
         */
        function EnteringViewport(element) {
            var elementOffset = $(element).offset();
            var elementTop = elementOffset.top + $(element).scrollTop();
            var viewportBottom = $(window).scrollTop() + $(window).height();
            return (elementTop < (viewportBottom - settings.animateThreshold)) ? true : false;
        }

        /**
         * cycle through each element in the collection to make sure that any
         * elements which should be animated into view, are...
         *
         * @param collection of elements to check
         */
        function RenderElementsCurrentlyInViewport(collection) {
            $(collection).each(function(index, element) {
                var elementParentContainer = $(element).parent('.av-container');
                var elementChildren = $(element).children('[data-av-animation]');
                if ( ( $(element).is('[data-av-animation]') || elementChildren.length ) && !$(elementParentContainer).hasClass('av-visible') && EnteringViewport(elementParentContainer)) {
                    $(element).css('opacity', 1);
                    $(elementParentContainer).addClass('av-visible');
                    if ($(element).is('[data-av-animation]'))
                        $(element).addClass('animated ' + $(element).attr('data-av-animation'));
                    $(elementChildren).each( function(index, childEl){
                        $(childEl).addClass('animated ' + $(childEl).attr('data-av-animation'));
                    });
                }
            });
        }

        //on page load, render any elements that are currently in view
        RenderElementsCurrentlyInViewport(collection);

        //enable the scrolled event timer to watch for elements coming into the viewport
        //from the bottom. default polling time is 20 ms. This can be changed using
        //'scrollPollInterval' from the user visible options
        $(window).scrolled(settings.scrollPollInterval, function() {
            RenderElementsCurrentlyInViewport(collection);
        });
    };
})(jQuery);
