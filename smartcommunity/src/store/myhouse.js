import axios from 'axios';
export default ({
  namespaced: true,
  state: {
    houseList: [],
    details: [],//选项内容
    details_all: [],
    addhouse_value: [],
    edithouse_value: [],
    seehouse_value: [],


    addhouse: ['身份类型', '所属片区', '所属楼栋', '所属单元', '所属房屋'],
    edithouse: [],
    seehouse: [],
    house: {
      yz: ['身份类型', '所属片区', '所属楼栋', '所属单元', '所属房屋', '住户可见', '交付时间', '产权性质', '户型', '朝向', '入住时间'],
      zk: ['身份类型', '所属片区', '所属楼栋', '所属单元', '所属房屋', '合同开始时间', '合同结束时间'],
      js: ['身份类型', '所属片区', '所属楼栋', '所属单元', '所属房屋'],
    },

    shuxing:{
      yz:['indentityType','houseArea','houseTung','houseUnit','houseNum','issee','givetime','nature','apartment','orientations','intime'],
      zk:['indentityType','houseArea','houseTung','houseUnit','houseNum','startTime','endTime'],
      js:['indentityType','houseArea','houseTung','houseUnit','houseNum']
    },

    houduan_xuanxiang:{
       yz:{
         indentityType:['业主','租客','家属'],
         houseArea:['迎南小区','金花小区','满香园小区','黄鹤楼小区','地平线小区','宝石小区','牛头人小区'],
         houseTung:['1幢','2幢','3幢','4幢','5幢','6幢','7幢','8幢','9幢','10幢','11幢','12幢','13幢','14幢','15幢','16幢','17幢','18幢','19幢','20幢','21幢','22幢','23幢','24幢','25幢','26幢','27幢','28幢','29幢','30幢'],
         houseUnit:['1单元','2单元','3单元'],
         houseNum:['0101','0102','0103','0104','0105','0106','0107','0108','0109','0201','0202','0203','0204','0205','0206','0207','0208','0209','0301','0302','0303','0304','0305','0306','0307','0308','0309'],
         issee:['可见','不可见'],
         givetime:['暂无'],
         nature:['暂无'],
         apartment:['1户1室1厅','1户2室1厅','1户2室2厅','1户3室1厅','1户3室2厅','1户3室3厅','1户4室1厅','1户4室2厅','1户4室3厅','2户1室1厅','2户2室1厅','2户2室2厅','2户3室1厅','2户3室2厅','2户3室3厅','2户4室1厅','2户4室2厅','2户4室3厅',],
         orientations:['朝东','朝南','朝西','朝北'],
         intime:['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019']
       },
       zk:{
        indentityType:['业主','租客','家属'],
        houseArea:['迎南小区','金花小区','满香园小区','黄鹤楼小区','地平线小区','宝石小区','牛头人小区','杭州小区'],
        houseTung:['1幢','2幢','3幢','4幢','5幢','6幢','7幢','8幢','9幢','10幢','11幢','12幢','13幢','14幢','15幢','16幢','17幢','18幢','19幢','20幢','21幢','22幢','23幢','24幢','25幢','26幢','27幢','28幢','29幢','30幢'],
        houseUnit:['1单元','2单元','3单元'],
        houseNum:['0101','0102','0103','0104','0105','0106','0107','0108','0109','0201','0202','0203','0204','0205','0206','0207','0208','0209','0301','0302','0303','0304','0305','0306','0307','0308','0309'],
        startTime:['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
        endTime:['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035','2036','2037','2038','2039']
       } ,
       js:{
        indentityType:['业主','租客','家属'],
        houseArea:['迎南小区','金花小区','满香园小区','黄鹤楼小区','地平线小区','宝石小区','牛头人小区'],
        houseTung:['1幢','2幢','3幢','4幢','5幢','6幢','7幢','8幢','9幢','10幢','11幢','12幢','13幢','14幢','15幢','16幢','17幢','18幢','19幢','20幢','21幢','22幢','23幢','24幢','25幢','26幢','27幢','28幢','29幢','30幢'],
        houseUnit:['1单元','2单元','3单元'],
        houseNum:['0101','0102','0103','0104','0105','0106','0107','0108','0109','0201','0202','0203','0204','0205','0206','0207','0208','0209','0301','0302','0303','0304','0305','0306','0307','0308','0309'],
       }
    },
    
    houduan_user:[
      {
        uid:'1',
        indentityType:'租客',
        houseArea:'迎南小区',
        houseTung:'1幢',
        houseUnit:'1单元',
        houseNum:'0101',
        startTime:'',
        endTime:'2008',
        reason:'原因：合同开始时间未填写',
        state: '未通过'
      },
      {
        uid:'2',
        indentityType:'业主',
        houseArea:'牛头人小区',
        houseTung:'9幢',
        houseUnit:'2单元',
        houseNum:'0201',
        issee:'暂无',
        givetime:'暂无',
        nature:'暂无',
        apartment:'1户3室2厅',
        orientations:'朝南',
        intime:'2007',
        reason:'',
        state: '通过'
      },
      {
        uid:'3',
        indentityType:'家属',
        houseArea:'黄鹤楼小区',
        houseTung:'5幢',
        houseUnit:'3单元',
        houseNum:'0301',
        reason:'',
        state: '审核中'
      }
    ]

  },
  mutations: {
    selected(state, data) {
      state.addhouse_value[data.ekey] = data.selcons;
    },
    edit_selected(state, data) {
      state.edithouse_value[data.ekey] = data.selcons;
    },


    see_houserender(state, data) {
      console.log('see初始化');
      state.seehouse = state.house[data.type.idtype];
      //let hid = data.result.hid;
      // delete data.result.hid;
      //state.seehouse_value = Object.values(data.result);
      //改变值
      let uid = data.arr[0].uid;
      delete data.arr[0].uid;
      state.seehouse_value = Object.values(data.arr[0]);
      data.arr[0].uid = uid;
    },
    edit_houserender(state, data) {
      console.log('edit初始化')
      console.log(data);
    //   state.edithouse = state.house[data.type.idtype];
    //   state.edithouse = state.house[data.type.idtype];
    //   let hid = data.result.hid;
    //  delete data.result.hid;
    //  state.edithouse_value = Object.values(data.result);
    //  data.result.hid = hid;
      state.edithouse = state.house[data.type.idtype];
      //改变选项
      state.details_all = Object.values(state.houduan_xuanxiang[data.type.idtype]);
      //改变值
      let uid = data.arr[0].uid;
      delete data.arr[0].uid;
      state.edithouse_value = Object.values(data.arr[0]);
      data.arr[0].uid = uid;
    },
    add_houserender(state, data) {
      if (data == '') {
        state.addhouse = state.house.js;
      } else {
        state.addhouse = state.house[data];
        //改变选项
        state.details_all = Object.values(state.houduan_xuanxiang[data]);

        // console.log(Object.values(state.houduan_xuanxiang[data]))
      };
    },

    init_addhouse(state) {
      state.addhouse_value = [];
      state.addhouse = state.house.js;
    },
    init_housemain(state,data) {
      console.log('main初始化房屋');
      // state.houseList = data;
      state.houseList = state.houduan_user;
    },

    change_detail(state,index){
        state.details = state.details_all[index];
    },


    add_submit(state,data){
      state.houduan_user.push(data);
      console.log(state.houduan_user)
    }

  },
  actions: {
    selected({ commit }, data) {
      commit('selected', data);

    },
    edit_selected({ commit }, data) {
      commit('edit_selected', data);
    },


    see_houserender({ commit ,state}, data) {
      console.log('see后端请求数据')
      let arr = state.houduan_user.filter((value)=>{
        return value.uid == data.type.uid;
      })
      console.log(arr);

      // axios.post('').then((result)=>{
      //  commit('see_houserender', {type:data.type,result:result.data});
      // })
      
      commit('see_houserender', {type:data.type,arr});
    },
    edit_houserender({ commit,state }, data) {
      console.log(data.type);
      console.log('发送请求，获取房屋具体信息');
      
      // axios.post('/getHouseDetail',`${data.hid}`).then((result)=>{
      //    commit('edit_houserender', {type:data.type,result:result.data});
      // })
     let arr = state.houduan_user.filter((value)=>{
        return value.uid == data.type.uid;
      })
      console.log(arr);
      commit('edit_houserender', {type:data.type,arr});
    },
    add_houserender({ commit }, data) { 
      commit('add_houserender', data);
    },


    init_addhouse({ commit }) {
      commit('init_addhouse');
    },
    init_housemain({ commit },data) {
      console.log('main后端请求数据');
      
      
      // axios.post('/getHouse',`${data.uid}`).then((result)=>{
      //     console.log(result);
      //     commit('init_housemain',result.data);
      // });

      commit('init_housemain');
    },


    add_submit({commit,state}){
      console.log('add提交数据');
      let type;
     switch (state.addhouse_value[0]){
        case '业主': type = 'yz';
        break;
        case '租客': type = 'zk';
        break;
        case '家属': type = 'js';
        break;
     }
     let length = state.shuxing[type].length;
     console.log(state.shuxing[type])
     let sub = {};
     let arr = state.shuxing[type];
     arr.forEach((value,index)=>{
        sub[value] = state.addhouse_value[index]
     })
     console.log(sub);
     sub.reason = '';
     sub.state = '审核中'
     commit('add_submit',sub);
    //  axios.post('').then((resulet)=>{

    //  })
    },
    edit_submit({commit,state},data){
      console.log('edit提交数据');
      console.log(state.edithouse_value);
      console.log(data)
      let type;
      switch (state.edithouse_value[0]){
        case '业主': type = 'yz';
        break;
        case '租客': type = 'zk';
        break;
        case '家属': type = 'js';
        break;
     }
     let length = state.shuxing[type].length;
     console.log(state.shuxing[type])
     let sub = {};
     let arr = state.shuxing[type];
     arr.forEach((value,index)=>{
        sub[value] = state.edithouse_value[index]
     })
     sub.uid = data.uid;
     console.log(sub);
    //  axios.post('').then((result)=>{

    //  })
    
    },
    deleted(){
      console.log('删除数据');
      // axios.post('').then((result)=>{

      // })
    },
    change_detail({commit},index){
      commit('change_detail',index)
  }
  },
})
