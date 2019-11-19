import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import neighbor from './neighbor/neighborindex.js'
import vote from './votes'


Vue.use(Vuex)
import myhouse from './myhouse'


export default new Vuex.Store({
  state: {
    peoplename:'',
    detailrecord:'',
    pass:'',
    peopleid:'',

    //login
    list:'',
    loudongnum:'',
    danyuan:'',
    fangwu:''
  },
  mutations: {
    // zc部分
    sendname(state,people){
      state.peoplename=people.pName
      state.peopleid=people.pId
    },
    sendrecord(state,detailrecord){
      state.detailrecord=detailrecord
    },
    



    //login
    pianquid(state,list){
      state.list=list
    },
    loudongid(state,loudongnum){
      state.loudongnum=loudongnum
    },
    danyuanid(state,danyuan){
      state.danyuan=danyuan
    },
    fangwuid(state,fangwu){
      state.fangwu=fangwu
    }
  },
  actions: {
    sendname(context,people){
     context.commit('sendname',people)
    },
    // 我的评价记录
    sendrecord(context,detailrecord){
      context.commit('sendrecord',detailrecord)
    },
    


    // kj部分
    pianquid(context,list){
      context.commit('pianquid',list)
    },
    loudongid(context,loudongnum){
      context.commit('loudongid',loudongnum)
    },
    danyuanid(context,danyuan){
      context.commit('danyuanid',danyuan)
    },
    fangwuid(context,fangwu){
      context.commit('fangwuid',fangwu)
    }

    
  },
  modules: {
    myhouse,
    neighbor,
	  vote
  }
})
