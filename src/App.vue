<script setup>
import CabecalhoComp from "@/components/template/CabecalhoComp.vue";
import RodapeComp from "@/components/template/RodapeComp.vue";
</script>

<template>
  <CabecalhoComp />
  <main>
    <RouterView />
  </main>
  <RodapeComp />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 100%;
  margin: 0 auto;
  height: 100vh;
  font-weight: normal;
}
a {
  color: inherit;
  text-decoration: none;
}
.router-link-active {
  font-weight: bolder;
}
main {
  height: 88%;
}
</style>
