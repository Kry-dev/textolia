const $ = require('jquery');
const slick = require('slick-carousel');
const bootstrap = require('bootstrap');

$(document).ready(function() {

    $('[data-toggle="collapse"]').collapse('hide');
    $("#newscarousel").slick({
        slidesToShow: 3,
        // the magic
        responsive: [{

            breakpoint: 1170,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }
        }, {
            breakpoint: 768,
            settings: {
                centerMode: false,
                slidesToShow: 2
            }
        }, {

            breakpoint: 500,
            settings: {
                rows: 1,
                centerMode: false,
                slidesToShow: 1
            }
        }]
    });
    $("#video-carousel .video-carousel-list").slick({
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
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

});