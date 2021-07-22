$("#app-slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#app-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#app-slideshow');
}, 3000);