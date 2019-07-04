import Vue from 'vue'
import Router from 'vue-router'
import City from '../components/LL/city.vue'
import CityFind from '../components/LL/cityFind.vue'
import Login from '../components/yhk/login'
import resetPw from '../components/yhk/resetPw.vue'
import home from '../components/LL/home'
import search1 from '../components/LL/search1'
import order from '../components/LL/order'
import me from '../components/LL/me'
import foodClass from '../components/LL/foodClass'
import shopDetial from '../components/LL/shopDetial'
import shopIntr from '../components/LL/shopIntr'
import safeNotice from '../components/LL/safeNotice'
import orderSure from '../components/LL/orderSure'
import orderAddress from '../components/LL/orderAddress'
import addAddress from '../components/LL/addAddress'
import orderAddMessage from '../components/LL/orderAddMessage'
import tickets from '../components/LL/tickets'
import search from '../components/fhr/search'
import Account from '@/components/yhk/account'
import Alipay from '@/components/yhk/alipay'
import Hongbaoexchange from '@/components/yhk/hongbaoexchange'
import Serviced from '@/components/yhk/serviced'
import Hotproblem from '@/components/yhk/hotproblem'
import Balance from '@/components/yhk/balance'
import Credit from '@/components/yhk/credit'
import Shopmall from '@/components/yhk/shopmall'
import Download from '@/components/yhk/download'
import Vipcenter from '@/components/yhk/vipcenter'
import Changename from '@/components/yhk/changename'
import Vipexchange from '@/components/yhk/vipexchange'
import Editsite from '@/components/yhk/editsite'
import Addsite from '@/components/yhk/addsite'
import Adresssearch from '@/components/yhk/adresssearch'


// 购买记录
import Purchasehistory from '@/components/yhk/purchasehistory'

//我的优惠
import Mydiscount from '@/components/yhk/mydiscount'
import Mydiscount1 from '@/components/yhk/mydiscount1'
import Mydiscount2 from '@/components/yhk/mydiscount2'
//各种说明
import Vipexplain from '@/components/yhk/vipexplain'
import Creditexplain from '@/components/yhk/creditexplain'
import Hongbaoexplain from '@/components/yhk/hongbaoexplain'
import Hongbaohistory from '@/components/yhk/hongbaohistory'
import Tuijian from '@/components/yhk/tuijian'
import Balanceexplain from '@/components/yhk/balanceexplain'


import Vouchersexplain from '@/components/yhk/vouchersexplain'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'city',
      component: City
    },
    {
      path: "/cityFind",
      name: "cityFind",
      component: CityFind
    },
    {
      path: '/login',
      name: "login",
      component: Login
    }, {
      path: '/resetPw',
      name: "resetPw",
      component: resetPw
    },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/search",
      name: "search",
      component: search
    },
    {
      path: "/order",
      name: "order",
      component: order
    }, {
      path: "/me",
      name: "me",
      component: me
    }, {
      path: "/foodClass",
      name: "foodClass",
      component: foodClass
    }, {
      path: "/shopDetial",
      name: "shopDetial",
      component: shopDetial
    }, {
      path: "/shopIntr",
      name: "shopIntr",
      component: shopIntr
    }, {
      path: "/safeNotice",
      name: "safeNotice",
      component: safeNotice
    }, {
      path: "/orderSure",
      name: "orderSure",
      component: orderSure
    }, {
      path: "/orderAddress",
      name: "orderAddress",
      component: orderAddress
    }, {
      path: "/addAddress",
      name: "addAddress",
      component: addAddress
    }, {
      path: "/orderAddMessage",
      name: "orderAddMessage",
      component: orderAddMessage
    }, {
      path: "/tickets",
      name: "tickets",
      component: tickets
    }, {
      path: "/search1",
      name: "search1",
      component: search1
    }, {
      path: '/account',
      name: 'account',
      component: Account
    }, {
      path: '/adresssearch',
      name: 'adresssearch',
      component: Adresssearch
    }, {
      path: '/hongbaoexchange',
      name: 'hongbaoexchange',
      component: Hongbaoexchange
    }, {
      path: '/editsite',
      name: 'editsite',
      component: Editsite

    },
    {
      path: '/addsite',
      name: 'addsite',
      component: Addsite

    },
    {
      path: '/alipay',
      name: 'alipay',
      component: Alipay

    },
    {
      path: '/serviced',
      name: 'serviced',
      component: Serviced
    },
    {
      path: '/hotproblem',
      name: 'hotproblem',
      component: Hotproblem

    },
    {
      path: '/balance',
      name: 'balance',
      component: Balance

    },
    {
      path: '/balanceexplain',
      name: 'balanceexplain',
      component: Balanceexplain

    },
    {
      path: '/credit',
      name: 'credit',
      component: Credit

    },
    {
      path: '/shopmall',
      name: 'shopmall',
      component: Shopmall

    },
    {
      path: '/download',
      name: 'download',
      component: Download

    },
    {
      path: '/vipcenter',
      name: 'vipcenter',
      component: Vipcenter

    },
    {
      path: '/changename',
      name: 'changename',
      component: Changename

    },

    {
      path: '/vipexchange',
      name: 'vipexchange',
      component: Vipexchange

    },
    {
      path: '/purchasehistory',
      name: 'purchasehistory',
      component: Purchasehistory

    },

    {
      path: '/vipexplain',
      name: 'vipexplain',
      component: Vipexplain

    },

    {
      path: '/hongbaoexplain',
      name: 'hongbaoexplain',
      component: Hongbaoexplain

    },
    {
      path: '/vouchersexplain',
      name: 'vouchersexplain',
      component: Vouchersexplain

    },
    {
      path: '/creditexplain',
      name: 'creditexplain',
      component: Creditexplain

    },
    {
      path: '/hongbaohistory',
      name: 'hongbaohistory',
      component: Hongbaohistory

    },
    {
      path: '/tuijian',
      name: 'tuijian',
      component: Tuijian

    },
    {
      path: '/mydiscount',
      name: 'mydiscount',
      component: Mydiscount,
      redirect: "/mydiscount1",
      // redirect:"/mydiscount2",

      children: [{
          path: '/mydiscount1',
          name: 'mydiscount1',
          component: Mydiscount1,
        },
        {
          path: '/mydiscount2',
          name: 'mydiscount2',
          component: Mydiscount2,
        }
      ]

    },

  ]
})
