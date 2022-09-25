import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TablePlugin, BootstrapVue, BootstrapVueIcons, FormCheckboxPlugin } from 'bootstrap-vue';
import { PaginationPlugin, FormDatepickerPlugin, LinkPlugin, InputGroupPlugin } from 'bootstrap-vue';


Vue.use(TablePlugin);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(PaginationPlugin);
Vue.use(FormDatepickerPlugin);
Vue.use(LinkPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(InputGroupPlugin);

Vue.config.productionTip = true;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
