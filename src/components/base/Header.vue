<template>
  <div class="sidebar" data-image="../assets/img/sidebar-5.jpg">
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="http://www.creative-tim.com" class="simple-text">
          Creative Tim
        </a>
      </div>
      <ul class="nav">
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'home' }">
            <i class="nc-icon nc-chart-pie-35"></i>
            <p>Dashboard</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'createUser' }">
            <i class="nc-icon nc-circle-09"></i>
            <p>Create User</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
