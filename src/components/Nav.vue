<template>
  <section id="app">
    <nav v-bind:class="{ dark: scrolledStatus }" class="navbar nav-bar navbar-expand-lg fixed-top navbar-default">
      <a class="navbar-brand" href="#"><img class="nav-logo" src="../assets/logo-white.png"/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#home">INÍCIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#vantages">SERVIÇOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://fagundesadv.com.br/blog/">ARTIGOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">CONTATO</a>
          </li>
          <li class="nav-item">
            <a @click.prevent="searchNow()" class="nav-link">
              <icon name="search" class="icon-color"></icon>
            </a>
          </li>
        </ul>
      </div>
    </nav>
      <div class="overall" v-if="search">
        <input type="text" name="" v-model="searchValue">
        <button v-on:click="findOnBlog(searchValue)">pesquisar</button>
        <a v-on:click="close()">
          <icon name="times" scale="2"></icon>
        </a>
      </div>
  </section>
</template>

<script>
  export default {

    data () {
      return {
        scrolledStatus: false,
        search: false,
        searchValue: '',
      }
    },

    created () {
      window.addEventListener('scroll', this.handleScroll);
    },

    methods: {
      searchNow () {
        window.scrollTo(0,0)

        const el = document.body;

        el.classList.add('overflow')

        this.search = !this.search;
      },

      close () {
        const el = document.body;

        el.classList.remove('overflow')

        this.search = !this.search;
      },

      findOnBlog(searchValue){
        var search = searchValue;
        var text = search.replace(/ /g,"+");
        console.log(text);
        window.location.href = "https://fagundesadv.com.br/?s=" + search;
      },

      handleScroll (event) {
        if (this.scrolled = window.scrollY > 50) {
          this.scrolledStatus = true;
        } else {
          this.scrolledStatus = false;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $fagundes-color: #dbb947;
  $fagundes-dark-color: #dbce46;

  .dark {
    background-color: #000;
  }

  .nav-link {
    cursor: pointer;
    color: $fagundes-color;

    &:hover {
      color: $fagundes-dark-color;
    }
  }

  .icon-color {
    color: $fagundes-color;

    &:hover {
      color: $fagundes-dark-color;
    }
  }

  .nav-logo {
    width: 100px;
  }

  .overall {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 99999;
    width: 100%;
    height: 100%;
    padding-left: 42%;
    padding-top: 10%;
  }

  .overflow {
    overflow: hidden!important;
  }
</style>
