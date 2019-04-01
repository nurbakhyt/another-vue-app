<template>
  <footer class="footer">
`    Footer @{{ new Date().getFullYear() }}
  </footer>
</template>

<script>
  export default {
    name: 'AppFooter',
  }
</script>

<style lang="scss">
  .footer {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px 24px;
  }
</style>