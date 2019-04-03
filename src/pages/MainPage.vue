<template>
  <section class="section main-page">

    <post
      v-for="(post, idx) in posts"
      :key="idx"
      :post="post"
      small
    />

  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import Post from '../components/Post';

  export default {
    name: 'MainPage',
    components: {Post},
    computed: {
      ...mapGetters([
        'users',
        'posts'
      ])
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
  .section {}

  .main-page {
    display: flex;
    flex-direction: column;
  }
</style>