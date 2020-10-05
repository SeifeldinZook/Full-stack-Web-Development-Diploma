let allRecipes = [];
let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');
let recipesRow = document.getElementById('recipesRow');
let recipeDetailsDiv = document.getElementById('recipeDetails');


async function getRecipe(term) {
   let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);
   apiResponse = await apiResponse.json();
   allRecipes = apiResponse.recipes;
   displayAllRecipes();
};

searchBtn.addEventListener('click', function () {
   getRecipe(searchInput.value);
});

function displayAllRecipes() {
   let cartoona = ``;
   for (let i = 0; i < allRecipes.length; i++) {
      let myId = "'" + allRecipes[i].recipe_id + "'";
      cartoona += `<div onclick="getRecipeDetails(${myId})" class="col-md-4">
         <div class="recipe">
            <img src="${allRecipes[i].image_url}" class="w-100" alt="">
            <h5 class="color-mine font-weight-bolder py-2">${allRecipes[i].title}</h5>
         </div>
         <p><b>By: </b>${allRecipes[i].publisher}</p>
      </div>`;
   }

   recipesRow.innerHTML = cartoona;
}

async function getRecipeDetails(id) {
   let recipeDetails;
   let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
   apiResponse = await apiResponse.json();
   recipeDetails = apiResponse.recipe;
   showRecipeDetails(recipeDetails)
}

function showRecipeDetails(recipeDetails) {
   let cartoona = `<h4 class="color-mine py-2 font-weight-bolder">${recipeDetails.title}</h4>
   <img src="${recipeDetails.image_url}" class="w-100">
   <p class='p-2'>${recipeDetails.publisher}</p>
   <ul>`
   for (let i = 0; i < recipeDetails.ingredients.length; i++) {
      cartoona += `<li class='font-weight-bolder py-2'>${recipeDetails.ingredients[i]}</li>`;
   }
   cartoona += `</ul>`
   cartoona += `<button class="btn text-white btn-mine btn-block">
   <a target="_blank" class="text-white" href="${recipeDetails.source_url}">
      show more
   </a>
</button>`
   recipeDetailsDiv.innerHTML = cartoona;
};
