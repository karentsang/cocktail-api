'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoseSchema extends Schema {
  up () {
    this.create('doses', (table) => {
      table.increments()
      table.string('description')//{2,rum}
      table.string('ingredients_id')
      table.string('cocktails_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('doses')
  }
}

module.exports = DoseSchema
