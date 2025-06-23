<script setup>
import { ref, onMounted } from 'vue';

//輸入框DOM
const searchInput = ref(null);

//輸入框內容
const searchVal = ref('');

//搜尋記錄開啟
const isHistoryOpen = ref(false);

//搜尋紀錄
const history = ref(JSON.parse(localStorage.getItem('search')) || []);

// 點擊時 focus 輸入框
const focusSearch = () => {
    searchInput.value?.focus();
    isHistoryOpen.value = true;
};

//送出搜尋
const search = () => {
    if (!searchVal.value) return;

    // 如果有相同 text，先移除舊的
    history.value = history.value.filter(item => item.text !== searchVal.value);

    // 建立新資料（用當下的陣列長度作為 ID）
    const newItem = {
        id: history.value.length,
        text: searchVal.value
    };

    // 加入陣列並儲存
    history.value.push(newItem);
    localStorage.setItem('search', JSON.stringify(history.value));

    // 清空輸入框
    searchVal.value = '';
};

// 清除搜尋紀錄
const clearSearch = () => {
    localStorage.removeItem('search'); // 清除 localStorage
    history.value = [];                // 同步清空畫面上的資料
    isHistoryOpen.value = false
};
</script>
<template>
    <div class="header">
        <div class="language" v-if="!isHistoryOpen">
            <img src="https://www.leadfund.cc/img/zh_hk.0ce57770.png" alt="language_icon">
        </div>
        <div class="search" @click="focusSearch" :class="{ 'active': isHistoryOpen }">
            <form @submit="search">
                <input ref="searchInput" v-model="searchVal" type="text" placeholder="搜尋" />
            </form>
        </div>
        <div class="message" v-if="!isHistoryOpen">
            <img src="https://www.leadfund.cc/img/msg.d723b889.svg" alt="language_icon">
        </div>
        <button @click="clearSearch()" v-if="isHistoryOpen" class="search-cancel">
            取消
        </button>

        <Transition name="fade">
            <div v-if="isHistoryOpen" class="history">
                <h6>
                    <span>搜尋歷史</span>
                    <button>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABiVBMVEUAAAAAAABAQEAzMzNmZmZJSUlAQEBAQEBVVVVOTk5JSUlERERQUFBHR0dRUVFNTU1JSUlGRkZDQ0NOTk5MTExGRkZMTExNTU1LS0tMTExKSkpLS0tJSUlNTU1LS0tKSkpMTExJSUlKSkpISEhJSUlISEhJSUlISEhLS0tMTExLS0tJSUlISEhLS0tJSUlKSkpMTExLS0tLS0tLS0tKSkpLS0tKSkpJSUlLS0tKSkpKSkpKSkpLS0tKSkpKSkpJSUlKSkpLS0tKSkpLS0tKSkpJSUlLS0tKSkpKSkpKSkpLS0tJSUlKSkpKSkpKSkpKSkpKSkpKSkpKSkpLS0tKSkpKSkpKSkpJSUlLS0tKSkpKSkpJSUlJSUlLS0tKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpLS0tKSkpKSkpKSkpKSkpKSkpKSkpKSkpJSUlKSkpKSkpKSkpKSkpKSkpKSkpKSkpLS0tKSkpKSkpKSkpKSkpKSkpKSkpJSUlKSkpKSkqLRDQ9AAAAgnRSTlMAAQQFBQcIDAwNDg8QEhMUFRYXFxsdHiEiJSYpKissLS8xNDU4OTs8PUBBQkNERkhKS05SU1VZXl9gYWRmaGtwcXR1d3l6foCHioySlJufo6WoqqqvsLK1tbe5vL+/wMHEx8jLz9DT1dfX2Nrc3t/i5OXm6evt7vDx8/X3+Pv8/f7+9ss18gAAAV9JREFUOMvl1FVTw0AYheFToMW9uHvRIk1xd2shUNzdChR3Ob+cizI02d1yz/De7c6T+TLJJsC/r/zwkz+9rtvDwjOamgnnYum3hFZpPAwHE3hsWMXzRCaJLk3rcbfzUgvVxoDW2qVpzZEG6OEvdRtgzay+zYC+5NMNLfr0Fy7q3izzdBdX5Fu6p/yImrghw2cmS3v13JHhB2OkvSruAYBz0gYAGdN5AKxklATLeAQAq3QAQB/HAMTxXZ5SRD8ArLEaAPo5DiCVTzLM5ZUEM3gnw0zeSjAneLG59OAYEyzkuQzj+SbBUtMp+c5GRoiwkvsytHwyWoR1qpeAFyaJsJGbCvhAuwhbVAcF18wWoZsLCnjBfBF2cE4BT1kCYJ7FANDJYQDd9CrgASsApDgAABENNgC9nFbA3eBQY4OcUsAtOsWtEU4o4DIHCoS8HFXAIdWnWquAVs+jyG6G/tZP9gtSI5E/tTyE8gAAAABJRU5ErkJggg=="
                            alt="icon">
                    </button>
                </h6>
                <ul v-if="history.length !== 0">
                    <li v-for="(item, index) in [...history].reverse()" :key="index">
                        {{ item.text }}
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.header {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;


    .language,
    .message {
        width: 45px;
        box-sizing: border-box;
        padding: 5px;
        cursor: pointer;

        img {
            width: 100%;
        }
    }

    .search-cancel {
        cursor: pointer;
        box-sizing: border-box;
        width: 75px;
        height: 35px;
        font-size: 14px;
        font-weight: 700;
        border: none;
        padding: 0;
        background: #f90;
        color: #fff;
        border-radius: 10px;
    }

    .search {
        width: calc(100% - 45px - 45px);

        &.active {
            padding-left: 5px;
            padding-right: 5px;
        }

        input {
            width: 100%;
            height: 35px;
            box-sizing: border-box;
            border-radius: 15px;
            background-color: #f3f3f3;
            border: 1px solid #ccc;
            padding-left: 35px;
            padding-right: 10px;
            display: flex;
            align-items: center;
            outline: none;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADbklEQVRYR+2WXYhVVRTH/+vCuTrzIGHRh0gvpQkWRTIUPfmiklp+gEI9+FS+VVzDgdlrD+5pztqXMXNAn5qeovTBoYI0hV6ihz6xoIYKzXmSKJSsXoY493JWbDl3ON65955zr6EEbThwPtbHb6211z6LcJsX3Wb/+G8BjI6Oro6iaLuq3tueuWq1+q5z7lK/GS2VAWvtxjRNa0T0bIGD00Q0E8fxmbIghQDM/AaAA20GvwEQrhTAY9m1PCfzgYjsLgPRE4CZPwGwMTM0D+DgwsLCp9PT09fyxp1zyxuNxuMADgHYnH37RURWF0F0BbDWHlbVg5mB0hFZa72qjmV6P4jIw70gOgIYYxwRhWigqlu99+eKImn/zsyavZsVkb3d9JcAGGPuq1Qq51V1laoe996/3K/zIG+t3a2q74V7Inqm28bsBHA9elW9VK1WR5xzfw4CEHSMMSeI6HkAp0WkYwctAWDmCwDWquqo9/71QZ0HPWZ+CsBn4T5N0/X1ev3Hdns3AIR+V9Ww8weufd5BrVYbGhoa+oOIlqnqhPfe9QRg5ucAnAxCURTd6Zy7od0GyQYznwewoRSAMeZVIjoS6u+9XzOIww7d8BaAF0oBWGtrqnoUwEUReehfAngTwH4Ar4jIsaIS7AFwKivBPc65KzcL0SoBEe2I4/jDngBjY2PrKpXKT9km3O69/+hmAGq12srh4eHfM3sbvPff9gTIWucLAE92q1k/QMy8C8D7WRveXa/XrxYC5I9hItoWx/HZfpzmZZk5zAcPAHhHRPZ1srPkIHLOrWg0Gp8DWA9gXkQeHASAmUPkIQO/qeoW7/33pQCyI3QfEb2d1c557yf6gTDGPE1E1zNXdKJ2/R23leIrInpxcnJyrheIc+6OJEleI6KXcnJ7RWS2m17RQLLYllk0E0T0nap+6b3/Nbxzzq1MkuQJAOG/v5+IWiULToN+WF0hyoxkwUiYDcKeyK95VdWcw9a3MKrNiMgMM38MYFOvti4EyKJckSTJASLaCeDRLukMm2y22Wwen5qa+qslY639WlVHsucREQn/hsVVCiCvMD4+/kiapuuIKMx7f6vqXLPZnMs7bQc0xvycy9T9InK5JdM3QD/dkJdl5nAI3RXeRVG0zDmXhPtbBhCcMXMDQBhwF2fEWwrQKXv/A/wDU5B2MFywzk4AAAAASUVORK5CYII=);
            background-repeat: no-repeat;
            background-size: 25px;
            background-position: size-m(2.5) 50%;

            &:placeholder {
                font-size: 16px;
                font-weight: 600;
            }
        }
    }

    .history {
        position: absolute;
        width: 100%;
        height: calc(100vh - 45px);
        left: 0;
        top: 45px;
        background-color: #fff;
        z-index: 10;
        box-sizing: border-box;
        padding: 15px;
        overflow-y: auto;

        h6 {
            font-size: 16px;
            font-weight: 600;
            display: flex;
            align-items: center;

            span {
                width: calc(100% - 35px);
            }

            button {
                background-color: transparent;
                width: 35px;
                height: 35px;
                box-sizing: border-box;
                padding: 0;
                border: none;
                cursor: pointer;

                img {
                    width: 80%;
                }
            }
        }

        ul {
            margin-top: 5px;

            li {
                display: inline-block;
                padding: 0 7px;
                height: 20px;
                line-height: 20px;
                border-radius: 10px;
                background-color: #dedede;
                font-size: 12px;
                color: rgba(0, 0, 0, .8);
                margin-right: 12px;
                margin-bottom: 12px;
            }
        }
    }
}
</style>