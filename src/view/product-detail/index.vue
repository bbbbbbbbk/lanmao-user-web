<template>
  <div>
    <div>
      <van-swipe class="swipe-container">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img fit="cover" v-lazy="image" />
        </van-swipe-item>
      </van-swipe>上品全身经络推油
      价格： 399/100分钟
      接单时间：00:00～24:00 全天
    </div>
    <div>
      <van-tabs v-model="active">
        <van-tab title="项目介绍">
          <div style="display: block; padding: 0px 0.2rem;">
            <p>
              <span style="font-size: 14px;">
                <span
                  style="font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, tahoma, arial, simsun, 宋体; white-space: pre-wrap; background-color: rgb(255, 192, 0); color: rgb(255, 0, 0);"
                >
                  <strong>
                    <span style="font-family: 宋体;"></span>
                  </strong>
                </span>
                <strong style="color: rgb(255, 0, 0); white-space: normal;">
                  <span
                    style="background-color: rgb(255, 255, 255); font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, tahoma, arial, simsun, 宋体; white-space: pre-wrap;"
                  >本店24小时接单全市（除南澳，大鹏外）均可上门</span>
                </strong>
                <strong
                  style="font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, tahoma, arial, simsun, 宋体; white-space: normal; color: rgb(255, 255, 255); font-size: 14px;"
                >
                  <span
                    style="font-size: 16px; background-color: rgb(127, 127, 127); font-family: 宋体;"
                  ></span>
                </strong>
              </span>
            </p>
            <p>
              <span style="font-size: 14px;">服务时长：100分钟</span>
            </p>
            <p>
              <span style="font-size: 14px;">服务姿势：卧姿</span>
            </p>
            <p>
              <span style="font-size: 14px;">适用介绍：</span>
              <span style="font-size: 14px;">适用于工作繁忙，压力大，缺乏锻炼的精英人才。</span>
            </p>
            <p>
              <span style="font-size: 14px;">不宜人群：</span>
              <span style="font-size: 14px;">高龄者不宜；高血压，心脏病患者不宜，骨折不宜，孕妇，哺乳期，经期不宜。</span>
            </p>
            <p>
              <span style="font-size: 14px;">功效介绍：</span>
              <span
                style="font-size: 14px;"
              >技师运用温和芬芳的精油，用按摩手法放松顾客身体，精油小分子渗透深层皮肤，舒展全身肌肉细胞，使顾客平衡放松，疏通经络，提高免疫力，减压放松，改善血液循环，美容美体，刺激血液循环与淋巴循环，排除身体淤堵，使皮肤得到充分的营养呵护，使人精神焕发，疏解压力。</span>
            </p>
            <p>
              <span style="font-size: 14px;">理疗流程：</span>
            </p>
            <p>
              <span style="font-size: 14px;">1.精油开背，调理疏通颈肩.腰.背.腹部的气血。</span>
            </p>
            <p>
              <span style="font-size: 14px;">2.放松上肢，下肢，促进肢体末梢血液循环。</span>
            </p>
            <p>
              <span style="font-size: 14px;">3.调理肠道消化蠕动，加强肠胃吸收功能，收缩腹部肌肉。</span>
            </p>
            <p>
              <span style="font-size: 14px;">用品提供：</span>
              <span style="font-size: 14px;">一次性塑封袋内装：口罩一个，轻薄床单一张，按摩巾一张。</span>
            </p>
            <p>
              <span style="font-size: 14px;">
                <strong style="white-space: normal;">
                  <span
                    style="font-family: 宋体; font-size: 14px; color: rgb(84, 141, 212);"
                  >深圳，北京，上海，广州自2019年10月21日起由平台代收上门交通费，计算标准如下：</span>
                </strong>
                <span></span>
              </span>
            </p>
            <p>
              <span style="font-size: 14px;">
                <strong style="white-space: normal;">
                  <span style="font-family: 宋体; font-size: 14px; color: rgb(84, 141, 212);">
                    <img
                      src="https://www.33oncall.com/upload/ueditor/20191018/d967830211cc998aeb553b917970275b.png"
                      title="image.png"
                      alt="image.png"
                    />
                  </span>
                </strong>
              </span>
            </p>
          </div>
        </van-tab>
        <van-tab title="禁忌说明">
          <div style="padding: 0px 0.2rem; display: block;">
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
          <div style="padding: 0px 0.2rem; display: block;">
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;">下单须知：</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;">&nbsp;</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span
                style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;"
              >1、上门距离计算依据：上门距离是百度地图根据客户指定上门位置与技师出发位置计算得出</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;">&nbsp;</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;">
                2、上门交通费用计算方式：
                <strong>
                  <span style="letter-spacing: 0px; color: rgb(255, 0, 0);">深圳，北京，上海，广州</span>
                </strong>上门交通费用计算方式请参阅项目介绍
              </span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;">&nbsp;</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;">&nbsp;</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span
                style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;"
              >3、支付有效时间：预约下单后请在15分钟内完成支付，否则订单将因超时未支付而失效。</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;">&nbsp;</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span
                style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;"
              >4、下单成功后：技师会在出发前与您进行电话核实，出发前联系不上或您提供的地址不详细，技师可不出发，我方保留取消订单的权利</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;">&nbsp;</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span
                style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;"
              >5、修改及取消订单：修改订单时间或取消订单需在技师出发前通知，若技师已出发，客户要求取消订单，收取的上门交通费（如有收取）将不予退还，另将收取订单金额的20%作为技师误工费</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;">&nbsp;</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span
                style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;"
              >6、账户余额提现：如因入驻商家及技师原因造成订单取消，可全额提现；如因客户原因取消订单，则需扣除提现金额3%手续费，敬请谅解</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;">&nbsp;</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span
                style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;"
              >7、项目服务内容说明：请您下单时仔细阅读所预约项目的服务内容，师傅会严格按照您所选择的项目包含的服务流程进行操作。若您需要更改项目服务内容或者流程，可重新下单更换项目，或与客服联系进行修改。</span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;">&nbsp;</span>
            </p>
            <p style="white-space: normal;">
              <span style="font-size: 14px;"></span>
            </p>
            <p
              style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 20px; background: rgb(255, 255, 255);"
            >
              <span
                style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;"
              >8、当您使用“33上门”预约服务时，默认表示您已阅读并同意“33上门”《用户协议》。</span>
            </p>
            <div>
              <span style="font-family: 微软雅黑; letter-spacing: 0px; font-size: 13px;">
                <br />
              </span>
            </div>
            <p>
              <br />
            </p>
            <!-- <img src="/themes/mobile/public/assets/img/pdesc1.jpg" alt="">
					<div class="pp">
						<p>3推拿手法 ，推拿中所施行的各种技巧动作。它通过许多不同形式的操作方法可刺激人体的经络穴位或特定部位。其中有的以按捏为主，如按法、压法、点法、拿法、捏法等；有的以摩擦为主，如平推法、擦法、摩法、搓法、揉法等；有的以振动肢体为主，如拍法、抖法等；有的以活动肢体关节为主，如摇法、扳法、引伸法等。</p>
					</div>
					<img src="/themes/mobile/public/assets/img/pdesc2.jpg" alt="">
					<div class="pp">
						<p>推拿手法技术的基本要求是持久、有力、均匀、柔和。“持久”是指手法能够持续运用一定时间，保持动作和力量的连贯性。</p>
            </div>-->
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },

  methods: {
      onSubmit() {
          
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
</style>
