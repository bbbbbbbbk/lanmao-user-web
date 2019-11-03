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
      var productId = data.productId;
      var mechId = data.mechId;
      state.bookData = storage.getDefaultState().bookData;
      http
        .get(api.Mine.GetUserInfo, null, false)
        .then(res => {
          console.log(res);
          const resultData = res.data;
          if (resultData.code == 0) {
            state.userInfo = resultData.data;
            state.bookData.linkMobile = resultData.data.mobile;
            state.bookData.linkName = resultData.data.name;
            storage.setState(state);
            if (productId) {
              //如果传过来了项目Id
              http
                .get(api.Product.Root + "/" + productId, {}, false)
                .then(res => {
                  var resData = res.data;
                  if (resData.code == 0) {
                    console.log(state)
                    state.bookData.guestList[0].productList.push(resData.data);
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
                    state.bookData.guestList[0].mechList.push(resData.data);
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