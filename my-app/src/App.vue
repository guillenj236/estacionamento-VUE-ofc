<template>
  <nav>
      <div class="titulo"><i class="ri-car-line"></i><router-link to="/" class="teste">Estacionamento</router-link></div>
    <div class = "routers-div">
       <router-link to="/condutor/lista" class="routers-class">Condutor</router-link>
       <router-link to="/marca/lista" class="routers-class">Marca</router-link>
       <router-link to="/modelo/lista" class="routers-class">Modelo</router-link>
       <router-link to="/movimentacao/lista" class="routers-class">Movimentação</router-link>
       <router-link to="/veiculo/lista" class="routers-class">Veículo</router-link>
       <router-link to="/veiculo/lista" class="routers-class">Configuração</router-link>
    </div>
 </nav>
 <router-view/>
 
 </template>
 
 
 <style lang="scss">
   *{
     margin: 0;
   }
 
   nav {
     display: flex;
     height: 10vh;
     margin: auto;
     justify-content: space-around;
     align-items: center;
     
     background-color: rgba(0, 0, 0, 0.733);
   }
 
 .titulo {
   display: flex;
   justify-content: center;
   width: 20%;
 
   color: #fff;
   font-weight: 600;
 }
 
 i {
   font-weight: 600;
 }
 
 span
 {
   font-weight: 600;
   font-family: 'Poppins';
   text-decoration: none;
 }
 
 .titulo{
   text-decoration: none;
 }
 
 .ri-car-line {
   color: white;
   margin-right: 10px;
   margin-bottom: 2px;
 }
 
 .routers-div {
   display: flex;
   width: 70%;
   justify-content: space-around;
   align-items: center;
 }
 
 .routers-class {
   text-decoration: none;
   color: #fd3729;
 
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
 }
 
 body {
   background-color: #ffffff2d;
 }
 
 .teste {
   text-decoration: none;
 }
 
 .teste:visited{
   color: white;
   font-weight: 600;
   font-family: 'Poppins';
 }
 
 </style>
 
 
 
 
 
 