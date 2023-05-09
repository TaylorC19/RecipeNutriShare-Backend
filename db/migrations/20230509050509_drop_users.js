/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.alterTable('recipes', (table) => {
    table.dropForeign('user_uid')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.alterTable('recipes', (table) => {
    table.foreign('user_uid')
      .references('uid')
      .inTable('users');
  })
};
