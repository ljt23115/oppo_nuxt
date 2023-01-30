<template>
  <div class="oppoWripper home">
    <back-top class="back-top"></back-top>
    <div class="topic-banner">
      <div class="swpier">
        <swiper :banners="banners"></swiper>
      </div>
      <div class="tab-category">
        <tab-category :categorys="categorys"></tab-category>
      </div>
    </div>
    <div class="content">
      <div class="grid-view">
        <grid-view :categorys="categorys"></grid-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '~~/store/home'

const homeStore = useHomeStore()

homeStore.fetchHomeInfoData('intelligent')

const { banners, categorys } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.oppoWripper {
  width: 100%;
  background-color: @contentBGColor;
  padding-bottom: 88px;
  position: relative;
  .topic-banner {
    .mixin-contentWidth();
    padding: 8px;
    padding-top: 120px;
    .swiper {
      margin-top: 36px;
    }
    .tab-category {
      margin-top: 40px;
    }
  }
  .content {
    .mixin-contentWidth();
    padding: 8px;
  }
}
</style>
