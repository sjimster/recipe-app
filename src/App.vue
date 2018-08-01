<template>
  <div id="app">
    <Header />
    <main>
    <router-view/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style lang="scss">
@import './src/assets/scss/style';

</style>
