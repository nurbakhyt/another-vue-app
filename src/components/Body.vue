<template>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<script>
  export default {
    name: 'AppBody',
  }
</script>

<style lang="scss">
  .main {
    padding: 16px 24px;
  }
</style>