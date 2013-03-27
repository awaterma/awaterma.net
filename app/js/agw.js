/**
 * Copyright 2013, Andrew Glenn Waterman
 */

jQuery(document).ready(function () {
        "use strict";
        var url = jQuery(document.location).attr('href');
        var hash = url.substring(url.indexOf("#"));

        function hideAll() {
            /* Hide all divs */
            jQuery('#about').hide();
            jQuery('#opensource').hide();
            jQuery('#stream').hide();
            jQuery('#writing').hide();

            jQuery('#nav').children().each(function () {
               jQuery(this).removeClass('active');
            });
        }

        hideAll();

        /* Bind controls */
        jQuery('#back').click(function(){
            hideAll();
            jQuery('#about').fadeIn('medium');
            jQuery('#back').parent().addClass('active');
            jQuery('.breadcrumb').children().last().text("background");
        });

        jQuery('#open').click(function() {
            hideAll();
            jQuery('#opensource').fadeIn('medium');
            jQuery('#open').parent().addClass('active');
            jQuery('.breadcrumb').children().last().text("open source");
        });

        jQuery('#str').click(function() {
            hideAll();
            jQuery('#stream').fadeIn('medium');
            jQuery('#str').parent().addClass('active');
            jQuery('.breadcrumb').children().last().text("stream");
            jQuery('.carousel').carousel({ interval: 3500});
        });

        jQuery('#write').click(function() {
            hideAll();
            jQuery('#writing').fadeIn('medium');
            jQuery('#write').parent().addClass('active');
            jQuery('.breadcrumb').children().last().text("writing");
        });

        jQuery(hash).click();


});



