<template>
  <div class="about-item">
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
</template>

<script>
export default {
  name: "AboutItem",
  props: ['title', 'text', 'text1', 'contant']
}
</script>

<style lang="less" scoped>
.about-item {
  height: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  color: #fff;

  .top {
    * {
      margin: 15px 0;
    }

    h1 {
      color: #ce8a3c;
      font-size: 40px;
    }

    h3 {
      font-size: 20px;
    }
  }

  p {
    font-size: 14px;
  }
}
</style>