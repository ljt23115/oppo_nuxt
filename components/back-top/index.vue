<template>
  <el-backtop :right="30" :bottom="100">
    <div class="back-top">
      <img src="@/assets/img/backTop.svg" alt="" class="img01" />
      <img src="@/assets/img/backTop-red.svg" alt="" class="imgRed" />
      <span>回到顶部</span>
    </div>
  </el-backtop>
</template>

<script setup lang="ts">
import { ElBacktop } from 'element-plus'
</script>

<style scoped lang="less">
// .el-backtop {
//   right: 0;
//   bottom: 0;
// }
.back-top {
  width: 68px;
  height: 68px;
  background-color: #fff;
  color: #666;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #e8e8e8;
  transition: opacity 0.2s;
  font-size: 12px;
  padding: 0;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 8%);
  border-radius: 6px;
  overflow: hidden;
  .img01 {
    width: 28px;
    opacity: 0.54;
  }
  .imgRed {
    width: 28px;
    display: none;
  }
  span {
    opacity: 0.84;
    height: 18px;
  }
  &:hover {
    color: rgb(243, 65, 65);
  }
  &:hover .img01 {
    display: none;
  }
  &:hover .imgRed {
    display: block;
  }
}
</style>
