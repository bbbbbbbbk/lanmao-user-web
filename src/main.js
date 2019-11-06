import Vue from 'vue'
import App from './App.vue'
import { router } from './router';
import { Tabbar, TabbarItem } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { List } from 'vant';
import { Image } from 'vant';
import { Lazyload } from 'vant';
import { Tab, Tabs } from 'vant';
import { Grid, GridItem } from 'vant';
import { Icon } from 'vant';
import { Row, Col } from 'vant';
import { Popup } from 'vant';
import { CouponCell, CouponList } from 'vant';
import { Rate } from 'vant';
import { SubmitBar } from 'vant';
import { Toast } from 'vant';
import { Notify } from 'vant';
import { Dialog } from 'vant';
import { AddressList } from 'vant';
import { AddressEdit } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { PasswordInput, NumberKeyboard } from 'vant';

import './http/axios'
import http from './http/http';
import api from './http/api';

//css
import './css/common.css'

import store from './store';

Vue.use(Button);
Vue.use(Field);
Vue.use(Tabbar)
Vue.use(TabbarItem);
Vue.use(Cell).use(CellGroup);
Vue.use(Swipe).use(SwipeItem);
Vue.use(List);
Vue.use(Image);
Vue.use(Lazyload);
Vue.use(Tab).use(Tabs);
Vue.use(Grid).use(GridItem);
Vue.use(Icon);
Vue.use(Row).use(Col);
Vue.use(Popup);
Vue.use(CouponCell).use(CouponList);
Vue.use(Rate);
Vue.use(SubmitBar);
Vue.use(Toast);
Vue.use(Notify);
Vue.use(Dialog);
Vue.use(AddressList);
Vue.use(AddressEdit);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(PasswordInput).use(NumberKeyboard);

// 对后端接口 进行全局注册
Vue.prototype.$api = api;
// 对请求方式 进行全局注册
Vue.prototype.$http = http;

Vue.config.productionTip = false

import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

router.beforeEach((to, from, next) => {
  next();
})

router.afterEach((to, from) => {

  // ...
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
