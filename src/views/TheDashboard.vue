<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img class="logo mx-2" :src="this.showResult.tO" />
      <b-navbar-brand to="/dashboard">Api Data </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-brand>GApi Data </b-navbar-brand>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-90px">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <b-dropdown-item>{{ this.showResult.Af }}</b-dropdown-item>
            <b-dropdown-item>{{ this.showResult.fw }}</b-dropdown-item>
            <b-dropdown-item to="/">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="row">
      <div class="col-sm-3" v-for="item in list" :key="item.id">
        <div class="card m-4">
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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      gisLogin: false,
      lisLogin: false,
      showResult: {},
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    this.list = result.data.data;
  },
  created() {
    this.gisLogin = this.$store.getters["gisLogin"];
    this.showResult = this.$store.getters["showResult"];
  },
};
</script>

<style scoped>
.card:hover {
  border-style: solid;
  border-radius: 2px;
  box-shadow: 20px 20px 10px gray;
}
.card {
  box-shadow: 5px 5px 10px grey;
}
.logo {
  height: 40px;
  border-radius: 50px;
}
</style>
