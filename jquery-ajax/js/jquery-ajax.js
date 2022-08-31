$('#search-form').submit(function(e) {
    // Prevent form default action
    e.preventDefault();

    const website = $(this).attr('action');
    const searchTerms = $(this).serialize();
    const url = website + '?' + searchTerms;

    $.getJSON(url, function(shows) {
        console.log(shows);
        $.each(shows, function(i, show) {
            const name = show.show.name;
            const img = show.show.image ? show.show.image.medium : "https://via.placeholder.com/210x295";
            const summary = show.show.summary;
            const homesite = show.show.officialSite || show.show.url;
            // const homesite = show.show.officialSite ? show.show.officialSite : show.show.url;
            $('#search-result').append(`<article><img src="${img}"><h2>${name}</h2>${summary}<a href="${homesite}">Kotisivu</a></article>`);
        });
    });
});