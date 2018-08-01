import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Pages/HomePage'
import Recipes from '@/components/Pages/Recipes'
import AddRecipes from '@/components/Pages/Recipes/AddRecipes'
import Recipe from '@/components/Pages/Recipes/Recipe'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: Recipe
    },
    {
      path: '/add-recipes',
      name: 'add-recipes',
      component: AddRecipes
    }
  ]
})
