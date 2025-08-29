<template>
  <NavPage />
  <router-view />
  <FooterPage />
</template>

<script>
import FooterPage from './components/FooterPage.vue';
import NavPage from './components/NavPage.vue';

export default {
  name: 'App',
  components: {
    NavPage,

    FooterPage,
  }
}
</script>

<style>
#app {
  margin-top: 5rem;
}
</style>
