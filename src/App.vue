<template>
  <div class="my-app">
    <app-header/>

    <app-body/>

    <app-footer/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import AppHeader from './components/Header';
  import AppBody from './components/Body';
  import AppFooter from './components/Footer';

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppBody,
      AppFooter
    },
    mounted () {
      this.fetchUsers();
      this.fetchPosts();
    },
    methods: {
      ...mapActions([
        'fetchUsers',
        'fetchPosts'
      ])
    }
  }
</script>

<style lang="scss">
  .my-app {
    min-height: 100vh;
    position: relative;
  }
</style>