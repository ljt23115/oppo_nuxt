<template>
  <div class="swiper">
    <el-carousel trigger="click" height="480px">
      <el-carousel-item v-for="item in banners" :key="item.id">
        <a :href="item.link ?? ''" target="_blank">
          <img :src="item.picStr" alt="" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from 'element-plus'
import { IBanner } from '~~/store/type'

export interface IBannerProps {
  banners: IBanner[]
}

const props = withDefaults(defineProps<IBannerProps>(), {
  banners: () => []
})
</script>

<style scoped lang="less">
.swiper {
  background: #d2d2d2;
  border-radius: 7px;

  .el-carousel {
    border-radius: 7px;
    img {
      height: 480px;
      width: 100%;
    }
  }
}
</style>
