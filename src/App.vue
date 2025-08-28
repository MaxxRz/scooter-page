<template>
  <NavPage/>
  <HomePage/>
  <FooterPage/>
</template>

<script>
import FooterPage from './components/FooterPage.vue';
import HomePage from './components/HomePage.vue';
import NavPage from './components/NavPage.vue';

export default {
  name: 'App',
  components: {
    NavPage,
    HomePage,
    FooterPage,
  }
}
</script>

<style>
#app{
  margin-top: 5rem;
}
</style>
