/* $(document).ready(function() {
    $('#slider-1').owlCarousel({
        rtl: false,
        nav: false,
        dots: false,
        loop: true,
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
    })
}); */
$(document).ready(function() {
    $('.certificates').owlCarousel({
        rtl: false,
        nav: false,
        dots: true,
        loop: true,
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 8000,
    })
});
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
            $(links[count-1]).toggleClass('animation-contact');
        }
        $(links[count]).toggleClass('animation-contact');
        count++;
        if (count > links.length) {
            console.log(count);
            clearInterval(timer);
            $(links[count-1]).toggleClass('animation-contact');

        }
    }, 700);
}

$('#contacts').click(() => {
    setPosition();
    animationContact();
})
