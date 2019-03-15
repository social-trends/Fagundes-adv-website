<template>
  <section class="services">
    <h2>SERVIÇOS</h2>
    <p>Orientação jurídica para adquirir os melhores benefícios sob seus direitos de aposentado.</p>
    <div class="row">
      <div class="col col-w-padding">
        <div class="service">
          <img src="../assets/eletricitario.png"/>
          <h4>PREVIDENCIÁRIO</h4>
          <p>Assegura os direitos financeiros e os deveres com o estado pela arrecadação de impostos.</p>
        </div>
      </div>
      <div class="col col-w-padding">
        <div class="service">
          <img src="../assets/eletricitario.png"/>
          <h4>TRIBUTÁRIO</h4>
          <p>Assegura os direitos financeiros e os deveres com o estado pela arrecadação de impostos.</p>
        </div>
      </div>
      <div class="col col-w-padding">
        <div class="service">
          <img src="../assets/eletricitario.png"/>
          <h4>TRABALHISTA</h4>
          <p>Orientação jurídica para o trabalhador antes e depois da demissão.</p>
        </div>
      </div>
      <div class="col col-w-padding">
        <div class="service">
          <img src="../assets/eletricitario.png"/>
          <h4>CIVIL</h4>
          <p>Atuamos e orientamos todas as questões na área cível, de forma preventiva e eficaz.</p>
        </div>
      </div>
      <div class="col col-w-padding">
        <div class="service">
          <img src="../assets/eletricitario.png"/>
          <h4>AMBIENTAL</h4>
          <p>Assegura os direitos financeiros e os deveres com o estado pela arrecadação de impostos.</p>
        </div>
      </div>
    </div>
    <p class="more">Clique nas imagens para ver os artigos relacionados</p>
  </section>
</template>

<style lang="scss" scopped>
  $fagundes-color: #dbb947;
  $fagundes-dark-color: #dbce46;

  .col-w-padding {
    padding: .2rem!important;
  }

  .service {
    padding: .8rem;
    text-align: center;
    border: 1px solid;
    height: 100%;
  }

  .services {
    padding: 3rem;

    & h2 {
      font-weight: 700;
    }

    & .more {
      text-align: center;
    }
  }

</style>