import VueRouter from 'vue-router';
import store from '../store/index';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/movie/:id',
        name: 'movie-detail',
        component: () => import('../views/MovieDetail.vue')
    },
    {
        path: "*",
        name: 'notFound',
        component: () => import('../views/NotFound.vue')
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

router.beforeResolve((to,from,next) => {
    store.loading = true;
    next();
})

export default router;