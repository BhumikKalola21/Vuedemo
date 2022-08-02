import VueRouter from "vue-router";
import Vue from "vue";
import GoogleProfile from './views/GoogleProfile.vue';
import GoogleLogin from './views/GoogleLogin.vue';
import TheDashboard from './views/TheDashboard.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: TheDashboard},
        { path: '/googleapi', component: GoogleLogin},
        { path: '/profile', component: GoogleProfile},
    ]
});

export default router;