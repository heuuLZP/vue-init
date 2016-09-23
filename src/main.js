/**
* @Author: callback
* @Date:   2016-09-23T11:20:58+08:00
* @Email:  heuuLZP@gmail.com
* @Last modified by:   callback
* @Last modified time: 2016-09-23T11:56:56+08:00
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入组件
import home from './vue/home.vue'
import button from './vue/button.vue'

//开启debug模式
Vue.config.debug = true;
//路由器需要一个根组件
let App = Vue.extend({});
//创建路由实例
let router = new VueRouter();

router.map({
  '/':{				//首页
       component: home
   },
  '/home':{//访问地址
    name:'home',   //定义路由的名字
    component:home, //引用的组件名称
  },
  '/button':{//访问地址
    name:'button',   //定义路由的名字
    component:button, //引用的组件名称
  }
});
router.redirect({
    '*':'/'
});

router.start(App,'#app')
