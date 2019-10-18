import Vue from 'vue'
import App from './App.vue'
import {router} from './router';
import { Tabbar, TabbarItem } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';

Vue.use(Button);
Vue.use(Field);
Vue.use(Tabbar)
Vue.use(TabbarItem);
Vue.use(Cell).use(CellGroup);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
