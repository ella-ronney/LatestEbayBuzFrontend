import Vue from 'vue';
import Router from 'vue-router';
import Home from './../components/Home.vue';
import Profit from './../components/Profit.vue';
import ResolutionCenter from './../components/ResolutionCenter.vue';
import BusinessExpenses from './../components/BusinessExpenses.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Home },
        { path: '/Profit', component: Profit },
        { path: '/BusinessExpenses', component: BusinessExpenses },
        { path: '/ResolutionCenter', component: ResolutionCenter },
    ]
})