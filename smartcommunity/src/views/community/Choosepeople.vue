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
            <li :key="people.pId" v-for="people of manypeople">
                    <span>{{people.pName}}</span><input  class="peopleinput" :checked="people.pName==get" type="radio" name="people" @click="sendname(people)">
            </li>
            </ul>
        </div>
       
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            manypeople:[]
        }
    },
    mounted() {
        // http://10.31.163.30:9081/complain/selectAll/
        axios.get('/complain/selectAll/').then(result=>{
            console.log(result.data.data)
            this.manypeople=result.data.data
            console.log(this.manypeople)
        })
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