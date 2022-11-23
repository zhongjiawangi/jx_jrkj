// 合作机构logo
import gzjsy from '@/assets/home_img/partner/gzjsy.png'
import fcjy from '@/assets/home_img/partner/fcjy.jpg'
import jjrd from '@/assets/home_img/partner/jjrd.jpg'
import jjgd from '@/assets/home_img/partner/jjgd.jpg'
import pxhy from '@/assets/home_img/partner/pxhy.jpg'
import jjxyrd from '@/assets/home_img/partner/jjxyrd.jpg'
import pxrd from '@/assets/home_img/partner/pxrd.jpg'
// 产品图片
import electronicSystem from '@/assets/home_img/product/electronicSystem.png'
import approvingSystem from '@/assets/home_img/product/approvingSystem.png'
import gbt from '@/assets/home_img/product/gbt.png'
import system_icon from '@/assets/home_img/baohan.png'
import danbao_icon from '@/assets/home_img/danbao.png'
import gbt_icon from '@/assets/home_img/zhaobiao.png'
// 公司图片
import jrkj from '@/assets/about_img/jrkj.png'
import jrfr from '@/assets/about_img/jrfr.png'
import prosition_img from '@/assets/about_img/prosition_img.png'

export const partnerList = [
    {
        name: '赣州市金盛源融资担保集团有限公司',
        imgUrl: gzjsy,
    },
    {
        name: '丰城市剑邑融资担保有限公司',
        imgUrl: fcjy,
    },
    {
        name: '九江市工业融资担保有限公司',
        imgUrl: jjgd,
    },
    {
        name: '九江市融资担保有限公司',
        imgUrl: jjrd,
    },
    {
        name: '萍乡市汇源融资担保有限公司',
        imgUrl: pxhy,
    },
    {
        name: '九江市浔阳区融资担保有限责任公司',
        imgUrl: jjxyrd,
    },
    {
        name: '萍乡市融资担保集团有限公司',
        imgUrl: pxrd,
    },
]

export const queryList = [
    {
        name: '金源保',
        url: 'http://www.tb.gzsjsy.cn:8081/#/query',
    },
    {
        name: '剑邑快保',
        url: 'https://www.ee.jxjrtech.com/#/query',
    },
    {
        name: '九江工担',
        url: 'https://ee.jjgdgs.com.cn/#/query',
    },
    {
        name: '萍乡融担',
        url: 'http://www.jxpxrd.com/#/query',
    },
]

export const productionList = [
    {
        title: '电子投标保函系统',
        pic: electronicSystem,
        icon: system_icon,
        content:
            '电子保函办理服务平台在线提交保函申请，保费支付和保函出具，全程在线办理，手续简单便捷。',
    },
    {
        title: '金融担保审批系统',
        pic: approvingSystem,
        icon: danbao_icon,
        content:
            '打造担保交易、信用服务与大数据风控三位一体化金融审批系统。提供多种保函产品，为客户提供更加专业高效的保函服务。',
    },
    {
        title: '招标查询系统—赣保通',
        pic: gbt,
        icon: gbt_icon,
        content: '打造江西一流招标信息查询系统',
    },
]

