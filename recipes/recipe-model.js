const db = require('../data/dbConfig');

module.exports = {
getRecipes,
getShoppingList,
getInstructions
};

function getRecipes() {
    return db('recipes');
}

// GET ingredients and quantities for a given recipe
function getShoppingList(id) {
    return db('recipes')
    .where({ id })
    .first()
}

// GET a list of step by step instructions for preparing a recipe 
function getInstructions(scheme_id) {
    return db('steps as st')
    .join('schemes as s', 's.id', 'st.scheme_id')
    .select('st.scheme_id', 's.scheme_name', 'st.step_number', 'st.instructions')
    .where({ scheme_id })
}
