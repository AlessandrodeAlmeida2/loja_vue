<template>
    <div>
      <div v-for="produto in produtos" :key="produto.id">
        <h2>{{ produto.name }}</h2>
        <img :src="produto.image_link" alt="">
        <p>{{ produto.price }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        produtos: [],
      };
    },
    async created() {
      const response = await fetch('http://localhost:3000/produtos');
      this.produtos = await response.json();
    },
  };
  </script>
  