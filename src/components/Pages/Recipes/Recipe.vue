<template>
  <div v-if="recipe" class="wrapper">
  <h1>{{ recipe[0].title.rendered }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Recipe',
  data () {
    return {
      recipe: null
    }
  },
  computed: {
    recipeId: function () {
      return this.$router.history.current.params.id
    }
  },
  mounted () {
    this.$store.dispatch('recipes/selectRecipe', this.recipeId).then(() => {
      this.recipe = this.$store.state.recipes.currentRecipe
    })
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 80%;
  margin: 0 auto;
  background: #fff;
  padding: 10px;
}
</style>
