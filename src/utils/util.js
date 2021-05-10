/*
 * @Autor: Diskfan
 * @Date: 2019-08-07 10:54:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-14 20:07:45
 * @Description: 工具
 */

import { Message, Loading, Form } from 'element-ui';
// import QRCode from 'qrcodejs2'
import store from '@/store';
// import Router from '../router';
// const QRCode = window.QRCode;
// import Http from '@/util/http';
// import Vue from 'vue';
// import VueI18n from 'vue-i18n';
// const zh = require('@/lib/languages/zh.js');
// const en = require('@/lib/languages/en.js');

// Vue.use(VueI18n)
// const messages = { zh, en}
// const defaultLocal:string = local();
// const i18n = new VueI18n({
//   locale: defaultLocal,
//   fallbackLocale: 'en',
//   messages
// })

function throttle111(fn, delay) {
  let valid = true;

  // return function() {

  if (!valid) {
    //休息时间 暂不接客
    return false;
  }
  // 工作时间，执行函数并且在间隔期内把状态位设为无效
  valid = false;
  setTimeout(function() {
    fn();
    valid = true;
  }, delay);
  // }
}

function throttle(fn, interval) {
  // 定时器
  let timer = null;

  // 将debounce处理结果当作函数返回
  return function() {
    // 保留调用时的this上下文
    let context = this;
    // 保留调用时传入的参数
    let args = arguments;

    // 每次事件被触发时，都去清除之前的旧定时器
    if (timer) {
      clearTimeout(timer);
    }
    // 设立新定时器
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}

/**
 *
 * @param options 输入框的日期选择参数
 */
// date-picker 的时间是格林威时间
function StrToGMT(time) {
  let GMT = new Date(time);
  return GMT;
}
function GMTToStr(time) {
  let date = new Date(time);
  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);
  let Str = dateFormat(date, 'YYYY/MM/DD HH:mm:ss');
  // let Str =
  //   date.getFullYear() +
  //   '/' +
  //   (date.getMonth() + 1) +
  //   '/' +
  //   date.getDate() +
  //   ' ' +
  //   date.getHours() +
  //   ':' +
  //   date.getMinutes() +
  //   ':' +
  //   date.getSeconds();
  return Str;
}
// 0点开始
function GMTToStrZero(time) {
  let date = new Date(time);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  let Str = dateFormat(date, 'YYYY/MM/DD HH:mm:ss');
  // let Str =
  //   date.getFullYear() +
  //   '/' +
  //   (date.getMonth() + 1) +
  //   '/' +
  //   date.getDate() +
  //   ' ' +
  //   date.getHours() +
  //   ':' +
  //   date.getMinutes() +
  //   ':' +
  //   date.getSeconds();
  return Str;
}

const datePickerOptions = (options = { disabledDate: 'aft' }) => {
  const desc = options.disabledDate === 'aft' || options.disabledDate === 'all' ? 1 : -1;
  return {
    shortcuts: [
      {
        text: '最近一周',
        onClick(picker) {
          let end = +new Date();
          let start = +new Date();
          start = start - 3600 * 1000 * 24 * 7 * desc;
          start = GMTToStrZero(start);
          end = GMTToStr(end);
          picker.$emit('pick', [start, end]);
        },
      },
      {
        text: '最近一个月',
        onClick(picker) {
          let end = +new Date();
          let start = +new Date();
          start = start - 3600 * 1000 * 24 * 30 * desc;
          start = GMTToStrZero(start);
          end = GMTToStr(end);
          picker.$emit('pick', [start, end]);
        },
      },
      {
        text: '最近三个月',
        onClick(picker) {
          let end = +new Date();
          let start = +new Date();
          start = start - 3600 * 1000 * 24 * 92 * desc;
          start = GMTToStrZero(start);
          end = GMTToStr(end);
          picker.$emit('pick', [start, end]);
        },
      },
      {
        text: '最近半年',
        onClick(picker) {
          let end = +new Date();
          let start = +new Date();
          start = start - 3600 * 1000 * 24 * 183 * desc;
          start = GMTToStrZero(start);
          end = GMTToStr(end);
          picker.$emit('pick', [start, end]);
        },
      },
    ],
    disabledDate(date) {
      let curDate = new Date();
      // 不设置日期为23：59：59那么默认的可能是其他时间，导致当天不能可选
      let overT = new Date();
      overT.setHours(23);
      overT.setMinutes(59);
      overT.setSeconds(59);
      return options.disabledDate === 'aft' ? +date > +overT : options.disabledDate === 'pre' ? +date <= +new Date(curDate.getTime() - 24 * 60 * 60 * 1000) : false;
    },
  };
};

