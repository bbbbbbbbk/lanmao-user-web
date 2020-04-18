<template>
  <div class="main">
    <div class="coupon_top">
      <div class="top_bg">
        <p class="coupon_title">
          <span>签到领余额</span>
          <span>连续3天有惊喜</span>
        </p>
      </div>
      <div class="punch_clock">
        <div class="top_time">
          <div class="top_gift">
            <img class="have_gift" src="../../assets/lock_money.png" />
            <img class="no_gift" src="../../assets/no_gift.png" />
            <img class="get_fift01" src="../../assets/get_gift.png" />
          </div>
          <p class="top_line">
            <i class="top_line_i_active"></i>
            <i class></i>
            <i class></i>
          </p>
          <div class="top_time_name">
            <p class="time_name_active">今日</p>
            <p class>04.18</p>
            <p class>04.19</p>
          </div>
        </div>
        <p class="no_chance">明日再来</p>
      </div>
    </div>
    <div class="coupon_time">
      <div class="time_con">
        <img src="../../assets/coupon_time.png" />
        <div class="time_ul">
          <div class="time_li">
            <p class>08:00</p>
            <p class>抢购中</p>
          </div>
          <div class="time_li">
            <p class>11:00</p>
            <p class>抢购中</p>
          </div>
          <div class="time_li">
            <p class>16:00</p>
            <p class>抢购中</p>
          </div>
          <div class="time_li">
            <p class="time_active">20:00</p>
            <p class="p_active">抢购中</p>
          </div>
        </div>
      </div>
      <div class="coupon_con">
        <div class="coupon_ul">
          <div class="coupon_li" v-for="coupon in coupons" :key="coupon">
            <div class="coupon_bg coupon_bg1">
              <div class="coupon_info">
                <p>
                  <span>￥</span>
                  <span>28</span>
                </p>
                <p>28元健康红包</p>
              </div>
              <p class="save_btn save_btn1">立即领取</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tuijian_con">
      <p>技师专属优惠</p>
      <div class="coupon_con" style="margin-top: 0.41rem;">
        <div class="coupon_ul">
          <div class="coupon_li" v-for="coupon in coupons" :key="coupon">
            <div class="coupon_bg coupon_bg1">
              <div class="coupon_info">
                <p>
                  <span>￥</span>
                  <span>10</span>
                </p>
                <p>姚文秀调理师专用</p>
              </div>
              <p class="save_btn save_btn0">已抢光</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tuijian_con">
      <p>项目专属优惠</p>
      <div class="coupon_con" style="margin-top: 0.41rem;">
        <div class="coupon_ul">
          <div class="coupon_li" v-for="coupon in coupons" :key="coupon">
            <div class="coupon_bg coupon_bg1">
              <div class="coupon_info">
                <p>
                  <span>￥</span>
                  <span>10</span>
                </p>
                <p>姚文秀调理师专用</p>
              </div>
              <p class="save_btn save_btn0">已抢光</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      coupons: [1, 2, 3, 4]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  padding-bottom: 240px;
}
.coupon_top {
  background: #ffffff;
  > div:nth-child(1) {
    width: 100%;
    height: 150px;
    background: url(../../assets/coupon_top_bg.png) no-repeat;
    padding-top: 20px;
    > p:nth-child(1) {
      color: #ffffff;
      font-size: 20px;
      display: flex;
      align-items: center;
      margin-left: 20px;
      > span:nth-child(1) {
        margin-right: 15px;
      }
      > span:nth-child(2) {
        font-size: 15px;
      }
    }
  }
  > div:nth-child(2) {
    background: rgba(255, 255, 255, 1);
    display: flex;
    margin: 0 15px;
    margin-top: -80px;
    border-radius: 5px;
    padding: 20px 20px 40px 20px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 1px 1px 0 rgba(230, 228, 228, 0.71);
    .top_time {
      width: 50%;
      .top_gift {
        display: flex;
        align-content: center;
        justify-content: space-between;
        .have_gift {
          width: 25px;
        }
        .no_gift {
          width: 25px;
        }
        .get_fift01 {
          width: 25px;
        }
      }
      .top_line {
        width: 140px;
        height: 1px;
        background: rgba(216, 216, 216, 1);
        margin: 10px 10px 10px 8px;
        justify-content: space-between !important;
        display: flex;
        align-content: center;
        align-items: center;
        i {
          width: 8px;
          height: 8px;
          background: url('../../assets/circle_no.png') no-repeat !important;
          background-size: 100% 100%  !important;
        }
        .top_line_i_active {
          background: url('../../assets/circle_active.png') no-repeat !important;
          background-size: 100% 100%  !important;
        }
      }
      .top_time_name {
        display: flex;
        align-content: center;
        justify-content: space-between;
      }
    }
    > p:last-child {
      background: linear-gradient(
        160deg,
        rgba(252, 101, 92, 1),
        rgba(255, 144, 38, 1)
      );
      color: #ffffff;
      width: 90px;
      height: 30px;
      text-align: center;
      font-size: 16px;
      line-height: 30px;
      border-radius: 30px;
    }
  }
}
.coupon_time {
  padding: 0 10px;
  margin-top: 10px;
  background: #ffffff;
  .time_con {
    width: 100%;
    overflow: hidden;
    display: flex;
    padding: 10px 0;
    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      position: relative;
      top: 15px;
    }
    .time_ul {
      padding-top: 10px;
      .time_li {
        display: inline-block;
        margin-right: 10px;
        .time_active {
          color: #f24f46 !important;
        }
        .p_active {
          color: #ffffff !important;
          background: linear-gradient(
            160deg,
            rgba(235, 88, 35, 1),
            rgba(234, 58, 81, 1)
          );
          padding: 2px 2px;
          border-radius: 10px;
        }
        p {
          display: flex;
          justify-content: center;
        }
        > p:nth-child(1) {
          font-size: 18px;
          font-weight: 600;
          color: rgba(51, 51, 51, 1);
        }
        > p:nth-child(2) {
          color: rgba(51, 51, 51, 1);
          margin-top: 2px;
          font-size: 14px;
        }
      }
    }
  }
}
.coupon_con {
  .coupon_ul {
    width: auto;
    white-space: nowrap;
    overflow-x: auto;
    padding-bottom: 20px;
    .coupon_li {
      width: 119px;
      height: 124px;
      display: inline-block;
      margin-right: 10px;
      position: relative;
      .coupon_bg {
        width: 100%;
        height: 100%;
      }
      .coupon_bg1 {
        background: url("../../assets/coupon_bg_3.png") no-repeat;
        background-size: 100%;
      }
      .coupon_info {
        > p:nth-child(1) {
          display: flex;
          color: rgba(255, 255, 255, 1);
          justify-content: center;
          align-items: center;
          font-size: 30px;
        }
        > p:nth-child(2) {
          display: block;
          position: absolute;
          left: 50%;
          max-width: 90%;
          transform: translate(-50%, 0);
          color: rgba(255, 255, 255, 1);
          font-size: 12px;
        }
      }
      .save_btn1 {
        color: rgba(250, 71, 53, 1);
        box-shadow: 0px 3px 5px 0px rgba(250, 73, 54, 0.71);
      }
      .save_btn {
        width: 80px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 10px;
        left: 50%;
        max-width: 90%;
        transform: translate(-50%, 0);
        background: rgba(255, 255, 255, 1);
        border-radius: 20px;
      }
    }
  }
}
.tuijian_con {
  margin-top: 10px;
  padding: 0 10px;
  background: #ffffff;
  > p:nth-child(1) {
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    font-weight: 600px;
    margin-bottom: 10px;
  }
}
</style>
