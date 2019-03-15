<template>
  <section class="articles">
    <h2>ARTIGOS</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="background">
          <a class="link" target="_blank" v-bind:href="this.articles[0].url">
            <img class="images-articles" v-bind:src="this.articles[0].thumbnail_images.full.url" >
            <h4 class="titles">{{ this.articles[0].title }}</h4>
            <span class="subtitles" v-html="this.articles[0].excerpt"></span>
            <p class="more">Ler mais</p>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="background">
          <a class="link" target="_blank" v-bind:href="this.articles[1].url">
            <img class="images-articles" v-bind:src="this.articles[1].thumbnail_images.full.url">
            <h4 class="titles">{{ this.articles[1].title }}</h4>
            <span class="subtitles" v-html="this.articles[1].excerpt"></span>
            <p class="more">Ler mais</p>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="background">
          <a class="link" target="_blank" v-bind:href="this.articles[2].url">
            <img class="images-articles" v-bind:src="this.articles[2].thumbnail_images.full.url">
            <h4 class="titles">{{ this.articles[2].title }}</h4>
            <span class="subtitles" v-html="this.articles[2].excerpt"></span>
            <p class="more">Ler mais</p>
          </a>
        </div>
      </div>
    </div>
    <button class="see-more">VEJA MAIS ARTIGOS</button>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        articles: false,
      }
    },

    mounted () {
      this.$http.get('https://fagundesadv.com.br/api/get_recent_posts/?count=3')
        .then((data) => {
          this.articles = data.body.posts
          console.log(this.articles)
        })
    },

    methods: {
    }
  }
</script>

<style lang="scss" scopped>
  $fagundes-color: #dbb947;
  $fagundes-dark-color: #dbce46;

  .articles {
    padding: 3rem;
    background-color: #000;

    & h2 {
      font-weight: 700;
      color: $fagundes-color;
      text-align: center;
      padding-bottom: 2rem;
    }

    & .more {
      text-align: right;
    }

    & .images-articles {
      width: 100%;
    }

    & .link {
      text-decoration: none;
      color: #000;
    }

    & .background {
      background-color: #fff;

      & h4 {
        padding: 10px;
      }

      & p {
        padding: 10px;
      }
    }

    .see-more {
      text-decoration: none;
      text-align: center;
      color: #fff;
      border-color: #fff;
      border: 1px solid;
      background-color: transparent;
      display: block;
      margin: auto;
      padding: 10px 60px;
    }
  }

</style>