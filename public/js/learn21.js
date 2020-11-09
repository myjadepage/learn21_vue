// ------------------------------------------------------- //
// Preloader
// ------------------------------------------------------ //
$(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
});

$(function () {
    $(".side-navbar li a").click(function () {
        $(".collapse").collapse('hide');
    });
});

// Close dropdown after click
$(function () {
    $(".sms-title a").click(function () {
        $(".collapse").collapse('hide');
    });
});


// Close dropdown after click
$(function () {
    $(".folding-switch a").click(function () {
        $(".collapse").collapse('hide');
    });
});

// ------------------------------------------------------- //
// Dynamic Height
// ------------------------------------------------------ //	
$(window).resize(function () {
    var height = $(this).height() - $(".header").height() + $(".main-footer").height();
    $('.d-scroll').height(height);
})

$(window).resize();

// ------------------------------------------------------- //
// Auto Height Scrollbar
// ------------------------------------------------------ //
$(window).resize(function () {
    $('.auto-scroll').height($(window).height() - 130);
});

$(window).trigger('resize');

// ------------------------------------------------------- //
// Back To Top
// ------------------------------------------------------ //
$(function () {
    // Show or hide the sticky footer button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            $('.go-top').fadeIn(100);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 800);
    })
});

// ------------------------------------------------------- //
// Custom Checkbox (check, heart, star)
// ------------------------------------------------------ //
$('.checkbox').click(function () {
    $(this).toggleClass('is-checked');
});

// ------------------------------------------------------- //
// Check / Uncheck all checkboxes
// ------------------------------------------------------ //
$("#check-all").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
});

// ------------------------------------------------------- //
// Card Close
// ------------------------------------------------------ //
$('a.remove').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.col-remove').fadeOut(500);
});

// ------------------------------------------------------- //
// Sidebar Scrollbar
// ------------------------------------------------------ //	
$(function () {
    $(".sidebar-scroll").niceScroll({
        cursorcolor: "transparent",
        cursorborder: "transparent",
        cursoropacitymax: 0,
        boxzoom: false,
        autohidemode: "hidden",
        cursorfixedheight: 80
    });
});

// ------------------------------------------------------- //
// Widget Scrollbar
// ------------------------------------------------------ //	
$(".widget-scroll").niceScroll({
    railpadding: {
        top: 0,
        right: 3,
        left: 0,
        bottom: 0
    },
    scrollspeed: 100,
    zindex: "auto",
    autohidemode: "leave",
    cursorwidth: "4px",
    cursorcolor: "rgba(52, 40, 104, 0.1)",
    cursorborder: "rgba(52, 40, 104, 0.1)"
});


// ------------------------------------------------------- //
// Table Scrollbar
// ------------------------------------------------------ //	
$(".table-scroll").niceScroll({
    railpadding: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    },
    scrollspeed: 100,
    zindex: "auto",
    autohidemode: "leave",
    cursorwidth: "4px",
    cursorcolor: "rgba(52, 40, 104, 0.1)",
    cursorborder: "rgba(52, 40, 104, 0.1)"
});


// ------------------------------------------------------- //
// Adding slide effect to dropdown
// ------------------------------------------------------ //
$('.dropdown').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
});


// ------------------------------------------------------- //
// Close Modal After Time Period
// ------------------------------------------------------ //
$(function () {
    $('#delay-modal').on('show.bs.modal', function () {
        var myModal = $(this);
        clearTimeout(myModal.data('hideInterval'));
        myModal.data('hideInterval', setTimeout(function () {
            myModal.modal('hide');
        }, 2500));
    });

});

// ------------------------------------------------------- //
// multi Modal
// ------------------------------------------------------ //

$(document).on('show.bs.modal', '.modal', function () {
    var zIndex = 1040 + (10 * $('.modal:visible').length);
    $(this).css('z-index', zIndex);
    setTimeout(function () {
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
    }, 0);
});

