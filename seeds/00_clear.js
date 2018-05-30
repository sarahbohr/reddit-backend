exports.seed = (knex, Promise) => {
  return knex('comment').del()
    .then(() => {
      return knex('post').del()
        .then(() => {
          return knex('profile').del()
        })
    })
}