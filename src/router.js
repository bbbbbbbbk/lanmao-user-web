import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '*',
        redirect: '/main'
    },
    {
        name: 'main',
        component: () => import('./view/main'),
        meta: {
            title: '首页'
        }
    },
    {
        name: 'login',
        component: () => import('./view/login'),
        meta: {
            title: '登陆'
        }
    },
    {
        name: 'mine',
        component: () => import('./view/mine'),
        meta: {
            title: '我的'
        }
    },
    {
        name: 'my-order',
        component: () => import('./view/my-order'),
        meta: {
            title: '我的订单'
        }
    },
    {
        name: 'book',
        component: () => import('./view/book'),
        meta: {
            title: '预定'
        }
    }
];

// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export {
    router
};