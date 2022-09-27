$('#search-form').submit(function(e) {
    // Prevent form default action
    e.preventDefault();

    // Empty search-result
    $('#search-result').empty();

    const website = $(this).attr('action');
    const searchTerms = $(this).serialize();
    const url = website + '?' + searchTerms;

    $.getJSON(url, function(shows) {
        console.log(shows);
        $.each(shows, function(i, show) {
            // const homesite = show.show.officialSite ? show.show.officialSite : show.show.url;
            $('#search-result').append(
                `<article>
                    <img src="${
                        show.show.image 
                            ? show.show.image.medium 
                            : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
                    }" alt="${show.show.name}">
                    <h2>${show.show.name}</h2>
                    <a href="${show.show.officialSite || show.show.url}" target="_blank">Kotisivu</a>
                    <p>${show.show.genres.join(' / ')}</p>
                    ${show.show.summary}
                </article>`);
        });
    });
});