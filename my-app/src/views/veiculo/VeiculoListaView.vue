<template>
    <div class="container" style="margin-top: 10px;">
       <div class="row">
          <div class="col-md-10 text-start">
             <p class="fs-3"> Veículos </p>
          </div>
          <div class="col-md-2">
             <div class="d-grid gap-2">
                <router-link type="button" class="btn btn-success" 
                   to="/veiculo/formulario">Cadastrar
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
                      <th scope="col">Placa</th>
                      <th scope="col">Ano</th>
                      <th scope="col">Modelo</th>
                      <th scope="col">Cor</th>
                      <th scope="col">Tipo</th>
                      <th scope="col">Opcões</th>
                   </tr>
                </thead>
                <tbody class="table-group-divider">
                   <tr v-for="item in veiculosList" :key="item.id">
                      <th class="col-md-1">{{ item.id }}</th>
                      <th class="col-md-2"> 
                         <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                         <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                      </th>
                      <th class="text-start">{{ item.placa }}</th>
                      <th class="text-start">{{ item.ano }}</th>
                      <th class="text-start">{{ item.modelo.nome }}</th>
                      <th class="text-start">{{ item.cor }}</th>
                      <th class="text-start">{{ item.tipo }}</th>
                      <th class="col-md-2">
                         <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <router-link type="button" class="btn btn-sm btn-warning" 
                               :to="{ name: 'veiculo-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                               Editar 
                            </router-link>
                            <router-link type="button" class="btn btn-sm btn-danger" 
                               :to="{ name: 'veiculo-formulario-excluir-view', query: { id: item.id, form: 'excluir' } } ">
                               Excluir
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
  
  import VeiculoClient from '../../client/VeiculoClient';

  import { Veiculo } from '../../model/Veiculo';
  
  export default defineComponent({
    name: 'VeiculoLista',
    data() {
      return {
          veiculosList: new Array<Veiculo>()
      }
    },
    mounted() {
      this.findAll();
    },
    methods: {
  
      findAll() {
        VeiculoClient.listaAll()
          .then((sucess:any) => {
            this.veiculosList = sucess
          })
          .catch((error:any) => {
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