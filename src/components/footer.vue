<template>
    <footer class="footerComponent">
        <div class="foot w_c">
            <div class="left">
                <h3>联系我们</h3>
                <div class="address">
                    <i :class="address.icon"></i>地址：{{ address.address }}
                </div>
                <div class="telephone">
                    <i :class="telephone.icon"></i>电话：{{
                        telephone.telephone
                    }}
                </div>
                <div class="email">
                    <i :class="email.icon"></i>邮箱：{{ email.email }}
                </div>
            </div>
            <div class="right">
                <el-image>
                    <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footerComponent',
    props: ['address', 'telephone', 'email'],
}
</script>

<style lang="less" scoped>
.footerComponent {
    padding: 1rem 0 0.9rem;
    color: #fff;
    background-color: rgb(48, 48, 48);
    .foot {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .left {
            h3 {
                font-size: 0.3rem;
                margin-bottom: 0.4rem;
            }
            div {
                margin-bottom: 0.25rem;
                font-size:.175rem;
            }
        }
        .right {
          .el-image {
            width: 2.5rem;
            height: 2.5rem;
            font-size:2rem;
          }
        }
    }
}
</style>
