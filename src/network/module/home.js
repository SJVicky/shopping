import http from '../http'

// export const GetSlideData=async (params, options) => await http({
//     url: '',
//     method: 'post',
//     data: params
// }, options);

export const GetSlideData = (data) => { return http.get(`/`, { params: data }).then(res => res); };