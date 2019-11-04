<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="全部">
        <van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoadAllOrder">
          <div v-for="order in allOrderList">
            <div class="jishi_card">
              <p class="order_type">
                <span>{{order.bookTime}}</span>
                <span>待服务</span>
              </p>
              <div class="order_jishi_info">
                <div class="order_jishi_head">
                  <img
                    :src="order.productList | imageURL"
                    alt
                  />
                  <!---->
                  <!---->
                </div>
                <div class="order_jishi_con">
                  <p class="service_pro" v-for="product in order.productList">
                    {{product.name}}
                  </p>
                  <p class="service_person" v-for="mech in order.mechList">
                    <span>服务技师</span>
                    <span>李阿芳</span>
                    <span>编号4661</span>
                  </p>
                  <!---->
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
              <p class="order_pro_btn">
                <span style="border: 1px solid rgb(210, 210, 210);">取消订单</span>
                <!---->
                <!---->
                <span style="border: 1px solid rgb(210, 210, 210);">修改时间</span>
                <span style="border: 1px solid rgb(210, 210, 210);">追加项目</span>
                <span class="order_again">再次预约</span>
                <!---->
              </p>
            </div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="待付款">
        <van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoadWaitPayOrder">
          <div v-for="order in waitPayOrderList">
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
                  <!---->
                  <!---->
                </div>
                <div class="order_jishi_con">
                  <p class="service_pro">招牌Massage新用户体验</p>
                  <p class="service_person">
                    <span>服务技师</span>
                    <span>李阿芳</span>
                    <span>编号4661</span>
                  </p>
                  <!---->
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
              <p class="order_pro_btn">
                <span style="border: 1px solid rgb(210, 210, 210);">取消订单</span>
                <!---->
                <!---->
                <span style="border: 1px solid rgb(210, 210, 210);">修改时间</span>
                <span style="border: 1px solid rgb(210, 210, 210);">追加项目</span>
                <span class="order_again">再次预约</span>
                <!---->
              </p>
            </div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="已完成">
        <van-list v-model="loading3" :finished="finished3" finished-text="没有更多了" @load="onLoadFinishedOrder">
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
                  <!---->
                  <!---->
                </div>
                <div class="order_jishi_con">
                  <p class="service_pro">招牌Massage新用户体验</p>
                  <p class="service_person">
                    <span>服务技师</span>
                    <span>李阿芳</span>
                    <span>编号4661</span>
                  </p>
                  <!---->
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
              <p class="order_pro_btn">
                <span style="border: 1px solid rgb(210, 210, 210);">取消订单</span>
                <!---->
                <!---->
                <span style="border: 1px solid rgb(210, 210, 210);">修改时间</span>
                <span style="border: 1px solid rgb(210, 210, 210);">追加项目</span>
                <span class="order_again">再次预约</span>
                <!---->
              </p>
            </div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="已退款">
        <van-list v-model="loading4" :finished="finished4" finished-text="没有更多了" @load="onLoadRefundOrder">
          <div v-for="order in refundOrderList">
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
                  <!---->
                  <!---->
                </div>
                <div class="order_jishi_con">
                  <p class="service_pro">招牌Massage新用户体验</p>
                  <p class="service_person">
                    <span>服务技师</span>
                    <span>李阿芳</span>
                    <span>编号4661</span>
                  </p>
                  <!---->
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
              <p class="order_pro_btn">
                <span style="border: 1px solid rgb(210, 210, 210);">取消订单</span>
                <!---->
                <!---->
                <span style="border: 1px solid rgb(210, 210, 210);">修改时间</span>
                <span style="border: 1px solid rgb(210, 210, 210);">追加项目</span>
                <span class="order_again">再次预约</span>
                <!---->
              </p>
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
      allOrderPageParams: {
        page: 1,
        pageSize: 10,
        params: {

        }
      }
    };
  },
  methods: {
    onLoadAllOrder() {
      var self = this;
      var page = this.allOrderPageParams.page;
      let pageSize = this.allOrderPageParams.pageSize;
      this.$http.post(this.$api.Order.MyOrder, this.allOrderPageParams, false)
      .then(res => {
        var resData = res.data;
        self.loading1 = false;
        if (resData.code == 0) {
          var data = resData.data;
          self.allOrderList = self.allOrderList.concat(data.list);
          var totalCount = data.totalCount;
          if (page * pageSize < totalCount) {
            self.allOrderPageParams.page++;
          } else {
            self.finished1 = true;
          }
        }
      })
    },
    onLoadWaitPayOrder() {

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
