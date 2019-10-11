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
import tabbar from '../Common/gzujian'
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
    width: 86%;
    height: 80%;
    left: 7%;
    top: 5%;
    background: rgb(0, 0, 0);
    opacity: 0.7;
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 0 0 15px 15px rgb(0, 0, 0);
    .main-title{
        font-family: "Helvetica Neue";
        font-weight: bold;
        font-size: 36px;
        color: rgb(255, 255, 255);
        font-style: inherit;
        letter-spacing: 6.8px;
        line-height: 43px;
        text-decoration: none;
        margin-top: 3%;
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
