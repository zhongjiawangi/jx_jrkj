/**
   * @description: 判断是否为json
   * @param {string} str
   * @return {*}
   */
function isJSON(str) {
  try {
    const obj = JSON.parse(str)
    return !!(typeof obj === 'object' && obj)
  } catch (e) {
    return false
  }
}

export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  if (typeof value === 'number') {
    value = value.toString()
  }
  localStorage.setItem(key, value)
}

/**
   * @description: 获取数据
   * @param {string} key
   * @return {*}
   */
export const getItem = (key) => {
  const data = localStorage.getItem(key)
  if (data !== null && isJSON(data)) {
    return JSON.parse(data)
  }
  return data
}

/**
   * @description: 删除指定数据
   * @param {string} key
   * @return {*}
   */
export const removeItem = (key) => {
  localStorage.removeItem(key)
}

/**
   * @description: 清空缓存
   * @param {*}
   * @return {*}
   */
export const removeAllItem = () => {
  localStorage.clear()
}
