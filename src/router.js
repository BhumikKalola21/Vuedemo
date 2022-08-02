import VueRouter from "vue-router";
import Vue from "vue";
// import GoogleProfile from './views/GoogleProfile.vue';
import GoogleLogin from './views/GoogleLogin.vue';
import TheDashboard from './views/TheDashboard.vue';
// import store from './store/index.js'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
 
        { path: '/', component: GoogleLogin, 
        // beforeEnter(to,from,next){
        //     if(store.state.gisLogin == true){
        //         next({ name:'home'})
        //     }else{
        //         next({ name:'dashboard'})
        //     }
        // }    
    },
        { path: '/dashboard', component: TheDashboard,name: 'dashboard',
        // beforeEnter(to,from,next){
        //     if(store.state.gisLogin == false){
        //         next({ name: 'home'})
        //     }
        // }   
    },
        
    ]
});

export default router;