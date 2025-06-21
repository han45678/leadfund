<script setup>
import { ref } from 'vue'
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
            行情
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <span class="icon">
              <img src="/images/footer/icon02.png" alt="icon">
            </span>
            資訊
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <span class="icon">
              <img src="/images/footer/icon03.png" alt="icon">
            </span>
            首頁
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <span class="icon">
              <img src="/images/footer/icon04.png" alt="icon">
            </span>
            財富
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <span class="icon">
              <img src="/images/footer/icon05.png" alt="icon">
            </span>
            個人中心
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
      justify-content: space-evenly;

      li {
        a {
          cursor: pointer;
          text-decoration: none;
          font-size: 12px;
          font-weight: 400;
          color: #999;
        }
      }
    }
  }
}
</style>