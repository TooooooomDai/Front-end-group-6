import Vue from 'vue'
import Vuex from 'vuex'
import myhouse from './myhouse'
import axios from 'axios'

import neighbor from './neighbor/neighborindex.js'
import vote from './votes'


Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    peoplename:'',
    detailrecord:'',
    pass:'',
    peopleid:'',

    guardflag:true,

    //login
    identity:'',//身份
    list:'',//片区
    loudongnum:'',//楼栋
    danyuan:'',//单元
    fangwu:'',//房屋号
    phone:'',//手机号
    password:'',//密码
    beginTime:'',//合同开始时间
    endTime:'',//合同结束时间
    username:'',//用户名
    xingming:'',//姓名
    sex:'',//性别
    idCard:'',//身份证号
    nation:''//民族
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
    identitychoose(state,identity){
      state.identity=identity;
    },
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
      state.fangwu=fangwu;
    },
    phonenumber(state,phone){
      state.phone=phone;
    },
    getPassword(state,password){
      state.password=password;
    },
    getBegin(state,begintime){
      state.beginTime=begintime;
    },
    getEnd(state,endTime){
      state.endTime=endTime;
    },
    getUsername(state,username){
      state.username=username;
    },
    getXingming(state,xingming){
      state.xingming=xingming;
    },
    getSex(state,sex){
      state.sex=sex;
    },
    getIdcard(state,idCard){
      state.idCard=idCard;
    },
    getNation(state,nation){
      state.nation=nation;
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
    



    identitychoose(context,identity){
      context.commit('identitychoose',identity)
    },
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
    },
    phonenumber(context,phone){
      context.commit('phonenumber',phone)
    },
    getPassword(context,password){
      context.commit('getPassword',password)
    },
    getBegin(context,begintime){
      context.commit('getBegin',begintime)
    },
    getEnd(context,endTime){
      context.commit('getEnd',endTime)
    },
    getUsername(context,username){
      context.commit('getUsername',username)
    },
    getXingming(context,xingming){
      context.commit('getXingming',xingming)
    },
    getSex(context,sex){
      context.commit('getSex',sex)
    },
    getIdcard(context,idCard){
      context.commit('getIdcard',idCard)
    },
    getNation(context,nation){
      context.commit('getNation',nation)
    }
  },
  modules: {

    myhouse,
    neighbor,
	  vote
  }
})
