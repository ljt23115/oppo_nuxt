<template>
  <div>
    <h2>page - home</h2>
    <p>
      {{ data }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { getHomeInfoData } from '@/service/home'
const { data } = await getHomeInfoData()
</script>

<style lang="less" scoped></style>
