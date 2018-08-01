<template>
<section class="recipe">
  <ul class="recipe__list">
    <li v-for="recipe in recipes" :key="recipe.id" class="recipe__item" v-on:click="goToRecipe(recipe.id)">
    <div class="recipe__photo" :style="{ 'background-image': 'url(' + recipe.acf.recipePhoto + ')' }">
    </div>
    <div>
    <h2 class="recipe__title"> {{ recipe.title.rendered }}</h2>
    <div class="recipe__date">{{ date(recipe.date) }}</div>
    </div>
    </li>
  </ul>
</section>
</template>

<script>
import { convertDate } from '../../../helpers/convertDate'

export default {
  name: 'Recipes',
  data () {
    return {
      recipes: []
    }
  },
  methods: {
    setRecipeData () {
      this.$store.dispatch('recipes/getAllRecipes')
      this.recipes = this.$store.state.recipes.recipes
    },
    goToRecipe (id) {
      this.$router.push({name: 'recipe', params: {id: id}})
    },
    date (date) {
      return convertDate(date)
    }
  },
  mounted () {
    this.setRecipeData()
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/settings';

.recipe {
  margin: 10px;
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  &__item {
    background: $secondary-color;
    margin: 5px;
    display: flex;
    border-radius: $border-radius;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      background: darken($secondary-color, 5%);
    }
  }
  &__photo {
    width: 80px;
    height: 80px;
    min-width: 80px;
    min-height: 80px;
    overflow: hidden;
    display: flex;
    background-size: cover;
    margin-right: 5px;
  }
  &__title {
    font-size: 1em;
    font-weight: 400;
    margin: 5px 0;
  }
  &__date {
    font-size: 0.8em;
  }
}
</style>
