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
    initState() {
        storage.remove(VUEX_STATE);
        storage.set(VUEX_STATE, this.getDefaultState());
    },
    getDefaultState() {
        return {
            userInfo: {

            },
            bookData: {
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
            }
        };
    },
    getState() {
        var state = storage.get(VUEX_STATE);
        if (!state) {
            return this.getDefaultState();
        }
        return state;
    }
}