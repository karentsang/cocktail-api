'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Cocktail = use('App/Models/Cocktail')

/**
 * Resourceful controller for interacting with cocktails
 */
class CocktailController {
  /**
   * Show a list of all cocktails.
   * GET cocktails
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let cocktails = await Cocktail.all()
    return cocktails
  }

  /**
   * Render a form to be used for creating a new cocktail.
   * GET cocktails/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let cocktail = new Cocktail()
    cocktail.name = request.body.name
    await cocktail.save()
    return ('cocktail created')
  }

  /**
   * Create/save a new cocktail.
   * POST cocktails
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single cocktail.
   * GET cocktails/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let id = params.id
    let cocktail = await Cocktail.find(id)
    return (cocktail)
  }

  /**
   * Render a form to update an existing cocktail.
   * GET cocktails/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update cocktail details.
   * PUT or PATCH cocktails/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a cocktail with id.
   * DELETE cocktails/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CocktailController
