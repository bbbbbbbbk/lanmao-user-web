import storage from 'store2';

// 缓存数据的key
const VUEX_STATE = 'vuex-state';

export default {
    setState: function (val) {
        if (!val) {
            storage.remove(VUEX_STATE);
        } else {
            storage.set(VUEX_STATE, val);
        }
    },
    getState() {
        var state = storage.get(VUEX_STATE);
        if (!state) {
            return {
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
            };
        }
        return state;
    }
}