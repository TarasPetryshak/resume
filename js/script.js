$(document).ready(function() {
    $('.certificates').owlCarousel({
        rtl: false,
        nav: false,
        dots: true,
        loop: true,
        items: 1,
        margin: 10,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 4000,
    })
});

let scrollButton = $('#scroll-button');
let links = $('.about__block_link');
let setPosition = () => {
    $('html,body').animate({
        scrollTop: $('#contacts-block').offset().top - $('#contacts-block').height()
    }, 300)
}
let animationContact = () => {
    let count = 0;
    let timer = setInterval(() => {
        if (count != 0) {
            $(links[count - 1]).toggleClass('animation-contact');
        }
        $(links[count]).toggleClass('animation-contact');
        count++;
        if (count > links.length) {
            console.log(count);
            clearInterval(timer);
            $(links[count - 1]).toggleClass('animation-contact');

        }
    }, 700);
}

$('#contacts').click(() => {
    setPosition();
    animationContact();
})
$(document).ready(scrollButton.fadeOut(10));
let visibleScrollButton = () => {
    if ($(window).scrollTop() >= 150) {
        scrollButton.fadeIn(100);
    } else {
        scrollButton.fadeOut(100);
    }
}
$(window).scroll(visibleScrollButton);
scrollButton.click(() => {
    $('html').animate({
        scrollTop: 0
    }, 300)
})

$(window).on('load', function() {
    $('#loader').fadeOut(800);
    $('#preloader').delay(800).fadeOut(500);
});
$('#print').click(() => window.print());