import Vue from 'vue';
import Vuex from 'vuex';
import http from '../http/http';
import api from '../http/api';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 0,
      appointAddress: '上海 张杨路628弄4-10号 繁荣昌盛小区 9号楼901',
      appointGuest: [
          {
              productList: [],
              mechList: []
          }
      ]
    },
    mutations: {
      increment (state) {
        state.count++
      },
      chooseAddress (state, address) {
        state.appointAddress = address;
      },
      chooseAppointProduct(state, temp) {
        state.appointGuest[temp.index].productList.push(temp.data);
      },
      chooseAppointMech(state, temp) {
        state.appointGuest[temp.index].mechList.push(temp.data);
      },
      setDefaultGuest(state) {
          
      },
      loadGuestData(state, data) {
        state.appointGuest = [
            {
              productList: [],
              mechList: []
            }
        ];
        var productId = data.productId;
        var mechId = data.mechId;
        if (productId) {
            //如果传过来了项目Id
            http
              .get(api.Product.Root + "/" + productId, {}, false)
              .then(res => {
                var resData = res.data;
                if (resData.code == 0) {
                    state.appointGuest[0].productList.push(resData.data);
                }
              });
          }
          if (mechId) {
            http
              .get(api.Mech.Root + "/" + mechId, {}, false)
              .then(res => {
                var resData = res.data;
                if (resData.code == 0) {
                    state.appointGuest[0].mechList.push(resData.data);
                }
              });
          }
      }
    }
  });

  export default store;