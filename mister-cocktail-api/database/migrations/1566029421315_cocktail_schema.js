'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CocktailSchema extends Schema {
  up () {
    this.create('cocktails', (table) => {
      table.increments()
      table.string('name').unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('cocktails')
  }
}

module.exports = CocktailSchema
