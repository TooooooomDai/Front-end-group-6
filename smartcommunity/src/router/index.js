import Vue from 'vue'
import VueRouter from 'vue-router'
import Mine from '../views/dyc/mine/Mine.vue'
import Account from '../views/dyc/mine/Account.vue'
import ChangeNumber from '../views/dyc/mine/Changenumber.vue'
import Resident from '../views/dyc/mine/Resident.vue'
import Mycar from '../views/dyc/mine/Mycar.vue'
import Rmation from '../views/dyc/mine/Rmation.vue'
import Editvehicle from '../views/dyc/mine/Editvehicle.vue'
import Addcar from '../views/dyc/mine/Addcar.vue'
import Setting from '../views/dyc/other/Setting.vue'
import Aboutus from '../views/dyc/other/Aboutus.vue'
import Aboutproperty from '../views/dyc/other/Aboutproperty.vue'
import Neighborhood from '../views/dyc/other/Neighborhood.vue'
import Changepassword from '../views/dyc/other/Changepassword.vue'
import housekeping from '../views/housekeping.vue'
import beauty from '../views/beauty.vue'
import market from '../views/market.vue'
import bazaar from '../views/bazaar.vue'
import cate from '../views/cate.vue'
import fallow from '../views/fallow.vue'
import open from '../views/open.vue'
import record from '../views/record.vue'
import find from '../views/find.vue'


