export default {
    // 首页
    Index: {
        index: '/index/index'
    },

    // 个人中心
    Home: {
        UserInfo: '/user/info'
    },

    Login: {
        SmsCode: '/v1/sms/sendCode',
        Login: '/v1/login'
    },

    Mine: {
        GetUserInfo: '/v1/user/getUserInfo',
        GetOpenId: '/v1/user/getOpenId'
    },

    MyWallet: {
        GetBalance: '/v1/user/getBalance'
    },

    Charge: {
        GetChargePackages: '/v1/user/getChargePackages',
        BookCharge: '/v1/charge/bookCharge'
    },

    Product: {
        Root: '/v1/product',
        List: '/v1/product/list'
    },

    Mech: {
        Root: '/v1/mech',
        List: '/v1/mech/list',
        SelectProduct: '/v1/mech/selectProduct'
    },

    Appoint: {
        SelectTime: '/v1/appoint/selectTime'
    }
}