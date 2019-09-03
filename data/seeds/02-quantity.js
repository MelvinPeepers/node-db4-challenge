
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        { quantity_amount: 2 },
        { quantity_amount: 3 }
      ]);
    });
};
