'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ingredient extends Model {
    dose() {
        return this.hasMany('App/Models/Dose').pivotTable('dose_ingredient')
    }
}

module.exports = Ingredient
