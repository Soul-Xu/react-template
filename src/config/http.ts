 // config/http.js
 
 import axios from 'axios';
import { message } from 'antd'
 ​
 // 创建axios实例
 const request = axios.create({
     baseURL: process.env.VUE_APP_URL,
     timeout: 60 * 1000,
   withCredentials: false, //表示跨域请求时是否需要使用凭证
     // headers: { 'Content-Type': 'application/json' },
 });
 ​
 // 添加请求拦截器
 request.interceptors.request.use(
     config => {
         // 在发送请求之前做些什么
         //比如某些页面需要登录，在这里可以判断是否登录，也可以设置请求头等内容
         // if (store.getters.token) {
         //     // 让每个请求携带token 
         //     config.headers['Authorization'] = 'Bearer ' +  store.getters.token
         // }
         return config;
     },
     error => {
         // 对请求错误做些什么
         return Promise.reject(error);
     }
 );
 ​
 // 添加响应拦截器
 request.interceptors.response.use(
     response => {
         // 对响应数据做点什么
         let res = response.data;
         console.log(res);
 ​
         if (res.error !== 0 && res.data) {
             message.success(res.data);
         }
         return res;
     },
     error => {
         // 对响应错误做点什么：统一进行响应错误的处理
         message.error(error.message);
         // console.dir(error);
         return Promise.reject(error);
     }
 );
 ​
 /**
  * 发送ajax请求
  * @param {String} url      请求地址
  * @param {String} method   请求方法 get post
  * @param {Object} data     请求参数
  * @param {Object} ctx      请求头等相关参数
  */
 const callApi = (url: string, method: string = 'get', data: object = {}, ctx: object = {}) => {
     return request(
         Object.assign(
             {},
             {
                 url,
                 method,
                 params: method === 'get' ? data : {},
                 data: method == 'post' ? data : {},
             },
             ctx
         )
     );
 };
 ​
 /**
  * GET请求接口
  * @param {String} url 请求接口地址
  * @param {Object} data 请求接口参数
  * @param {Object} ctx 请求头等相关参数
  */
 export const getApi = (url: string, data: object, ctx?: object) => callApi(url, 'get', data, ctx);
 /**
  * POST请求接口
  * @param {String} url 请求接口地址
  * @param {Object} data 请求接口参数
  * @param {Object} ctx 请求头等相关参数
  */
 export const postApi = (url: string, data: object, ctx: object) => callApi(url, 'post', data, ctx);
