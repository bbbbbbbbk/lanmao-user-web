import Vue from 'vue';
import Vuex from 'vuex';
import http from '../http/http';
import api from '../http/api';
import storage from '../storage';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: storage.getState(),
  mutations: {
    loadUserInfo(state, userInfo) {
      state.userInfo = userInfo;
      storage.setState(state);
    },
    chooseAddress(state, address) {
      state.bookData.address = address;
      storage.setState(state);
    },
    chooseBookTime(state, bookTime) {
      state.bookData.bookTime = bookTime;
      storage.setState(state);
    },
    loadGuestData(state, data) {
      http
        .get(api.Mine.GetUserInfo, null, false)
        .then(res => {
          console.log(res);
          const resultData = res.data;
          if (resultData.code == 0) {
            state.userInfo = resultData.data;
            storage.setState(state);
            state.bookData = {
              address: '请选择您的预约地址',
              mobile: state.userInfo.mobile,
              name: state.userInfo.name,
              remark: '',
              bookTime: '请选择您的预约时间',
              guests: [
                {
                  products: [],
                  mechs: []
                }
              ]
            };
            var productId = data.productId;
            var mechId = data.mechId;
            if (productId) {
              //如果传过来了项目Id
              http
                .get(api.Product.Root + "/" + productId, {}, false)
                .then(res => {
                  var resData = res.data;
                  if (resData.code == 0) {
                    state.bookData.guests[0].products.push(resData.data);
                    storage.setState(state);
                  }
                });
            }
            if (mechId) {
              http
                .get(api.Mech.Root + "/" + mechId, {}, false)
                .then(res => {
                  var resData = res.data;
                  if (resData.code == 0) {
                    state.bookData.guests[0].mechs.push(resData.data);
                    storage.setState(state);
                  }
                });
            }
          }
        });

    }
  }
});

export default store;