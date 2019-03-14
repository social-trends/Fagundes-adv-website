<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MenuBar/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'

export default {
  name: 'app',
  components: {
    MenuBar
  }
}
</script>