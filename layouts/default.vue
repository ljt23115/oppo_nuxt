<template>
  <div>
    <div class="header">
      <app-header></app-header>
      <navbar :navbars="navbars"></navbar>
    </div>

    <slot></slot>
    <app-footer :footerIcon="footerIcon" :footerInfo="footerInfo"></app-footer>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '~~/store/home'

const homeStore = useHomeStore()
homeStore.fetchFooterInfo()
homeStore.fetchHomeInfoData('oppo')

const { navbars, footerInfo, footerIcon } = storeToRefs(homeStore)
</script>

<style scoped lang="less">
.header {
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(230, 230, 230, 0.5);
  z-index: 9999;
}
</style>
