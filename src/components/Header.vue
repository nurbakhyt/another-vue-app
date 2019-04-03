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
    padding-top: 16px;
    padding-bottom: 16px;
    position: relative;

    > * {
      flex-shrink: 0;
      flex-grow: 0;

      &:nth-child(1) {
        flex-basis: 30%;
      }

      &:nth-child(2) {
        flex-basis: 40%;
        text-align: center;
      }

      &:nth-child(1) {
        flex-basis: 30%;
      }
    }
  }

  .back-btn {
    color: #3951a7;
    cursor: pointer;
  }
</style>