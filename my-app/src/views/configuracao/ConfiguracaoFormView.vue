<template>
    <div class="container" style="background: ;">
  
  <div class="row">
   <div class="col-md-10 text-start"> <p class="fs-3">Cadastrar Configuração</p> </div>
   <div class="col-md-2"> </div>
  </div>
  
  <hr/>
  
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
         <label class="form-label">Valor da Hora</label>
         <input type="text" class="form-control" v-model="configuracao.valorHora">
     </div>
     <div class="col-md-12 text-start">
         <label class="form-label">Valor MinMulta</label>
         <input type="text" class="form-control" v-model="configuracao.valorMinutoMulta">
     </div>
     <div class="col-md-12 text-start">
         <label class="form-label">Inicio Expediente</label>
         <input type="text" class="form-control" v-model="configuracao.inicioExpediente">
     </div>
     <div class="col-md-12 text-start">
         <label class="form-label">Fim de expediente</label>
         <input type="text" class="form-control" v-model="configuracao.fimExpediente">
     </div>
     <div class="col-md-12 text-start">
         <label class="form-label">Tempo p/ Desconto</label>
         <input type="text" class="form-control" v-model="configuracao.tempoParaDesconto">
     </div>
     <div class="col-md-12 text-start">
         <label class="form-label">Tempo de desconto</label>
         <input type="text" class="form-control" v-model="configuracao.tempoDeDesconto">
     </div>
     <div class="col-md-12 text-start">
         <label class="form-label">Vagas Carro</label>
         <input type="text" class="form-control" v-model="configuracao.vagasCarro">
     </div>
     <div class="col-md-12 text-start">
         <label class="form-label">Vagas Moto</label>
         <input type="text" class="form-control" v-model="configuracao.vagasMoto">
     </div>
     <div class="col-md-12 text-start">
         <label class="form-label">Vagas Van</label>
         <input type="text" class="form-control" v-model="configuracao.vagasVan">
     </div>
  </div>
  
  <div class="row">
   <div class="col-md-3 offset-md-6"> 
     <div class="d-grid gap-2">
       <router-link type="button" class="btn btn-info" 
         to="/configuracao/lista">Voltar
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
         Editar 
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
  
  
import { Configuracao } from '../../model/Configuracao';
import ConfiguracaoClient from '../../client/ConfiguracaoClient';
  
  export default defineComponent({
   name: 'VeiculoFormulario',
   data() {
     return { 
       configuracao: new Configuracao(),
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
     
  
   },
   methods: {
  
     onClickCadastrar(){
       ConfiguracaoClient.cadastrar(this.configuracao)
         .then(sucess => {
           this.configuracao = new Configuracao()
  
           
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
       ConfiguracaoClient.findById(id)
         .then(sucess => {
           this.configuracao = sucess
         })
         .catch(error => {
           this.mensagem.ativo = true;
           this.mensagem.mensagem = error;
           this.mensagem.titulo = "Error. ";
           this.mensagem.css = "alert alert-danger alert-dismissible fade show";
         });
     },
     onClickEditar(){
       ConfiguracaoClient.editar(this.configuracao.id, this.configuracao)
         .then(sucess => {
           this.configuracao = new Configuracao()
           
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
     onClickExcluir(){
       ConfiguracaoClient.excluir(this.configuracao.id)
         .then(sucess => {
           this.configuracao = new Configuracao()
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
  
  </style>