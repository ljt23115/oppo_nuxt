<template>
  <div>
    <h2>page - home</h2>
    <p>
      {{ data }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { fetchHomeInfoData } from '@/service/home'
const { data } = await fetchHomeInfoData()
</script>

<style lang="less" scoped></style>
