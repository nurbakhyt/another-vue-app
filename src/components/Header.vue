<template>
  <header class="header">
    <div>
      <a
        v-if="$route.name !== 'main-page'"
        class="back-btn"
        @click="$router.back(-1)"
      >
        < back
      </a>
    </div>

    <div class="app-name">
      MyApp
    </div>

    <div></div>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',
  }
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    padding-bottom: 16px;
    position: relative;
  }

  .back-btn {
    color: #3951a7;
    cursor: pointer;
  }
</style>