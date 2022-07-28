import VueRouter from "vue-router";
import Vue from "vue";
import UserProfile from './views/UserProfile.vue';
import UserLogin from './views/UserLogin.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: UserLogin},
        { path: '/profile', component: UserProfile}
    ]
});

export default router;