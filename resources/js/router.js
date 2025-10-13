import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/people',
        component: () => import('./components/Person/Index.vue'),
        name: 'person.index'
    },
    {
      path: '/people/create',
      component: () => import('./components/Person/Create.vue'),
      name: 'person.create'
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
