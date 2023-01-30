<template>
  <div class="app">

      <!-- 布局 -->
      <NuxtLayout>
        <!-- 页面 -->
        <NuxtPage></NuxtPage>
      </NuxtLayout>

  </div>
</template>

<script lang="ts" setup>
// const appConfig = useAppConfig()
// const { title, theme } = appConfig
import { ElScrollbar } from 'element-plus'
</script>

<style scoped lang="less">
.app {
  height: 100%;
}
</style>