const datePickerOptions_s = (options = { disabledDate: 'aft' }) => {
  const desc = options.disabledDate === 'aft' || options.disabledDate === 'all' ? 1 : -1;
  return {
    shortcuts: [
      {
        text: '最近一周',
        onClick(picker) {
          let end = +new Date();
          let start = +new Date();
          start = start - 3600 * 1000 * 24 * 7 * desc;
          start = GMTToStrZero(start);
          end = GMTToStr(end);
          picker.$emit('pick', [start, end]);
        },
      },
      {
        text: '最近一个月',
        onClick(picker) {
          let end = +new Date();
          let start = +new Date();
          start = start - 3600 * 1000 * 24 * 30 * desc;
          start = GMTToStrZero(start);
          end = GMTToStr(end);
          picker.$emit('pick', [start, end]);
        },
      },
      {
        text: '最近三个月',
        onClick(picker) {
          let end = +new Date();
          let start = +new Date();
          start = start - 3600 * 1000 * 24 * 92 * desc;
          start = GMTToStrZero(start);
          end = GMTToStr(end);
          picker.$emit('pick', [start, end]);
        },
      },
      {
        text: '最近半年',
        onClick(picker) {
          let end = +new Date();
          let start = +new Date();
          start = start - 3600 * 1000 * 24 * 183 * desc;
          start = GMTToStrZero(start);
          end = GMTToStr(end);
          picker.$emit('pick', [start, end]);
        },
      },
    ],
    disabledDate(date) {
      let curDate = new Date();
      // 不设置日期为23：59：59那么默认的可能是其他时间，导致当天不能可选
      let overT = new Date();
      overT.setHours(23);
      overT.setMinutes(59);
      overT.setSeconds(59);
      return options.disabledDate === 'aft' ? +date > +overT : options.disabledDate === 'pre' ? +date <= +new Date(curDate.getTime() - 24 * 60 * 60 * 1000) : false;
    },
    disabledDate(date) {
      let seven = 1593532800000; // 2020年7月1日的时间戳
      return date.getTime() < seven;
    },
  };
};

/**
 * 重新计算适合的宽高
 * @param _imgwidth 原来的宽度
 * @param _imgheight 原来的高度
 * @param _rewidth 最大宽度
 * @param reheight 最大高度
 */
function autoImgSize(_imgwidth, _imgheight, _rewidth, reheight) {
  let maxWidth = _rewidth;
  let maxHeight = reheight;
  let hRatio;
  let wRatio;
  let Ratio = 1;
  let w = _imgwidth;
  let h = _imgheight;
  wRatio = maxWidth / w;
  hRatio = maxHeight / h;
  Ratio = wRatio <= hRatio ? wRatio : hRatio;
  return {
    width: Math.floor(w * Ratio),
    height: Math.floor(h * Ratio),
  };
}

/**
 * 获取token
 * @param session token 如果传了token，则设置token，否则返回存储得token
 */
function token(session) {
  // const key = Store.state.globalStaticData.sessionKey;
  // if (session === null) {
  // 	// Store.commit('setUserInfo', {});
  // 	// Store.commit('setBinded', false);
  // 	sessionStorage.removeItem(key);
  // } else if (session) {
  // 	sessionStorage.setItem(key, session);
  // } else {
  // 	session = sessionStorage.getItem(key);
  // 	return session;
  // }
}

/**
 * 获取邮件
 * @param addr 邮箱地址，参考token
 */
