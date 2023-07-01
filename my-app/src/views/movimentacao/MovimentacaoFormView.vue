<template>
    <div class="container" style="background: ;">
  
  <div class="row">
   <div class="col-md-10 text-start"> <p class="fs-3">Cadastrar Movimentação</p> </div>
   <hr/>
  </div>

  <div v-if="mensagem.ativo" class="row">
   <div class="col-md-12 text-start">
     <div :class="mensagem.css" role="alert">
       <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
   </div>
  </div>
  
  <div class="row">
   <div class="col-md-12 text-start">
     <label for="recipient-name" class=" row m-auto col-form-label">Selecionar Condutor:</label>
       <select class="form-select form-select-md mb-3" aria-label=".form-select-md example" v-model="movimentacao.condutor"><option v-for="item in condutor" :value="item">{{ item.nome }}</option></select>
   </div>

   <div class="col-md-12 text-start">
     <label for="recipient-name" class=" row m-auto col-form-label">Selecionar Veículo:</label>
       <select class="form-select form-select-md mb-3" aria-label=".form-select-md example" type="text" v-model="movimentacao.veiculo"><option v-for="item in veiculo" :value="item">{{ item.placa }}</option></select>
   </div>
   
     <!-- <div class="col-md-12 text-start">
         <label class="form-label">Placa:</label>
         <input type="text"  class="form-control" v-model="movimentacao.condutor;">
     </div>
     <div class="col-md-12 text-start">
         <label class="form-label">Ano</label>
         <input type="text" class="form-control" placeholder="ano" v-model="movimentacao.ano">
     </div> -->
     <!-- <div class="col-md-12 text-start">
      <label for="recipient-name" class=" row m-auto col-form-label">Selecionar Cor:</label>
      <select v-model="movimentacao.cor">
        <option option v-for="opcao in opcoesCor" :value="opcao" :key="opcao">{{ opcao }}</option>
      </select>
  </div> -->
  
  <!-- <div class="col-md-12 text-start">
      <label for="recipient-name" class=" row m-auto col-form-label">Selecionar o tipo:</label>
      <select v-model="movimentacao.tipo">
        <option option v-for="opcao in opcoesTipo" :value="opcao" :key="opcao">{{ opcao }}</option>
      </select>
  </div> -->
  </div>
  
  <div class="row">
   <div class="col-md-3 offset-md-6"> 
     <div class="d-grid gap-2">
       <router-link type="button" class="btn btn-info" 
         to="/movimentacao/lista">Voltar
       </router-link>
     </div>
   </div>
   <div class="col-md-3 "> 
     <div class="d-grid gap-2">
       <button v-if="this.form === undefined" type="button" 
           class="btn btn-success" @click="onClickCadastrar()">
         Cadastrar 
       </button>
       <button v-if="this.form === 'editar'" type="button" 
           class="btn btn-warning" @click="onClickEditar()">
         Finalizar 
       </button>
       <button v-if="this.form === 'excluir'" type="button"
         class="btn btn-danger" @click="onClickExcluir()">
         Excluir 
       </button>
     </div>
   </div>
  </div>
  </div>
  
     
  </template>
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  
  
  
  
  import VeiculoClient from '../../client/VeiculoClient';
  import { Veiculo } from '../../model/Veiculo';
  import { Movimentacao } from '../..//model/Movimentacao';
import CondutorClient from '../../client/CondutorClient';
import { Condutor } from '../../model/Condutor';
import MovimentacaoClient from '../../client/MovimentacaoClient';
  
  export default defineComponent({
   name: 'VeiculoFormulario',
   data() {
     return { 
       movimentacao: new  Movimentacao(),
       veiculo: new Array <Veiculo>(),
       condutor: new Array <Condutor>(),
       mensagem: {
         ativo: false as boolean,
         titulo: "" as string,
         mensagem: "" as string,
         css: "" as string
       }
     }
   },
   computed: {
     id () {
       return this.$route.query.id
     },
     form () {
       return this.$route.query.form
     }
   },
   mounted() { 
  
     if(this.id !== undefined){
       this.findById(Number(this.id));
     }
     this.findAllVeiculo();  
     this.findAllCondutor();
  
   },
   methods: {
  
     findAllVeiculo(){
       VeiculoClient.listaAll().then(sucess =>{
         this.veiculo = sucess;
         console.log(sucess);
       })
       .catch(error =>{
           console.log(error)
  
         })
  
     },
  
     findAllCondutor(){
       CondutorClient.listaAll().then(sucess =>{
         this.condutor = sucess;
         console.log(sucess);
       })
       .catch(error =>{
           console.log(error)
  
         })
  
     },
  
     onClickCadastrar(){
       MovimentacaoClient.cadastrar(this.movimentacao)
         .then(sucess => {
           this.movimentacao = new Movimentacao()
  
           
           this.mensagem.ativo = true;
           this.mensagem.mensagem = sucess;
           this.mensagem.css = "alert alert-success alert-dismissible fade show";
         })
         .catch(error => {
           this.mensagem.ativo = true;
           this.mensagem.mensagem = error;
           this.mensagem.titulo = "Error. ";
           this.mensagem.css = "alert alert-danger alert-dismissible fade show";
         });
     },
     findById(id: number){
       MovimentacaoClient.findById(id)
         .then(sucess => {
           this.movimentacao = sucess
         })
         .catch(error => {
           this.mensagem.ativo = true;
           this.mensagem.mensagem = error;
           this.mensagem.titulo = "Error. ";
           this.mensagem.css = "alert alert-danger alert-dismissible fade show";
         });
     },
     onClickEditar(){
       MovimentacaoClient.editar(this.movimentacao.id, this.movimentacao)
         .then(sucess => {
           this.movimentacao = new Movimentacao()
           
           this.mensagem.ativo = true;
           this.mensagem.mensagem = sucess;
           this.mensagem.titulo = "Movimentação finalizada!";
           this.mensagem.css = "alert alert-success alert-dismissible fade show";
         })
         .catch(error => {
           this.mensagem.ativo = true;
           this.mensagem.mensagem = error;
           this.mensagem.titulo = "Error. ";
           this.mensagem.css = "alert alert-danger alert-dismissible fade show";
         });
     },
     onClickExcluir(){
       MovimentacaoClient.excluir(this.movimentacao.id)
         .then(sucess => {
           this.movimentacao = new Movimentacao()
           this.mensagem.ativo = true;
           this.mensagem.mensagem = sucess;
           this.mensagem.css = "alert alert-success alert-dismissible fade show";
           
         })
         .catch(error => {
           this.mensagem.ativo = true;
           this.mensagem.mensagem = error;
           this.mensagem.titulo = "Error. ";
           this.mensagem.css = "alert alert-danger alert-dismissible fade show";
         });
     }
   }
  });
  
  
  </script>
  
  
  <style lang="scss">
      .col-md-10{
              font-size: 32px;
              font-weight: 600;
              font-family: 'Poppins', sans-serif;
          }

          .fs-3{
            margin-top: 20px;
          }
  
  </style>