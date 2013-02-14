;(function($) {
/*
* adaptive-images.js
* Author & copyright (c) 2013: David THENON
* MIT license
*
* Repository: https://github.com/sveetch/adaptive-images
*/
$.fn.adaptive_images = function(options) {
    var $containers = this,
        viewport_width = (window.innerWidth || document.documentElement.clientWidth),
        settings = $.extend( {
            //'breakpoints': [320, 480, 768, 1024, 1280, 1440],
            'breakpoints': [768, 1024, 1440],
            "attribute_prefix": "src" // will search to data-srcXXXX
        }, options),
        break_attributes = [];
    
    // Avalaible breakpoints are all less or equal to the current viewport
    for (var i = 0; i < settings.breakpoints.length; i++) {
        if(settings.breakpoints[i] <= viewport_width){
            break_attributes.push("data-"+settings.attribute_prefix+settings.breakpoints[i]);
        }
    }
    // Reverse to have the highest breakpoint at the first element and the lowest at the end
    break_attributes.reverse();
    
    return $containers.each(function() {
        // Memorize the default source
        if(!$(this).data("data-src-original")) { $(this).data("data-src-original", $(this).attr("src")); }
        // Check breakpoints to finded the closest to the current viewport
        for (var i = 0; i < break_attributes.length; i++) {
            if($(this).attr(break_attributes[i])) {
                $(this).attr("src", $(this).attr(break_attributes[i]));
                return $(this); //this should preserver chaining
            }
        }
        // No breakpoint match, restore the default source (needed in case of window resizing)
        $(this).attr("src", $(this).data("data-src-original"));
    });
};

}(jQuery));