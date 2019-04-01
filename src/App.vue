<template>
  <div class="my-app">
    <app-header/>

    <app-body/>

    <app-footer/>
  </div>
</template>

<script>
  import AppHeader from './components/Header';
  import AppBody from './components/Body';
  import AppFooter from './components/Footer';

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppBody,
      AppFooter
    }
  }
</script>

<style lang="scss">
  .my-app {
    min-height: 100vh;
    position: relative;
  }
</style>