'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Cocktail = use('App/Models/Cocktail')
const Ingredient = use('App/Models/Ingredient')
const Dose = use('App/Models/Dose')

/**
 * Resourceful controller for interacting with doses
 */
class DoseController {
  /**
   * Show a list of all doses.
   * GET doses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    
  }

  /**
   * Render a form to be used for creating a new dose.
   * GET doses/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ params, request, response, view }) {
    let dose = new Dose()
    dose.description = request.body.description
    let array = dose.description.split(',')
    let ingredientName = array[1]
    let ingredient = await Ingredient.findBy('name',ingredientName)
    dose.ingredients_id = ingredient.id
    dose.cocktails_id = params.id
    let newDose = await dose.save()
    return (newDose, 'dose created')
  }

  /**
   * Create/save a new dose.
   * POST doses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single dose.
   * GET doses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing dose.
   * GET doses/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update dose details.
   * PUT or PATCH doses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a dose with id.
   * DELETE doses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let cocktailId = params.id
    let doseId = params.did
    let dose = await Dose.find(doseId).del()
    return ('dose deleted')
  }
}

module.exports = DoseController
