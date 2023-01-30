<template>
  <div class="header">
    <div class="wrapper content">
      <div class="ctnLeft">
        <NuxtLink class="link lLink" to="/">
          <span>OPPO 官网</span>
        </NuxtLink>
        <NuxtLink class="link lLink" to="/onePlus">
          <span>一加官网</span>
        </NuxtLink>
      </div>
      <div class="ctnRight">
        <NuxtLink class="link rLink downloadLink" to="/download">
          <span>下载 OPPO 商城 App</span>
          <div class="download">
            <img
              src="@/assets/img/OPPO_download.png"
              alt="OPPO APP下载二维码"
              width="140px"
            />
            <span>扫码下载OPPO商城APP</span>
          </div>
        </NuxtLink>
        <NuxtLink class="link rLink" to="/login">
          <i class="iconfont icon-yonghu"></i>
          <span>登录</span>
        </NuxtLink>
        <NuxtLink class="link rLink" to="/register">
          <span>注册</span>
        </NuxtLink>
        <NuxtLink class="link rLink spLink" to="cart">
          <i class="iconfont icon-gouwuche"></i>
          <span>购物车 (0)</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.header {
  height: @headWrapperHeight;
  width: 100%;
  background-color: @headWrapperBackgroundColor;
  // padding: 0 8px;
  color: @headTextColor;
  font-size: @headTextSize;
  box-sizing: inherit;

  .wrapper {
    .mixin-contentWidth();
    background-color: @headWrapperBackgroundColor;
    padding: 8px;
    line-height: 18px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .ctnLeft {
      .lLink {
        margin-right: 24px;
      }
    }
    .ctnRight {
      display: flex;
      align-items: center;

      .rLink {
        padding: 0 14px;
        border-right: 1px solid white;
        display: flex;
        align-items: center;

        .iconfont {
          margin-right: 6px;
        }
        .icon-yonghu {
          font-size: 16px;
          opacity: 1;
        }
        .icon-gouwuche {
          font-size: 16px;
          opacity: 1;
        }
      }
      .downloadLink {
        position: relative;

        .download {
          display: none;
          position: absolute;
          top: 28px;
          padding: 8px;
          flex-direction: column;
          color: @contentTextColor01;

          box-shadow: 0 4px 10px 0 rgb(0 0 0 / 8%);
          border-radius: 6px;
          background-color: #ffffff;
          span {
            margin-top: 5px;
            text-align: center;
          }
        }
      }
      .downloadLink:hover .download {
        display: flex;
      }
      .spLink {
        border-right: none;
      }
    }
    .link {
      cursor: pointer;
      color: @headTextColor;
      text-decoration: none;
    }
  }
}
</style>
