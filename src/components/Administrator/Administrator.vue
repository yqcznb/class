<template>
    <div class="container">
        <tabbar></tabbar>
        <div class="back_shadow">
            <router-view/>
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
    .back_shadow {
        // border: 1px solid red;
        position: absolute;
        // width: 80%;
        height: 80%;
        left: 0;
        right: 0;
        margin-top: 3em;
        margin-right: 9ex;
        margin-left: 6em;
        background: rgba(0, 0, 0, 0.7);
        box-shadow: 0 0 5ex 5ex rgba(0, 0, 0, 0.71);
    }
}
</style>
