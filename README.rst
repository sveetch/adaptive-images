.. _jQuery: http://jquery.com/
.. _Response JS: http://responsejs.com

adaptive-images
===============

Yet another `jQuery`_ plugin to make adaptive images, this has been developed with `Response JS`_ in mind but in a very very very lightweight and simple version.

It changes image (and only image) sources from specific HTML5 attributes that determines other sources for the avalaible breakpoints.

The default source on the images is assumed to be the lowest quality for the lowest viewport, this is *Think mobile first*.

Usage
-----

In your HTML put something like : ::

    <img class="adaptive" src="http://placehold.it/280x280&amp;text=Default"
            data-src768="http://placehold.it/400x400&amp;text=768px"
            data-src1024="http://placehold.it/500x500&amp;text=1024px">

And then in your Javascript code : ::

    $(document).ready(function() {
        $("img.adaptive").adaptive_images();
    });

On loading, the default images are loaded, then the plugin change the source to the 
highest and closest breakpoint attribute if any.

Optionally you can also put this to reload the plugin when the windows is resized : ::

    $(window).resize(function() {
        $("img.adaptive").adaptive_images();
    });

Note
****

You should not combine many breakpoints and many adaptive images, else this should speed down the page loading. Usually you will use this plugin only for large figures or photos, if you can use the more specific selectors as you can.
