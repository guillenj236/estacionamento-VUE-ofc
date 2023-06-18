<template>
    <nav>
      <NavBarComponent />
    </nav>
    <router-view/>
  </template>
  
  
  <script lang="ts">
  import NavBarComponent from './components/navbar.vue';
  export default {
      name : 'AppComponent',
      components: {
        NavBarComponent
      } 
  }
  </script>
  
  
  <style lang="scss">
   #app {
  
     color: #2c3e50;
   }
  * {
    font-family: Helvetica;
  
        margin: 0 auto;
        padding: 0px;
  
    box-sizing: border-box;
  }
  
  .main-container {
    margin-top: 20px;
    text-align: center;
  }
  
  </style>