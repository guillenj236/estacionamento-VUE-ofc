<template>
    <div class="container" style="margin-top: 10px;">
       <div class="row">
          <div class="col-md-10 text-start">
             <p class="fs-3"> Movimentações </p>
          </div>
          <div class="col-md-2">
             <div class="d-grid gap-2">
                <router-link type="button" class="btn btn-success" 
                   to="/movimentacao/formulario">Cadastrar
                </router-link>
             </div>
          </div>
       </div>
       <div class="row">
             <table class="table table-striped">
                <thead class="table-secondary">
                   <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Ativo</th>
                      <th scope="col">Entrada</th>
                      <th pe="col">Placa</th>
                      <th pe="col">Modelo</th>
                      <th scope="col">Condutor</th>
                      <th scope="col">Opcões</th>
                   </tr>
                </thead>
                <tbody class="table-group-divider">
                   <tr v-for="item in movimentacoesList" :key="item.id">
                      <th class="col-md-1">{{ item.id }}</th>
                      <th class="col-md-2"> 
                         <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                         <span v-if="!item.ativo" class="badge text-bg-danger"> Finalizada </span>
                      </th>
                      <th class="text-start">{{ item.entrada }}</th>
                      <th class="text-start">{{ item.veiculo.placa }}</th>
                      <th class="text-start">{{ item.veiculo.modelo.nome }}</th>
                      <th class="text-start">{{ item.condutor.nome }}</th>
                      
                      <th class="col-md-2">
                         <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <router-link type="button" class="btn btn-sm btn-warning" 
                               :to="{ name: 'movimentacao-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                               Finalizar 
                            </router-link>
                         </div>
                      </th>
                   </tr>
                </tbody>
             </table>
       </div>
    </div>
 </template>
 
  
  <script lang="ts">
  
import { defineComponent } from 'vue';
  
import { Movimentacao } from '../../model/Movimentacao';
import MovimentacaoClient from '../../client/MovimentacaoClient';
  
  export default defineComponent({
    name: 'VeiculoLista',
    data() {
      return {
          movimentacoesList: new Array<Movimentacao>()
      }
    },
    mounted() {
      this.findAll();
    },
    methods: {
  
      findAll() {
        MovimentacaoClient.listaAll()
          .then(sucess => {
            this.movimentacoesList = sucess
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  });
  
  </script>

  <style lang="scss" scoped>
    * {
        font-family: 'Poppins';
    }

    .row {
        margin-top: 30px;
    }

.btn-success {
    padding: 12px;
    border-radius: 25px;
    background-color: #29fd53;
    color: black;
}
.fs-3{
    color: black;
}

.table{
    margin-top: 25px;
    width: 100%;
}

  </style>