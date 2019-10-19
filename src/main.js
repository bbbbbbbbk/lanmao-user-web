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

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
