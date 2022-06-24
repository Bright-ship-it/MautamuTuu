const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result')
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = '65e99521';
const APP_key = '6deaad8a3a55adcee283a6562c76aa02';
const baseURL = `https://api.edamam.com/search`;
 
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
})