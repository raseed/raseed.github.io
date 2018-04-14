
(function($) {

    "use strict";

    jQuery(document).ready(function() {

// Here start use typed js use library // 

        var element = $(".element");

        $(function() {
            element.typed({
                strings: ["I'm Software Developer.", "Learn Something New Everyday."],
                typeSpeed: 100,
                loop: true,
            });
        });

// Here use Slik Nave //

        var menu = $("#menu");

        menu.slicknav({
            label: '',
        });

    });

})(jQuery);