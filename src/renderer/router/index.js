import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store/index'

Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/components/login/login')), 'login');
const Home = r => require.ensure([],() => r(require('@/components/home/Home')), 'home');
const News = r => require.ensure([],() => r(require('@/components/news/News')), 'news');
const Manage = r => require.ensure([],() => r(require('@/components/manage/manage')), 'manage');
const ManageHome = r => require.ensure([],() => r(require('@/components/manage/manageHome/home')), 'manageHome');
const Channel = r => require.ensure([],() => r(require('@/components/manage/jinjian/channel')), 'channel');
const Merchant = r => require.ensure([],() => r(require('@/components/manage/jinjian/merchant')), 'merchant');
const addMerchant = r => require.ensure([],() => r(require('@/components/manage/addMerchant/addMerchant')), 'addMerchant');
const Show = r => require.ensure([],() => r(require('@/components/showMsg/showMsg')), 'showMsg');

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      name: 'home-index',
      component: Home,
      beforeEnter: (to,from,next)=> {
        console.log(to)
        console.log(from)
        if(Store.state.isLogin == 1){
          //用户已登录
          next();
        }else{
          next({path: '/login',query: {Rurl: to.fullPath}});
        }
      },
      children: [{
        path: '/news',
        component: News
      },{
        path: '/showMsg',
        component: Show,
        meta: {title: '标题',content: ['啊啊啊','啦啦啦啦']}
      },{
        path: '/important',
        component: Show,
        meta: {title: '重要事项',content: ['事项1','事项2']}
      }]
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage,
      children: [{
        path: '',
        component: ManageHome,
        meta: []
      },{
        path: '/channel',
        component: Channel,
        meta: ['进件首页','渠道进件']
      },{
        path: '/merchant',
        component: Merchant,
        meta: ['进件首页','商户进件']
      },{
        path: '/addMerchant',
        component: addMerchant,
        meta: ['进件首页','商户进件', '新增商户']
      }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
