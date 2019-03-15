<template>
  <section class="vantages">
    <div class="row block">
      <div class="col">
        <div class="row">
          <div class="col col-w-padding">
            <a href="https://fagundesadv.com.br/portfolio/profissional-autonomo/"><img class="image-profissao" src="../assets/autonomo.png"/></a>
          </div>
          <div class="col col-w-padding">
              <a href="https://fagundesadv.com.br/portfolio/professores-escolas-privadas/"><img class="image-profissao" src="../assets/professor.png"/></a>
          </div>
          <div class="col col-w-padding">
              <a href="https://fagundesadv.com.br/portfolio/caminhoneiros/"><img class="image-profissao" src="../assets/caminhoneiro.png"/></a>
          </div>
        </div>
        <div class="row">
          <div class="col col-w-padding">
            <a href="https://fagundesadv.com.br/portfolio/dentistas/"><img class="image-profissao" src="../assets/dentista.png"/></a>
          </div>
          <div class="col col-w-padding">
            <a href="https://fagundesadv.com.br/portfolio/medicos/"><img class="image-profissao" src="../assets/medico.png"/></a>
          </div>
          <div class="col col-w-padding">
            <a href="https://fagundesadv.com.br/portfolio/eletricitarios/"><img class="image-profissao" src="../assets/eletricitario.png"/></a>
          </div>
        </div>
      </div>

      <div class="col form-area">
        <h2>CONHEÇA AS VANTAGENS DE SUA PROFISSÃO:</h2>
        <p class="subtitle-2">Orientação jurídica para adquirir os melhores benefícios sob seus direitos de aposentado.</p>
        <div class="form-space">
          <form class="form" method="post">
            <p>Acesse o conteúdo específico ao lado ou preencha o formulário abaixo para receber por e-mail:</p>
            <input type="text" name="name" placeholder="Nome completo" class="form-control">
            <input type="text" name="email" placeholder="E-mail" class="form-control">
            <input type="text" name="profissao" placeholder="Profissão" class="form-control">
            <label class="label">Exerceu atividade especial/insalubre?</label>
            <select class="form-control" name="atividade-insalubre">
              <option value="Selecione">Selecione uma opção</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            <input class="btn btn-primary first-buttom" type="submit" name="Enviar">
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scopped>
  $fagundes-color: #dbb947;
  $fagundes-dark-color: #dbce46;

  .block {
    width: 100%!important;
  }

  .vantages {
    background-color: $fagundes-color;
    padding: 3rem;

    & .image-profissao {
      width: 100%;
    }

    & .col-w-padding {
      padding: 0!important;
    }
  }

  .form-area {
    padding-left: 3rem!important;
    padding-top: 4rem;

    & h2 {
      color: #000;
      font-weight: 600;
    }

    > .subtitle-2, p {
      color: #f3f3f3;
    }

    > .form-space {
      width: 500px;
      padding-left: 0;
      max-width: 100%;
    }
  }
</style>