<template>
  <div class="query">
    <div class="form" v-if="info.length">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="保函编号" prop="num">
          <el-input v-model="ruleForm.num"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <div class="box">
            <el-input v-model="ruleForm.captcha"></el-input>
            <img :src="img" @click="changeCap" style="
              width: 1.625rem;
              height: .4rem;
              margin-left: .3rem;
              cursor: pointer;
            " alt="" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="result" v-else>
      <!-- <el-divider></el-divider> -->
      <el-button type="primary" icon="el-icon-arrow-left">返回</el-button>
      <el-divider></el-divider>
      <p>订单信息</p>
      <div class="info_box">
        <div class="item" v-for="(item, index) in orderInfo" :key="index">
          {{ item + ':' }}
        </div>
      </div>
      <el-divider></el-divider>
      <p>项目信息</p>
      <div class="info_box">
        <div class="item" v-for="(item, index) in projectInfo" :key="index">
          {{ item + ':' }}
        </div>
      </div>
      <el-divider></el-divider>
      <p>客户信息</p>
      <div class="info_box">
        <div class="item" v-for="(item, index) in customerInfo" :key="index">
          {{ item + ':' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'queryPage',
  data() {
    return {
      img: '',
      cap: '',
      ruleForm: {
        num: '',
        captcha: '',
      },
      rules: {
        num: [
          { required: true, message: '请输入编号', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      array: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      info: [],
      orderInfo: {
        elogApplyNo: "申请编号",
        serviceNo: "订单编号",
        createTime: "申请时间",
        tenderOpeningDate: "开标时间",
        insureName: "申请客户",
        applicantName: "经办人姓名",
        applicantTel: "经办人联系方式",
        insuredName: "招标人",
        tenderDeposit: "担保金额(元)",
        // elogAmount: "保函费用(元)",
        // accountUsername: "业务员",
        // referralCode: "推荐码",
        // templateUrl: "保函模版",
        // elogFileUrl: "电子保函",
        // insureTime: "下函时间",
      },
      projectInfo: {
        projectName: "项目名称",
        projectNo: "项目编号",
        projectTradeType: "交易方式",
        projectType: "交易项目类型",
        projectCategory: "交易项目类别",
        // projectArea: "项目所在地",
        tenderOpeningDate: "开标时间",
        depositEndDate: "保证金截止日",
        tenderDeposit: "担保金额(元)",
        insureDay: "保函期限",
        insuredName: "招标人",
        insuredCreditCode: "招标人信用代码",
        insuredAddress: "招标人地址",
        tenderReleaseDate: "招标发布日期",
      },
      customerInfo: {
        insureName: "客户名称",
        insureCreditCode: "统一社会信用代码",
        insureAddress: "客户地址",
        insureLegalName: "法人",
        insureLegalIdCard: "法人证件号码",
        insureBankNo: "银行账户",
        insureBankName: "开户银行",
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
          axios({
            method: "GET",
            url: '',
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    roundpass() {
      let str = ""
      for (let i = 0; i < 8; i++) {
        str
          += this.array[Math.round(Math.random() * (this.array.length - 1))];
      }
      this.cap = str.substr(0, 5);
    },
    getCaptcha() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/captcha/get`, {
          responseType: "arraybuffer",
          params: { cap: this.cap },
        })
        .then(
          (response) => `data:image/png;base64,${btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          )}`
        )
        .then((data) => {
          this.img = data; // 赋值给img标签的src属性
        });
    },
    changeCap() {
      this.roundpass();
      this.getCaptcha();
    },
  },
  created() {
    this.changeCap();
  }
}
</script>

<style lang="less" scoped>
.query {
  padding: 1.25rem;

  .form {
    display: flex;
    justify-content: center;

    .box {
      display: flex;
      align-items: center;
    }
  }

  .result {
    p {
      font-size: .3rem;
      margin: .3rem 0;
    }

    .info_box {
      .item {
        display: inline-block;
        width: 33%;
        height: .25rem;
        line-height: .25rem;
        font-size: .2rem;
        margin: .25rem 0;
      }
    }
  }
}
</style>