
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Pizza', recipe_instruction: "cook pizza in oven" },
        { recipe_name: 'Burrito', recipe_instruction: "Put on tortilla" }
      ]);
    });
};
