import Vue from 'vue';
import Vuex from 'vuex';
import http from '../http/http';
import api from '../http/api';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    userInfo: {

    },
    bookData: {
      address: '',
      mobile: '',
      name: '',
      remark: '',
      bookTime: '',
      guests: [
        {
          products: [],
          mechs: []
        }
      ]
    }
  },
  mutations: {
    loadUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    chooseAddress(state, address) {
      state.bookData.address = address;
    },
    chooseBookTime(state, bookTime) {
      state.bookData.bookTime = bookTime;
    },
    loadGuestData(state, data) {
      http
        .get(api.Mine.GetUserInfo, null, false)
        .then(res => {
          console.log(res);
          const resultData = res.data;
          if (resultData.code == 0) {
            state.userInfo = resultData.data;
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
                  }
                });
            }
          }
        });

    }
  }
});

export default store;