import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/loginAndRegister/Login.vue'),
    // children: [
      
    // ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/loginAndRegister/Register.vue')
  },
  {
    path: '/forgetpsw1',
    name: 'forgetpsw1',
    component: () => import('../views/loginAndRegister/Forgetpsw1.vue'),
  },
  {
    path: '/forgetpsw2',
    name: 'forgetpsw2',
    component: () => import('../views/loginAndRegister/Forgetpsw2.vue'),
  },



  {
    path: '/find',
    bane: 'find',
    component: find,
  },
  {
    path: '/housekeping',
    name: 'housekeping',
    component: housekeping
  },
  {
    path: '/beauty',
    name: 'beauty',
    component: beauty
  },
  {
    path: '/market',
    name: 'market',
    component: market
  },
  {
    path: '/bazaar',
    name: 'bazaar',
    component: bazaar
  },
  {
    path: '/cate',
    name: 'cate',
    component: cate
  },
  {
    path: '/fallow',
    name: 'fallow',
    component: fallow
  },
  {
    path: '/open',
    name: 'open',
    component: open
  },
  {
    path: '/record',
    name: 'record',
    component: record
  },



  {
    path: '/community',
    name: 'community',
    component: () => import('../views/community'),
  },
  {
    name: 'c_msg',
    path: '/c_msg',
    component: () => import('../views/community/c_msg.vue')
  },
  {
    name: 'c_inform',
    path: '/c_inform',
    component: () => import('../views/community/c_inform.vue')
  },
  {
    name: 'c_jiaofei',
    path: '/c_jiaofei',
    component: () => import('../views/community/c_jiaofei.vue')
  },
  {
    name: 'c_jiaofeijilu',
    path: '/c_jiaofeijilu',
    component: () => import('../views/community/c_jiaofeijilu.vue')
  },
  {
    name: 'c_jiaofeidetail',
    path: '/c_jiaofeidetail',
    component: () => import('../views/community/c_jiaofeidetail.vue')
  },
  {
    name: 'c_jiaofeizhangdan',
    path: '/c_jiaofeizhangdan',
    component: () => import('../views/community/c_jiaofeizhangdan.vue')
  },
  {
    name: 'c_baoxiu',
    path: '/c_baoxiu',
    component: () => import('../views/community/c_baoxiu.vue')
  },
  {
    name: 'c_baoxiujilu',
    path: '/c_baoxiujilu',
    redirect: '/c_baoxiujilu/c_baoxiutodo',
    component: () => import('../views/community/c_baoxiujilu.vue'),
    children: [
      {
        name: 'c_baoxiutodo',
        path: 'c_baoxiutodo',
        component: () => import('../views/community/c_baoxiutodo.vue'),
      },
      {
        name: 'c_baoxiustar',
        path: 'c_baoxiustar',
        component: () => import('../views/community/c_baoxiustar.vue'),
      },
      {
        name: 'c_baoxiufinish',
        path: 'c_baoxiufinish',
        component: () => import('../views/community/c_baoxiufinish.vue'),
      }
    ]
  },
  {
    name: 'c_baoxiudetail',
    path: '/c_baoxiudetail',
    component: () => import('../views/community/c_baoxiudetail.vue')
  },



  //yk
  {
    path: '/neighbors',
    name: 'neighbors',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Neighbors.vue'),
	redirect:'/neighbors/details',
	children:[
	{
		path:'details',
		name:'details',
		component:() => import(/* webpackChunkName: "about" */ '../views/neighbors/Details.vue'),
	},
	{
		path:'send',
		name:'send',
		component:() => import(/* webpackChunkName: "about" */ '../views/neighbors/Send.vue'),
	},
	{
		path:'mine',
		name:'mine',
		component:() => import(/* webpackChunkName: "about" */ '../views/neighbors/Mine.vue'),
	},
	{
		path:'replymine',
		name:'replymine',
		component:() => import(/* webpackChunkName: "about" */ '../views/neighbors/Replymine.vue'),
	},
	{
		path:'collection',
		name:'collection',
		component:() => import(/* webpackChunkName: "about" */ '../views/neighbors/Collection.vue'),
	},
	],
  },
  {
    path: '/neighborindex',
    name: 'neighborindex',
    component: () => import( '../views/Neighborindex.vue'),
  },
  {
    path: '/voteindex',
    name: 'voteindex',
    component: () => import('../views/vote/Voteindex.vue'),
  },
  {
    path: '/novote',
    name: 'novote',
    component: () => import('../views/vote/Novote.vue'),
  },
  {
    path: '/votehistory',
    name: 'votehistory',
    component: () => import('../views/vote/Votehistory.vue'),
  },
  {
    path: '/voted',
    name: 'voted',
    component: () => import('../views/vote/Voted.vue'),
  },


  // -------------------------------------------------------------------------------
  {
    path:'/onlineclick',
    name:'online',
    component:() =>import('../views/community/Online-click'),
    // children:[
    //   {
    //     path:'choosehome',
    //     name:'choosehome',
    //     component:()=>import('../views/Choosehome')
    //   }
    // ]
  },
  {
    //online的子路由
    path:'/choosehome/:id',
    name:'choosehome',
    component:()=>import('../views/community/Choosehome')
  },
  {
    // 电子监控
    path:'/monitor',
    name:'monitor',
    component:()=>import('../views/community/Monitor')
  },
  {
    // 投诉
    path:'/complaint',
    name:'complaint',
    component:()=>import('../views/community/Complaint'),
  },
  {
    // 我的记录
    path:'/myrecord',
    name:'myrecord',
    component:()=>import('../views/community/myrecord')
  },
  {
    // 回复
    path:'/reply',
    name:'reply',
    component:()=>import('../views/community/reply')
  },
  {
    // 访客
    path:'/visitorder',
    name:'visitorder',
    component:()=>import('../views/community/VisitOrder')
  },
  {
    // 访客记录
    path:'/visitrecord',
    name:'visitrecord',
    component:()=>import('../views/community/VisitRecord')
  },
  {
    // 访客通行证
    path:'/visitpass',
    name:'visitpass',
    component:()=>import('../views/community/VisitPass')
  },
  {
    // 访客详细
    path:'/visitdetail',
    name:'visitdetail',
    component:()=>import('../views/community/Visitdetail')
  },
  {
    // 选择人员
    path:'/choosepeople',
    name:'choosepeople',
    component:()=>import('../views/community/Choosepeople')
  },

  //我的
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
  },
  {
    path: '/mine/account',
    name: 'account',
    component: Account,
  },
  {
    path: '/changenumber',
    name: 'changenumber',
    component: ChangeNumber
  },
  {
    path: '/mine/resident',
    name: 'resident',
    component: Resident
  },
  {
    path: '/mine/mycar',
    name: 'mycar',
    component: Mycar
  },
  {
    path: '/mine/mycar/rmation',
    name: 'rmation',
    component: Rmation
  },
  {
    path: '/mine/mycar/editvehicle',
    name: 'editvehicle',
    component: Editvehicle
  },
  {
    path: '/mine/mycar/addcar',
    name: 'addcar',
    component: Addcar
  },
  {
    path: '/mine/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '/mine/setting/changepassword',
    name: 'changepassword',
    component: Changepassword
  },
  {
    path: '/mine/aboutus',
    name: 'aboutus',
    component: Aboutus
  },
  {
    path: '/mine/aboutproperty',
    name: 'aboutproperty',
    component: Aboutproperty
  },
  {
    path: '/mine/neighborhood',
    name: 'neighborhood',
    component: Neighborhood
  },
  {
    path:'/Myhouse',
    name:'myhouse',
    component: () => import('../views/Myhouse.vue')
  },
  {
    path:'/Myhouse/Addhouse/',
    name:'addhouse',
    component: () => import('../views/Addhouse.vue')
  },
  {
    path:'/Myhouse/Edithouse/',
    name:'edithouse',
    component: () => import('../views/Edithouse.vue')
  },
  {
    path:'/Myhouse/Seehouse/',
    name:'seehouse',
    component: () => import('../views/Seehouse.vue')
  }


]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // console.log(store);
  if(store.state.guardflag){
    if(from.name===null&&to.name==='login'){
      next();
    }else if(from.name==='login'&&to.name==='register'){
      next();
    }else if(to.name==='login'&&from.name==='register'){
      next();
    }else if(from.name==='login'&&to.name==='forgetpsw1'){
      next();
    }else if(to.name==='login'&&from.name==='forgetpsw1'){
      next();
    }else if(from.name==='forgetpsw1'&&to.name==='forgetpsw2'){
      next();
    }else if(to.name==='forgetpsw1'&&from.name==='forgetpsw2'){
      next();
    }else{
      next('/')
    }
  }else{
    next();
  }


})
export default router
