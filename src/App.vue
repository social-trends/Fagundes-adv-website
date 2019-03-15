<template>
  <div id="app">
    <Nav/>
    <First/>
    <all-about/>
    <vantages/>
    <services/>
    <articles/>
    <contact/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import First from './components/First.vue'
import AllAbout from './components/AllAbout.vue'
import Vantages from './components/Vantages.vue'
import Services from './components/Services.vue'
import Articles from './components/Articles.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    Nav,
    First,
    AllAbout,
    Vantages,
    Services,
    Articles,
    Contact,
  }
}
</script>