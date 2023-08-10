<template>
  <view>
    <view class="count">
      {{ counter.count }}
    </view>
    <!-- <uni-badge size="small" :text="100" absolute="rightBottom" type="primary"> -->
    <u-button text="增加" @click="handleAdd"></u-button>
    <!-- </uni-badge> -->
  </view>
</template>

<script setup>
// import { onLoad } from '@dcloudio/uni-app'
import { counterStore } from "@/store/counter";
const counter = counterStore();

const handleAdd = () => {
  counter.increment();
};
// onLoad() {

// }
</script>

<style></style>
