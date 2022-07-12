<template>
    <div class="detail">
        <div class="left">
            {{ title }}
        </div>
        <div class="right">
            <div class="top">
                <slot name="top">
                    <h1>{{ text }}</h1>
                    <h3>{{ text1 }}</h3>
                </slot>
            </div>
            <div class="contant">
                <slot name="contant">
                    <p>{{ contant }}</p>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detailPage',
    props: ['title', 'text', 'text1', 'contant']
}
</script>

<style lang="less" scoped>
@keyframes topAnimation {
    from {
        transform: translate(-1000px, -1000px);
    }

    to {
        transform: translate(0, 0);
    }
}

@keyframes bottomAnimation {
    from {
        transform: translate(1000px, 1000px);
    }

    to {
        transform: translate(0, 0);
    }
}

@keyframes leftAnimation {
    0% {
        transform: scale(0.1) rotate(-360deg);
        opacity: 0
    }

    100% {
        transform: scale(1) rotate(0)
    }
}

.detail {
    display: flex;
    .left {
        width: 40%;
        font-size: 2rem;
        font-weight: 800;
        color: #ce8a3c;
        opacity: .8;
        animation: leftAnimation 1s 1;
        -webkit-animation: leftAnimation 1s 1;
    }

    .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .top {
            animation: topAnimation 1s 1;
            -webkit-animation: topAnimation 1s 1;
        }

        h1,
        h3,
        p {
            margin: .125rem 0;
            font-size: .3rem;
        }

        h1 {
            font-size: 1rem;
            margin-top: .375rem;
            color: #ce8a3c;

        }

        h3 {
            font-size: .5rem;
        }

        .contant {
            animation: bottomAnimation 1s 1;
            -webkit-animation: bottomAnimation 1s 1;
        }

    }
}
</style>