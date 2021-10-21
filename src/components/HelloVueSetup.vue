<template>
  <div>
    {{ msg }}+{{ myCount }}
    <button ref="button" @click="clickFunc">Vue Setup click</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const button = ref(null);
defineProps<{ msg: string }>();

function useClick() {
  const myCount = ref(0);
  const clickFunc = () => {
    myCount.value += 1;
    console.log(myCount.value);
  };
  return {
    myCount,
    clickFunc,
  };
}
const { myCount, clickFunc } = useClick();
console.log(button);

onMounted(() => {
  console.log(button);
  console.log(button.value);
});
</script>

<style scoped></style>
