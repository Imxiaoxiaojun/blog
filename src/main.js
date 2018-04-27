/**
 * Created by gubaoer on 17/4/18.
 */

import Vue from 'vue'
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

const getToken =function () {
    const token = {'token':'test','expire':2019}
    const date = new Date();
    console.log(date.getDate())
    if (token && token['token'] && token['expire'] > date.getFullYear()){
        return token;
    }
    return null;
}



axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) {
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    if (!getToken()) {
        console.log('token error')
        return;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {

    return response;
}, function (error) {
    return Promise.reject(error);
});

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

Vue.prototype.rootUrl = '/agent/';

locale.use(lang);




// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    render: h => h(App)
});

