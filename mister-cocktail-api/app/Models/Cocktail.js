'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cocktail extends Model {
    dose() {
        return this.hasMany('App/Models/Dose')
    }
    ingredients() {
        return this.hasMany('App/Models/Ingredient')
    }
}

module.exports = Cocktail
