<template>
    <div style="background:#f8f8f8 ;width:100%;height:100%">
        <div class="people-top">
            <router-link to="/complaint">
<div class="peopletopleft"><span class="iconfont icon-houtui"></span></div>
            </router-link>
            
            <div class="peopletopmid">人员选择</div>
        </div>
        <div class="peoplelist">
            <ul>
            <li :key="people.id" v-for="people of manypoeple">
                    <span>{{people.name}}</span><input  class="peopleinput" :checked="people.name==get" type="radio" name="people" @click="sendname(people)">
            </li>
            </ul>
        </div>
       
    </div>
</template>
<script>
export default {
    data() {
        return {
            manypoeple:[
                {name:'一笔姐',id:'1'},
                {name:'陈二',id:'2'},
                {name:'张三',id:'3'},
                {name:'李四',id:'4'},
                {name:'王五',id:'5'},
            ],
        }
    },
    mounted() {
        
    },
    methods: {
        sendname(people){
            // console.log(people)
            this.$store.dispatch('sendname',people)
        }
    },
    computed: {
            get(){
                console.log(this.$store.state.peoplename)
                return this.$store.state.peoplename
            },
    },
}
</script>
<style scoped>
 .people-top{
    width: 7.5rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    background: white;
    position: relative;
    }
    .peopletopleft{
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 0.20rem;
    font-size: 14px;
    position: absolute;
    left: 0px;
    }
    .peopletopmid{
        font-weight: 600;
        display: flex;
        font-size: 18px;
        align-items:center;
    }
    .peopletopright{
        display: flex;
        font-size: 14px;
        /* align-items: center; */
        line-height: 1rem;
        position: absolute;
        right: 0.2rem;
        color: #4bbcdc;
        font-weight:600
    }
    .peoplelist ul li span{
        margin-top: 0.3rem;

    }
    
    .peoplelist ul li{
        display: flex;
        justify-content: space-around;
    }
    .peopleinput{
        margin-top: 0.3rem;
        margin-left: 2rem;
        width: 0.5rem;
        height: 0.5rem;
    }
</style>