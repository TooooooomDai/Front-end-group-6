
export default ({
  namespaced: true,
  state: {
    houseList: [
      {
        address: '1幢1单元1201',
        idtype: '租客',
        reason: '原因：建筑面积未填写',
        state: '未通过'
      },
      {
        address: '1幢1单元1201',
        idtype: '业主',
        reason: '',
        state: '审核中'
      },

      {
        address: '1幢1单元1201',
        idtype: '家属',
        reason: '',
        state: '未通过'
      },
      {
        address: '1幢1单元1201',
        idtype: '业主',
        reason: '',
        state: '通过'
      },
      {
        address: '1幢1单元1201',
        idtype: '租客',
        reason: '',
        state: '通过'
      },
    ],
    details: ['业主', '租客', '家属', '所属片区', '所属楼栋', '所属单元', '所属房屋', '所属面积', '房屋用途', '产权性质','性质', '朝向'],//选项内容
    details_all: [['业主', '租客'], ['家属', '所属片区'], ['所属楼栋', '所属单元'], ['所属房屋', '所属面积'], ['房屋用途', '产权性质'],['性质', '朝向']],
    addhouse_value: ['', '', '', '', '', '', '', '', '', '', ''],
    edithouse_value: ['迎春南苑', '1幢', '1单元', '0101', '168.00m²', '房屋用途', '产权性质', '性质', '朝向'],
    seehouse_value: ['迎春南苑', '1幢', '1单元', '0101', '168.00m²', '房屋用途', '产权性质', '性质', '朝向'],

    addhouse: ['身份类型', '所属片区', '所属楼栋', '所属单元', '所属房屋'],
    edithouse: [],
    seehouse: [],
    house: {
      yz: ['身份类型', '所属片区', '所属楼栋', '所属单元', '所属房屋', '所属面积', '房屋用途', '住户可见', '交付时间', '产权性质', '户型', '朝向', '入住时间'],
      zk: ['身份类型', '所属片区', '所属楼栋', '所属单元', '所属房屋', '合同开始时间', '合同结束时间'],
      js: ['身份类型', '所属片区', '所属楼栋', '所属单元', '所属房屋'],
    }
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
    },
    edit_houserender(state, data) {
      console.log('edit初始化')
      console.log(data);
      state.edithouse = state.house[data.type.idtype];
    },
    add_houserender(state, data) {
      if (data == '') {
        state.addhouse = state.house.js;
      } else {
        state.addhouse = state.house[data];
      }
    },

    init_addhouse(state) {
      state.addhouse_value = [];
      state.addhouse = state.house.js;
    },
    init_housemain(state) {
      console.log('main初始化房屋')
    },

    change_detail(state,index){
        state.details = state.details_all[index];
    }


  },
  actions: {
    selected({ commit }, data) {
      commit('selected', data);

    },
    edit_selected({ commit }, data) {
      commit('edit_selected', data);
    },


    see_houserender({ commit }, data) {
      console.log('see后端请求数据')
      commit('see_houserender', {type:data.type});
      
    },
    edit_houserender({ commit }, data) {
      console.log(data.type)
      commit('edit_houserender', {type:data.type});
    },
    add_houserender({ commit }, data) {
      commit('add_houserender', data);
    },


    init_addhouse({ commit }) {
      commit('init_addhouse');
    },
    init_housemain({ commit }) {
      console.log('main后端请求数据');
      commit('init_housemain');
    },


    add_submit({commit}){
      console.log('add提交数据')
    },
    edit_submit(){
      console.log('edit提交数据')
    },

    deleted(){
      console.log('删除数据')
    },
    change_detail({commit},index){
      commit('change_detail',index)
  }
  },

  

})
