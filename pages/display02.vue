<template>
  <div>
    display: {{ counter }}
    <ElButton>111</ElButton>
    <p>time: {{ $formTime("2023-1-20") }}</p>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from "@/store/home";
import { storeToRefs } from "pinia";
import { ElButton } from "element-plus";

const homeStore = useHomeStore();
const { counter } = storeToRefs(homeStore);

const nuxtApp = useNuxtApp();

const { $formTime } = nuxtApp;
</script>

<style scoped></style>
