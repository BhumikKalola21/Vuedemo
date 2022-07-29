<template>
    <div>
      <b-icon
        @click="logOut()"
        icon="power"
        class="icon1"
        aria-hidden="true"
      ></b-icon>
      <b-card
        no-body
        class="card2 overflow-hidden"
        style="max-width: 540px"
      >
        <b-row no-gutters>
          <b-col md="3">
            <b-card-img
              v-bind:src="this.showResult.tO"
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
                <b>e-mail:{{ this.showResult.fw }}</b>
              </div>
            </b-card-text>
          </b-col>
        </b-row>
      </b-card>
    </div>
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
    async logOut() {
      const result = await this.$gAuth.signOut();
      this.gisLogin = false;
      console.log(`result`, result);
      this.$router.push('/')
    },
  },
  created(){
    this.gisLogin = this.$store.getters['gisLogin'];
    this.showResult = this.$store.getters['showResult'];
    // console.log(this.showResult);
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