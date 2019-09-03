
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128).notNullable();
      tbl.string('recipe_instruction', 256).notNullable();
  })
  .createTable('quantity', tbl => {
      tbl.increments();
      tbl.integer('quantity_amount');
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 128).notNullable();
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      // this table must exist
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
  .createTable('recipe_ingredient', tbl => {
    tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    // this table must exist
    .inTable('recipes')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
    tbl.integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references('id')
    // this table must exist
    .inTable('ingredients')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
    tbl.integer('quantity')
    .unsigned()
    .notNullable()
    tbl.primary(['recipe_id', 'ingredient_id']);
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredient')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('quantity')
    .dropTableIfExists('recipes')

};
