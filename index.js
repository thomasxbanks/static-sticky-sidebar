lastScrollTop = 0
fired = false
window.addEventListener("scroll", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop
    var AsideAtTop = $('.with-aside').offset().top - $(window).scrollTop()
    var KickPoint = ($('#colophon').offset().top - window.innerHeight) - $(window).scrollTop()
    var AsideWidth = $('aside').width()
    var AsideLeft = $('aside').offset().left

    if (st > lastScrollTop) {
        // if scroll down
        fired = false
        if ((AsideAtTop < 0) && (fired == false)) {
            // When you scroll past the hero, make the sidebar image sticky
            $('aside').attr('id', 'locked-aside')
                      .css({
                        'position': 'fixed',
                        'top': 0,
                        'right': 'auto',
                        'bottom': 'auto',
                        'left': AsideLeft,
                        'width': AsideWidth
                      })
            fired = true
        }
        // end if scroll down
    } else {
        // else scroll up
        fired = false
        if ((AsideAtTop > 0) && (fired == false)) {
            // When you get back to the top of the page, unstickify the sidebar image
            $('aside').css('position', 'static')
            $('aside').attr('id', '')
            fired = true
        }
        // end else scroll up
    }

    if (KickPoint < 0) {
        $('aside').css('top', KickPoint)
    } else {
        $('aside').css('top', 0)
    }

    lastScrollTop = st

}, false)


window.onresize = function(event) {
    $('#locked-aside').css('width', ~~($('.with-aside').outerWidth()))
        .css('left', $('.with-aside').outerWidth() + $('.with-aside').offset().left)


}
