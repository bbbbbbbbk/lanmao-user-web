<template>
  <div>
    <div class="order-address">
      <p class="order-user-info">
        <span>{{bookData.linkName}}</span>
        <span>{{bookData.linkMobile}}</span>
      </p>
      <div class="order_time">
        <span>预约时间</span>
        <p @click="chooseTime">
          <span>{{bookData.bookTime}}</span>
          <i></i>
        </p>
      </div>
    </div>
    <p class="appoint-num">
      <span>预约人数</span>
      <span>
        <span @click="minusGuest">-</span>
        <span>{{guestCount}}</span>
        <span @click="plusGuest">+</span>
      </span>
    </p>
    <div 
      class="order-guest" 
      v-for="(guest,index) in bookData.guests" :key="guest.id">
      <p class="guest-p">
        <span>预约人{{index + 1}}:</span>
        <span>
          <span @click="chooseProduct(guest)">选择项目</span>
          <!-- <span @click="chooseMech">选择技师</span> -->
        </span>
      </p>
      <div
        class="order-project" 
        >
        <div class="order-pro-info">
          <div>
            <p 
              :key="index" 
              v-for="(product, index) in guest.products">
              {{product.name}} x {{product.count}}
            </p>
          </div>
        </div>
      </div>
      <div 
        :key="index" 
        class="order_jishi_info" 
        v-for="(mech, index) in guest.mechList">
        <div class="jishi_li">
          <div class="jishi_con">
            <div class="jishi_head">
              <img :src="mech.avatar" alt />
              <i
                class="person-hot"
                style="width: 0.5rem; height: 0.3rem; background-image: url(&quot;https://mcdn.yishengdaojia.cn/upload/20190717/a72a8229f4e2c32fe24f48fd0d99b0af.png&quot;);"
              ></i>
            </div>
            <div class="jishi_info">
              <p class="jishi_juli"></p>
              <p class="jishi_name">
                <span>{{mech.name}}</span>
                <i
                  style="margin-left: 0.14rem; width: 0.99rem; height: 0.46rem; background-image: url(&quot;https://mcdn.yishengdaojia.cn/upload/20190711/b62750402d0f59184fad0093868b0fe7.png&quot;);"
                ></i>
                <i
                  style="margin-left: 0.14rem; width: 0.81rem; height: 0.3rem; background-image: url(&quot;https://mcdn.yishengdaojia.cn/upload/20190727/a2190c9b93d1f848e7e74fa21fefa974.png&quot;);"
                ></i>
              </p>
              <p class="jishi_type">
                <span>中医</span>
                <span>5年经验</span>
              </p>
              <p class="jishi_pj">
                <span>好评率</span>
                <span class="jishi_pj_active">100%</span>
                <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                <span>累计服务</span>
                <span class="jishi_pj_active">1k</span>
                <span>次</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order-msg">
      <span>备注</span>
      <input type="text" placeholder="如有其它需要请留言" />
    </div>
    <div class="pay-btn">
      <span>
        应付金额:
        <span>¥{{totalPrice}}</span>
      </span>
      <span @click="goConfirm">
        <a class="order_btn_now">立即预约</a>
      </span>
    </div>
    <!-- 弹窗 -->
    <van-popup v-model="showPickTime" position="bottom" closeable>
      <div class="main-pick-time">
        <div class="choose_time">
          <div class="slide_tab_top">
            <div class="slide_ul">
              <div 
                :key="day.id" 
                class="slide_li" 
                @click="selectOneDay(day)" 
                v-for="day in days" 
                :class="selectDay == day.day ? 'tab_slide_active': '' ">
                <p>{{day.showDay}}</p>
                <p :class="selectDay == day.day ? 'tab_line_active' : '' "></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide_tab_con">
        <div 
          :key="item.id" 
          class="slide_tab_con_li" 
          v-for="item in timeBlockList"
          >
          <p class="time_title">
            <span>{{item.title}}</span>
            <span>{{item.text}}</span>
          </p>
          <div class="time_ul">
            <div
              :key="timeUnit.id"
              class="time_li"
              v-for="timeUnit in item.timeUnitList"
              @click="selectTime = timeUnit.time">
              <div
                class="time_blcok"
                :class="selectTime == timeUnit.time ? 'choose_time_style' : '' "
              >
                <div>
                  <p>{{timeUnit.time}}</p>
                  <p>{{timeUnit.fullText}}</p>
                </div>
              </div>
            </div>
            <div style="clear: both;"></div>
          </div>
        </div>
      </div>
      <div class="choose-btn">
        <p @click="sureChooseTime">确定选择</p>
      </div>
    </van-popup>
    <!-- 选择技师-->
    <van-popup v-model="showPickMech" position="bottom" closeable>
      <ul class="d_mech">
        <li 
          :key="mech" 
          v-for="mech in mechs" 
          @click="clickMech(mech)" 
          :class="mech.select ? 'active' : ''">
          <img :src="mech.imageUrl" />
          <span>{{mech.name}}</span>
          <span>{{mech.mechNo}}</span>
        </li>
      </ul>
      <div class="choose-btn">
        <p @click="sureChooseTime">确定</p>
      </div>
    </van-popup>
    <!-- 选择项目-->
    <van-popup v-model="showPickProduct" position="bottom" closeable>
      <ul class="d_product">
        <li 
          :key="product.id" 
          v-for="product in products">
          <span>{{product.name}}</span>
          <span>
            <span>¥{{product.sellPrice}}</span>
            <span>
              <span @click="minusP(product)">-</span>
              <span>{{product.count}}</span>
              <span @click="plusP(product)">+</span>
            </span>
          </span>
        </li>
      </ul>
      <div class="choose-btn">
        <p @click="sureChooseProduct">确定</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      appointTime: "请选择您的预约时间",
      showPickTime: false,
      showPickMech: false,
      showPickProduct: false,
      timeBlockList: [],
      selectTime: "",
      selectDay: '',
      products: [],
      mechs:[],
      selectMech:[],
      selGuest: {},
      days: [],
      guestCount: 1
    };
  },
  computed: {
    address() {
      return this.$store.state.appointAddress;
    },
    bookData() {
      return this.$store.state.bookData;
    },
    totalPrice() {
      var guestList = this.$store.state.bookData.guests;
      var totalPrice = 0;
      for (let guest of guestList) {
        var productList = guest.products;
        for (let product of productList) {
          totalPrice += product.sellPrice;
        }
      }
      return totalPrice;
    }
  },
  mounted() {
    console.log(this.$route.query);
    this.bookData.shopId = this.$route.query.shopId;
    this.getBookDay();
  },
  methods: {
    goConfirm() {
      this.$store.commit('commitState');
      this.$router.push({
        path: "/order-confirm"
      });
    },
    chooseAddress() {
      this.$router.push({
        path: "/my-address"
      });
    },
    chooseTime() {
      this.showPickTime = !this.showPickTime;
      this.getBookDay();
    },
    getBookDay() {
      var self = this;
      this.$http.get(this.$api.Appoint.QueryDays, null, false)
      .then(res => {
        var resData = res.data;
        if (resData.code == 0) {
          self.days = resData.data;
          if (self.days.length > 0) {
            self.selectDay = self.days[0].day;
            self.getBookTimes(self.days[0].day);
          }
        }
      })
    },
    getBookTimes(day) {
      var self = this;
      var params = {
          day: day,
          shopId: self.$route.query.shopId
      }
      self.$http.post(self.$api.Appoint.QueryTimes, params, false)
        .then(res => {
          var resData = res.data;
          var pmList = resData.data.pmList;
          var amList = resData.data.amList;
          self.timeBlockList = [];
          if (amList && amList.length > 0) {
              self.timeBlockList.push({
                title: '上午',
                text: '11:00~17:00',
                timeUnitList: amList
              })
          }
          if (pmList && pmList.length > 0) {
              self.timeBlockList.push({
                title: '下午',
                text: '17:00~23:00',
                timeUnitList: pmList
              })
          }
        });
    },
    selectOneDay(day) {
      this.selectDay = day.day;
      this.getBookTimes(day.day);
    },
    sureChooseTime() {
      if (!this.selectDay) {
        this.$toast('请选择日期');
        return;
      }
      if(!this.selectTime) {
        this.$toast('请选择时间');
        return;
      }
      this.showPickTime = !this.showPickTime;
      var bookTime = this.selectDay + ' ' + this.selectTime + ':00'
      this.$store.commit("chooseBookTime", bookTime);
    },
    sureChooseProduct() {
      this.showPickProduct = !this.showPickProduct;
      var self = this;
      var productList = [];
      this.products.forEach(item => {
        if (item.count > 0) {
          productList.push(item);
        }
      });
      this.selGuest.products = productList;
    },
    chooseProduct(guest) {
      this.selGuest = guest;
      this.showPickProduct = !this.showPickProduct;
      var self = this;
      var params = {
        shopId: this.$route.query.shopId,
        bookTime: this.selectDay + ' ' + this.selectTime
      }
      this.$http.post(this.$api.Appoint.Products, params, false)
        .then(res => {
          var resData = res.data;
          resData.data.forEach(item => {
            item.count = 0;
          })
          self.products = resData.data;
        })
    },
    plusGuest() {
      this.guestCount++;
      this.bookData.guests.push(
         {
           products: [],
           mechList: []
          }
      );
    },
    minusGuest() {
      if (this.guestCount > 1) {
        this.guestCount--;
        this.bookData.guests.pop();
      }
    },
    minusP(product) {
      if (product.count > 0) {
        product.count--;
      }
    },
    plusP(product) {
      product.count++;
    },
    chooseMech() {
      this.showPickMech = !this.showPickMech;
      var self = this;
      console.log(this.$route.query.shopId)
      var params = {
        shopId: this.$route.query.shopId
      }
      this.$http.get(this.$api.Appoint.Mechs, params, false)
        .then(res => {
          var resData = res.data;
          if (resData.code == 0) {
            self.mechs = resData.data;
          }
        })
    },
    clickMech(mech) {
      console.log(mech)
      mech.select = !mech.select;
    }
  },
  beforeRouteLeave(to, from, next) {
    next();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.d_mech {
  margin-top: 50px;
  height: 180px;
  padding: 10px;
  overflow-y: scroll;
  >li{
    float: left;
    list-style: none;
    margin-left: 5px;
    text-align: center;
    font-size: 10px;
    border: 1px solid #ccc;
    padding: 0 0 10px 0;
    >img:nth-child(1) {
      width: 80px;
      height: 110px;
    }
    >span{
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
  >li.active{
    border: 1px solid #f63;
  }
}
.d_product {
  margin-top: 50px;
  >li{
    padding: 5px;
    margin: 20px 0 20px 0;
    font-size: 15px;
    border-bottom: 1px solid #f2f2f2;
    >span:nth-child(1) {
      
    }
    >span:nth-child(2) {
      float: right;
      >span:nth-child(1) {
        margin-right: 10px;
        color: #f63;
      }
      >span:nth-child(2) {
        >span:nth-child(1) {
          border: 1px solid #ccc;
          padding: 8px 10px;
        }
        >span:nth-child(2) {
          border: 1px solid #ccc;
          padding: 8px 10px;
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
        }
        >span:nth-child(3) {
          border: 1px solid #ccc;
          padding: 8px 10px;
        }
      }
    }
  }
}
.appoint-num {
  padding-left: 10px;
  font-size: 15px;
  padding: 10px 10px 10px 10px;
  >span:nth-child(2) {
    float: right;
    >span:nth-child(1) {
      border: 1px solid #ccc;
      padding: 8px 10px;
    }
    >span:nth-child(2) {
      border: 1px solid #ccc;
      padding: 8px 10px;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
    }
    >span:nth-child(3) {
      border: 1px solid #ccc;
      padding: 8px 10px;
    }
  }
}
.order-guest {
}
.order-address {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  .order-user-info {
    color: #333;
    padding-left: 35px;
    font-size: 12px;
    span:nth-child(1) {
      font-size: 16px !important;
      margin-right: 10px;
    }
  }
  .order-user-add {
    display: flex;
    margin: 10px 0 10px 0;
    > i {
      display: inline-block;
      width: 15px;
      height: 20px;
      background: url(../../assets/order-address.png) no-repeat;
      background-size: 100%;
      position: relative;
      left: 10px;
      top: 5px;
    }
    > div {
      margin-left: 18px;
      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: #666;
        font-size: 16px;
      }
      i {
        display: inline-block;
        width: 9.3px;
        height: 14px;
        background: url(../../assets/toadd.png) no-repeat;
        background-size: 100%;
      }
    }
  }
  .order_time {
    display: flex;
    align-items: center;
    margin-top: 10px;
    > span {
      width: 80px;
      font-size: 14px;
    }
    > p {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      span {
        font-size: 12px;
        color: rgba(255, 102, 51, 1);
        margin-right: 10px;
      }
      i {
        display: inline-block;
        width: 8px;
        height: 15px;
        background: url(../../assets/toperson.png) no-repeat;
        background-size: 100%;
      }
    }
  }
}
.pay-btn {
  position: fixed;
  bottom: 0;
  max-width: 750px;
  width: 100%;
  height: 50px;
  display: flex;
  z-index: 5;
  align-items: center;
  background: #fff;
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  > span:nth-child(1) {
    color: #292621;
    font-size: 16px;
    span {
      color: #ff6633 !important;
      margin-left: 10px;
    }
  }
  > span:nth-child(2) {
    color: #fff;
    background: #66c72a;
    font-size: 16px;
  }
}
.order-msg {
  margin: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 60px;
  span {
    font-size: 15px;
    margin-left: 10px;
  }
  input {
    margin-left: 20px;
    font-size: 15px;
  }
}
.order_jishi_info {
  background: #fff;
  border-radius: 10px;
  margin: 10px;
  .jishi_con {
    display: flex;
    align-items: flex-start;
    .jishi_head {
      width: 90px;
      height: 90px;
      margin: 10px;
    }
    .jishi_info {
      width: calc(100% - 90px);
      p {
        display: flex;
        align-items: center;
        margin-top: 10px;
      }
      .jishi_name {
        font-size: 15px;
      }
    }
  }
}
.order-project {
  background: #fff;
  border-radius: 10px;
  margin: 10px;
  .order-pro-info {
    display: flex;
    padding: 10px;
    img {
      width: 120px;
      height: 90px;
    }
    > div {
      margin-left: 10px;
    }
    > div p {
      margin-top: 10px;
      font-size: 16px;
    }
  }
}
.main-pick-time {
  .slide_ul {
    width: auto;
    white-space: nowrap;
    overflow-y: hidden;
    margin-top: 40px;
    .slide_li {
      display: inline-block;
      margin: 10px;
      position: relative;
    }
    .tab_line_active {
      width: 40px;
      height: 4px;
      background: rgba(102, 199, 42, 1);
      border-radius: 0.04rem;
      position: absolute;
      bottom: -5px;
      left: 30%;
      margin-left: -10px;
    }
  }
}
.slide_tab_con {
  padding: 10px;
  max-height: 500px;
  overflow-y: scroll;
  .time_title {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
}
.time_li {
  float: left;
  display: flex;
  font-size: 15px;
  margin-right: 5px;
  margin-bottom: 5px;
  > div {
    border: 1px solid rgba(220, 220, 220, 1);
    color: rgba(77, 184, 72, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 50px;
  }
}
.choose-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    background: rgba(102, 199, 42, 1);
    border-radius: 30px;
    font-size: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 220px;
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
  }
}
.choose_time_style {
  background: rgba(77, 184, 72, 1) !important;
  color: #fff !important;
  border: 1px solid rgba(77, 184, 72, 1) !important;
}
.guest-p {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 5px 10px;
  > div {
    display: inline-block;
  }
  > span:nth-child(1) {
    font-size: 13px;
  }
  > span:nth-child(2) {
    margin-right: 10px;
    font-size: 12px;
    > span:nth-child(1) {
      color: #fff;
      background: rgba(77, 184, 72, 1) !important;
      border-radius: 10px;
      padding: 5px 10px 5px 10px;
      margin-right: 20px;
    }
    > span:nth-child(2) {
      color: #fff;
      background: rgba(77, 184, 72, 1) !important;
      border-radius: 10px;
      padding: 5px 10px 5px 10px;
    }
  }
}
</style>
