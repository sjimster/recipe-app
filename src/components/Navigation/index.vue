<template>
<nav class="main-nav">
  <ul class="main-nav__list">
    <li class="main-nav__item"><router-link :to="{ name: 'homepage'}" class="main-nav__link">Home</router-link></li>
    <li class="main-nav__item"><router-link :to="{ name: 'recipes'}" class="main-nav__link">Recipes</router-link></li>
    <li class="main-nav__item"><router-link :to="{ name: 'add-recipes'}" class="main-nav__link">Add recipe</router-link></li>
  </ul>
</nav>
</template>
<script>
export default {
  name: 'MainNavigation'
}
</script>
<style lang="scss" scoped>
@import './src/assets/scss/settings';
.main-nav {
  &__list {
    margin: 0;
    padding: 0;
  }
  &__item {
     display: inline-block;
  }
  &__link {
    background: rgba($primary-color, 0.8);
    padding: 10px;
    border-radius: $border-radius;
    color: $bg-color;
    text-decoration: none;
    transition: all 0.2s ease;
    &.exact-active, &:hover {
      background: darken($primary-color, 10%);
    }
  }
}
</style>
