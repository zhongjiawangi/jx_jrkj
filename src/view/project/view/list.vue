<template>
  <div class="list w_c">
    <div class="search">
      <!-- 项目类型 -->
      <div class="search-item">
        <div class="search-item-label">项目类型</div>
        <div class="search-item-value">
          <el-tag v-for="item in typeList" :key="item.name"
            :effect="searchData.projectType == item.value ? 'dark' : 'plain'" @click="change(item.value, 'projectType')">
            {{ item.name }}
          </el-tag>
        </div>
      </div>
      <!-- 项目状态 -->
      <div class="search-item">
        <div class="search-item-label">项目状态</div>
        <div class="search-item-value">
          <el-tag v-for="item in bidConditionList" :key="item.name"
            :effect="searchData.bidCondition == item.value ? 'dark' : 'plain'"
            @click="change(item.value, 'bidCondition')">
            {{ item.name }}
          </el-tag>
        </div>
      </div>
      <!-- 开标状态 -->
      <div class="search-item">
        <div class="search-item-label">开标状态</div>
        <div class="search-item-value">
          <el-tag v-for="item in bidStatusList" :key="item.name"
            :effect="searchData.bidStatus == item.value ? 'dark' : 'plain'" @click="change(item.value, 'bidStatus')">
            {{ item.name }}
          </el-tag>
        </div>
      </div>
      <!-- 资质等级 -->
      <div class="search-item">
        <div class="search-item-label">资质等级</div>
        <div class="search-item-value">
          <el-tag v-for="item in qualificationLevelList" :key="item.name"
            :effect="searchData.qualificationLevel == item.value ? 'dark' : 'plain'"
            @click="change(item.value, 'qualificationLevel')">
            {{ item.name }}
          </el-tag>
        </div>
      </div>
      <!-- 保证金 -->
      <div class="search-item">
        <div class="search-item-label">保证金（万）</div>
        <div class="search-item-value">
          <el-slider v-model="searchData.tenderDeposit" range :max="100">
          </el-slider>
        </div>
      </div>
      <!-- 项目金额 -->
      <div class="search-item">
        <div class="search-item-label">项目金额（万）</div>
        <div class="search-item-value">
          <el-slider v-model="searchData.projectInvestment" :step="10" range :max="20000">
          </el-slider>
        </div>
      </div>
      <!-- 开标日期 -->
      <div class="search-item">
        <div class="search-item-label">开标日期</div>
        <div class="search-item-value">
          <el-date-picker v-model="searchData.tenderOpeningDate" type="datetimerange" :picker-options="pickerOptions"
            range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right">
          </el-date-picker>
        </div>
      </div>
      <!-- 项目地区 -->
      <div class="search-item">
        <div class="search-item-label">项目地区</div>
        <div class="search-item-value">
          <el-cascader v-model="searchData.areaCodeList" :options="cascaderOption.options" :props="cascaderOption.props"
            :collapse-tags="showAllTags" clearable></el-cascader>
        </div>
      </div>
      <div class="search-item">
        <div class="search-item-value input">
          <el-input placeholder="请输入关键字(项目名称，项目编号)" prefix-icon="el-icon-search" v-model="searchData.keyword">
          </el-input>
          <el-button style="margin-left: 20px" @click="reset">重置</el-button>
          <el-button type="primary" @click="search">查询</el-button>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="tabel">
      <div class="tabel-list" v-loading="loading">
        <div class="tabel-list-item" v-for="item in list" :key="item.id">
          <Project :info="item" />
        </div>
      </div>
      <el-empty v-show="showEmpty" description="无匹配数据"></el-empty>
      <div class="tabel-page">
        <el-pagination @size-change="sizeChange" @current-change="currentChange" :current-page="pageObj.current"
          :page-sizes="[10, 20, 30]" :page-size="pageObj.size" layout="total, sizes, prev, pager, next, jumper"
          :total="pageObj.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { projectList } from '@/api'
import cityJson from '@/utils/jsCity'
import { getTime } from '@/utils/validate'
import Project from '../components/project'

