$(document).ready(function () {
    $('.js_reg-btn').on('click', function () {
        $('.js-modal-reg-block').slideDown();
    });
    $('.js_header-show-menu span').on('click', function () {
        $('.js_header-menu-mobile').toggleClass('show');
    });

    $('.js_header-menu-nav a').on('mouseenter', function () {
        $(this).parent().addClass('selected');
    });
    $('.js_header-menu-nav a').on('mouseleave', function () {
        $(this).parent().removeClass('selected');
    });



    function focusFunc() {
        let con = 0;
        $('.js_head-search-show').on('mouseenter', function () {
            $(this).find('.js_head-search-block').addClass('show')
        });
        $('.js_head-search-block input').on('focusin', function (e) {
            if ($(this).is(e.target)) {
                $(this).parent('.js_head-search-block').addClass('show');
                con = 1;
            }
        });
        $('.js_head-search-block input').on('focusout', function (e) {
            if ($(this).is(e.target)) {
                $(this).parent('.js_head-search-block').removeClass('show');
                con = 0;
            }
        });


        $('.js_head-search-show').on('mouseleave', function () {
            if (con === 0) {
                $(this).find('.js_head-search-block').removeClass('show');
                con = 0;
            } else {
                $(this).find('.js_head-search-block').addClass('show');
            }
        });
    }
    $(window).on('resize', function(){
        if ($(window).width() < 768) {
            focusFunc()
        }
    });
    if ($(window).width() < 768) {
        focusFunc()
    }

});

