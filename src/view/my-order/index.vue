<template>
  <div>
    <van-tabs v-model="active" @change="changeTab">
      <van-tab title="全部">
        <van-list 
          v-model="loading1" 
          :finished="finished1" 
          finished-text="没有更多了" 
          @load="onLoadAllOrder">
          <div 
            :key="order.id" 
            v-for="order in allOrderList">
            <div class="jishi_card">
              <p class="order_type">
                <span>{{order.bookTime}}</span>
                <span>待服务</span>
              </p>
              <div class="order_jishi_info">
                <div class="order_jishi_head">
                </div>
                <div class="order_jishi_con">
                  <p 
                    :key="product.id" 
                    class="service_pro" 
                    v-for="product in order.productList">
                    {{product.name}}
                  </p>
                  <p 
                    :key="mech.id" 
                    class="service_person" 
                    v-for="mech in order.mechList">
                    <span>服务技师</span>
                    <span>李阿芳</span>
                    <span>编号4661</span>
                  </p>
                  <p class="service_price">
                    <span>订单金额</span>
                    <span>{{order.productList | totalPrice }}元</span>
                    <span>
                      <span>实付</span>
                      <span>99元</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="待付款">
        <van-list 
          v-model="loading2" 
          :finished="finished2" 
          finished-text="没有更多了"
          @load="onLoadWaitPayOrder"
          >
          <div 
            :key="order.id" 
            v-for="order in waitPayOrderList">
            <div class="jishi_card">
              <p class="order_type">
                <span>2019-11-06 09:00:00</span>
                <span>待服务</span>
              </p>
              <div class="order_jishi_info">
                <div class="order_jishi_head">
                  <img
                    src="https://mcdn.yishengdaojia.cn/upload/20171010/2cb4e9a29955c48c6dd1405fbc41afe6.jpg"
                    alt
                  />
                </div>
                <div class="order_jishi_con">
                  <p class="service_pro">招牌Massage新用户体验</p>
                  <p class="service_person">
                    <span>服务技师</span>
                    <span>李阿芳</span>
                    <span>编号4661</span>
                  </p>
                  <p class="service_price">
                    <span>订单金额</span>
                    <span>99元</span>
                    <span>
                      <span>实付</span>
                      <span>99元</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="已完成">
        <van-list v-model="loading3" :finished="finished3" finished-text="没有更多了">
          <div>
            <div class="jishi_card">
              <p class="order_type">
                <span>2019-11-06 09:00:00</span>
                <span>待服务</span>
              </p>
              <div class="order_jishi_info">
                <div class="order_jishi_head">
                  <img
                    src="https://mcdn.yishengdaojia.cn/upload/20171010/2cb4e9a29955c48c6dd1405fbc41afe6.jpg"
                    alt
                  />
                </div>
                <div class="order_jishi_con">
                  <p class="service_pro">招牌Massage新用户体验</p>
                  <p class="service_person">
                    <span>服务技师</span>
                    <span>李阿芳</span>
                    <span>编号4661</span>
                  </p>
                  <p class="service_price">
                    <span>订单金额</span>
                    <span>99元</span>
                    <span>
                      <span>实付</span>
                      <span>99元</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="已退款">
        <van-list v-model="loading4" :finished="finished4" finished-text="没有更多了">
          <div 
            :key="order.id" 
            v-for="order in refundOrderList">
            <div class="jishi_card">
              <p class="order_type">
                <span>2019-11-06 09:00:00</span>
                <span>待服务</span>
              </p>
              <div class="order_jishi_info">
                <div class="order_jishi_head">
                  <img
                    src="https://mcdn.yishengdaojia.cn/upload/20171010/2cb4e9a29955c48c6dd1405fbc41afe6.jpg"
                    alt
                  />
                </div>
                <div class="order_jishi_con">
                  <p class="service_pro">招牌Massage新用户体验</p>
                  <p class="service_person">
                    <span>服务技师</span>
                    <span>李阿芳</span>
                    <span>编号4661</span>
                  </p>
                  <p class="service_price">
                    <span>订单金额</span>
                    <span>99元</span>
                    <span>
                      <span>实付</span>
                      <span>99元</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      allOrderList: [],
      waitPayOrderList: [],
      finishedOrderList: [],
      refundOrderList: [],
      loading1: false,
      finished1: false,
      loading2: false,
      finished2: false,
      loading3: false,
      finished3: false,
      loading4: false,
      finished4: false,
      params1: {
        page: 1,
        pageSize: 20,
        status: 1
      },
      params2: {
        page:1,
        pageSize: 20,
        status:2
      },
      params3: {
        page:1,
        pageSize:20,
        status:3
      },
      params4: {
        page: 1,
        pageSize: 20,
        status: 4
      }
    };
  },
  methods: {
    changeTab(name, title) {
      console.log(name);
    },
    onLoadAllOrder() {
      var self = this;
      this.$Progress.start();
      this.$http.post('/api/order/queryOrderListByStatus', this.params1, true)
      .then(res => {
        self.$Progress.finish();
        var resData = res.data;
        self.loading1 = true;
        if (resData.code == 0) {
          var data = resData.data;
          self.allOrderList = self.allOrderList.concat(data.list);
          var totalCount = data.totalSize;
          if (self.params1.page * self.params1.pageSize < totalCount) {
            console.log('haha')
            self.params1.page++;
          } else {
            console.log('haha3')
            self.finished1 = true;
          }
        }
      });
    },
    onLoadWaitPayOrder() {
      var self = this;
      this.$Progress.start();
      this.$http.post('/api/order/queryOrderListByStatus', this.params2, true)
      .then(res => {
        self.$Progress.finish();
        var resData = res.data;
        self.loading2 = true;
        if (resData.code == 0) {
          var data = resData.data;
          self.waitPayOrderList = self.waitPayOrderList.concat(data.list);
          var totalCount = data.totalSize;
          if (self.params2.page * self.params2.pageSize < totalCount) {
            self.params2.page++;
          } else {
            self.finished2 = true;
          }
        }
      });
    },
    onLoadFinishedOrder() {

    },
    onLoadRefundOrder() {

    }
  },
  filters: {
    totalPrice(productList) {
      console.log(productList)
      var totalPrice = 0;
      for (var product of productList) {
        totalPrice += product.sellPrice;
      }
      return totalPrice;
    },
    imageURL(productList) {
      return productList[0].imageUrl;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.jishi_card {
  margin: 10px 10px 10px 10px;
  padding: 15px 10px 10px 10px;
  background: #fff;
  .order_type {
    display: flex;
    justify-content: space-between;
  }
  .order_jishi_info {
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    .order_jishi_head {
      width: 98px;
      height: 98px;
      margin-right: 10px;
      >img {
        width: 100%;
        height: 100%;
      }
    }
    .order_jishi_con {
      color: rgba(102,102,102,1);
      font-size: 14px;
      >p:nth-child(1) {
        color: rgba(51,51,51,1) !important;
        font-size: 18px;
      }
      >p:nth-child(2) {
        display: flex;
        align-items: center;
        white-space: nowrap;
        margin-top: 10px;
        >span {
          margin-right: 10px;
        }
      }
      >p:nth-child(3) {
        display: flex;
        align-items: center;
        white-space: nowrap;
        margin-top: 10px;
        >span {
          margin-right: 10px;
          >span:nth-child(2) {
              color: #FF6633 !important;
              margin-left: 10px;
            }
        }
      }
    }
  }
  .order_pro_btn {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    >span {
      display: flex;
      font-size: 12px;
      margin-right: 10px;
      background: #fff;
      color: rgba(102,102,102,1);
      padding: 4px 8px 4px 8px;
      border: 1px solid rgb(210, 210, 210);
      border-radius: 30px;
    }
  }
}
</style>
