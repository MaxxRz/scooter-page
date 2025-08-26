<template>
  <NavPage/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import NavPage from './components/NavPage.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavPage
  }
}
</script>

<style>

</style>
