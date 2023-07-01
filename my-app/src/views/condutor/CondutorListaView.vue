<template>
    <div class="container" style="margin-top: 10px;">
       <div class="row">
          <div class="col-md-10 text-start">
             <p class="fs-3"> Condutores </p>
          </div>
          <div class="col-md-2">
             <div class="d-grid gap-2">
                <router-link type="button" class="btn btn-success" 
                   to="/condutor/formulario">Cadastrar
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
                      <th scope="col">CPF</th>
                      <th scope="col">Telefone</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Opcões</th>
                   </tr>
                </thead>
                <tbody class="table-group-divider">
                   <tr v-for="item in condutoresList" :key="item.id">
                      <th class="col-md-1">{{ item.id }}</th>
                      <th class="col-md-2"> 
                         <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                         <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                      </th>
                      <th class="text-start">{{ item.cpf }}</th>
                      <th class="text-start">{{ item.telefone }}</th>
                      <th class="text-start">{{ item.nome }}</th>
                      <th class="col-md-2">
                         <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <router-link type="button" class="btn btn-sm btn-warning" 
                               :to="{ name: 'condutor-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                               Editar 
                            </router-link>
                            <router-link type="button" class="btn btn-sm btn-danger" 
                               :to="{ name: 'condutor-formulario-excluir-view', query: { id: item.id, form: 'excluir' } } ">
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
 import CondutorClient from '../../client/CondutorClient';
 import { Condutor } from '../../model/Condutor';
 export default defineComponent({
    name: 'CondutoresLista',
    data() {
      return {
          condutoresList: new Array<Condutor>()
      }
    },
    mounted() {
      this.findAll();
    },
    methods: {
  
      findAll() {
        CondutorClient.listaAll()
          .then(sucess => {
            this.condutoresList = sucess
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
    background-color: #fd2929;
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