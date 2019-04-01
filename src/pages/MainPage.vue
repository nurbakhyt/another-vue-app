<template>
  <section>
    Main page
  </section>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'MainPage',
    computed: {
      ...mapGetters([
        'users',
        'posts'
      ])
    }
  }
</script>

<style lang="scss">

</style>