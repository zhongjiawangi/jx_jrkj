<template>
    <div class="contactUs">
        <router-view></router-view>
        <div class="footer">
            <Footer />
        </div>
    </div>
</template>

<script>
import Footer from '@/components/footer.vue'

export default {
    name: "contactUs",
    data() {
        return {};
    },
    components: {
        Footer
    }
}
</script>

<style lang="less" scoped>
.contactUs {
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 100px);
    background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 1), rgba(64, 158, 255, .5), rgba(245, 245, 245, 1));

    .footer {
        margin-top: 100px;
    }
}
</style>
