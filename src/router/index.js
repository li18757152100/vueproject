import Vue from 'vue'
import Router from 'vue-router'
//幻灯插件
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
//商铺前端页面
import Index from '@/components/Index'
import News from '@/components/News'
import Products from '@/components/Products'
import Show from '@/components/Show'
import Nshow from '@/components/Nshow'
import Notice from '@/components/Notice'
import Message from '@/components/Message'
import Mshow from '@/components/Mshow'
import Car from '@/components/Car'
import Search from '@/components/Search'
import Order from '@/components/Order'
import OrderPay from '@/components/OrderPay'
import OrderOk from '@/components/OrderOk'
//会员登录，以及会员中心
import Login from '@/components/member/Login'
import Forgot from '@/components/member/Forgot'
import Reset from '@/components/member/Reset'
import User from '@/components/member/User'
import Help from '@/components/member/Help'
import HelpDetail from '@/components/member/HelpDetail'
import Set from '@/components/member/Set'
import About from '@/components/member/About'
import Xgmm from '@/components/member/Xgmm'
import Jbzl from '@/components/member/Jbzl'
import MyCollect from '@/components/member/MyCollect'
import UserNew from '@/components/member/UserNew'
import MyView from '@/components/member/MyView'
import FeedBack from '@/components/member/FeedBack'
import Funds from '@/components/member/Funds'
import Withdraw from '@/components/member/Withdraw'
import MyCoupon from '@/components/member/MyCoupon'
import MyRedenvelope from '@/components/member/MyRedenvelope'
import Commission from '@/components/member/Commission'
import MyOrder from '@/components/member/MyOrder'
import MyAddress from '@/components/member/MyAddress'
import AddAddress from '@/components/member/AddAddress'
//弹出框
import Cen from '@/components/Cen'
import Cena from '@/components/Cena'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        title: '搜索'
      }
    },
    {
      path: '/cen',
      name: 'Cen',
      component: Cen,
      meta: {
        title: '弹框'
      }
    },
    {
      path: '/cena',
      name: 'Cena',
      component: Cena,
      meta: {
        title: '弹框'
      }
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      meta: {
        title: '新闻资讯'
      }
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      meta: {
        title: '产品中心'
      }
    },
    {
      path: '/show/:vid',
      name: 'Show',
      component: Show,
      meta: {
        title: '产品详情'
      }
    },
    {
      path: '/nshow/:newid',
      name: 'Nshow',
      component: Nshow,
      meta: {
        title: '新闻详情'
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        title: '提交订单'
      }
    },
    {
      path: '/orderpay',
      name: 'OrderPay',
      component: OrderPay,
      meta: {
        title: '支付订单'
      }
    },
    {
      path: '/orderok',
      name: 'OrderOk',
      component: OrderOk,
      meta: {
        title: '支付成功'
      }
    },
      {
        path: '/notice',
        name: 'Notice',
        component: Notice,
        meta: {
          title: '通知公告'
        }
     },
     {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: {
        title: '消息'
      }
     },
     {
      path: '/mshow/:mid',
      name: 'Mshow',
      component: Mshow,
      meta: {
        title: '消息详情'
      }
    },
    {
      path: '/car',
      name: 'Car',
      component: Car,
      meta: {
        title: '购物车'
      }
     },
     {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '会员登录'
      }
   },
   {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot,
    meta: {
      title: '忘记密码'
    }
 },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset,
    meta: {
      title: '重置密码'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/set',
    name: 'Set',
    component: Set,
    meta: {
      title: '设置'
    }
  },
  {
    path: '/mycollect',
    name: 'MyCollect',
    component: MyCollect,
    meta: {
      title: '我的收藏'
    }
  },
  {
    path: '/mynews',
    name: 'UserNew',
    component: UserNew,
    meta: {
      title: '关注资讯'
    }
  },
  {
    path: '/myview',
    name: 'MyView',
    component: MyView,
    meta: {
      title: '浏览记录'
    }
  },
  {
    path: '/feedback',
    name: 'FeedBack',
    component: FeedBack,
    meta: {
      title: '意见反馈'
    }
  },
  {
    path: '/funds',
    name: 'Funds',
    component: Funds,
    meta: {
      title: '我的钱包'
    }
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: Withdraw,
    meta: {
      title: '提现'
    }
  },
  {
    path: '/mycoupon',
    name: 'MyCoupon',
    component: MyCoupon,
    meta: {
      title: '我的优惠券'
    }
  },
  {
    path: '/myaddress',
    name: 'MyAddress',
    component: MyAddress,
    meta: {
      title: '收货地址'
    }
  },
  {
    path: '/addaddress',
    name: 'AddAddress',
    component: AddAddress,
    meta: {
      title: '添加地址'
    }
  },
  {
    path: '/myredenvelope',
    name: 'MyRedenvelope',
    component: MyRedenvelope,
    meta: {
      title: '我的红包'
    }
  },
  {
    path: '/commission',
    name: 'Commission',
    component: Commission,
    meta: {
      title: '资金明细'
    }
  },
  {
    path: '/myorder',
    name: 'MyOrder',
    component: MyOrder,
    meta: {
      title: '我的订单'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/set_xgmm',
    name: 'Xgmm',
    component: Xgmm,
    meta: {
      title: '修改密码'
    }
  },
  {
    path: '/set_jbzl',
    name: 'Jbzl',
    component: Jbzl,
    meta: {
      title: '基本资料'
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
    meta: {
      title: '帮助中心'
    }
  },
  {
    path: '/helpdeatil/:helpid',
    name: 'HelpDetail',
    component: HelpDetail,
    meta: {
      title: '帮助详情'
    }
  },
  {
    path:'/',
    redirect:{
      name:'Index'
    }
  }
  ]
})
