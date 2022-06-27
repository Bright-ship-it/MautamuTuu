const appId = "65e99521";
const appKey = "6deaad8a3a55adcee283a6562c76aa02";
const baseUrl =`https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_Key=${appKey}`;
const recipeContainer = document.querySelector("#recipe.container");
const txtSearch = document.querySelector("#txtSearch");
const btnSearch = document.querySelector(".btn");
const loadingEle = document.querySelector("#loading");

btnSearch.addEventListener("click", () => loadRecipies(txtSearch.value));

txtSearch.addEventListener("keyup", (e) => {
    const inputVal = txtSearch.value;
    if (e.keyCode === 13){
        loadRecipies(inputVal);
    }
});

function toggleLoad(element, isShow) {
    element.classList.toggle("hide", isShow);
}

/*const setScrollPosition = () => {
    recipeContainer.scrollTo({top: 0, behavior: "smooth" });
};*/

function loadRecipies(type = "chicken"){
    toggleLoad(loadingEle, false);
    const url = baseUrl + `&q=${type}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            renderRecipies(data.hits)
            toggleLoad(loadingEle,true);
        })
        .catch((error) => toggleLoad(loadingEle, true))
        /*.finally(() => setScrollPosition());*/
}
loadRecipies();

const getRecipeStepsStr = (ingredientLines = []) => {
    let str = "";
    for(var step of ingredientLines) {
        str = str + `<li>${step}</li>`
    }
    return str;
};

const renderRecipies = (recipeList=[]) => {
    recipeContainer.innerHTML = ";"
    recipeList.forEach((recipeObj) => {
        const { label:recipeTitle, ingredientLines, image:recipeImage, } = recipeObj.recipe;
        const recipeRecipeStepStr = getRecipeStepsStr(ingredientLines);
        const htmlStr = `<div class="recipe">
        <div class="recipe-title">${recipeTitle}</div>
        <div class="reciper-image">
            <img src="${recipeImage}" alt="Recipe">
        </div>
        <div class="recipe-text">
            <ul>
             ${recipeRecipeStepStr}                      
            </ul>
        </div>
    </div>`;
    recipeContainer.insertAdjacentElement("beforeend", htmlStr)
    })
}

