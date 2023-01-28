<template>
  <div>
    <app-header></app-header>
    <navbar :navbars="navbars"></navbar>
    <slot></slot>
    <app-footer></app-footer>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useHomeStore } from '~~/store/home';

const homeStore = useHomeStore()
homeStore.fetchHomeInfoData("oppo")

const { navbars, banners, category } = storeToRefs(homeStore)
</script>

<style scoped></style>
