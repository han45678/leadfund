<script setup>
import { ref } from 'vue'
import { useCommonStore } from '@/store/common';

const commonStore = useCommonStore();
const count = ref(0)
</script>

<template>
  <div class="footer">
    <div class="menu">
      <ul>
        <li>
          <router-link to="/">
            <span class="icon">
              <img src="/images/footer/icon01.png" alt="icon">
            </span>
            <span class="text">
              {{ commonStore.language.footer.market }}
              <!-- 行情 -->
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <span class="icon">
              <img src="/images/footer/icon02.png" alt="icon">
            </span>
            <span class="text">
              {{ commonStore.language.footer.news }}
              <!-- 資訊 -->
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <span class="icon">
              <img src="/images/footer/icon03.png" alt="icon">
            </span>
            <span class="text">
              {{ commonStore.language.footer.homePage }}
              <!-- 首頁 -->
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <span class="icon">
              <img src="/images/footer/icon04.png" alt="icon">
            </span>
            <span class="text">
              {{ commonStore.language.footer.wealth }}
              <!-- 財富 -->
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <span class="icon">
              <img src="/images/footer/icon05.png" alt="icon">
            </span>
            <span class="text">
              {{ commonStore.language.footer.profile }}
              <!-- 個人中心 -->
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .2);
  background-color: #fff;
  display: flex;
  align-items: center;

  @media screen and (min-width:769px) {
    // height: size(60);
  }

  .menu {
    width: 100%;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;

      li {
        a {
          cursor: pointer;
          text-decoration: none;
          font-size: 12px;
          font-weight: 400;
          color: #999;
          text-align: center;
          .icon{
            display: block;
            img{
              width: 25px;
            }
          }
          .text{
            text-align: center;
            display: block;
            margin-top: 5px;
          }
        }
      }
    }
  }
}
</style>