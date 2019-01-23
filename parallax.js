$(window).scroll(function() {
    parralax();
})

function parralax() {

    let scroll = $(window).scrollTop();
    console.log(scroll);

    $('.parallax--bg').css('background-position', 'center ' + (scroll*0.45) + 'px');

    $('.parallax--box').css('top', -8 + (scroll*0.007) + 'em' );

}