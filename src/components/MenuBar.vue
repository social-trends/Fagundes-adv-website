<template>
  <div>
      <input type="text" name="" v-model="searchValue">
      <button v-on:click="search(searchValue)">pesquisar</button>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  props: {
  },

  data () {
    return {
      searchValue: 0,
    }
  },

  mounted () {
    this.$http.get('https://fagundesadv.com.br/api/get_recent_posts/?count=3')
      .then((data) => {
        this.postsdata = data
      })
  },

  methods: {
    search(searchValue){
      var search = searchValue;
      window.location.href = "https://fagundesadv.com.br/?s=" + search;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
