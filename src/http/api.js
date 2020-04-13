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
        GetOpenId: '/api/user/getOpenId'
    },

    MyWallet: {
        GetBalance: '/api/member/getBalance'
    },

    Charge: {
        GetPackages: '/api/member/getPackages',
        BookCharge: '/api/member/bookPackage'
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
        Book: '/api/appoint/saveOrder',
        SelectTime: '/v1/appoint/selectTime',
        QueryDays: '/api/appoint/queryDays',
        QueryTimes: '/api/appoint/queryTimes',
        Products: '/api/appoint/products',
        Mechs: '/api/appoint/mechs'
    },

    Order: {
        MyOrder: '/v1/order/myOrder'
    }
}