<template>
  <div class="categoryContent">
    <template v-for="item in categorys" :key="item.id">
      <div class="category-item">
        <a :href="item.link" target="_blank">
          <div class="pct">
            <img :src="item.picStr" alt="" width="80px" />
          </div>
          <span>{{ item.title }}</span>
        </a>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Icategory } from '~~/store/type'

export interface ICategoryProps {
  categorys: Icategory[]
}

const props = withDefaults(defineProps<ICategoryProps>(), {
  categorys: () => []
})


</script>

<style scoped lang="less">
.categoryContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .category-item {
    text-align: center;
    span {
      color: @contentTextColor02;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
