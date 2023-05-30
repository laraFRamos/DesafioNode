/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  return knex.schema
  .createTable('lista', function (table) {
      table.increments('id').primary();
      table.string('nome').notNullable().unique();
      table.date('validade').notNullable();
  })
};
exports.up = function(knex) {
  return knex.schema.createTable('lista', function(table) {
    table.increments('id').primary();
    table.string('nome').notNullable().unique();
    table.string('grupo').notNullable
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('lista');
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// drop da tabela -> exportado a partir do comando down
exports.down = function(knex) {
    return knex.schema
    .dropTable("lista");
};
