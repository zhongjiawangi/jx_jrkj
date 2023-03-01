// 防抖
export function debounce(fun, delay) {
  return function (args) {
    const that = this
    const _args = args
    clearTimeout(fun.id)
    fun.id = setTimeout(() => {
      fun.call(that, _args)
    }, delay)
  }
}
// 节流
export function throttle(fun, delay) {
  let last; let
    deferTimer
  // eslint-disable-next-line no-unused-vars
  return function (args) {
    const that = this
    // eslint-disable-next-line prefer-rest-params
    const _args = arguments
    const now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        last = now
        fun.apply(that, _args)
      }, delay)
    } else {
      last = now
      fun.apply(that, _args)
    }
  }
}
// 中文标点转为英文标点
export function chineseChar2englishChar(chineseChar) {
  // 将单引号‘’都转换成'，将双引号“”都转换成"
  let str = chineseChar.replace(/[’|‘]/g, "'").replace(/[“|”]/g, "\"");
  // 将中括号【】转换成[]，将大括号｛｝转换成{}
  str = str.replace(/【/g, "[").replace(/】/g, "]").replace(/｛/g, "{").replace(/｝/g, "}")
  str = str.replace(/（/g, "(").replace(/）/g, ")");
  // 将逗号，转换成,，将：转换成:
  str = str.replace(/，/g, ",").replace(/：/g, ":");
  // 将《转换为<，将》转换为>
  str = str.replace(/《/g, "<").replace(/》/g, ">");
  // 将句号。转换成.，将问号？转换为?
  str = str.replace(/。/g, ".").replace(/？/g, "?");
  // 将！转换为!
  str = str.replace(/！/g, "!");
  // 将￥转换为$
  str = str.replace(/￥/g, "$");
  return str;
}

const array = [
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
];
export function roundpass() {
  let str = ""
  for (let i = 0; i < 8; i++) {
    str
              += array[Math.round(Math.random() * (array.length - 1))];
  }
  return str
}
