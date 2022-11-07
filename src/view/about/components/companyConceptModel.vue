<template>
  <div class="conceptModel">
    <div id="box">
      <div class="jr"><span>江若</span></div>
      <div class="concept-model-item" v-for="(item, index) in info.data" :key="index">
        <div class="box">
          <span class="title">{{ item.title }}</span>
          <div class="bubble-box">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => { },
    }
  },
  data() {
    return {}
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@keyframes rotate {
  from{
    transform: rotateX(-15deg) rotateY(0deg);
  }
  to {
    transform: rotateX(-15deg) rotateY(360deg);
  }
}
@keyframes reverseRotate {
  from{
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
}
.conceptModel {
  height: 50vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 800px;
}

#box {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transform: rotateX(-15deg);
  animation: rotate 12s linear infinite;

  .bubble-box {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    padding: 15px;
    min-width: 160px;
    max-width: 240px;
    border-radius: 10px;
    filter: drop-shadow(2px 2px 15px rgba(105, 150, 228, .5));
    color: rgb(108, 154, 229);
    background-color: #fff;
    font-size: 16px;
    display: none;
    transition: all 1s;
  }

  .bubble-box::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: rotate(45deg) translateY(50%);
    width: 18px;
    height: 18px;
    // box-shadow: 2px 2px 15px rgba(105, 150, 228, .5);
    background-color: #fff;
  }

  .box:hover .bubble-box {
    display: block;
  }

  .jr,
  .box {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(108, 154, 229);
    border-radius: 50%;
    box-shadow: 1px 1px 10px #fff;
    color: #fff;
    width: 100px;
    height: 100px;
    cursor: pointer;

    .title {
      display: inline-block;
      font-size: 20px;
      width: 50px;
      text-align: center;
    }
  }

  .jr {
    width: 150px;
    height: 150px;
    font-size: 30px;
    font-weight: 800;
    position: absolute;
    animation: reverseRotate 12s linear infinite;
  }

  .concept-model-item {
    position: absolute;
    // filter: drop-shadow(2px 2px 15px rgba(255, 255, 255, .8));
  }

  .concept-model-item:nth-child(2) {
    transform: translateZ(300px);
  }

  .concept-model-item:nth-child(3) {
    transform: rotateY(60deg) translateZ(300px);
  }

  .concept-model-item:nth-child(4) {
    transform: rotateY(120deg) translateZ(300px);
  }

  .concept-model-item:nth-child(5) {
    transform: rotateY(180deg) translateZ(300px);
  }

  .concept-model-item:nth-child(6) {
    transform: rotateY(240deg) translateZ(300px);
  }

  .concept-model-item:nth-child(7) {
    transform: rotateY(300deg) translateZ(300px);
  }
}

#box:hover {
  animation-play-state: paused;
}
#box:hover .jr {
  animation-play-state: paused;
}
</style>