/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.alterTable('recipes', (table) => {
    table.renameColumn('total_protien', 'total_protein')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.alterTable('recipes', (table) => {
    table.renameColumn('total_protein', 'total_protien')
  })
};
