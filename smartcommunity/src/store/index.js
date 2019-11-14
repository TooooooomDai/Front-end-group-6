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
    record:'',
    pass:'',

    //login
    list:'',
    loudongnum:'',
    danyuan:'',
    fangwu:''
  },
  mutations: {
    sendname(state,people){
      state.peoplename=people.name
      // console.log(state.peoplename)
    },
    sendrecord(state,record){
      state.record=record
      // console.log(state.record)
    },
    // getpass(state,pass){
    //   state.pass=pass
    //   console.log(state.pass)
    // }



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
    sendrecord(context,record){
      context.commit('sendrecord',record)
    },
    // 获取通行证
    // getpass(context,pass){
    //   context.commit('getpass',pass)
    // }
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
