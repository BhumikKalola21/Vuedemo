import VueRouter from "vue-router";
import Vue from "vue";
// import GoogleProfile from './views/GoogleProfile.vue';
import GoogleLogin from './views/GoogleLogin.vue';
import TheDashboard from './views/TheDashboard.vue';
// import  Store  from "vuex";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: GoogleLogin,
        // beforeEnter (to, from, next) {
        //     if( Store.state.gisLogin === false){
        //       next({ name: '/'})
        //     }
        //     else{
        //         next({ name: '/dashboard' })
        //     }
        // }
            
    },
        { path: '/dashboard', component: TheDashboard},
        // { path: '/profile', component: GoogleProfile},
    ]
});

export default router;