export default {
  name: 'projectList',
  components: {
    Project
  },
  data() {
    return {
      loading: false,
      list: [],
      cascaderOption: {
        options: cityJson,
        props: { multiple: true },
      },
      searchData: {
        keyword: '',
        projectType: 0,
        bidStatus: '',
        tenderOpeningDate: [],
        // tenderOpeningEndDate: '',
        // tenderOpeningStartDate: '',
        tenderDeposit: [0, 0],
        // minTenderDeposit: '',
        // maxTenderDeposit: '',
        // minProjectInvestment: '',
        // maxProjectInvestment: '',
        projectInvestment: [0, 0],
        bidCondition: '',
        qualificationLevel: '',
        areaCodeList: [],
      },
      pickerOptions: {
        shortcuts: [
          {
            text: '今日',
            onClick(picker) {
              const timestamp = new Date(`${getTime(new Date())} 00:00:00`).getTime()
              const end = new Date(timestamp + 1000 * 3600 * 24);
              const start = new Date(timestamp);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '昨日',
            onClick(picker) {
              const timestamp = new Date(`${getTime(new Date())} 00:00:00`).getTime()
              const end = new Date(timestamp);
              const start = new Date(timestamp - 1000 * 3600 * 24);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '明日',
            onClick(picker) {
              const timestamp = new Date(`${getTime(new Date())} 00:00:00`).getTime()
              const end = new Date(timestamp + 1000 * 3600 * 24 * 2);
              const start = new Date(timestamp + 1000 * 3600 * 24);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '近一周',
            onClick(picker) {
              const timestamp = new Date(`${getTime(new Date())} 00:00:00`).getTime()
              const end = new Date(timestamp + 1000 * 3600 * 24 * 7);
              const start = new Date(timestamp);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '近一月',
            onClick(picker) {
              const timestamp = new Date(`${getTime(new Date())} 00:00:00`).getTime()
              const end = new Date(timestamp + 1000 * 3600 * 24 * 30);
              const start = new Date(timestamp);
              picker.$emit('pick', [start, end]);
            }
          }
        ]
      },
      bidConditionList: [
        {
          name: "全部",
          value: 0,
        },
        {
          name: "已延期",
          value: 1
        },
        {
          name: "已流标",
          value: 2
        },
        {
          name: "暂停开标",
          value: 3
        },
        {
          name: "终止招标",
          value: 4
        },
        {
          name: "重新开标",
          value: 5
        }],
      bidStatusList: [
        {
          name: "全部",
          value: 0,
        },
        {
          name: '未开标',
          value: 1
        },
        {
          name: '已开标',
          value: 2
        }
      ],
      typeList: [{
        name: "全部",
        value: 0,
      },
      {
        name: "房建",
        value: 1,
      },
      {
        name: "公路",
        value: 2,
      },
      {
        name: "水利",
        value: 3,
      },
      {
        name: "其他",
        value: 10,
      }],
      qualificationLevelList: [
        {
          name: "全部",
          value: 0,
        },
        {
          name: '一级',
          value: '一'
        },
        {
          name: '二级',
          value: '二'
        },
        {
          name: '三级',
          value: '三'
        },
        {
          name: '其他',
          value: '其他'
        },
      ],
      pageObj: {
        size: 10,
        current: 1,
        total: 0,
      },
      showEmpty: false
    }
  },
  computed: {
    showAllTags() {
      return this.searchData.areaCodeList.length > 6
    }
  },
  methods: {
    currentChange(current) {
      console.log(current);
      this.pageObj.current = current
      this.getList();
    },
    sizeChange(size) {
      this.pageObj.current = 1;
      this.pageObj.size = size;
      this.getList();
    },
    changeCity(list) {
      this.searchData.areaCodeList = list.map((i) => i[i.length - 1])
    },
    sliderChange() {
      this.getList()
    },
    change(value, key) {
      this.searchData[key] = value;
      this.pageObj.current = 1
      this.getList()
    },
    search() {
      this.pageObj.current = 1;
      this.getList();
    },
    reset() {
      this.searchData = {
        keyword: '',
        projectType: 0,
        bidStatus: '',
        tenderOpeningDate: [],
        // tenderOpeningEndDate: '',
        // tenderOpeningStartDate: '',
        tenderDeposit: [0, 0],
        // minTenderDeposit: '',
        // maxTenderDeposit: '',
        // minProjectInvestment: '',
        // maxProjectInvestment: '',
        projectInvestment: [0, 0],
        bidCondition: '',
        qualificationLevel: '',
        areaCodeList: [],
      }
      this.pageObj.current = 1
      this.getList()
    },
    getList() {
      const data = {
        pageNo: this.pageObj.current,
        pageSize: this.pageObj.size,
      }
      Object.assign(data, this.searchData)
      this.dataFormat(data)
      console.log(data);
      this.loading = true
      this.list = []
      projectList(data).then(res => {
        this.list = res.list
        this.pageObj.total = res.total
        if (this.pageObj.total == 0) {
          this.showEmpty = true
        }
      }).finally(() => {
        this.loading = false
      })
    },
    dataFormat(data) {
      if (data.tenderOpeningDate && data.tenderOpeningDate[0]) {
        data.tenderOpeningStartDate = getTime(data.tenderOpeningDate[0], 1)
        data.tenderOpeningEndDate = getTime(data.tenderOpeningDate[1], 1)
      }
      delete data.tenderOpeningDate
      const [minTenderDeposit, maxTenderDeposit] = data.tenderDeposit
      if (!(minTenderDeposit === 0 && maxTenderDeposit === 0)) {
        data.minTenderDeposit = minTenderDeposit
        data.maxTenderDeposit = maxTenderDeposit
      }
      delete data.tenderDeposit
      const [minProjectInvestment, maxProjectInvestment] = data.projectInvestment
      if (!(minProjectInvestment === 0 && maxProjectInvestment === 0)) {
        data.minProjectInvestment = minProjectInvestment
        data.maxProjectInvestment = maxProjectInvestment
      }
      delete data.projectInvestment
      if (data.areaCodeList.length == 0) {
        delete data.areaCodeList
      } else {
        data.areaCodeList = data.areaCodeList.map((i) => i[i.length - 1]).join(',')
      }
      if (!data.projectType) {
        delete data.projectType
      }
      if (data.bidStatus) {
        data.bidStatus -= 1
      } else {
        delete data.bidStatus
      }
      if (!data.qualificationLevel) {
        delete data.qualificationLevel
      }
    },
  },
  created() {
    this.getList()
  }
}
</script>

<style lang='less' scoped>
.list {
  margin-top: 24px;
  padding: 12px 32px;
  background-color: #fff;
  border-radius: 12px;
  font-size: 16px;

  .search {
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;


      .input {
        /deep/.el-input {
          width: 540px;
        }
      }

      &-label {
        width: 120px;
      }

      &-value {
        flex: 1;

        /deep/.el-tag {
          margin-right: 16px;
          cursor: pointer;
        }

        /deep/.el-date-editor--datetimerange.el-input__inner {
          width: 420px;
        }

        .el-cascader {
          width: 420px !important
        }
      }
    }
  }

  .tabel {
    &-list {
      min-height: 260px;

      &-item {
        margin-bottom: 20px;
      }
    }

    &-page {
      text-align: center;
    }
  }
}
</style>
