<template>
  <header>
      <nav>
          <router-link to="/veiculo">Veículo</router-link> |
          <router-link to="/marca">Marca</router-link> |
          <router-link to="/condutor">Condutor</router-link> |
          <router-link to="/modelo">Modelo</router-link> |
          <router-link to="/movimentacao">Movimentacao</router-link>
      </nav>
  </header>
</template>

<script lang="ts">
  export default {
      name: 'NavBarComponent'
  }
</script>

<style>
  *{  font-family: Helvetica;
  
       margin: 0 auto;
        padding: 0px;

      box-sizing: border-box;
  }
    nav {
      background-color: #222;
      padding: 15px 50px;
      display: flex;
      justify-content: center;
      align-items: center;

  }

  nav a
  {
      color: #FCBA03;
      text-decoration: none;
      margin: 12px;
      transition: .5s;

  }

  nav a:hover{
      color: #FFF;
  }
</style>