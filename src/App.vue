<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import HelloTsx from './components/HelloTsx.tsx';
import HelloVueSetup from './components/HelloVueSetup.vue';
import Loading from './components/Loading.vue';
import { ref } from 'vue';
const msg = ref('hello TSX');
const msg1 = ref('hello Setup');
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <HelloTsx :msg="msg"></HelloTsx>
  <HelloVueSetup :msg="msg1"></HelloVueSetup>
  <Loading></Loading>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