function email(addr) {
  // const key = Store.state.globalStaticData.emailKey;
  // if (addr) {
  // 	sessionStorage.setItem(key, addr);
  // } else {
  // 	return sessionStorage.getItem(key);
  // }
  // return addr;
}

/**
 * 获取用户名
 * @param name 参考token
 */
function userName(name) {
  // const key = Store.state.globalStaticData.userNameKey;
  // if (name) {
  // 	sessionStorage.setItem(key, name);
  // } else {
  // 	name = sessionStorage.getItem(key);
  // }
  // return name;
}

/**
 * 格式化日期
 * @param date 日期，utc获取Date类型数据
 * @param fmt
 */
function dateFormat(date, fmt = 'YYYY/MM/DD') {
  let newDate = date;
  let fmts = fmt;
  //fmts='YYYY-MM-DD HH:mm:ss'
  if (!newDate) {
    newDate = new Date();
  }
  if (typeof newDate === 'number') {
    newDate = new Date(newDate);
  }
  const o = {
    'M+': newDate.getMonth() + 1,
    'D+': newDate.getDate(),
    'h+': newDate.getHours() % 12 === 0 ? 12 : newDate.getHours() % 12,
    'H+': newDate.getHours(),
    'm+': newDate.getMinutes(),
    's+': newDate.getSeconds(),
    'q+': Math.floor((newDate.getMonth() + 3) / 3),
    S: newDate.getMilliseconds(),
  };
  const week = {
    0: '\u65e5',
    1: '\u4e00',
    2: '\u4e8c',
    3: '\u4e09',
    4: '\u56db',
    5: '\u4e94',
    6: '\u516d',
  };
  if (/(Y+)/.test(fmts)) {
    fmts = fmts.replace(RegExp.$1, `${newDate.getFullYear()}`.substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmts)) {
    fmts = fmts.replace(RegExp.$1, () => {
      if (RegExp.$1.length > 1) {
        if (RegExp.$1.length > 2) {
          return `\u661f\u671f${week[newDate.getDay()]}`;
        }
        return `\u5468${week[newDate.getDay()]}`;
      }
      return week[`${newDate.getDay()}`];
    });
  }
  Object.keys(o).forEach(k => {
    if (new RegExp(`(${k})`).test(fmts)) {
      fmts = fmts.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length));
    }
  });
  return fmts;
}

/**
 * 获取当前路由地址对应得菜单和icon
 * @param vm 当前组件实例
 */
function position(vm, path) {
  // const fullPath = path || vm.$route.fullPath;
  // let menus = Store.state.menu;
  // const arr = [];
  // let sp = fullPath.replace(/\//, "").split(/\//);
  // let icon = "";
  // let menu = null;
  // while (sp.length) {
  // 	const path = sp.splice(0, 1)[0];
  // 	for (let v of menus) {
  // 		if (v.path.replace(/\//g, "") === path) {
  // 			arr.push(v.menu);
  // 			menu = v;
  // 			menus = v.children || [];
  // 			icon = icon || v.icon;
  // 			break;
  // 		}
  // 	}
  // }
  // return {
  // 	icon: icon,
  // 	pos: arr.filter(el => el),
  // 	menu: menu
  // };
}

/**
 * 获取随机字符串
 * @param len 长度系数
 * @param fix toString参数
 */
function randomString(len, fix) {
  let str = Math.random()
    .toString(fix)
    .replace(/.*\./, '')
    .toUpperCase();
  for (let i = 1; i < len; i++) {
    str += randomString(1, fix);
  }
  return str;
}
/**
 * 是否绑定Google验证， 考虑到刷新之后store丢失状态，第三方插件不安全因素，
 * sessionStorage长度为单数已绑定，偶数未绑定
 * @param status
 */
function binded(status) {
  // if (Store.state.globalStaticData.dev) {
  // 	return true;
  // }
  // const key = Store.state.globalStaticData.bindedGoogleKey;
  // // 设置
  // if (typeof status !== 'undefined') {
  // 	const random = randomString(3); // 长度不小于33
  // 	const lens = status ? [13, 15, 17] : [14, 16, 18]; // 可选长度
  // 	const index = Math.floor(Math.random() * 3); // 生成 0 - 2 随机数
  // 	const saveLength = lens[index]; // 最后保存的数据长度
  // 	sessionStorage.setItem(key, random.substr(0, saveLength));
  // }
  // if (status) return true;
  // const save = sessionStorage.getItem(key) || '';
  // if (!save) return false;
  // return save.length % 2 !== 0;
}

