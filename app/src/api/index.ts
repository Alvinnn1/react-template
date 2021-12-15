// import {
//   MainUserApi,
//   MainGameApi,
//   MainEvoApi,
//   MainYggApi,
//   MainPpApi as MainPPApi,
//   MainBgamingApi,
//   MainSiteApi,
//   MainFinanceApi,
//   HeraclesWithdrawApi,
//   HeraclesPayApi,
//   HeraclesAdApi as AdApi,
//   MainRouletteApi
// } from '@imf/heimdall-ts';
//
// // @ts-ignore
// import { AxiosRequestConfig, AxiosResponse } from 'axios';
//
// import * as qs from 'qs';
// import { useDispatch } from 'react-redux';
// import { logout } from '@/store/slice/Account';
//
// //配置默认baseURL
// const baseURL = '/api';
//
// const baseURLMain = baseURL + '/main';
//
// //mainAPI
// const mainAPIMap = new Map();
//
// mainAPIMap.set('userApi', MainUserApi);
// mainAPIMap.set('gameApi', MainGameApi);
// mainAPIMap.set('evoApi', MainEvoApi);
// mainAPIMap.set('yggApi', MainYggApi);
// mainAPIMap.set('ppApi', MainPPApi);
// mainAPIMap.set('bgamingApi', MainBgamingApi);
// mainAPIMap.set('siteApi', MainSiteApi);
// mainAPIMap.set('financeApi', MainFinanceApi);
// mainAPIMap.set('rouletteApi', MainRouletteApi);
//
// //baseAPI
// const baseAPIMap = new Map();
//
// baseAPIMap.set('heraclesWithdrawApi', HeraclesWithdrawApi);
// baseAPIMap.set('heraclesPayApi', HeraclesPayApi);
// baseAPIMap.set('adApi', AdApi);
//
// //delete the key which is empty
// function pruneEmpty(obj: any) {
//   for (let key in obj) {
//     if (obj[key] === '' || obj[key] === undefined || obj[key] === null) {
//       delete obj[key];
//     }
//   }
//   return obj;
// }
//
// //默认请求中间件
// const requestMiddleWare = (config: AxiosRequestConfig) => {
//   config = {
//     ...config,
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8',
//       user_token: localStorage.getItem('token') ?? '',
//       // user_id: '8',
//     },
//     transformRequest: data => {
//       if (data) data = pruneEmpty(data);
//       return JSON.stringify(data);
//     },
//     paramsSerializer: (params: any) => {
//       if (params) params = pruneEmpty(params);
//       return qs.stringify(params, { arrayFormat: 'comma' });
//     },
//   };
//   return config;
// };
//
// //默认响应中间件
// const responseMiddleWare = (res: AxiosResponse) => {
//   //TODO
//   return res;
// };
//
// const responseErrHandler = (error: any) => {
//   return new Promise<Response>((resolve, reject) => {
//     reject(error.response.data);
//   });
// };
//
// const result: Record<string, any> = {};
//
// for (let [key, value] of mainAPIMap) {
//   result[key] = new value({
//     baseURL: baseURLMain,
//   });
//
//   result[key].instance.interceptors.request.use(requestMiddleWare);
//   result[key].instance.interceptors.response.use(responseMiddleWare, responseErrHandler);
// }
//
// for (let [key, value] of baseAPIMap) {
//   result[key] = new value({
//     baseURL: baseURL,
//   });
//   result[key].instance.interceptors.request.use(requestMiddleWare);
//   result[key].instance.interceptors.response.use(responseMiddleWare, responseErrHandler);
// }
//
// type mainApi = {
//   userApi: MainUserApi<unknown>;
//   gameApi: MainGameApi<unknown>;
//   evoApi: MainEvoApi<unknown>;
//   yggApi: MainYggApi<unknown>;
//   ppApi: MainPPApi<unknown>;
//   bgamingApi: MainBgamingApi<unknown>;
//   siteApi: MainSiteApi<unknown>;
//   financeApi: MainFinanceApi<unknown>;
//   heraclesWithdrawApi: HeraclesWithdrawApi<unknown>;
//   heraclesPayApi: HeraclesPayApi<unknown>;
//   adApi: AdApi<unknown>;
//   rouletteApi: MainRouletteApi<unknown>
// };
//
// const mainApi: mainApi = {
//   userApi: result['userApi'],
//   gameApi: result['gameApi'],
//   evoApi: result['evoApi'],
//   yggApi: result['yggApi'],
//   ppApi: result['ppApi'],
//   bgamingApi: result['bgamingApi'],
//   siteApi: result['siteApi'],
//   financeApi: result['financeApi'],
//   heraclesWithdrawApi: result['heraclesWithdrawApi'],
//   heraclesPayApi: result['heraclesPayApi'],
//   adApi: result['adApi'],
//   rouletteApi: result['rouletteApi']
// };
const mainApi = {}
export default mainApi;
