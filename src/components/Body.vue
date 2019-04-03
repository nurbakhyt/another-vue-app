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
  .main,
  .header,
  .footer {
    padding-left: 4px;
    padding-right: 4px;

    @media (min-width: 768px) {
      padding-left: 8px;
      padding-right: 8px;
      margin-left: auto;
      margin-right: auto;
      width: 640px;
    }
  }
</style>