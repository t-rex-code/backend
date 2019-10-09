'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Douglas Martins',
      email: 'douglas@trexcode.com.br',
      password: '1234567'
    })

    await user.teams().create({
      name: 'T-RexTeam',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
