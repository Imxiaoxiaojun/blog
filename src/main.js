/**
 * Created by gubaoer on 17/4/18.
 */


import Vue from 'vue'
import qs from 'qs'
// import HTTP from 'vue-resource'
import {
  Button,
  Select,
  Row,
  Col,
  Pagination,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  Dialog,
  Option
} from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-default/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// more grace import third package !
import moment from 'moment'
import axios from 'axios'
import curvejs from 'curvejs'
let Base64 = require('js-base64').Base64;

const addCookie = function(objName, objValue, objHours){//添加cookie
  var str = objName + "=" + escape(objValue);
  if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
    var date = new Date();
    var ms = objHours * 3600 * 1000;
    date.setTime(date.getTime() + ms);
    str += "; expires=" + date.toGMTString();
  }
  document.cookie = str;
  alert("添加cookie成功");
}

const getToken = function () {
  var arr, reg = new RegExp("(^| )" + 'TOKEN_COOKIE' + "=([^;]*)(;|$)");
  if (arr = window.document.cookie.match(reg)) {
    // return Base64.decode(arr[2]);
    return arr[2];
  } else {
    return '';
  }
}

// axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) {
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Token':getToken()
    };
    return config;
}, function (error) {
    return Promise.reject(error);
});

/*axios.interceptors.response.use(function (response) {
    console.log(response.headers);
    return response;
}, function (error) {
    return { data: { } };
});*/

Object.defineProperty(Vue.prototype, '$moment', { value: moment });
Object.defineProperty(Vue.prototype, '$axios', { value: axios });
Object.defineProperty(Vue.prototype, '$curvejs', { value: curvejs });

Vue.use(Button);
Vue.use(Select);
Vue.use(Row);
Vue.use(Col);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Dialog);
Vue.use(Option);

locale.use(lang);




// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
});

