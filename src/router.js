import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '*',
        redirect: '/main'
    },
    {
        name: 'login',
        component: () => import('./view/login'),
        meta: {
            title: '登陆'
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
        name: 'my-address',
        component: () => import('./view/my-address'),
        meta: {
            title: '我的地址'
        }
    },
    {
        name: 'my-book',
        component: () => import('./view/my-book'),
        meta: {
            title: '我的预约'
        }
    },
    {
        name: 'add-address',
        component: () => import('./view/add-address'),
        meta: {
            title: '新增地址'
        }
    },
    {
        name: 'activity',
        component: () => import('./view/activity'),
        meta: {
            title: '活动'
        }
    },
    {
        name: 'activity-detail',
        component: () => import('./view/activity-detail'),
        meta: {
            title: '活动'
        }
    },
    {
        name: 'my-collect',
        component: () => import('./view/my-collect'),
        meta: {
            title: '我的收藏'
        }
    },
    {
        name: 'about-us',
        component: () => import('./view/about-us'),
        meta: {
            title: '关于我们'
        }
    },
    {
        name: 'issues',
        component: () => import('./view/issues'),
        meta: {
            title: '常见问题'
        }
    },
    {
        name: 'setting',
        component: () => import('./view/setting'),
        meta: {
            title: '设置'
        }
    },
    {
        name: 'after-service',
        component: () => import('./view/after-service'),
        meta: {
            title: '售后服务'
        }
    },
    {
        name: 'my-coupon',
        component: () => import('./view/my-coupon'),
        meta: {
            title: '优惠券'
        }
    },
    {
        name: 'user-evaluate',
        component: () => import('./view/user-evaluate'),
        meta: {
            title: '用户评价'
        }
    },
    {
        name: 'index',
        path: '/index/:name',
        component: () => import('./view/index'),
        children: [
            {
                path: '/main',
                name: 'main',
                component: () => import('./view/main'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/mech',
                name: 'mech',
                component: () => import('./view/mech'),
                meta: {
                    title: '技师'
                }
            },
            {
                path: '/mine',
                name: 'mine',
                component: () => import('./view/mine'),
                meta: {
                    title: '我的'
                }
            },
            {
                path: '/book',
                name: 'book',
                component: () => import('./view/book'),
                meta: {
                    title: '预定'
                }
            }
        ]
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