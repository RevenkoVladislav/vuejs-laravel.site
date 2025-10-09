import 'bootstrap';
import '../sass/app.scss';
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
require('./bootstrap');
import Vue from 'vue';
import ExampleComponent from './components/ExampleComponent.vue';

const app = new Vue({
    el: '#app',
    components: { ExampleComponent },
});
