<template>
  <section class="contact">
    <div id="contact" class="contact block">
      <div class="row">
        <div class="col-md-6 talk-w-us">
          <h1>FALE CONOSCO</h1>
          <div class="row email">
            <div class="col-md-2">
              <img class="local-image" src="../assets/local.png"/>
            </div>
            <div class="col-md-6">
              <h3>E-MAIL</h3>
              <a href="mailto:contato@fagundesadv.com.br">contato@fagundesadv.com.br</a>
            </div>
          </div>
          <div class="row whats">
            <div class="col-md-2">
              <img class="local-image" src="../assets/whats.png"/>
            </div>
            <div class="col-md-4">
              <h3>WHATSAPP</h3>
              <p>(43) 99830-2514</p>
              <p>Segunda a sexta<br>
                09H às 17H
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 col-xs-6 locals">
              <div class="row address">
                <div class="col-md-3 col-xs-3">
                  <img class="adress-image local-image" src="../assets/local.png"/>
                </div>
                <div class="col-md-9 col-xs-9">
                  <h5>LONDRINA-PR</h5>
                  <p>R. Piauí, 211 - Centro</p>
                  <P>Salas 111 e 213</P>
                  <P>CEP: 86010-907</P>
                  <p>Telefax: (43) 3325-1291</p>
                </div>
              </div>
              <div class="row address">
                <div class="col-md-3 col-xs-3">
                  <img class="adress-image local-image" src="../assets/local.png"/>
                </div>
                <div class="col-md-9 col-xs-9">
                  <h5>Curitiba - PR</h5>
                  <p>R. Emiliano Perneta, 466 - Centro</p>
                  <P>Sala 205</P>
                  <P>CEP: 80420-080</P>
                  <p>Telefax: (41) 3013-6291</p>
                </div>
              </div>
              <div class="row address">
                <div class="col-md-3 col-xs-3">
                  <img class="adress-image local-image" src="../assets/local.png"/>
                </div>
                <div class="col-md-9 col-xs-9">
                  <h5>Apucarana - PR</h5>
                  <p>R. São Paulo 375, Bairro Vila Feliz</p>
                  <P>CEP: 86808-070</P>
                  <P>Telefax: (43) 3122-1010</P>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-6 locals">
              <div class="row address">
                <div class="col-md-3 col-xs-3">
                  <img class="adress-image local-image" src="../assets/local.png"/>
                </div>
                <div class="col-md-9 col-xs-9">
                  <h5>Maringá - PR</h5>
                  <p>Av. Herval, nº1392, 4º andar - Centro</p>
                  <P>Em frente ao estacionamento do Estádio Willie Davids.</P>
                  <P>CEP: 87030-090</P>
                  <p>Telefax: (44) 3029-6283</p>
                </div>
              </div>
              <div class="row address">
                <div class="col-md-3 col-xs-3">
                  <img class="adress-image local-image" src="../assets/local.png"/>
                </div>
                <div class="col-md-9 col-xs-9">
                  <h5>Telêmaco Borba - PR</h5>
                  <p>R. Manoel Ribas, 19 - Centro</p>
                  <P>CEP: 84261-080</P>
                  <P>Telefax: (42) 3272-9777</P>
                </div>
              </div>
              <div class="row address">
                <div class="col-md-3 col-xs-3">
                  <img class="adress-image local-image" src="../assets/local.png"/>
                </div>
                <div class="col-md-9 col-xs-9">
                  <h5>Tamarana - PR</h5>
                  <p>Rua Arlindo Pereira de Araujo, 531</p>
                  <P>CEP: 86125-000</P>
                  <P>Celular: (43) 9 9938-7355</P>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p class="display-block">
          <a href="https://facebook.com/MarlyFagundesAdvPrevidenciaria/" target="_blank"><img class="left-icons" src="../assets/fb.png"></a>
          <a href="https://www.instagram.com/rodrigofagundesadv/?hl=pt-br" target="_blank"><img class="left-icons" src="../assets/insta.png"></a>
          <a href="#" target="_blank"><img class="left-icons" src="../assets/youtube.png"></a><br/>
          <span class="copyright">© 2018 MARLY FAGUNDES & ADVOGADOS ASSOCIADOS (OAB-PR 3.086).<br>
          Todos os direitos reservados. Política de Privacidade.</span>
        </p>
      </footer>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        articles: false,
      }
    },

    methods: {
    }
  }
</script>

<style lang="scss" scopped>
  $fagundes-color: #dbb947;
  $fagundes-dark-color: #dbce46;

  .contact {
    padding: 3rem;

    & .local-image {
      width: 100%;
    }

    & .left-icons {
      width: 30px;
    }
  }

  .display-block {
    text-align: center;
    display: block;
    margin: auto;
    padding-top: 3rem;
  }

</style>