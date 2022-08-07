<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li v-for="item in menu" :key="item.id">
            <router-link to=""> {{ item.name }} </router-link>
          </li>
        </ul>
        <p class="copyright text-center">
          ©
          <!-- <script>
                  document.write(new Date().getFullYear());
                </script> -->
          <a href="http://www.creative-tim.com">Creative Tim</a>, made with love
          for a better web
        </p>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-section",
  data: () => {
    return {
      menu: [
        { id: 1, name: "Home" },
        { id: 2, name: "Company" },
        { id: 3, name: "Portfolio" },
        { id: 4, name: "Blog" },
      ],
    };
  },
};
</script>
