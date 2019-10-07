<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{path:'/dashboard'}">Footer</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{year}}, Designed and coded by
        <a href="https://hintify.io" target="_blanck">Hintify.io</a>.
      </div>
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