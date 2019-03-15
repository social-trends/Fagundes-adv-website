<template>
  <section class="all-about">
    <div class="container">
      <h1>SAIBA TUDO SOBRE APOSENTADORIA</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="guide-side">
            <img class="images" src="../assets/artigo_1.png"/>
            <h3>CALCULADORA DE APOSENTADORIA</h3>
            <p>Entenda como funciona o cálculo de do benefício, quais são as variárveis e até quanto você pode receber dando entrada agora no seu processo de aposentadoria hoje!</p>
          </div>
          <a href="https://fagundesadv.com.br/calculadora/" class="btn btn-primary first-buttom" target="_blank">Acesse agora</a>
        </div>
        <div class="col-md-6">
          <div class="guide-side right">
            <img class="images" src="../assets/artigo_2.png"/>
            <h3>GUIA DEFINITIVO DA APOSENTADORIA</h3>
            <p>Um material completo e gratuito com todas as informações sobre aposentadoria. Conheça todos os tipodes de benefícios, Saiba os documentos necessários e muito mais!</p>
          </div>
          <a href="" class="btn btn-primary first-buttom">Baixe Agora</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scopped>
  $fagundes-color: #dbb947;
  $fagundes-dark-color: #dbce46;

  .all-about {
    background-color: #000;
    padding: 3rem;

    & h1 {
      color: $fagundes-color;
      text-align: center;
      font-weight: 700;
    }
  }

  .guide-side {
    background-color: #fff;

    & h3 {
        padding-top: 1rem;
        padding-left: 1rem;
    }

    & p {
      padding: 1rem;
      color: #858585;
    }

    > .images {
      width: 100%!important;
    }
  }

</style>