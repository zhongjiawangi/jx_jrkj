<template>
    <div class="menuTitle">
        <h2>{{ title }}</h2>
        <el-divider><i class="el-icon-help"></i></el-divider>
    </div>
</template>

<script>
export default {
    name: 'menuTitle',
    props: ['title', 'tip'],
}
</script>

<style lang="less" scoped>
.menuTitle {
    text-align: center;
    h2 {
        margin-top: 0.4rem;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.4rem;
        font-weight: 800;
    }
    /deep/.el-divider__text {
        font-size: 0.45rem;
        background-color: transparent;
        .el-icon-help {
            background-color: #fff;
            border-radius: 50%;
        }
    }
    p {
        margin: 0.45rem 0;
        height: 0.2rem;
        color: #666;
    }
}
</style>
