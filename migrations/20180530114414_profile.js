exports.up = (knex, Promise) => {
  return knex.schema.createTable('profile', table => {
    table.increments()
    table.string('email')
    table.string('password')
    table.string('user_name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('profile')
}