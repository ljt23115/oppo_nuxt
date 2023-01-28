<template>
  <div>
    display: {{ counter }}
    <button @click="addCounter">+1</button>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from "@/store/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { counter } = storeToRefs(homeStore);
function addCounter() {
  homeStore.increment();
}
</script>

<style scoped></style>
