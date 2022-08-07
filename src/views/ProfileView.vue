<template>
  <div class="wrapper">
    <Header />
    <div class="main-panel">
      <!-- Navbar -->
      <NavBar />
      <!-- End Navbar -->
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Profile</h4>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-6 px-1">
                        <div class="form-group">
                          <p>Name</p>
                          <p class="form-control">{{ user.name }}</p>
                        </div>
                      </div>
                      <div class="col-md-6 px-1">
                        <div class="form-group">
                          <p>UserName</p>
                          <p class="form-control">{{ user.username }}</p>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 px-1">
                        <div class="form-group">
                          <p>Email</p>
                          <p class="form-control">{{ user.email }}</p>
                        </div>
                      </div>
                      <div class="col-md-6 px-1">
                        <div class="form-group">
                          <p>Street</p>
                          <p class="form-control">
                            {{ userAddress.street }}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 px-1">
                        <div class="form-group">
                          <p>Suite</p>
                          <p class="form-control">{{ userAddress.suite }}</p>
                        </div>
                      </div>
                      <div class="col-md-6 px-1">
                        <div class="form-group">
                          <p>Zipcode</p>
                          <p class="form-control">{{ userAddress.zipcode }}</p>
                        </div>
                      </div>
                    </div>

                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-user">
                <div class="card-image">
                  <img
                    src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <div class="author">
                    <a href="#">
                      <img
                        class="avatar border-gray"
                        src="../assets/img/faces/face-3.jpg"
                        alt="..."
                      />
                      <h5 class="title">{{ user.name }}</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";
import NavBar from "@/components/base/NavBar";
import { ref, onMounted } from "vue";
export default {
  name: "user-profile",
  components: {
    Header,
    Footer,
    NavBar,
  },
  setup() {
    const user = ref({});
    const userAddress = ref({});

    onMounted(() => {
      if (localStorage.getItem("user") && localStorage.getItem("userAddress")) {
        try {
          user.value = JSON.parse(localStorage.getItem("user"));
          userAddress.value = JSON.parse(localStorage.getItem("userAddress"));
        } catch (e) {
          localStorage.removeItem("user");
          localStorage.removeItem("userAddress");
        }
      }
      console.log(userAddress);
    });

    return { user, userAddress };
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0;
}
</style>
