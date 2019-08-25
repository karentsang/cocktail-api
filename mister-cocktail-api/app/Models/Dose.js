'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Dose extends Model {
    cocktail() {
        return this.belongsToMany('App/Models/Cocktail').pivotTable('cocktail_dose')
    }
    ingredient() {
        return this.belongsToMany('App/Models/Ingredient').pivotTable('dose_ingredient')
    }
}

module.exports = Dose
