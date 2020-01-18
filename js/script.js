
import Typed from './typed.js'

$(function() {
    
    new Typed('.header-title', {
        strings: ['Front End ? ', 'Back End ? ', 'Full Stack ? ' ,'I Can Do It !'],
        typeSpeed: 100,
        backDelay: 1000,
        loop: true,
        cursorChar: '|'
    })

    $('.arrow-link').click(e => {
        e.preventDefault()
        $('html, body').animate({scrollTop: 596}, 600)
    })

    $(document).scroll(function() {
        if ($(this).scrollTop() >= 114) {
            $('.navbar').removeClass('navbar-hider')
        } else {
            $('.navbar').addClass('navbar-hider')
        }
    })

    $('.counter').counterUp({
        delay: 20,
        time: 1200
    })

    $('.year').html(new Date().getFullYear())
})