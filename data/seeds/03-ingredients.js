
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'flour', recipe_id: 1 },
        { ingredient_name: 'cheese', recipe_id: 1 },
        { ingredient_name: 'lettuce', recipe_id: 2 },
        { ingredient_name: 'ground beef', recipe_id: 2 }
      ]);
    });
};
