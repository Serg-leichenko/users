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
                  <h4 class="card-title">Create User</h4>
                </div>
                <div class="card-body">
                  <form @submit.prevent="onSubmit">
                    <div class="row">
                      <div class="col-md-4 px-1">
                        <div class="form-group">
                          <label>Username</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Username"
                            v-model="form.name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 pl-1">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            v-model="form.email"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 pr-1">
                        <div class="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="First Name"
                            v-model="form.firstName"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 pl-1">
                        <div class="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Last Name"
                            v-model="form.lastName"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4 px-1">
                        <div class="form-group">
                          <label>Street</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Street"
                            v-model="form.street"
                          />
                        </div>
                      </div>
                      <div class="col-md-4 pl-1">
                        <div class="form-group">
                          <label>Postal Code</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="ZIP Code"
                            v-model="form.code"
                          />
                        </div>
                      </div>
                      <div class="col-md-4 pl-1">
                        <div class="form-group">
                          <label>Suite</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Suite"
                            v-model="form.suite"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="btn btn-info btn-fill pull-right"
                    >
                      Submit
                    </button>
                    <div class="clearfix"></div>
                  </form>
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
import { reactive } from "vue";
import axios from "axios";

export default {
  name: "user-profile",
  components: {
    Header,
    Footer,
    NavBar,
  },
  setup() {
    const form = reactive({
      name: "",
      email: "",
      firstName: "",
      lastName: "",
      street: "",
      code: "",
      suite: "",
    });

    const onSubmit = () => {
      const user = {
        name: form.name.trim(),
        email: form.email.trim(),
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        street: form.street.trim(),
        code: form.code,
        suite: form.suite.trim(),
      };
      if (
        form.name === "" ||
        form.email === "" ||
        form.firstName === "" ||
        form.lastName === "" ||
        form.street === "" ||
        form.code === "" ||
        form.suite === ""
      ) {
        alert("Fill in all fields!");
      } else {
        try {
          axios
            .post("https://jsonplaceholder.typicode.com/posts", user)
            .then((response) => {
              if (response.status === 201) {
                alert("User created!");
                form.name =
                  form.email =
                  form.firstName =
                  form.lastName =
                  form.street =
                  form.code =
                  form.suite =
                    "";
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    };

    return { form, onSubmit };
  },
};
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
}
</style>
