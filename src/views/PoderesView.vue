<script>
export default {
  data() {
    return {
      poderes: [
        {
          nome: "Manipulação do Tempo",
          sobre:
            "Esse poder permite o usuário controlar o tempo conforme sua vontade, indo para o passado ou futuro",
        },
        {
          nome: "Manipulação do Fogo",
          sobre:
            "Esse poder permite o usuário controlar o elemento fogo conforme sua vontade, criando chamas enormes, dragões de fogo ou derreter seu picolé",
        },
        {
          nome: "Manipulação do Gelo",
          sobre:
            "Esse poder permite o usuário controlar o elemento gelo conforme sua vontade, congelando tudo que quiser",
        },
        {
          nome: "Manipulação do Ar",
          sobre:
            "Esse poder permite o usuário controlar o ar conforme sua vontade, podendo matar alguém sem ar em instantes",
        },
      ],
      novo_poder: "",
      sobre_poder: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_poder && this.sobre_poder !== "") {
        this.poderes.push({
          nome: this.novo_poder,
          sobre: this.sobre_poder,
        });
        this.novo_poder = "";
        this.sobre_poder = "";
      }
    },
    excluir(poder) {
      const indice = this.poderes.indexOf(poder);
      this.poderes.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Sobre Poderes</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        v-model="novo_poder"
        placeholder="Nome do Poder"
        @keydown.enter="salvar"
      />
    </div>
    <div class="form-input">
      <input
        type="text"
        v-model="sobre_poder"
        placeholder="Sobre o Poder"
        @keydown.enter="salvar"
      />
    </div>
    <div class="form-input">
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-poderes-habilidades">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobre o Poder</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="poder in poderes" :key="poder.id">
            <td>{{ poder.nome }}</td>
            <td>{{ poder.sobre }}</td>
            <td>
              <button class="excluir" @click="excluir(poder)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
