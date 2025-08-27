<template>
  <NavPage/>
  <HomePage/>
</template>

<script>
import HomePage from './components/HomePage.vue';
import NavPage from './components/NavPage.vue';

export default {
  name: 'App',
  components: {
    NavPage,
    HomePage,
  }
}
</script>

<style>

</style>
