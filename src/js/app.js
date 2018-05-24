const $ = require('jquery');
const slick = require('slick-carousel');
const bootstrap = require('bootstrap');
const magnificPopup = require('magnific-popup');
const datetimepicker = require('bootstrap4-datetimepicker');
$(document).ready(function() {
    $('[data-toggle="collapse"]').collapse('hide');
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $("#newscarousel").slick({
        slidesToShow: 3,
        // nextArrow: '<i class="fa fa-arrow-right"></i>',
        // prevArrow: '<i class="fa fa-arrow-left"></i>',
        // the magic
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                infinite: true
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                dots: true,
                slidesToShow: 1
            }
        }]
    });
    $("#video-carousel .vid-carousel-list").slick({
        slidesToShow: 3,
        responsive: [{

            breakpoint: 9999,
            settings: 'unslick'

        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    var bestTabsSlider = function () {
        $("#bests-tabs").slick({
            slidesToShow: 3,
            responsive: [{
                breakpoint: 9999,
                settings: 'unslick'
            },{
                breakpoint: 768,
                settings: {
                    row: 1,
                    slidesToShow: 1
                }
            }]
        });
    };
    bestTabsSlider();
    var bestsTabChange = function () {
        $('#bests-tabs a').on('click', function (e) {
            e.preventDefault();
            $(this).tab('show');
        })
    };
    if($(window).width() > 767 ){
         bestsTabChange();
    }
    if($(window).width()<767 ){
        $('#bests-tabs .slick-arrow').on('click', function () {
            $('#bests-tabs .slick-slide').children().children().removeClass('active show');
            $('#bests-tabs .slick-active').children().children().tab('show');
        });
    }
    $('#filterTab li a').on('click', function () {
        $(this).tab('show');
    });
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false
    });
    $('#datetimepicker8').datetimepicker({
        inline: true,
        sideBySide: false,
        icons: {
            previous: 'fa fa-angle-left',
            next: 'fa fa-angle-right'
        }
    });
    $('#datetimepicker1').datetimepicker({
        inline: true,
        sideBySide: false,
        icons: {
            previous: 'fa fa-angle-left',
            next: 'fa fa-angle-right'
        }
    });
});