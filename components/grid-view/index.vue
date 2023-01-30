<template>
  <template v-for="item in categorys" :key="item.id">
    <section v-if="item.productDetailss?.length" class="gridContent">
      <p class="title">{{ item.title }}</p>
      <div class="grid-view">
        <div v-if="item.url" class="representImg grid-item">
          <a :href="item.link" target="_blank">
            <img :src="item.url" alt="" />
          </a>
        </div>
        <template v-for="prodItem in item.productDetailss" key="prodItem.id">
          <div class="grid-item">
            <a :href="prodItem.link" target="_blank" class="goods-card">
              <div class="goods-img">
                <img :src="prodItem.url" alt="" />
                <div v-if="prodItem.placeholderLabel" class="dotted">
                  {{ prodItem.placeholderLabel.activityInfo }}
                </div>
              </div>

              <span class="goods-detail">{{ prodItem.goodsSpuName }}</span>
              <div class="goods-discount">
                <template
                  v-for="actItem in prodItem.activityList"
                  :key="actItem.type"
                >
                  <span>{{ actItem.activityInfo }}</span>
                </template>
              </div>
              <div class="goods-price">
                <span class="price-prefix">{{
                  prodItem.priceInfo.prefix
                }}</span>
                <div class="full-price">
                  <span class="price-tag">{{
                    prodItem.priceInfo.currencyTag
                  }}</span>
                  <span class="price">{{
                    prodItem.priceInfo.buyPrice || prodItem.price
                  }}</span>
                </div>
              </div>
            </a>
          </div>
        </template>
      </div>
    </section>
  </template>
</template>

<script setup lang="ts">
import { Icategory } from '~~/store/type'

export interface ICategoryProps {
  categorys: Icategory[]
}

const props = withDefaults(defineProps<ICategoryProps>(), {
  categorys: () => []
})
const productDetailss = ref([] as any[])
props.categorys.forEach((item) => {
  if (item.productDetailss) {
    productDetailss.value.push(item.productDetailss)
  }
})
</script>

<style scoped lang="less">
.gridContent {
  padding-bottom: 16px;

  span,
  p {
    .mixin-textoneline();
    color: black;
    padding: 0;
    margin: 0;
  }

  .title {
    font-size: 24px;
    font-weight: 500;
    padding-top: 60px;
    margin-bottom: 24px;
  }

  .grid-view {
    width: 1266px;
    text-align: center;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;

    .representImg {
      width: calc(40% - 18px) !important;

      img {
        width: 100%;
        height: 300px;
      }
    }

    .grid-item {
      background-color: white;
      height: 300px;
      border-radius: 5px;
      width: calc(20% - 18px);
      margin-bottom: 18px;
      margin-right: 18px;

      .goods-card {
        display: flex;
        align-items: center;
        flex-direction: column;

        .goods-img {
          position: relative;
          img {
            height: 150px;
            width: 130px;
            flex-grow: 0;
            margin-top: 14px;
            margin-bottom: 7px;
          }

          .dotted {
            width: 61.6px;
            height: 61.6px;
            border-radius: 50%;
            border: 0.4px dashed hsla(0, 0%, 100%, 0.2);
            background: rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .goods-detail {
          width: calc(100% - 24px);
          font-weight: 500;
          margin: 0.2em 0 8px;
          font-size: 17px;
          text-align: center;
        }

        .goods-discount {
          display: flex;
          flex-wrap: wrap;
          height: 32px;
          justify-content: center;
          align-items: flex-start;

          span {
            border: 1px solid #f77b7b;
            border-radius: 2px;
            color: rgb(246, 52, 52);
            height: 18px;
            font-size: 12px;
            padding: 0 2px;
            margin-right: 4px;
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .goods-price {
          display: flex;
          align-items: flex-end;
          height: 22px;
          line-height: normal;

          .price-prefix {
            font-size: 12px;
            color: rgb(246, 52, 52);
          }

          .full-price {
            display: flex;
            align-items: flex-end;

            span {
              color: rgb(246, 52, 52);
            }
            .price-tag {
              font-size: 10px;
            }
            .price {
              align-self: flex-end;
              font-size: 18px;
              height: 23px;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}
</style>
