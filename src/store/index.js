import Vue from 'vue';
import Vuex from 'vuex';
import http from '../http/http';
import api from '../http/api';
import storage from '../storage';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: storage.getState(),
  mutations: {
    initState(state) {
      state.bookData = {
        address: '请选择您的预约地址',
        linkMobile: '',
        linkName: '',
        remark: '',
        bookTime: '请选择您的预约时间',
        guests: [
            {
                products: [],
                mechList: []
            }
        ],
        addressId: 0
      };
      storage.initState();
    },
    commitState(state) {
      storage.setState(state);
    },
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
    }
  }
});

export default store;