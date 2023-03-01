import axios from "axios";
import { Message } from 'element-ui';
import router from "@/router";
import { getItem, removeAllItem } from "@/utils/storeage";
import { delNoKeySecond, trims } from "./validate";

const cancelToken = axios.CancelToken; // 取消api
const pending = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const removePending = (config) => {
  pending.find((item, i) => {
    // 判断当前请求数组中是否存在相同请求地址的接口
    if (item.u === `${config.url}&${config.method}`) {
      pending[i].c(); // 执行取消方法
      pending.splice(i, 1); // 把这条记录从数组中移除
      return true;
    }
    return false;
  });
};

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 60000,
});
// 弹窗防抖
/* eslint-disable */
function debounce(fn, wait) {
  let timerId = null;
  let flag = true;
  return function () {
    // clearTimeout(timerId);
    if (flag) {
      fn.apply(this, arguments);
      flag = false;
      timerId = setTimeout(() => {
        flag = true;
      }, wait);
    }
  };
}
const authError = debounce((message) => {
  Message.error({
    content: message,
    duration: 3,
  });
}, 1000);
/* eslint-disable */
// request拦截器
service.interceptors.request.use(
  (config) => {
    removePending(config); //在一个ajax发送前执行一下取消操作
    config.cancelToken = new cancelToken((c) => {
      // 传入对比参数 和 取消方法
      pending.push({ u: config.url + "&" + config.method, c });
    });
    config.headers = {
      "Content-Type": "application/json",
      Authorization: getItem("token") ? "Bearer" + " " + getItem("token") : "",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const xhr = response.data;
    const { code, message } = xhr;
    let thisReturn = "";
    if (!code) {
      thisReturn = Promise.resolve(xhr.data);
    } else if (code == 401 || String(code).includes("403")) {
      authError(message);
      removeAllItem();
      router.push("/");
      thisReturn = Promise.reject(xhr.data);
    } else {
      authError(xhr.message);
      thisReturn = Promise.reject(xhr.data);
    }
    return thisReturn;
  },
  (error) => {
    if (!error.__CANCEL__) {
      Message.error("服务器异常，建议稍后重试");/*  */
    }
    return Promise.reject(error);
  }
);

/**
 * 
 * @description axios的封装函数
 * @param {'get' | 'post' | 'put' | 'delete'} method 请求方法
 * @param {string} url 请求地址
 * @param {object} data 请求参数
 * @returns axios实例
 */
const fetch = (method, url, data) => {
  if (method !== "post") {
    data = delNoKeySecond(data);
  }
  //去除参数首尾空格
  data = trims(data);
  let thisReturnData = "";
  if (method === "post") {
    thisReturnData = service.post(url, { ...data });
  } else if (method === "get") {
    thisReturnData = service.get(url, {
      params: data,
    });
  } else if (method === "put") {
    thisReturnData = service.put(url, { ...data });
  } else if (method === "delete") {
    thisReturnData = service.delete(url, {
      params: data,
    });
  }
  return thisReturnData;
};

export default fetch;
