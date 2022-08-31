// Vaihe 1: Tulostetaan haun tulos konsoliin (3p)

'use strict';

const searchInput = document.querySelector('input[name=search]');
const searchButton = document.querySelector('#search-button');

async function getSearch(query) {
  try {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=' + query); // Start fetch
    if (!response.ok) throw new Error('Jotain meni pieleen.'); // If error occurs, give error message
    const series = await response.json(); // JSON to JavaScript object/array
    console.log(series); // Console log series
  } catch (error) { // Catch error
    console.log(error.message);
  }
}

searchButton.addEventListener('click', function() {
  getSearch(searchInput.value);
})