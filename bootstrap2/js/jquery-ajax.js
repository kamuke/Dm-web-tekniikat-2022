const featureQueryUrl = 'https://api.tvmaze.com/search/shows?q=cat';

// Get json for features
$.getJSON(featureQueryUrl, function(featureShows) {
    console.log(featureShows);

    // Foreach horizontal cards to carousel
    $.each(featureShows, function(i, featureShow) {
        $('.carousel-inner').prepend(
            `<article class="carousel-item ${i ? 0 : 'active'}">
                <article class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${
                                featureShow.show.image
                                    ? featureShow.show.image.original
                                    : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
                            }" class="img-fluid rounded-start" alt="${featureShow.show.name}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">${featureShow.show.name}</h3>
                                <p class="card-text"><small class="text-muted">${featureShow.show.genres.join(' / ')}</small></p>
                                ${featureShow.show.summary}
                                <a href="${featureShow.show.officialSite || featureShow.show.url}" class="card-link" target="_blank">Website</a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>`
        );
    });
});

// When search form is submitted
$('#search-form').submit(function(e) {
    // Prevent form default action
    e.preventDefault();

    // Empty search-result and remove search-result-title and featuring section
    $('#search-result-card-container').empty();
    $('#search-result-title').remove();
    $('#featuring').remove();

    // Get the url for query
    const website = $(this).attr('action');
    const searchTerms = $(this).serialize();
    const url = website + '?' + searchTerms;

    // Get json and render it to page
    $.getJSON(url, function(shows) {
        // console.log(shows);

        // Add title
        $('#search-result').prepend(`<h1 id="search-result-title"> ${shows.length} search results</h1>`);

        // Foreach cards to card container
        $.each(shows, function(i, show) {
            // const homesite = show.show.officialSite ? show.show.officialSite : show.show.url;
            $('#search-result-card-container').append(
                `<div class="col">
                    <article class="card h-100 shadow">
                        <img src="${
                            show.show.image 
                                ? show.show.image.medium 
                                : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
                        }" class="card-img-top" alt="${show.show.name}">
                        <div class="card-body">
                            <h5 class="card-title">${show.show.name}</h5>
                            <p class="card-text"><small class="text-muted">${show.show.genres.join(' / ')}</small></p>
                            ${show.show.summary}
                        </div>
                        <div class="card-footer">
                            <a class="card-link" href="${show.show.officialSite || show.show.url}" target="_blank">Website</a>
                        </div>
                    </article>
                </div>`
            );
        });
    });
});