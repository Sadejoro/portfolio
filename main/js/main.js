$(function() {
    /**
     * Smooth scrolling
     **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (location.hostname == this.hostname && this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
            if (anchor.length) {
                $("html, body").animate({
                    scrollTop: anchor.offset().top + 0
                }, 1500);
            }
        }
    });
    //$Change l'état de la barre de navigation au scroll
    function navScroll() {
        $(window).scroll(function() {
            scrollTop = $(window).scrollTop();
            if (scrollTop >= 30) {
                $('.header-nav').addClass('header-nav_scrolled');
            } else if (scrollTop < 30) {
                $('.header-nav').removeClass('header-nav_scrolled');
            }
        });
    }
    navScroll();


    $('.header-nav_responsive').click(function(event) {
        elementHamburger = $(this);

        $('.header-nav').toggleClass('header-nav_active');

        if (!$(e.target).is(elementHamburger)) {
            $('.header-nav').removeClass('header-nav_active')
        }

    });


});