<template>
    <div class="produto">
      <div class="pr" v-for="produto in produtos" :key="produto.id">
        <h2>{{ produto.name }}</h2>
        <img :src="produto.image_link" alt="">
        <p>R$ {{ produto.price }}</p>
      </div>
    </div>
  </template>

<style scoped>
.produto {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
}
.pr {
  padding: 10px;
}
.produto img {
  height: 100%;
  max-height: 200px;
  width: auto;
}
</style>
  
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
  