<template>
    <div class="admin_signout">
        <div class="admin_signout_area">

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.admin_signout{
    border: 1px solid red;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 7ex;
    .admin_signout_area {
        position: absolute;
        // width: 80%;
        height: 80%;
        left: 0;
        right: 0;
        margin: 7ex auto;
        background: rgba(0, 0, 0, 0.7);
        box-shadow: 0 0 5ex 5ex rgba(0, 0, 0, 0.7);
    }
}
</style>
