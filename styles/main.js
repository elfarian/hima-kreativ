$(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.fade').each(function() {
            
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            
            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    // $(this).html( 'fully visible' );
                    $(this).css( {
                        transition: 'opacity 0.3s linear',
                        opacity: 1
                    } );

                } else {
                    // $(this).html( 'fading in/out' );
                    $(this).css( {
                        transition: 'opacity 0.2s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                // $(this).html( 'not visible' );
                $(this).css( 'opacity', 0 );
            }
        });
    }
    $('.fade').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});


        $(".articles-slider").owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        // smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    $(".members-slider").owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        items: 4,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

    var gallery_slider = $('.gallery-slider');

    gallery_slider.owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        // smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

    gallery_slider.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            gallery_slider.trigger('next.owl');
        } else {
            gallery_slider.trigger('prev.owl');
        }
        e.preventDefault();
    });