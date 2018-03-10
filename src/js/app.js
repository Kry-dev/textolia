const $ = require('jquery');
const slick = require('slick-carousel');
const bootstrap = require('bootstrap');

$(document).ready(function() {

    $('[data-toggle="collapse"]').collapse('hide');
    $('.carousel').carousel('pause');
});