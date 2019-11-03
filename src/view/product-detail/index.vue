<template>
  <div>
    <div class="dr_top">
      <van-swipe class="swipe-container">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img fit="cover" v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <p>上品全身经络推油</p>
      <p>价格： 399/100分钟</p>
      <p>接单时间：00:00～24:00 全天</p>
    </div>
    <div>
      <van-tabs v-model="active">
        <van-tab title="项目介绍">
          <div class="dr_cc">
            <p>
              <span>服务时长：100分钟</span>
            </p>
            <p>
              <span>服务姿势：卧姿</span>
            </p>
            <p>
              <span>适用介绍：</span>
              <span>适用于工作繁忙，压力大，缺乏锻炼的精英人才。</span>
            </p>
            <p>
              <span>不宜人群：</span>
              <span>高龄者不宜；高血压，心脏病患者不宜，骨折不宜，孕妇，哺乳期，经期不宜。</span>
            </p>
            <p>
              <span>功效介绍：</span>
              <span>技师运用温和芬芳的精油，用按摩手法放松顾客身体，精油小分子渗透深层皮肤，舒展全身肌肉细胞，使顾客平衡放松，疏通经络，提高免疫力，减压放松，改善血液循环，美容美体，刺激血液循环与淋巴循环，排除身体淤堵，使皮肤得到充分的营养呵护，使人精神焕发，疏解压力。</span>
            </p>
            <p>
              <span>理疗流程：</span>
            </p>
            <p>
              <span>1.精油开背，调理疏通颈肩.腰.背.腹部的气血。</span>
            </p>
            <p>
              <span>2.放松上肢，下肢，促进肢体末梢血液循环。</span>
            </p>
            <p>
              <span>3.调理肠道消化蠕动，加强肠胃吸收功能，收缩腹部肌肉。</span>
            </p>
            <p>
              <span>用品提供：</span>
              <span>一次性塑封袋内装：口罩一个，轻薄床单一张，按摩巾一张。</span>
            </p>
          </div>
        </van-tab>
        <van-tab title="禁忌说明">
          <div class="dr_cc">
            <p>调理的禁忌是指有些不适宜做推拿、拔罐、刮痧、艾灸等物理疗法，调理时可能存在的风险或者使病情加重；</p>
            <p>① 皮肤病，皮肤破损、水火烫伤等部位禁做。</p>
            <p>② 急性软组织损伤，皮下组织水肿或有渗出物者禁做。</p>
            <p>③ 血液病患者，有出血倾向者禁做。</p>
            <p>④ 严重的心脏病，各种恶性肿瘤，急腹症，急性阑尾炎，宫外孕，胰腺炎等禁用。</p>
            <p>⑤ 严重贫血，久病体弱，身体极度消瘦的人禁做。</p>
            <p>⑥ 妇女在月经和妊娠期间不宜腰骶部按摩；经期按摩腰部会增加流血量；妊娠期间按摩可能导致流产。</p>
            <p>⑦ 70岁以上的老人；如果体质比较差的禁做。</p>
            <p>⑧ 严重的骨质疏松者不宜按摩。</p>
            <p>⑨ 精神病患者、醉酒神志不清者禁做。</p>
            <p>⑩ 其他严重疾病或诊断不明的较严重疾病禁用。</p>
            <p>
              <br />
            </p>
          </div>
        </van-tab>
        <van-tab title="下单须知">
          <div class="dr_cc">
            <p>
              <span>下单须知：</span>
            </p>
            <p>
              <span>1、上门距离计算依据：上门距离是百度地图根据客户指定上门位置与技师出发位置计算得出</span>
            </p>
            <p>
              <span>
                2、上门交通费用计算方式：
                <strong>
                  <span>深圳，北京，上海，广州</span>
                </strong>上门交通费用计算方式请参阅项目介绍
              </span>
            </p>
            <p>
              <span>3、支付有效时间：预约下单后请在15分钟内完成支付，否则订单将因超时未支付而失效。</span>
            </p>
            <p>
              <span>4、下单成功后：技师会在出发前与您进行电话核实，出发前联系不上或您提供的地址不详细，技师可不出发，我方保留取消订单的权利</span>
            </p>
            <p>
              <span>5、修改及取消订单：修改订单时间或取消订单需在技师出发前通知，若技师已出发，客户要求取消订单，收取的上门交通费（如有收取）将不予退还，另将收取订单金额的20%作为技师误工费</span>
            </p>
            <p>
              <span>6、账户余额提现：如因入驻商家及技师原因造成订单取消，可全额提现；如因客户原因取消订单，则需扣除提现金额3%手续费，敬请谅解</span>
            </p>
            <p>
              <span>7、项目服务内容说明：请您下单时仔细阅读所预约项目的服务内容，师傅会严格按照您所选择的项目包含的服务流程进行操作。若您需要更改项目服务内容或者流程，可重新下单更换项目，或与客服联系进行修改。</span>
            </p>
            <p>
              <span>8、当您使用“33上门”预约服务时，默认表示您已阅读并同意“33上门”《用户协议》。</span>
            </p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-submit-bar :price="3050" button-text="选技师" @submit="onSubmit" safe-area-inset-bottom />
    <!-- 选技师弹窗 -->
    <van-popup v-model="showPickMech" closeable>
      <div class="dr_xjs">
        <div v-for="item in list" :key="item" class="dr_cell">
          <!-- 左边 -->
          <div class="dr_wl fl">
            <van-image width="60" height="60" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <h5>在线接单中</h5>
          </div>
          <!-- 右边 -->
          <div class="dr_wr fl">
            <!-- 上边 -->
            <div>
              <span class="m_name">小雪</span>
              <span class="w_dz fr">1043km</span>
            </div>
            <!-- 中间 -->
            <div class="w_job_c">
              <span class="w_job fl">保健按摩师</span>
              <van-rate v-model="value" class="fr" :size="10" />
            </div>
            <p>
              我叫小雪 湖南人 常住龙岗区横岗地铁站附近 ，
              从事按摩推拿推油养生行业已经4年了，我非常热爱我这份工作，
              擅长中泰式按摩推拿推油和各种经典组合spa，
              严格要求自己服务好每一位亲爱的客户，您今天的满意是我最大的收获！
            </p>
            <!-- 下边 -->
            <h6>
              <span>湖南</span>
              <span>3年经验</span>
              <span>11单</span>
            </h6>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      list: [1, 2],
      value: 5,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      showPickMech: false
    };
  },

  methods: {
    onSubmit() {
      console.log(this.$route.query);
      this.$store.commit("loadGuestData", {
        productId: this.$route.query.id
      });
      this.$router.push({
        path: "/appoint",
        query: {
          productId: this.$route.query.id
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-me {
  margin: 0 auto;
}
.swipe-container {
  width: 100%;
  height: 240px;
}
.dr_top p {
  text-align: center;
  margin: 10px;
}
.dr_cc {
  display: block;
  padding: 10px;
  width: 100%;
  height: 100%;
  padding-bottom: 52px;
}
.dr_cc {
  font-size: 14px;
}
.dr_cell {
  width: 100%;
  height: 120px;
  padding: 5px;
  margin-bottom: 5px;
  background: #fff;
}
.dr_wl h5 {
  text-align: center;
  color: #1479e6;
  font-size: 1em;
  line-height: 1.8em;
}
.w_job {
  width: auto;
  text-align: center;
  color: #e60012;
  border: 1px solid #e60012;
  padding: 2px 8px 2px 8px;
  border-radius: 10px;
}
.w_job_c {
  height: 24px;
}
.dr_wr p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.w_dz {
  color: #999;
  background: url(../../assets/icon1.png) no-repeat left center;
  background-size: 10px 14px;
  padding-left: 15px;
}
.m_name {
  color: #333;
  background: url(../../assets/women_icon.png) no-repeat right center;
  background-size: 10px 10px;
  padding-right: 12px;
  font-size: 1.2em;
}
.dr_wr h6 span {
  margin-right: 20px;
  color: #999;
  font-size: 0.8em;
}
.dr_xjs {
  width: 320px;
  height: 500px;
}
</style>
