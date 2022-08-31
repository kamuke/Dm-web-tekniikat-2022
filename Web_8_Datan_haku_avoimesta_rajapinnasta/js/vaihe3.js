// Vaihe 3: Tulostetaan web-sivulle haun tuloksesta kaikkien sarjojen samat
// tiedot kuin edellä (7p).
// Lisäksi tulostetaan genret, joihin sarja kuuluu.

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
    renderArticles(series); // Render series to main
  } catch (error) { // Catch error
    console.log(error.message);
  }
}

function renderArticles(series) {
  series.forEach(serie => {
    const article = document.createElement('article');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');
    const link = document.createElement('a');
    const h2Node = document.createTextNode(serie.show.name);

    if (serie.show.image) {
      img.src = serie.show.image.medium;
      img.alt = serie.show.name;
    } else {
      img.src = 'https://placehold.jp/4B4A96/fafafa/210x295.png';
      img.alt = 'Placeholder image';
    }

    article.appendChild(figure).appendChild(img);
    article.appendChild(h2).appendChild(h2Node);

    if (serie.show.genres.length > 0){
      serie.show.genres.forEach(genre => {
        const li = document.createElement('li');
        const liNode = document.createTextNode(genre);
        ul.appendChild(li).appendChild(liNode);
      })
      article.appendChild(ul);
    }

    if (serie.show.summary) {
      article.innerHTML += serie.show.summary;
    }

    if (serie.show.officialSite) {
      link.href = serie.show.officialSite;
      const linkNode = document.createTextNode('Kotisivu');
      article.appendChild(link).appendChild(linkNode);
    }

    main.appendChild(article);
  })
}

searchButton.addEventListener('click', function() {
  main.innerHTML = null;
  getSearch(searchInput.value);
})