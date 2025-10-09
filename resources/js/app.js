import 'bootstrap';
import '../sass/app.scss';


import './bootstrap';
require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue';
import PostComponent from './components/PostComponent.vue';

const app = new Vue({
    el: '#app',
    components: {
        PostComponent,
    },
});
