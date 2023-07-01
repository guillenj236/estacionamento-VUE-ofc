<template>
    <div class="container" style="margin-top: 10px;">
       <div class="row">
          <div class="col-md-10 text-start">
             <p class="fs-3"> Configurações </p>
          </div>
          <div class="col-md-2">
             <div class="d-grid gap-2">
                <router-link type="button" class="btn btn-success" 
                   to="/configuracao/formulario">Cadastrar
                </router-link>
             </div>
          </div>
       </div>
       <div class="row">
             <table class="table table-striped">
                <thead class="table-secondary">
                   <tr>
                      <th pe="col">Valor Hora</th>
                      <th pe="col">Valor MinMulta</th>
                      <th pe="col">Inicio Expediente</th>
                      <th pe="col">Fim Expediente</th>
                      <th pe="col">Tempo para desconto</th>
                      <th pe="col">Tempo de desconto</th>
                      <th pe="col">Vagas Carro</th>
                      <th pe="col">Vagas Moto</th>
                      <th pe="col">Vagas Van</th>
                      <th pe="col">Opção</th>
                   </tr>
                </thead>
                <tbody class="table-group-divider">
                   <tr v-for="item in configuracoesList" :key="item.id">
                      <th class="text-start">{{ item.valorHora}}</th>
                      <th class="text-start">{{ item.valorMinutoMulta}}</th>
                      <th class="text-start">{{ item.inicioExpediente}}</th>
                      <th class="text-start">{{ item.fimExpediente}}</th>
                      <th class="text-start">{{ item.tempoParaDesconto}}</th>
                      <th class="text-start">{{ item.tempoDeDesconto}}</th>
                      <th class="text-start">{{ item.vagasCarro}}</th>
                      <th class="text-start">{{ item.vagasMoto}}</th>
                      <th class="text-start">{{ item.vagasVan}}</th>
                    
                      <th class="col-md-2">
                         <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <router-link type="button" class="btn btn-sm btn-warning" 
                               :to="{ name: 'configuracao-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                               Editar 
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
import ConfiguracaoClient from '../../client/ConfiguracaoClient';
  
import { Configuracao } from '../../model/Configuracao';
  
  export default defineComponent({
    name: 'VeiculoLista',
    data() {
      return {
          configuracoesList: new Array<Configuracao>()
      }
    },
    mounted() {
      this.findAll();
    },
    methods: {
  
      findAll() {
        ConfiguracaoClient.listaAll()
          .then(sucess => {
            this.configuracoesList = sucess
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