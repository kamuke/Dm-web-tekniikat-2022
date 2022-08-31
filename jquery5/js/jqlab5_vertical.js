$(document).ready(function() {

    // Add click events to all a links
    $("a").on("click", function(event) {

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
        }
      });
});