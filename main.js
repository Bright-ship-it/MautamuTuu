const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result')
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = 'ef7c93e7';
const APP_key = 'bcef21cc4e1647e32a579be554884dc4';

 
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI (){
    const baseURL = `https://api.edamam.com/api/recipes/v2?q=${searchQuery}&app_id=${APP_ID}&app_key${APP_key}&to=15`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}
function generateHTML(results){
    const generatedHTML = '';
    results.map(result => {
        generatedHTML +=
        `
        <div class="item">
            <img src="${result.recipe.image}" alt="">
            <div class="flex-container">
                <h1 class="title">${result.recipe.label}</h1>
                <a class="view-button" href="${result.recipe.url}" target="_blank">View Recipe</a>
            </div>
            <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
            <p class="item-data">Diet Label: ${result.recipe.calories.dietLabels.length > 0 ? result.recipe.dietLabels : 'No Label Found'}</p>
            <p class="item-data">Health Label: ${result.recipe.healthLabels}</p>
        </div>        
        `
    })
    searchResultDiv.innerHTML = generatedHTML;
}