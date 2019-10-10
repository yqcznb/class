<template>
    <div class="container">
        <tabbar></tabbar>
        <div class="main">
            <div class="main-title">
                <span class="hr-inline"></span>当前课表<span class="hr-inline"></span>
            </div>
        </div>
    </div>
</template>

<script>
import tabbar from '../Common/zujian'
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

<style scoped lang="scss">
.container{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
}
.main{
    position: absolute;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    background-image: url('../../assets/images/矩形渐变.png');
    background-size: 100%;
    background-repeat: no-repeat;
    .login_backimg {
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: -1;
    }
    .main-title{
        font-family: "Helvetica Neue";
        font-weight: bold;
        font-size: 36px;
        color: rgb(255, 255, 255);
        font-style: inherit;
        letter-spacing: 6.8px;
        line-height: 43px;
        text-decoration: none;
        margin-top: 5%;
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
}
</style>
