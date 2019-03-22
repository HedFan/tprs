$(document).ready(function () {
    $('.js_btn-accordion').on('click', function() {
            $(this).parent('h5').toggleClass('active');
    });

    $('.js_block-header-list').on('click', function() {
        $(this).find('ul').toggleClass('active');
    });

    $('.js_block-header-menu').on('click', function() {
        $(this).find('.js_header-menu-mobile').toggleClass('active');
    });

    $(function(){
        $('a[href^="#"]').on('click', function(event) {
            event.preventDefault();

            var sc = $(this).attr("href"),
                dn = $(sc).offset().top - 25;

            $('html, body').animate({scrollTop: dn}, 1000);
        });
    });


});

