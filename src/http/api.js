export default {
    // 首页
    Index: {
        index: '/index/index',
        QueryBanners: '/api/queryBanners',
        RecommShop:'/api/shop/recommShop'
    },

    Shop: {
        List: '/api/shop/list'
    },

    // 个人中心
    Home: {
        UserInfo: '/user/info'
    },

    Login: {
        SmsCode: '/api/sms/send',
        Login: '/api/login'
    },

    Mine: {
        GetUserInfo: '/api/userInfo',
        GetOpenId: '/v1/user/getOpenId'
    },

    MyWallet: {
        GetBalance: '/api/member/getBalance'
    },

    Charge: {
        GetPackages: '/api/member/getPackages',
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
        Book: '/v1/appoint/book',
        SelectTime: '/v1/appoint/selectTime'
    },

    Order: {
        MyOrder: '/v1/order/myOrder'
    }
}