/**
 * 获取类型
 * @param obj
 */
function type(obj) {
  return Object.prototype.toString
    .call(obj)
    .replace(/.*\s|[^\w]/g, '')
    .toLowerCase();
}

/**
 * 获取当前语言
 * @param name 不为空则设置语言
 */
function local(name) {
  const key = 'crm_language';
  if (name) {
    localStorage.setItem(key, name);
  } else {
    name = localStorage.getItem(key) || 'zh';
  }
  return name;
}
function createXhr() {
  const win = window;
  if (win.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else if (win.ActiveXObject) {
    return new ActiveXObject('Microsoft.XMLHTTP');
  }
}
/**
 * img 地址转base64
 * @param src img地址
 */
function img2base64(src) {
  return new Promise((resole, reject) => {
    // 直接使用img标签载入地址会导致canvas绘图出现区域缺失，数据不完整
    let xhr = createXhr();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
        let blob = xhr.response;
        let reader = new FileReader();
        reader.onload = () => {
          let img = new Image();
          img.onload = () => {
            resole({
              result: 200,
              width: img.width,
              height: img.height,
              base64: reader.result,
              src: src,
            });
            reader = null;
            blob = null;
          };
          img.onerror = () => {
            reject(img);
            reader = null;
            blob = null;
          };
          img.src = reader.result;
        };
        reader.onerror = e => {
          reject(reader);
          reader = null;
          blob = null;
        };
        reader.readAsDataURL(blob);
      }
    };
    xhr.responseType = 'blob';
    xhr.open('GET', src, true);
    xhr.send();
  });
}
function uploadFile(file, url) {
  // return new Promise(async (resole, reject) => {
  // 	const form = new FormData();
  // 	form.append('file', file, file.name);
  // 	const res = await Http.post(url, form);
  // 	if (res.result === 200) {
  // 		resole(res);
  // 	} else {
  // 		reject();
  // 	}
  // })
}
function isBase64(str) {
  if (typeof str !== 'string') return false;
  const notBase64 = /[^A-Z0-9+\/=]/i;
  const len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  const firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || (firstPaddingChar === len - 2 && str[len - 1] === '=');
}

function bindEvent(target, type, handle) {
  if (!target) {
    return;
  }
  if (target.addEventListener) {
    target.addEventListener(type, handle, true);
  } else if (target.attachEvent) {
    target.attachEvent('on' + type, handle);
  }
  return target;
}
function removeEvent(target, type, handle) {
  if (!target) {
    return;
  }
  if (target.addEventListener) {
    target.removeEventListener(type, handle);
  } else if (target.detachEvent) {
    target.detachEvent('on' + type, handle);
  }
  return target;
}
const inputNumber = val => {
  val = val.replace(/[^\d|\.]/g, '');
  const sp = val.split(/\./);
  let cal = '';
  sp.forEach((el, idx) => {
    cal += el;
    if (idx === 0 && /\./.test(val)) {
      cal += '.';
    }
  });
  return cal;
};
const keyToLower = obj => {
  if (typeof obj !== 'object') {
    return obj;
  }
  const tmp = type(obj) === 'object' ? {} : [];
  for (let i in obj) {
    tmp[i.toString().toLowerCase()] = keyToLower(obj[i]);
  }
  return tmp;
};
const htmlReplace = str => {
  var arrEntities = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, (el, t) => arrEntities[t]);
};
const clone = target => {
  if (typeof target !== 'object') {
    return target;
  }
  const obj = type(target) === 'object' ? {} : [];
  for (const i in target) {
    if (typeof target[i] === 'object') {
      obj[i] = clone(target[i]);
    } else {
      obj[i] = target[i];
    }
  }
  return obj;
};

