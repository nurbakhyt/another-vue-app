<template>
  <section class="section main-page">

    <post
      v-for="post in posts"
      :key="post.id"
      :post="post"
      small
    />

  </section>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Post from '../components/Post';

  export default {
    name: 'MainPage',
    components: {Post},
    computed: {
      ...mapGetters([
        'users',
        'posts'
      ])
    }
  }
</script>

<style lang="scss">
  .section {}

  .main-page {
    display: flex;
    flex-direction: column;
  }
</style>