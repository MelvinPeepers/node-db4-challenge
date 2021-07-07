const db = require('../data/dbConfig');

module.exports = {
getRecipes,
getRecipe,
getShoppingList,
getInstructions
};

function getRecipes() {
    return db('recipes');
}

// GET id
function getRecipe(id) {
    return db('recipes')
    .where({ id })
    .first()
}

// GET ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
    return db('recipes_ingredient as ri')
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .join("recipes as r", "r.id", "ri.recipe_id" )
    .select("r.recipe_name", "i.ingredient_name", "ri.quantity")
    .where({ recipe_id })
}

// GET a list of step by step instructions for preparing a recipe 
function getInstructions(recipe_id) {
    return db('steps as st')
    .join('schemes as s', 's.id', 'st.scheme_id')
    .select('st.scheme_id', 's.scheme_name', 'st.step_number', 'st.instructions')
    .where({ recipe_id })
}
