<template>
  <div>
    <div class="order-address">
      <p class="order-user-info">
        <span>莫胜磊</span>
        <span>17521250205</span>
      </p>
      <div class="order-user-add" @click="chooseAddress">
        <i></i>
        <div>
          <a href="javascript:void(0)">
            <p>上海 张杨路628弄4-10号 繁荣昌盛小区 9号楼901</p>
            <i></i>
          </a>
        </div>
      </div>
      <div class="order_time">
        <span>预约时间</span>
        <p @click="chooseTime">
          <span>{{appointTime}}</span>
          <i></i>
        </p>
      </div>
    </div>
    <div>预约人数</div>
    <div class="order-guest" v-for="guest in guestList" :key="guest.id">
      <p class="guest-p">
        <span>{{guest.name}}:</span>
        <span>
          <span @click="chooseProduct">选择项目</span>
          <span @click="chooseMech">选择技师</span>
        </span>
      </p>
      <div class="order-project">
        <div class="order-pro-info">
          <img
            src="https://mcdn.yishengdaojia.cn/upload/20170830/04c7785db10ac5f0561868519e1e5932.jpg"
            alt
          />
          <div>
            <p>中医对症金牌调理</p>
            <p>中医对症，金牌调理</p>
            <p>60分钟</p>
          </div>
        </div>
      </div>
      <div class="order_jishi_info">
        <div class="jishi_li">
          <div class="jishi_con">
            <div class="jishi_head">
              <img
                src="https://mcdn.yishengdaojia.cn/upload/20190925/f34114665356581fbcafd9f7c1745b6c.jpg"
                alt
              />
              <i
                class="person-hot"
                style="width: 0.5rem; height: 0.3rem; background-image: url(&quot;https://mcdn.yishengdaojia.cn/upload/20190717/a72a8229f4e2c32fe24f48fd0d99b0af.png&quot;);"
              ></i>
            </div>
            <div class="jishi_info">
              <p class="jishi_juli"></p>
              <p class="jishi_name">
                <span>顾根俊</span>
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
        <span>¥66</span>
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
              <div class="slide_li">
                <p>今天</p>
                <p>11-02</p>
                <!---->
              </div>
              <div class="slide_li tab_slide_active">
                <p>明天</p>
                <p>11-03</p>
                <p class="tab_line_active"></p>
              </div>
              <div class="slide_li">
                <p>周一</p>
                <p>11-04</p>
                <!---->
              </div>
              <div class="slide_li">
                <p>周二</p>
                <p>11-05</p>
                <!---->
              </div>
              <div class="slide_li">
                <p>周三</p>
                <p>11-06</p>
                <!---->
              </div>
              <div class="slide_li">
                <p>周四</p>
                <p>11-07</p>
                <!---->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide_tab_con">
        <div class="slide_tab_con_li" v-for="item in timeBlockList">
          <p class="time_title">
            <span>{{item.title}}</span>
            <span>{{item.text}}</span>
          </p>
          <div class="time_ul">
            <div class="time_li" v-for="timeUnit in item.timeUnitList" @click="selectTime = timeUnit.text">
              <div class="time_blcok" :class="selectTime == timeUnit.text ? 'choose_time_style' : '' ">
                <div>
                  <p>{{timeUnit.text}}</p>
                  <p>{{timeUnit.fullText}}</p>
                </div>
              </div>
            </div>
            <div style="clear: both;"></div>
          </div>
        </div>
      </div>
      <div class="choose-btn"><p @click="sureChooseTime">确定选择</p></div>
    </van-popup>
    <!-- 选择技师-->
    <van-popup v-model="showPickMech" position="bottom" closeable>
    </van-popup>
    <!-- 选择项目-->
    <van-popup v-model="showPickProduct" position="bottom" closeable>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      appointTime: "请选择您的预约时间",
      guestList: [
        {
          name: "预约人1"
        },
        {
          name: "预约人2"
        },
        {
          name: "预约人3"
        }
      ],
      showPickTime: false,
      showPickMech: false,
      showPickProduct: false,
      timeBlockList: [],
      selectTime: ''
    };
  },
  methods: {
    goConfirm() {
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
      var self = this;
      this.$http.post(this.$api.Appoint.SelectTime, {}, false)
      .then(res => {
        var resData = res.data;
        if (resData.code == 0) {
          self.timeBlockList = resData.data;
        }
      })
    },
    sureChooseTime() {
      this.showPickTime = !this.showPickTime;
      this.appointTime = this.selectTime;
    },
    chooseProduct() {
      this.showPickProduct = !this.showPickProduct;
    },
    chooseMech() {
      this.showPickMech = !this.showPickMech;
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
      margin-left: 30px;
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
    > div p:nth-child(1) {
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
    .slide_li {
      display: inline-block;
      margin: 10px;
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
  >p {
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
  background: rgba(77,184,72,1) !important;
  color: #fff !important;
  border: 1px solid rgba(77,184,72,1) !important;
}
.guest-p {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 5px 10px;
  >div {
    display: inline-block;
  }
  >span:nth-child(1) {
    font-size: 13px;
  }
  >span:nth-child(2) {
    margin-right: 10px;
    font-size: 12px;
    >span:nth-child(1) {
      color: #fff;
      background: rgba(77,184,72,1) !important;
      border-radius: 10px;
      padding: 5px 10px 5px 10px;
      margin-right: 20px;
    }
    >span:nth-child(2) {
      color: #fff;
      background: rgba(77,184,72,1) !important;
      border-radius: 10px;
      padding: 5px 10px 5px 10px;
    }
  }
}
</style>
