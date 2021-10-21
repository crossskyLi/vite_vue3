<template>
  <div>
    <div class="container" ref="containerRef" @mousemove="move">
      <span :style="textStyle">
        <span>{{ text }}</span>
      </span>
      <span>
        {{ text }}
      </span>
    </div>
    <button @click="clickFunc">点我看</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import throttle from 'lodash/debounce';

const text = `测试的文字`;
const width = ref(0);
const textStyle = ref({ width: '0%' });
const containerRef: { value: HTMLElement | null } = ref(null);

const move = throttle(
  (e: HTMLElement) => {
    const screenX = e.clientX;
    const screenY = e.clientY;

    const { left, right, width } = containerRef.value.getBoundingClientRect();
    const rate = Math.floor(((screenX - left) / width) * 100);
    textStyle.value = { width: `${rate}%` };
  },
  30,
  true,
);
</script>

<style lang="scss">
.container {
  position: relative;
  height: 30px;
  width: 300px;
}
.container span {
  display: block;
  position: absolute;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  text-align: center;
}

.container span:first-child {
  color: red;
  z-index: 1;
  width: 0%;
  white-space: nowrap;
}

.container span.active {
  width: 100%;
}

.container span:first-child span {
  width: 300px;
  height: 100%;
  white-space: nowrap;
}
</style>
