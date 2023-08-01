<template>
  <div class="grid place-items-center h-screen">
    <div class="flex flex-col" style="width: 500px">
      <div>
        <h1 class="text-4xl font-bold text-center">{{ name }}</h1>
      </div>
      <div class="flex">
        <router-view/>
      </div>
      <div class="w-full text-center pt-4"><router-link to="/">Home</router-link> | <router-link to="/privacy">Privacy Policy</router-link></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const name = import.meta.env.VITE_FACILITY_NAME
</script>

<style scoped>
a {
  color: #fff;
  text-decoration: underline;
}
</style>