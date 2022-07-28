<template>
    <b-card>
      <b-icon
        icon="google"
        @click="login()"
        class="icon1"
      ></b-icon>
      <b-icon icon="linkedin" class="icon1"></b-icon>
    </b-card>
</template>

<script>
export default {
  data(){
    return{
      gisLogin: false,
      lisLogin: false,
      showResult: {},
    }
  },
  methods: {
    async login() {
      const googleUser = await this.$gAuth.signIn();
      let responseObj = {};

      // console.log("getBaseProfile", googleUser.getBasicProfile());
      (responseObj.showResult = googleUser.getBasicProfile()),
        console.log(responseObj.showResult),
        // console.log(responseObj.showResult.vO);
        (responseObj.gisLogin = true),
        (responseObj.gisLogin = this.$gAuth.isAuthorized);
        this.$store.commit('loginMutation', responseObj);
        this.$router.push('/profile/');
    },
  },
  created(){
    this.gisLogin = this.$store.getters['gisLogin'];
    this.showResult = this.$store.getters['showResult'];
  }
}
</script>

<style>

.icon1 {
  padding: 20px;
}

.card2 {
  margin: auto;
  height: 100px;
  width:100%;
}
</style>