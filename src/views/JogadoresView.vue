<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      jogadores: [
        {
          id: "6fb5417a-c543-4885-a193-fa54db55389a",
          nome: "Jogador 1",
          time_id: 1,
        },
        {
          id: "8526def8-d894-4194-92bd-a0068f1c52df",
          nome: "Jogador 2",
          time_id: 2,
        },
        {
          id: "b70703d6-a7fb-43d6-a0c6-3e12323ae751",
          nome: "Jogador 3",
          time_id: 3,
        },
        {
          id: "21ec9707-b86c-45f4-a318-792c94326593",
          nome: "Jogador 4",
          time_id: 4,
        },
      ],
      novo_jogador: "",
      novo_time: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_time && this.novo_jogador !== "") {
        const novo_id = uuidv4();
        this.jogadores.push({
          id: novo_id,
          nome: this.novo_jogador,
          time_id: this.novo_time,
        });
      }
    },
    excluir(time) {
      const indice = this.jogadores.indexOf(time);
      this.jogadores.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="form-input">
    <input type="text" v-model="novo_jogador" placeholder="Jogador" />
    <input type="text" v-model="novo_time" placeholder="Time" />
    <button @click="salvar">Salvar</button>
  </div>
  <div class="list-times">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Times</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="jogador in jogadores" :key="jogador.id">
          <td>{{ jogador.id }}</td>
          <td>{{ jogador.nome }}</td>
          <td>{{ jogador.time_id }}</td>
          <td>
              <button>Editar</button>
              <button @click="excluir(time)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.title {
  text-align: center;
  margin: 2rem 0;
}

.form-input {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.form-input input {
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.form-input button {
  padding: 0.5rem;
  width: 15%;
  border: 1px solid rgb(115, 115, 247);
  border-radius: 10px;
  background-color: rgb(115, 115, 247);
  color: white;
  font-weight: bold;
  margin-left: 1%;
}

.list-times {
  display: flex;
  justify-content: center;
}

table {
  width: 50%;
  border-collapse: collapse;
  margin: 0 auto;
  border: 1px solid black;
  font-size: 1.1rem;
  text-align: center;
}

table thead {
  background-color: rgb(73, 34, 162);
  color: white;
  font-weight: bold;
}

table tbody tr:nth-child(odd) {
  background-color: rgb(173, 173, 249);
}
</style>
