'use strict'

const Ingredient = use('App/Models/Ingredient')

class IngredientController {
    async index() {
        let ingredients = await Ingredient.all()
        return ingredients
    }

}

module.exports = IngredientController
