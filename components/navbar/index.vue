<template>
  <div class="nav-bar">
    <div class="wrapper content">
      <NuxtLink class="link logo">
        <img src="OPPO_logo.png" alt="" height="50" />
        <h1 class="title">OPPO手机商城</h1>
      </NuxtLink>
      <div class="linkTags">
        <!-- <NuxtLink class="link tag">
          <span>OPPO专区</span>
        </NuxtLink>
        <NuxtLink class="link tag">
          <span>OnePlus专区</span>
        </NuxtLink>
        <NuxtLink class="link tag">
          <span>智能硬件</span>
        </NuxtLink>
        <NuxtLink class="link tag">
          <span>服务</span>
        </NuxtLink> -->
        <template v-for="item of navbars" key="item.id">
          <NuxtLink class="link tag" :to="item.link" target="_blank">
            <span>{{ item.title }}</span>
          </NuxtLink>
        </template>
      </div>
      <div class="search">
        <input type="text" placeholder="Find N2 系列" />
        <img src="@/assets/img/search.svg" alt="" width="14px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INavbar } from '@/store/home'

export interface IProps {
  navbars: INavbar[]
}

const props = withDefaults(defineProps<IProps>(), {
  navbars: () => []
})

const { navbars } = toRefs(props)
</script>

<style scoped lang="less">
.nav-bar {
  height: @navBarHeight;
  width: 100%;
  background-color: @navBarBackgroundColor;
  padding: 0 8px;
  // border: 1px solid @navBarBorderColor;
  color: @contentTextColor01;
  font-size: @navBarSize;

  .wrapper {
    width: @contentWidth;
    height: 68px;
    margin: 0 auto;
    padding: 8px;
    line-height: 24px;

    display: flex;
    align-items: center;
    .logo {
      height: 50px;
      .title {
        text-indent: -1000px;
        height: 0;
      }
    }
    .linkTags {
      padding-left: 30px;
      padding-right: 16px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-grow: 0.5;
      .tag {
        opacity: 0.55;
        font-weight: 500;
      }
      .tag:hover {
        opacity: 1;
      }
    }
    .search {
      width: 128px;
      height: 20px;
      display: flex;
      align-items: center;
      padding: 8px 16px;
      justify-content: space-between;
      background-color: hsla(0, 0%, 93.3%, 0.5);
      border-radius: 9999px;
      text-transform: none;
      // 初始化并设置输入框
      input {
        .mixin-textoneline();
        width: 128px;
        height: 20px;
        margin: 0;
        padding: 0;
        border-style: none;
        text-transform: none;
        color: black;
        background-color: rgba(0, 0, 0, 0);
        border-color: rgb(118, 118, 118);
        outline: none;
      }
      ::-webkit-input-placeholder {
        opacity: 0.2;
      }
    }
  }
  // 去除a标签样式
  .link {
    cursor: pointer;
    color: @contentTextColor01;
    text-decoration: none;
  }
}
</style>
