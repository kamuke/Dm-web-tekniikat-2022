// Vaihe 2: Tulostetaan web-sivulle haun tuloksesta yhden sarjan tiedot (4p)
// Vaadittavat tiedot: Nimi, linkki kotisivulle (officialSite), medium-kuva
// sekä yhteenveto (summary)

'use strict';

const searchInput = document.querySelector('input[name=search]');
const searchButton = document.querySelector('#search-button');
const main = document.querySelector('main');

async function getSearch(query) {
  try {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=' + query); // Start fetch
    if (!response.ok) throw new Error('Jotain meni pieleen.'); // If error occurs, give error message
    const series = await response.json(); // JSON to JavaScript object/array
    console.log(series); // Console log series
    renderArticle(series); // Render series to main
  } catch (error) { // Catch error
    console.log(error.message);
  }
}

function renderArticle(series) {
    const article = document.createElement('article');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const link = document.createElement('a');
    const h2Node = document.createTextNode(series[0].show.name);

    if (series[0].show.image) {
      img.src = series[0].show.image.medium;
      img.alt = series[0].show.name;
    } else {
      img.src = 'https://placehold.jp/4B4A96/fafafa/210x295.png';
      img.alt = 'Placeholder image';
    }

    article.appendChild(figure).appendChild(img);
    article.appendChild(h2).appendChild(h2Node);

    if (series[0].show.summary) {
      article.innerHTML += series[0].show.summary;
    }

    if (series[0].show.officialSite) {
      link.href = series[0].show.officialSite;
      const linkNode = document.createTextNode('Kotisivu');
      article.appendChild(link).appendChild(linkNode);
    }

    main.appendChild(article);
}

searchButton.addEventListener('click', function() {
  main.innerHTML = null;
  getSearch(searchInput.value);
})