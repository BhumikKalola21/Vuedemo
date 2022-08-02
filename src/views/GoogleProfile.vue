<template>
  <div>
    <b-icon
      @click="logOut()"
      icon="power"
      class="icon1"
      aria-hidden="true"
    ></b-icon>
    <div class="row">
      <div class="col-sm-4">
        <div class="card">
          <img
            class="card-img-top"
            :src="this.showResult.tO"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Name:{{ this.showResult.Af }}</h5>
            <p class="card-text">email:{{ this.showResult.fw }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gisLogin: false,
      lisLogin: false,
      showResult: {},
    };
  },
  methods: {
    async logOut() {
      const result = await this.$gAuth.signOut();
      this.gisLogin = false;
      console.log(`result`, result);
      this.$router.push("/");
    },
  },
  created() {
    this.gisLogin = this.$store.getters["gisLogin"];
    this.showResult = this.$store.getters["showResult"];
  },
};
</script>

<style scoped>
.icon1 {
  padding: 20px;
}

.card2 {
  margin: auto;
  height: 100px;
  width: 100%;
}
</style>
