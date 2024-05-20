import Vue from 'vue'
import App from './App.vue'
import {deleteRequest, getRequest, postRequest, putRequest} from "@/utils/api";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')

// 通过 Vue.prototype 注册全局变量,通过 this.getRequest 就可以调用该方法
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;