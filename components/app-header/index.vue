<template>
  <div class="header">
    <div class="linkList">
      <NuxtLink to="/">
        <button>home</button>
      </NuxtLink>
      <NuxtLink to="/display">
        <button>displayStore</button>
      </NuxtLink>
      <NuxtLink to="/display02">
        <button>display02Store</button>
      </NuxtLink>
      <NuxtLink to="/display03">
        <button>display03Css</button>
      </NuxtLink>
      <NuxtLink to="/123">
        <button>123</button>
      </NuxtLink>
      <NuxtLink to="/123/123">
        <button>404页面</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.header {
  height: 60px;
  border-bottom: 1px solid red;
  margin-bottom: 50px;
  .linkList {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
