import axios from 'axios'

const http = axios.create({
    baseURL: '',
    timeout: 10000,
})

// 响应前拦截
http.interceptors.request.use(function (config) {
    // if(getToken('token')&&getToken('token')!=''){
    //     config.headers["X-Token"] = getToken('token');
    //   }
    return config
  }, function (error) {
    return Promise.reject(error)
})

// 响应后拦截
axiosInstance.interceptors.response.use(function (response) {
    return new Promise((resolve,reject)=>{
        let {res}=response;
        if(res.code=='200'){
            resolve(res.data)
        }else{
            reject(res);
        }
    })
  },(error) =>{
    console.log('接口响应异常')
    return Promise.reject(error)
  })
  export default http;