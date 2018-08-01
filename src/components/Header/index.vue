<template>
  <header class="site-header">
    <MainNavigation />
  </header>
</template>

<script>
import MainNavigation from '../Navigation'

export default {
  name: 'Header',
  components: {
    MainNavigation
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/settings';
.site-header {
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  background: #fff;
  box-shadow: $box-shadow;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
