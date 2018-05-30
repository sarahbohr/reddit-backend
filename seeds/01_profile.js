exports.seed = (knex, Promise) => {
  return knex('profile').del()
    .then(() => {
      return knex('profile').insert([
        { email: 'rowValue1', password: 'butts', user_name: 'more butts' },
        { email: 'rowValue2', password: 'butts', user_name: 'more butts' },
        { email: 'rowValue3', password: 'butts', user_name: 'more butts' }
      ])
    })
}