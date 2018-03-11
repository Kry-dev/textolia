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
});