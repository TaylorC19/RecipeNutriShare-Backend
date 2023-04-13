/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable('recipes', (table) => {
    table.increments('id')
      .primary();
    table.string('user_uid')
      .references('uid')
      .inTable('users');
    table.string('tile');
    table.integer('servings');
    table.integer("hours");
    table.integer("minutes");
    table.text("description");
    table.text("instructions");
    table.json("ingredients");
    table.json("nutrition");
    table.boolean("is_public");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable('recipes');
};
