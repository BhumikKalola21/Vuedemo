<template>
  <div id="app">
    <b-card>
      <b-icon
        icon="google"
        v-if="!gisLogin"
        @click="login()"
        class="icon1"
      ></b-icon>
      <b-icon
        v-else-if="gisLogin"
        @click="logOut()"
        icon="power"
        aria-hidden="true"
      ></b-icon>
      <b-icon v-if="!gisLogin" icon="linkedin" class="icon1"></b-icon>
    </b-card>
    <div>
      <b-card
        v-if="gisLogin"
        no-body
        class="card2 overflow-hidden"
        style="max-width: 540px"
      >
        <b-row no-gutters>
          <b-col md="3">
            <b-card-img
              :src="this.showResult.vO"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="9">
            <b-card-text>
              <div>
                <b>Full Name: {{ this.showResult.Af }}</b>
              </div>
              <div>
                <b>e-mail:{{ this.showResult.gw }}</b>
              </div>
            </b-card-text>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      gisLogin: false,
      lisLogin: false,
      showResult: {},
    };
  },
  methods: {
    async login() {
      const googleUser = await this.$gAuth.signIn();

      // console.log("getBaseProfile", googleUser.getBasicProfile());
      (this.showResult = googleUser.getBasicProfile()),
        console.log(this.showResult),
        console.log(this.showResult.vO);
        (this.gisLogin = true),
        (this.gisLogin = this.$gAuth.isAuthorized);
    },
    async logOut() {
      const result = await this.$gAuth.signOut();
      this.gisLogin = false;
      console.log(`result`, result);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 10rem;
}
.icon1 {
  padding: 20px;
}

.card2 {
  margin: auto;
  height: 100px;
  width:100%;
}
</style>
