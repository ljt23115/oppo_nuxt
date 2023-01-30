<template>
  <div class="footer">
    <div class="content">
      <div class="guarantee">
        <template v-for="item in footerIcon" key="item.id">
          <div class="guar-item">
            <img :src="item.pctUrl" alt="" />
            <span>{{ item.msg }}</span>
          </div>
        </template>
      </div>
      <div class="prod">
        <template v-for="item in footerInfo" key="item.id">
          <div class="prod-item">
            <div class="prod-title">{{ item.title }}</div>
            <template v-for="subItem in item.products" key="subItem.id">
              <a href="#">{{ subItem.name }}</a>
            </template>
          </div>
        </template>
        <div class="serve">
          <div class="serve-item">
            <img src="@/assets/img/serve.svg" alt="" />
            <span>在线客服</span>
          </div>
        </div>
      </div>
      <div class="site">
        <div class="info">
          <span>© 2004-2023 OPPO 版权所有</span>
          <a href="">粤ICP备14056724号</a>
          <a href="">隐私政策</a>
          <a href="">用户使用协议</a>
          <a href="">资质证照</a>
          <a href="" class="spc">知识产权</a>
        </div>
        <div class="info02">
          <img src="@/assets/img/gove.png" alt="" />
          <span>粤公安网备 44190002001939号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IFooterIcon, IFooterInfo } from '~~/store/type'

export interface IFooterProps {
  footerInfo: IFooterInfo[]
  footerIcon: IFooterIcon[]
}

const props = withDefaults(defineProps<IFooterProps>(), {
  footerInfo: () => [],
  footerIcon: () => []
})
</script>

<style scoped lang="less">
.footer {
  width: 100%;
  padding: 42px 0 6px;
  .content {
    .mixin-contentWidth();
    padding: 8px;

    .guarantee {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-bottom: 40px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);

      .guar-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 16px;
        img {
          width: 50px;
          margin-bottom: 8px;
          color: rgba(0, 0, 0, 0.87);
        }
      }
    }

    .prod {
      display: flex;
      margin-top: 46px;
      padding-bottom: 42px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);

      .prod-item {
        min-width: 160px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        font-size: 16px;
        .prod-title {
          font-weight: 500;
          margin-bottom: 12px;
          white-space: nowrap;
        }
        a {
          white-space: nowrap;
          -webkit-text-decoration-line: none;
          text-decoration-line: none;
          color: #8e8e91;
          margin-bottom: 12px;
        }
      }
      .serve {
        flex: 1;
        position: relative;
        .serve-item {
          position: absolute;
          right: 0;
          top: 0;
          width: 173px;
          height: 51px;
          cursor: pointer;
          border-radius: 28px;
          color: #fff;
          font-weight: 500;
          background-color: #000;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 28px;
            margin-right: 16px;
          }
        }
      }
    }
    .site {
      margin: 12px 0 18px;

      .info {
        margin-bottom: 16px;
        span,
        a {
          color: #acabb0;
          font-size: 12px;
        }
        a {
          border-right: 2px solid #d6d5da;
          padding: 0 6px;
        }
        .spc {
          border: none;
        }
      }
      .info02 {
        display: flex;
        align-items: center;

        img {
          width: 24px;
          margin-right: 8px;
        }

        span {
          color: #acabb0;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
