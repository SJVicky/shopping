import Toast from './toast'

const toastObj={}

toastObj.install=function(Vue){
    //创建组件构造器
    const ToastCtrl=Vue.extend(Toast);
    //new 方式，根据组件构造器，可以创建一个组件对象
    const toast=new ToastCtrl();
    //将组件对象，手动挂载到某个元素上
    toast.$mount(document.createElement('div'));
    //toast.$el对应的就是div
    document.body.appendChild(toast.$el);

    Vue.prototype.$toast=toast;
}
export default toastObj