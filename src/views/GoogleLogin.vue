<template>
  <b-card>
    <b-icon icon="google" @click="login()" class="icon1"></b-icon>
    <b-icon icon="linkedin" @click="LinkedInlogin()" class="icon1"></b-icon>
  </b-card>
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
    async login() {
      const googleUser = await this.$gAuth.signIn();
      let responseObj = {};

      // console.log("getBaseProfile", googleUser.getBasicProfile());
      (responseObj.showResult = googleUser.getBasicProfile()),
        // console.log(responseObj.showResult),
        (responseObj.gisLogin = true),
        (responseObj.gisLogin = this.$gAuth.isAuthorized);
      this.$store.commit("loginMutation", responseObj);
      this.$router.push("/profile/");
    },

    // LinkedInlogin(){
    //       console.log('linkedinLogin called');
    //       var src="http://platform.linkedin.com/in.js"
    //       api_key: '77lg4dhnmjbjlo'
    //       authorize: true
    //       onLoad: OnLinkedInFrameworkLoad

    // },

    // OnLinkedInFrameworkLoad(){
    //   IN.Event.on(IN, "auth", OnLinkedInAuth);
    // },
    // OnLinkedInAuth(){
    //    IN.API.Profile("me").result(ShowProfileData);
    // },
    // ShowProfileData(profiles)
    //   {
    //       var member = profiles.values[0];
    //        console.log(member);
    //   }
  },

  // mounted() {
  //     let recaptchaScript = document.createElement('script')
  //     recaptchaScript.setAttribute('src', '//platform.linkedin.com/in.js')
  //     document.head.appendChild(recaptchaScript)
  //   },

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
