<template>
    <div class="admin_signout">
        <div class="line_bar">
            <hr> <span class="signout_title">设置</span> <hr>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.admin_signout{
    position: relative;
    width: 100%;
    height: 100%;
    // padding: 7ex;
    .line_bar {
        width: 40%;
        min-width: 330px;
        display: flex;
        margin: 2em auto;
        justify-content: center;
        align-items: center;
        hr {
            width: 35%;
            height: 2px;
            background-color: white;
        }
        .signout_title {
            font-size: 2em;
            color: white;
        }
    }
}
</style>
