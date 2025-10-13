import Vue from 'vue';
import VueRouter from 'vue-router';
import PostComponent from './components/PostComponent.vue';
import TagComponent from './components/TagComponent.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/posts',
        component: PostComponent,
    },
    {
        path: '/tags',
        component: TagComponent
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
