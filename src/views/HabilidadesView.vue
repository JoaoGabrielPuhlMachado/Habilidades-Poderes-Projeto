<script>
export default {
  data() {
    return {
      habilidades: [
        {
          nome: "Rápidez",
          sobre: "A pessoa simplesmente é mais rapido que as outras",
        },
        {
          nome: "Resistência",
          sobre: "A pessoa tem uma resitência acima do normal",
        },
        {
          nome: "Imunidade alta",
          sobre: "A pessoa tem uma imunidade melhor contra vírus e bactérias",
        },
        {
          nome: "Regeneração elevada",
          sobre: "A pessoa se cura de machucados mais facilmente",
        },
      ],
      novo_habilidade: "",
      sobre_habilidade: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_habilidade && this.sobre_habilidade !== "") {
        this.habilidades.push({
          nome: this.novo_habilidade,
          sobre: this.sobre_habilidade,
        });
        this.novo_habilidade = "";
        this.sobre_habilidade = "";
      }
    },
    excluir(time) {
      const indice = this.habilidades.indexOf(time);
      this.habilidades.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Sobre Habilidades</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        v-model="novo_habilidade"
        placeholder="Nome da Habilidade"
        @keydown.enter="salvar"
      />
    </div>
    <div class="form-input">
      <input
        type="text"
        v-model="sobre_habilidade"
        placeholder="Sobre a Habilidade"
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
            <th>Sobre a Habilidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="habilidade in habilidades" :key="habilidade.id">
            <td>{{ habilidade.nome }}</td>
            <td>{{ habilidade.sobre }}</td>
            <td>
              <button class="excluir" @click="excluir(time)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