export const conpanyInfo = {
    list: [
        {
            label: '公司介绍',
            value: 'introduce',
        },
        {
            label: '公司情况',
            value: 'condition',
        },
        {
            label: '公司结构',
            value: 'construction',
        },
        {
            label: '公司定位',
            value: 'position',
        },
        {
            label: '理念与模式',
            value: 'conceptModel',
        },
    ],
    introduce: {
        title: '公司介绍',
        data: [
            {
                companyName: '江西江若科技有限公司',
                pic: jrkj,
                text: '江若科技注册资金500万。为金融机构提供电子投标保函系统、金融担保审批系统，提供招标查询系统——赣标通。',
            },
            {
                companyName: '江西江若非融资性担保公司',
                pic: jrfr,
                text: '江若非融注册资金6000万。深耕非融资业务领域，为建筑企业提供优质的服务，为区域经济发展助力。',
            },
        ],
    },
    condition: {
        title: '公司情况',
        data: [
            {
                title: '人员数量',
                children: [
                    '100+',
                    '管理人员：5',
                    '后勤支撑：9',
                    '技术人员：6',
                    '前端业务：100+',
                ],
            },
            {
                title: '对外合作',
                children: [
                    '6家',
                    '科技+业务合作：金盛源、九江融担、萍乡融担、丰城剑邑',
                    '科技合作：九江工担、九江浔阳',
                ],
            },
            {
                title: '服务企业',
                children: ['6400+', '丰城剑邑：3665', '九江融担：4418'],
            },
        ],
    },
    construction: {
        title: '公司结构',
        data: {
            hierarchyName: '经营管理层',
            children: [
                '财务部',
                '行政部',
                '人事部',
                '科技部',
                '投标保函部',
                '履约保函部',
            ],
        },
    },
    position: {
        title: '公司定位',
        pic: prosition_img,
        data: {
            title: '非融 / 中介 / 科技',
            children: [
                '立足非融资业务领域',
                '做精中介服务，为社会降本增效',
                '以科技驱动业务持续性发展',
            ],
        },
    },
    conceptModel: {
        title: '理念与模式',
        data: [
            {
                title: '客服模式',
                content: '提供手机，发放集团号。运用企业微信。',
            },
            {
                title: '自营业务模式',
                content:
                    '组长负责指导业务，分析问题，解决问题；副组长协助组长工作，负责数据登记；组员营销与办理业务。每月小组评比，小组共进退，连带责任奖罚。',
            },
            {
                title: '科技驱动模式',
                content:
                    '自有系统保证开函效率的高度协同。沉淀数据为持续发展抓手。',
            },
            {
                title: '行业前瞻理念',
                content: '掌握行业政策，分析行业发展规律。',
            },
            {
                title: '专业服务理念',
                content:
                    '提供从了解项目咨询到开函成功的一条龙服务，让客户体验到宾至如归的感受。',
            },
            {
                title: '抗担风险理念',
                content: '建立开函风控机制，承担出险责任。',
            },
        ],
    },
}

export const manpowerInfo = {
    list: [
        {
            id: 1,
            jobName: '开发负责人 [南昌]',
            simple: {
                salary: '8k-15k·14薪',
                workExperience: '5-8 年',
                education: '本科',
                keywords: [
                    '人员管理',
                    '软件管理',
                    '业务发展',
                    'Java',
                    'Mysql',
                    'Linux',
                ],
                welfare:
                    '带薪年假，五险一金，全勤奖，年终奖，三节福利，包午餐，节日福利，员工旅游',
            },
            detail: {
                jobDescription: [
                    '负责公司技术部人员管理：分配任务，制定计划等；',
                    '负责公司信息化软件的管理：文档，开发规范等。（金融软件，涉及支付、较多的系统级访问）；',
                    '负责公司信息化软件的开发：对系统负责架构设计，重点难点问题解决；',
                    '根据公司业务发展，开发其他系统；',
                ],
                jobRequirements: [
                    '熟悉Java开发语言，掌握Java基础、IO,多线程、集合、JVM等，熟悉面向对象程序设计；',
                    '熟练使用Springboot，Mybatis,Dubbo,Springcloud等主流框架；',
                    '熟悉Redis等常用的中间件；熟悉Mysql，Linux等；',
                    '有一定的项目管理经验，有金融行业经验优先；',
                ],
                workAddress:
                    '江西省南昌市红谷滩区凤凰中大道1000号南昌万达中心B3写字楼-1003室',
                contactWay: [
                    '邮箱：23778989@qq.com 简历投递格式：意向岗位名称-姓名-联系方式-了解到该岗位的渠道',
                    '电话: 15170038339',
                    '微信: 15170038339',
                ],
            },
        },
    ],
}
