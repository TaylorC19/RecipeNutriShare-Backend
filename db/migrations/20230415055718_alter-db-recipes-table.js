/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.alterTable('recipes', (table) => {
    table.dropColumn('nutrition');
    table.float('total_calories');
    table.float('total_protien');
    table.float('total_carbohydrates');
    table.float('calories_per_serving');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.alterTable('recipes', (table) => {
    table.json('nutrition');
    table.dropColumn('total_calories');
    table.dropColumn('total_protien');
    table.dropColumn('total_carbohydrates');
    table.dropColumn('calories_per_serving');
  })
};
