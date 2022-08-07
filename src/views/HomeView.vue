<template>
  <div class="home">
    <div class="wrapper">
      <Header />
      <div class="main-panel">
        <!-- Navbar -->
        <NavBar />
        <!-- End Navbar -->
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card card-plain table-plain-bg">
                  <div class="card-header">
                    <h4 class="card-title">Users</h4>
                    <p class="card-category">users list</p>
                  </div>
                  {{ $store.state.users }}
                  <div class="card-body table-full-width table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <th>ім'я</th>
                        <th>email</th>
                        <th>телефон</th>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(user, i) in users"
                          :key="i"
                          @click="userDetail(user)"
                        >
                          <td>{{ user.name }}</td>
                          <td>{{ user.email }}</td>
                          <td>{{ user.phone }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";
import NavBar from "@/components/base/NavBar";
import axios from "axios";
import { onMounted, ref } from "vue";
import router from "@/router";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
    NavBar,
  },
  setup() {
    const users = ref([]);

    const userDetail = (user) => {
      console.log(user);
      router.push({ name: "profile" });
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userAddress", JSON.stringify(user.address));
    };

    onMounted(async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          users.value = response.data;
          users.value = response.data.slice(0, 5);
        });
    });

    return { userDetail, users };
  },
};
</script>

<style lang="scss" scoped>
.table tbody tr {
  cursor: pointer;
}
</style>
