<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img
        class="logo"
        src="data:image/png;base64,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"
      />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
      >
      </button>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/googleapi">
              Google/LinkedIn Api data
            </router-link>
          </li>
        </ul>
      
    </nav>
    <div>
      <div class="row">
        <div class="col-sm-3" v-for="item in list" :key="item.id">
          <div class="card">
            <img class="card-img-top" :src="item.avatar" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">
                <b>Name:{{ item.first_name }}</b>
              </h5>
              <p class="card-title">ID:{{ item.id }}</p>
              <p class="card-text">
                Full Name:{{ item.first_name + " " + item.last_name }}
              </p>
              <p class="card-text">email:{{ item.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    this.list = result.data.data;
  },
};
</script>

<style>
.logo {
  height: 40px;
  border-radius: 50px;
}
</style>
