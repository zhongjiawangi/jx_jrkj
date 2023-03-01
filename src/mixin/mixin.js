/*
 * @Author: Zhong JiaWang(1290489015@qq.com)
 * @Date: 2023-02-27 10:31:24
 * @LastEditTime: 2023-02-27 11:28:22
 * @LastEditors: Zhong JiaWang(1290489015@qq.com)
 * @Description:
 * @FilePath: \jx_jrkj\src\mixin\mixin.js
 */
import cityJson from "@/utils/jsCity";

const provinceList = cityJson.map((i) => {
  return {
    label: i.label,
    value: i.value,
  };
});
let cityList = [];
cityJson.forEach((province) => {
  cityList = province.children.map((i) => {
    return {
      label: i.label,
      value: i.value,
    };
  });
});
const areaList = cityJson[0].children
  .map((city) => [...city.children])
  .reduce((prev, curr) => prev.concat(curr), []);
export default {
  data() {
    return {
      provinceList: Object.freeze(provinceList),
      cityList: Object.freeze(cityList),
      areaList: Object.freeze(areaList),
    };
  },
  methods: {
    /**
     * @description: 查找数组内对象值
     * @param {array} arr 目标数组
     * @param {*} value 传入要查找的值
     * @param {string} key 传入要查找的键
     * @return {*} 键值
     */
    find(arr, value, key) {
      return arr.find((i) => i.value == value)
        ? arr.find((i) => i.value == value)[key]
        : "";
    },
    addUnit(value, unit) {
      return value ? `${value}${unit || ''}` : "";
    },
  },
};
