<template>
  <footer class="footer footer-default">
    <div class="copyright">
      &copy; {{year}}, Designed and coded with <span class="heart"> love S2</span> by
      <a href="http://sahdo.me" target="_blanck">Sahdo.me</a>.
    </div>
  </footer>
</template>
<script>
  export default {
    name: "dashboard-footer",
    data() {
      return {
        year: new Date().getFullYear()
      };
    }
  };
</script>
<style>
</style>