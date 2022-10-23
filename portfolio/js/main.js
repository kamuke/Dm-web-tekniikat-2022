// Add click events to nav-links and show-more-btn
$('.nav-link, .show-more-btn').on('click', function(event) {

    // Check that clicked a link href has value that begins with #
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        const hash = this.hash;

        // Animate smooth vertical page scroll
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 500, function(){

            // Add hash to URL
            window.location.hash = hash;
        });

        // Remove and add active class
        $('.nav-link.active').removeClass('active');
        $(this).addClass('active');
    }
});

// When window scrolls
$(window).scroll(function () {
    const href = $(this).scrollTop();

    $('.nav-link').each(function () {

        if (href >= $($(this).attr('href')).offset().top - 1) {

            $('.nav-link.active').removeClass('active');
            $(this).addClass('active');
        }
    });
});

// Animate hero video when hovering
$('#hero-section').on('mouseover', function() {
    $('#hero-video').animate( {
        left: (Math.random() * 50 + 'px'),
        top: (Math.random() * 50 + 'px')
    }, 500);
});

// Check if url has # and then add active class to the nav link
if (window.location.hash) {
    // Store hash
    const hash = window.location.hash;

    // Select link with same hash in href
    const link = $('a[href="' + hash +'"]');

    // Remove and add active class
    $('.nav-link.active').removeClass('active');
    link.addClass('active');
}


