$(function() {
    /**
     * Smooth scrolling
     **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname &&
            this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
            if (anchor.length) {
                $("html, body").animate({ scrollTop: anchor.offset().top + 0 }, 1500);
            }
        }
    });




    function navScroll() {

        
        $(window).scroll(function() {
            scrollTop = $(window).scrollTop();


            if (scrollTop >= 30) {
                $('.header-nav').addClass('header-nav_scrolled');
            } else if (scrollTop < 30) {
                $('.header-nav').removeClass('header-nav_scrolled');
            }


            // Reset beforeScroll to afterScroll position


        });
    }
    navScroll();


    var text = $(".text");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            text.removeClass("hidden");
        } else {
            text.addClass("hidden");
        }
    });

});