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
                <span>{{order.shop.name}}</span>
                <span class="o_status">待服务</span>
              </p>
              <p>
                <span>{{order.bookTime}}</span>
              </p>
              <p
                class="p_item"
                :key="product.id" 
                v-for="product in order.productList">
                <span 
                >
                {{product.productName}}
                </span>
              </p>
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
                <span>{{order.shop.name}}</span>
                <span>待服务</span>
              </p>
              <p>
                <span>{{order.bookTime}}</span>
              </p>
              <p
                class="p_item"
                :key="product.id" 
                v-for="product in order.productList">
                <span 
                >
                {{product.productName}}
                </span>
              </p>
            </div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="待消费">
        <van-list 
          v-model="loading3" 
          :finished="finished3" 
          finished-text="没有更多了"
          @load="onLoad3">
          <div 
            :key="order.id"
            v-for="order in finishedOrderList">
            <div class="jishi_card">
              <p class="order_type">
                <span>{{order.shop.name}}</span>
                <span>待服务</span>
              </p>
              <p>
                <span>{{order.bookTime}}</span>
              </p>
              <p
                class="p_item"
                :key="product.id" 
                v-for="product in order.productList">
                <span 
                >
                {{product.productName}}
                </span>
              </p>
            </div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="已退款">
        <van-list 
          v-model="loading4" 
          :finished="finished4" 
          finished-text="没有更多了"
          @load="onLoad4">
          <div 
            :key="order.id" 
            v-for="order in refundOrderList">
            <div class="jishi_card">
              <p class="order_type">
                <span>{{order.shop.name}}</span>
                <span>待服务</span>
              </p>
              <p>
                <span>{{order.bookTime}}</span>
              </p>
              <p
                class="p_item"
                :key="product.id" 
                v-for="product in order.productList">
                <span 
                >
                {{product.productName}}
                </span>
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
          data.list.forEach(order => {
            var products = [];
            order.guestList.forEach(guest => {
              guest.productList.forEach(product => {
                products.push(product);
              })
            });
            order.productList = products;
          });
          console.log(data);
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
          data.list.forEach(order => {
            var products = [];
            order.guestList.forEach(guest => {
              guest.productList.forEach(product => {
                products.push(product);
              })
            });
            order.productList = products;
          });
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
    onLoad3() {
      var self = this;
      this.$Progress.start();
      this.$http.post('/api/order/queryOrderListByStatus', this.params3, true)
      .then(res => {
        self.$Progress.finish();
        var resData = res.data;
        self.loading3 = true;
        if (resData.code == 0) {
          var data = resData.data;
          data.list.forEach(order => {
            var products = [];
            order.guestList.forEach(guest => {
              guest.productList.forEach(product => {
                products.push(product);
              })
            });
            order.productList = products;
          });
          self.finishedOrderList = self.finishedOrderList.concat(data.list);
          var totalCount = data.totalSize;
          if (self.params3.page * self.params3.pageSize < totalCount) {
            self.params3.page++;
          } else {
            self.finished3 = true;
          }
        }
      });
    },
    onLoad4() {
      var self = this;
      this.$Progress.start();
      this.$http.post('/api/order/queryOrderListByStatus', this.params4, true)
      .then(res => {
        self.$Progress.finish();
        var resData = res.data;
        self.loading4 = true;
        if (resData.code == 0) {
          var data = resData.data;
          data.list.forEach(order => {
            var products = [];
            order.guestList.forEach(guest => {
              guest.productList.forEach(product => {
                products.push(product);
              })
            });
            order.productList = products;
          });
          self.refundOrderList = self.refundOrderList.concat(data.list);
          var totalCount = data.totalSize;
          if (self.params4.page * self.params4.pageSize < totalCount) {
            self.params4.page++;
          } else {
            self.finished4 = true;
          }
        }
      });
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
  .o_status {
    color: skyblue;
  }
  .p_item {
    margin-top: 5px;
    font-size: 15px;
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
