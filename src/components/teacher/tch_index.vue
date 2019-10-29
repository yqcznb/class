<template>
    <div class="container">
        <tabbar></tabbar>
        <div class="back_shadow">
            <router-view></router-view>
        </div>
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
@import "../../assets/css/common_scss/settings";
.container{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
}
.back_shadow{
    position: absolute;
    height: 80%;
    left: 0;
    right: 0;
    margin-top: 3em;
    margin-right: 9ex;
    margin-left: 6em;
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 5ex 5ex rgba(0, 0, 0, 0.71);
    .line_bar {
        min-width: 330px;
        width: 55%;
        display: flex;
        margin: 2em auto;
        // margin-bottom: 7em;
        justify-content: space-between;
        align-items: center;
        hr {
            width: 35%;
            height: 2px;
            background-color: white;
        }
        .settings_title {
            font-size: 2em;
            color: white;
        }
        
    }
}
.main{
    @extend %settings;
}
</style>
