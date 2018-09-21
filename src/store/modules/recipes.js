import axios from 'axios'

// initial state
const state = {
  recipes: [],
  currentRecipe: null
}

// getters
const getters = {}

// mutations
const mutations = {

  setProducts (state, recipes) {
    state.recipes = recipes
  },

  setCurrentRecipe (state, id) {
    let newState = state.recipes.filter((res) => {
      return res.id === id
    })
    state.currentRecipe = newState
  }
}

// actions
const actions = {
  getAllRecipes ({ commit }) {
    axios.get(process.env.API_URL + 'recipes').then((resp) => {
      commit('setProducts', resp.data)
    })
  },

  async selectRecipe ({commit}, id) {
    console.log(id)
    await commit('setCurrentRecipe', id)
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
