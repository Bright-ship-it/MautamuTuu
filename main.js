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
    const baseURL = `https://api.edamam.com/api/recipes/v2?q=pizza&app_id=${APP_ID}&app_key${APP_key}&to=15`;
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
            <img src="./img-1.jpg" alt="">
            <div class="flex-container">
                <h1 class="title">This is a receipe</h1>
                <a class="view-button" href="#">View Recipe</a>
            </div>
            <p class="item-data">Calories: 120</p>
        </div>        
        `
    })
    searchResultDiv.innerHTML = generatedHTML;
}