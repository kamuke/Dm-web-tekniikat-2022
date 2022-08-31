$('#search-form').submit(function(e) {
    // Prevent form default action
    e.preventDefault();

    const website = $(this).attr('action');
    const searchTerms = $(this).serialize();
    const url = website + '?' + searchTerms;

    $.getJSON(url, function(shows) {
        console.log(shows);
        $.each(shows, function(i, show) {
            console.log(show.show.name);
            const homesite = show.show.officialSite || show.show.url;
            $('#search-result').append(`<a href="${homesite}">Kotisivu</a>`);
        });
    });
});