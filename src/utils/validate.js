/*
 *
 * 使用方式 import { isWscnEmail,validateURL,... } from 'utils/validate';
 * 例如：邮箱验证使用  return isWscnEmail(value)
 *
 */
/* eslint-disable */
/* 邮箱验证 */
import { getItem, setItem } from "@/utils/storeage";
export function isWscnEmail(str) {
  const reg = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@wz\.com$/i;
  return reg.test(str.trim());
}

/* URL验证 */
export function validateURL(textval) {
  const urlregex =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

/* 小写字母 */
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母 */
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母 */
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}
/* json 字母排序转成字符串 */
export function sortByKey(obj, flag) {
  if (!obj) {
    return {};
  }
  const newObj = {};
  let sortKeys;
  // 对象递归去null，但是递归不会排序
  if (flag) {
    sortKeys = Object.keys(obj);
  } else {
    sortKeys = Object.keys(obj).sort((key1, key2) => (key1 > key2 ? 1 : -1));
  }
  sortKeys.forEach((v) => {
    if (obj[v] != null) {
      newObj[v] = obj[v];
    }
    if (
      obj[v] &&
      Object.prototype.toString.call(obj[v]) === "[object Object]"
    ) {
      newObj[v] = sortByKey(obj[v], true);
    } else if (obj[v] != null) {
      newObj[v] = obj[v];
    }
  });
  return newObj;
}
export function getTime(dateStr, haveTime) {
  if (!dateStr) return "";
  const date = new Date(dateStr);

  const Month = date.getMonth() + 1;

  const Day = date.getDate();
  const Hour = date.getHours();
  const Minutes = date.getMinutes();
  const Seconds = date.getSeconds();
  const Y = `${date.getFullYear()}-`;

  const M = Month < 10 ? `0${Month}-` : `${Month}-`;

  const D = Day < 10 ? `0${Day}` : Day;
  const H = Hour < 10 ? `0${Hour}:` : `${Hour}:`;
  const m = Minutes < 10 ? `0${Minutes}:` : `${Minutes}:`;
  const S = Seconds < 10 ? `0${Seconds}` : `${Seconds}`;
  return haveTime ? `${Y + M + D} ${H}${m}${S}` : `${Y + M + D}`;
}
export function getDay(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const Month = date.getMonth() + 1;
  const Day = date.getDate();
  const Y = `${date.getFullYear()}-`;
  const M = Month < 10 ? `0${Month}-` : `${Month}-`;
  const D = Day < 10 ? `0${Day}` : Day;
  return `${Y + M + D}`;
}

export function getDateSecond(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const Month = date.getMonth() + 1;
  const Day = date.getDate();
  const Y = `${date.getFullYear()}-`;
  const M = Month < 10 ? `0${Month}-` : `${Month}-`;
  const D = Day < 10 ? `0${Day}` : Day;
  const shi = date.getHours();
  const fen = date.getMinutes();
  const miao = date.getMonth();
  const s = shi < 10 ? `0${shi}` : `${shi}`;
  const f = fen < 10 ? `0${fen}` : `${fen}`;
  const m = fen < 10 ? `0${miao}` : `${miao}`;
  return `${Y + M + D} ${s}:${f}:${m}`;
}
export function delNoKey(datas, st = "st", et = "et", st1, et1) {
  /* eslint-disable */
  let data = Object.assign(datas);
  for (const key in data) {
    if (data[key] === "") {
      delete data[key];
    } else if (key === "date" && data[key][0]) {
      data[st] = getDay(data[key][0]);
      data[et] = getDay(data[key][1]);
      delete data[key];
    } else if (key === "date1" && data[key][0]) {
      data[st1] = getDay(data[key][0]);
      data[et1] = getDay(data[key][1]);
      delete data[key];
    }
    if (data.date && !data.date[0]) {
      delete data["date"];
      delete data[st];
      delete data[et];
    }
    if (data.date1 && !data.date1[0]) {
      delete data["date1"];
      delete data[st1];
      delete data[et];
    }
  }
  return data;
}

/**
 * @description: 删除没有值的key
 * @param {object} datas
 * @return {object}
 */
export function delNoKeySecond(datas) {
  /* eslint-disable */
  if (!datas) return;
  let data = Object.assign(datas);
  for (const key in data) {
    if (data[key] === "") {
      delete data[key];
    }
  }
  return data;
}

export function numFormat(num) {
  if (!num) return num;
  num = num.toString().split("."); // 分隔小数点
  var arr = num[0].split("").reverse(); // 转换成字符数组并且倒序排列
  var res = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (i % 3 === 0 && i !== 0) {
      res.push(","); // 添加分隔符
    }
    res.push(arr[i]);
  }
  res.reverse(); // 再次倒序成为正确的顺序
  if (num[1]) {
    // 如果有小数的话添加小数部分
    res = res.join("").concat("." + num[1]);
  } else {
    res = res.join("");
  }
  return res;
}
/**
 * @description: 去除参数前后空格
 * @param {*} obj
 * @return {*}
 */
export function trims(obj) {
  for (let i in obj) {
    if (typeof obj[i] == "string") {
      obj[i] = obj[i].trim();
    }
  }
  return obj;
}
/**
 * @description: 自定义下载文件名字
 * @param {string} url
 * @param {string} fileName
 * @return {string}
 */
export function downloadFile(url, fileName) {
  var x = new XMLHttpRequest();
  x.open("GET", url, true);
  x.responseType = "blob";
  x.onload = function (e) {
    var url = window.URL.createObjectURL(x.response);
    var a = document.createElement("a");
    a.href = url;
    console.log(fileName);
    a.download = fileName;
    a.click();
  };
  x.send();
}
/**
 * @description: 扁平化数组转树形数组
 * @param {*} curr 当前项
 * @param {*} prev 下一项
 * @return {*}
 */
function deepChild(curr, prev) {
  let childPath = [];
  curr.children.forEach((item) => {
    if (item.children && item.children.length) {
      const a = deepChild(item, prev);
      childPath = childPath.concat(a);
    }
    childPath.push(item.path);
  });
  const prevs = [...new Set(prev.concat(childPath))];
  return prevs;
}
/**
 * @description: 获取菜单路由
 * @return {*}
 */
export function filterRouter() {
  let menuList = getItem("menuList");
  // 分解菜单路由
  if (menuList && menuList.length) {
    menuList = menuList.reduce((prev, curr) => {
      prev.push(curr.path);
      if (curr.children && curr.children.length) {
        prev = deepChild(curr, prev);
      }
      return prev;
    }, []);
    setItem("routeRole", menuList);
  }
}
