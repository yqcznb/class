<template>
    <div class="container">
        <tabbar></tabbar>
        <router-view></router-view>
    </div>
</template>

<script>
import tabbar from '../Common/tzujian'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        
    },
    components: {
        tabbar,
    },
};
</script>

<style lang="scss">
.container{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
}
.main{
    position: absolute;
    // width: 80%;
    height: 80%;
    left: 0;
    right: 0;
    margin-top: 3em;
    margin-right: 9ex;
    margin-left: 6em;
    background: rgba(0,0,0, 0.7);
    box-shadow: 0 0 5ex 5ex rgba(0, 0, 0, 0.71);
    .main-title{
        font-size: 36px;
        color: rgb(255, 255, 255);
        font-style: inherit;
        letter-spacing: 6.8px;
        line-height: 43px;
        text-decoration: none;
        // margin-top: 3%;
        .hr-inline{
            display: inline-block;
            height: 5px;
            width: 15%;
            background-color: #fff;
            background-repeat:no-repeat;
            position: relative;
            top: -10px;
            margin: 0 10px;
        }
    }
    .main-table{
        display: flex;
        color: rgb(81, 69, 69);
        margin: 0 auto;
        margin-top: 2%;
        width: 90%;
        .table-time{
            background-color: #cccccc;
            font-family: 'zzgflh';
            color: white;
        }
        table{
            display: flex;
            flex-direction: column;
            width: 100%;
            tr,td{
                display: inline-flex;
                justify-content: center;
                width: 100%;
            }
            td{
                line-height: 2em;
                margin: 5px 5px;
                flex-grow: 1;
            }
            thead td{
                background-color: rgb(239, 193, 115);   
            }
            tbody td{
                font-family: 'fzchsjt';
                background-color: rgb(122, 196, 225);
            }    
        }
    }
    .main-setting{
        display: flex;
        justify-content: center;
        margin-top: 8%;
        .iconfont{
            font-size: 160px;
            color: #fff;
        }
        .main-setting-item{
            display: inline-flex;
            flex-direction: column;
            width: 30%;
            .main-setting-item-title{
                font-size: 30px;
                color: #fff;
            }
        }
    }
}
</style>