/**
 * 导出到excel, 以 call 或者 apply 的方式调用
 */
let exporting = false;
let stack = []; // 任务队列
async function exportData(type, max = 10000, loading = null) {
  let that = this;
  if (exporting) {
    try {
      const formFilter = (that.$parent.filterForm || that.filterForm)();
      stack.push({
        vm: that,
        formData: formFilter,
        type: type,
        max: max,
      });
      that.$message.warning('当前正在执行导出任务，该任务已经添加到队列');
    } catch (e) {
      console.error(e);
      that.$notify.error({
        title: '提示',
        message: '导出任务添加到队列失败',
      });
    }
    return;
  }
  const { export_json_to_excel } = require('./export2excel/Export2Excel.js');
  const startExport = async list => {
    const header = [];
    const keys = [];
    const data = [];
    // const title = position(that).pos.pop();
    const title = that.excelTitle || '币币交易后台';
    const columns = that.configs;
    columns.map((el, idx) => {
      header[idx] = el.label;
      keys[idx] = el.prop;
    });
    list.map((el, idx) => {
      const obj = [];
      keys.map((k, i) => {
        obj[i] = el[k];
      });
      data[idx] = obj;
    });
    export_json_to_excel(header, data, title);
    const task = stack.shift();
    if (!task) {
      loading && loading.close();
      // that.$store.commit('setShowProgress', false);
    } else {
      exportData.apply(task.vm, [task.type, task.max, loading]);
    }
  };
  // 导出当前页
  if (type === 0) {
    startExport(that.dataList);
  } else if (type === 2) {
    // 使用后台接口导出
  } else if (type === 1) {
    // 使用js插件导出
    // 导出当前条件
    let dataCache = [];
    let loadCount = 0;
    const loadData = async (total, page = 1, per = 5000) => {
      try {
        loadCount = 0;
        const allTime = Math.ceil(total / per);
        const percent = (((page - 1) * 100) / allTime).toFixed(2) + '%';
        // that.$store.commit('setProgress', percent);
        // that.$store.commit('setShowProgress', true);
        loading.setText(`拉取中(${percent})`);
        const res = await (that.$parent.queryData || that.queryData)({
          // page: page,
          // page_size: per,
          // ac_page: page,
          // ac_rows: per,
          pageNum: page,
          pageSize: per,
        });
        dataCache = [...dataCache, ...(res.data.data.records || [])];
        if (dataCache.length < total) {
          loadData(total, ++page, per);
        } else {
          startExport(dataCache);
        }
      } catch (e) {
        ++loadCount;
        if (loadCount < 5) {
          setTimeout(() => {
            loadData(total, page);
          }, 200);
        } else {
          that
            .$confirm('数据拉取失败,是否重新拉取？', '提示', {
              confirmButtonText: '重新开始',
              cancelButtonText: '取消',
              type: 'error',
            })
            .then(() => {
              loading.close();
              exportData.apply(that, [type]);
            })
            .catch(() => {
              loading.close();
            });
        }
      }
    };
    try {
      loading =
        loading ||
        that.$loading({
          target: that.$refs.export2excel,
          text: '正在检查...',
          customClass: 'export2excel-loading',
          background: 'rgb(255, 255, 255, .6)',
        });
      const getRes = await (that.$parent.queryData || that.queryData)({
        // page: 1,
        // page_size: 1,
        // ac_page: 1,
        // ac_rows: 1,
        pageNum: 1,
        pageSize: 10,
      });
      // console.log("now ="+getRes)
      let exportnumber = +getRes.data.data.total || 0;
      if (exportnumber > max) {
        loading.setText('导出确认');
        const confirm = await that.$confirm(`当前条件总数据${exportnumber}, 是否仅导出前${max}条?`, '导出信息确认', {
          confirmButtonText: '导出',
          cancelButtonText: '取消',
          type: 'warning',
        });
        if (confirm === 'confirm') {
          // 导出
          loadData(max);
        }
      } else {
        loadData(exportnumber);
      }
    } catch (e) {
      loading && loading.close();
      console.error(e);
    }
  }
}

