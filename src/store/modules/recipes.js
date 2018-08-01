import axios from 'axios'

// initial state
const state = {
  recipes: []
}

// getters
const getters = {}

// mutations
const mutations = {
  setProducts (state, recipes) {
    state.recipes = recipes
  }
}

// actions
const actions = {
  getAllRecipes ({ commit }) {
    axios.get(process.env.API_URL + 'recipes').then((resp) => {
      commit('setProducts', resp.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
