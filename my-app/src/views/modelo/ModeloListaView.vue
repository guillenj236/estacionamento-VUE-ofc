<template>
    <div class="container" style="margin-top: 10px;">
       <div class="row">
          <div class="col-md-10 text-start">
             <p class="fs-3"> Modelos </p>
          </div>
          <div class="col-md-2">
             <div class="d-grid gap-2">
                <router-link type="button" class="btn btn-success" 
                   to="/modelo/formulario">Cadastrar
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
                      <th scope="col">Modelo</th>
                      <th scope="col">Marca</th>
                      <th scope="col">Opção</th>
                   </tr>
                </thead>
                <tbody class="table-group-divider">
                   <tr v-for="item in modelosList" :key="item.id">
                      <th class="col-md-1">{{ item.id }}</th>
                      <th class="col-md-2"> 
                         <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                         <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                      </th>
                      <th class="text-start">{{ item.nome }}</th>
                      <th class="text-start">{{ item.marca.nome }}</th>
                      <th class="col-md-2">
                         <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <router-link type="button" class="btn btn-sm btn-warning" 
                               :to="{ name: 'modelo-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                               Editar 
                            </router-link>
                            <router-link type="button" class="btn btn-sm btn-danger" 
                               :to="{ name: 'modelo-formulario-excluir-view', query: { id: item.id, form: 'excluir' } } ">
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
  
  import ModeloClient from '/Users/guill/OneDrive/Documentos/Desenvolvimento/estacionamentoVue/estacionamento-vuejs/project/src/client/ModeloClient';
  import { Modelo } from '/Users/guill/OneDrive/Documentos/Desenvolvimento/estacionamentoVue/estacionamento-vuejs/project/src/model/ModeloModel';
  
  export default defineComponent({
    name: 'ModeloLista',
    data() {
      return {
          modelosList: new Array<Modelo>()
      }
    },
    mounted() {
      this.findAll();
    },
    methods: {
  
      findAll() {
        ModeloClient.listaAll()
          .then(sucess => {
            this.modelosList = sucess
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