// name:节点名，vArr：权限配置数组, noVarr无权限数组
function getAuthority(name, vArr, noVarr) {
  // 元数据：用户自定义的页面配置json
  let _vArr = JSON.parse(JSON.stringify(vArr));
  // 后台和本地共同组合成的路由
  const tArr = store.state.app.hybridRouters;
  // 匹配到的后台数据节点
  let matchVal = null;
  // 返回的权限配置参数
  let temp = {
    status: 2,
    val: null,
    isAdd: false,
  };
  function judgeArr(tArr, tObj) {
    if (Array.isArray(tArr) && tArr.length > 0) {
      tArr.forEach(function(v, i) {
        if (v['name'] && v['name'].toLowerCase() == name.toLowerCase()) {
          matchVal = v['meta']['role'];
        } else {
          if (v.children && v.children.length > 0) {
            judgeArr(v.children, tObj);
          }
        }
      });
    }
  }
  judgeArr(tArr, name);
  // 其实只要有个配置按钮节点，都代表能操作
  if (matchVal && matchVal.length > 0) {
    // 获取所有配置项的名称列表
    const aliasArr = matchVal.map(v => v.desctext.replace(/\s*$/g, ''));
    if (_vArr) {
      //switch按钮控制（约定tr开头代表是行内的switch操作）
      const trArr = aliasArr.filter(v => ~v.indexOf('tr'));
      // 后台数据中无此项则删除元数据的项目（只获取aliasArr中包含的项）
      _vArr = _vArr.filter(v => v.type != 'switch' || (v.type == 'switch' && trArr.includes(v.alias)));
      const btnObj = _vArr.filter(v => v.type === 'action');
      // “操作”列--对于btnGroup部分，获取aliasArr中包含的项
      if (btnObj[0] && btnObj[0].btnGroup && btnObj[0].btnGroup.length > 0) {
        const btnArr = btnObj[0].btnGroup.filter(v => aliasArr.includes(v.alias));
        if (btnArr.length > 0) {
          // 保留声明过的成员
          _vArr[_vArr.length - 1].btnGroup = btnArr;
        } else {
          // 无操作项直接出栈删除“操作”栏目
          _vArr.pop();
        }
      }
    }
    temp = {
      status: 0,
      val: _vArr,
      isAdd: !!~aliasArr.indexOf('add'), // 是否有“添加”权限
      isModify: !!~aliasArr.indexOf('edit'), // 是否有“修改”权限
      btnArr: aliasArr, // 返回全部按钮，少量页面可能会用到
    };
  } else {
    // 无匹配数据项，说明毫无配置，status为0，让页面无任何操作项
    temp = {
      status: 2,
      val: noVarr,
      isAdd: false,
      isModify: false,
    };
  }
  return temp;
}

function isEmptyObject(obj) {
  for (var key in obj) {
    return false; //返回false，不为空对象
  }
  return true; //返回true，为空对象
}

function fmtNumber(type, val) {
  if (type == '%2') {
    return Math.floor(val * 10000) / 100;
  }
  if (type == '/4') {
    // 15.123   0.1512
    return Math.floor(val * 100) / 10000;
  }
  return val;
}

// 通用判断js成员是否是数组
function isArray(o) {
  return Object.prototype.toString.call(o) == '[object Array]';
}

function diyTime(str) {
  let overT = new Date();
  overT.setHours(23);
  overT.setMinutes(59);
  overT.setSeconds(59);
  const end = parseInt(new Date(overT).getTime());

  let start = end;
  // start = start - 3600 * 1000 * 24 * 1;
  let getT = new Date(start);
  getT.setHours(0);
  getT.setMinutes(0);
  getT.setSeconds(0);
  start = parseInt(new Date(getT).getTime());

  // let start = end;
  // start = start - 3600 * 1000 * 24 * 1;
  // let getT = new Date(start);
  // getT.setHours(0);
  // getT.setMinutes(0);
  // getT.setSeconds(0);
  // start = parseInt(new Date(getT).getTime());
  if (str === 'toDay') {
    return end;
  } else if (str === 'ago') {
    return start;
  }
}
/**
 * 两个数相加
 */
