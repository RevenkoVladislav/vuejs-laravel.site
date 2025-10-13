require('./bootstrap');
import 'bootstrap';
import '../sass/app.scss';

import Vue from 'vue';
import router from './router';
import Index from './components/Index.vue';
import PostComponent from './components/PostComponent.vue';

Vue.config.productionTip = false;

new Vue({
    el: '#app',

    router,

    components: {
        Index
    }
});
