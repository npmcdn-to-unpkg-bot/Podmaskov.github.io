$(function() {
    $('.jcarousel').jcarousel({
        wrap: 'circular'
    }).jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
});
