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
    scrollBehavior(to, from, savedPosition){
        console.log(savedPosition);
        if(savedPosition){
            return savedPosition;
        }
        else{
            return {
                x: 0, y: 0,
                behavior: 'smooth'
            };
        }
    },
    routes,
});

router.beforeEach((to,from,next) => {
    console.log(to.path.includes('movie'));
    if(to.path.includes('movie')){
       if(store.currentIndex !== null) {
           next();
       }
       else{
           next({name: 'home'});
       }
    }
    else{
        next();
    }
})

export default router;