function add() {
  var args = arguments, //获取所有的参数
    lens = args.length, //获取参数的长度
    d = 0, //定义小数位的初始长度，默认为整数，即小数位为0
    sum = 0; //定义sum来接收所有数据的和
  //循环所有的参数
  for (var key in args) {
    //遍历所有的参数
    //把数字转为字符串
    var str = '' + args[key];
    if (str.indexOf('.') != -1) {
      //判断数字是否为小数
      //获取小数位的长度
      var temp = str.split('.')[1].length;
      //比较此数的小数位与原小数位的长度，取小数位较长的存储到d中
      d = d < temp ? temp : d;
    }
  }
  //计算需要乘的数值
  var m = Math.pow(10, d);
  //遍历所有参数并相加
  for (var key in args) {
    sum += args[key] * m;
  }
  //返回结果
  return sum / m;
}
// 乘
function accMul(arg1, arg2) {
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (e) {}
  try {
    m += s2.split('.')[1].length;
  } catch (e) {}
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
}

// 除
function accDiv(arg1, arg2) {
  var t1 = 0,
    t2 = 0,
    r1,
    r2;
  try {
    t1 = arg1.toString().split('.')[1].length;
  } catch (e) {} //--小数点后的长度
  try {
    t2 = arg2.toString().split('.')[1].length;
  } catch (e) {} //--小数点后的长度
  r1 = Number(arg1.toString().replace('.', '')); //--去除小数点变整数
  r2 = Number(arg2.toString().replace('.', '')); //--去除小数点变整数
  return (r1 / r2) * Math.pow(10, t2 - t1); //---整数相除 在乘上10的平方  小数点的长度
}

// }

/**
 * 生成密码字符串
 * 33~47：!~/
 * 48~57：0~9
 * 58~64：:~@
 * 65~90：A~Z
 * 91~96：[~`
 * 97~122：a~z
 * 123~127：{~
 * @param length 长度
 * @param hasNum 是否包含数字 1-包含 0-不包含
 * @param hasChar 是否包含字母 1-包含 0-不包含
 * @param hasSymbol 是否包含其他符号 1-包含 0-不包含
 * @param caseSense 是否大小写敏感 1-敏感 0-不敏感
 * @param lowerCase 是否只需要小写，只有当hasChar为0且caseSense为1时起作用 1-全部小写 0-全部大写
 */

function randomRange(min, max, charStr) {
  var returnStr = '';
  var range; //生成的字符串长度
  //随机生成字符
  var autoGetStr = function() {
    var charFun = function() {
      var n = Math.floor(Math.random() * 62);
      if (n < 10) {
        return n; //1-10
      } else if (n < 36) {
        return String.fromCharCode(n + 55); //A-Z
      } else {
        return String.fromCharCode(n + 61); //a-z
      }
    };
    while (returnStr.length < range) {
      returnStr += charFun();
    }
  };

  //根据指定的字符串中生成组合
  var accordCharStrGet = function() {
    for (var i = 0; i < range; i++) {
      var index = Math.round(Math.random() * (charStr.length - 1));
      returnStr += charStr.substring(index, index + 1);
    }
  };
  if (typeof min == 'undefined') {
    min = 10;
  }
  if (typeof max == 'string') {
    charStr = max;
  }
  range = max && typeof max == 'number' ? Math.round(Math.random() * (max - min)) + min : min;

  if (charStr) {
    accordCharStrGet();
  } else {
    autoGetStr();
  }
  return returnStr;
}

export default {
  randomRange,
  add,
  accDiv,
  accMul,
  isArray,
  fmtNumber,
  exportData,
  clone,
  isEmptyObject,
  diyTime,
  clipboard: window.ClipboardJS,
  datePickerOptions,
  datePickerOptions_s,
  autoImgSize,
  token,
  email,
  userName,
  dateFormat,
  position,
  binded,
  randomString,
  type,
  img2base64,
  isBase64,
  uploadFile,
  local,
  bindEvent,
  removeEvent,
  inputNumber,
  keyToLower,
  htmlReplace,
  getAuthority,
  throttle,
};
