<script setup>
import { ref, onMounted } from 'vue'
import { useCommonStore } from '@/store/common';
import Swal from 'sweetalert2'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/swiper-bundle.css'
import Footer from '@/components/Footer.vue'
import Header from './components/Header.vue'

const commonStore = useCommonStore();

const banner = ref([
    { pic: 'http://placehold.jp/768x200.jpg' },
    { pic: 'http://placehold.jp/768x200.jpg' },
    { pic: 'http://placehold.jp/768x200.jpg' },
    { pic: 'http://placehold.jp/768x200.jpg' }
]);

const showInputAlert = (id, title, period, day, quantity) => {
    console.log(id, title, period, day, quantity);
    Swal.fire({
        title: `<strong style="font-size: 1.25rem;">${title}</strong>`,
        html: `<div style="display: flex; width: 100%; margin: 15px auto; width: 100%; box-sizing: border-box;">
                    <div style="width: 33.333333%; text-align: center;">
                        <span style="color: red; font-weight: 900; display: block; width: 100%; text-align: center;">
                            ${period}
                        </span>
                        <span style="color: #808080; font-size: 1rem;" date-name="日收益率">
                            ${commonStore.language.home.dailyYield}
                        </span>
                    </div>
                    <div style="width: 33.333333%; text-align: center;">
                        <span style="color: black; font-weight: 900; display: block; width: 100%; text-align: center;">
                            ${day}
                        </span>
                        <span style="color: #808080; font-size: 1rem;" date-name="投資週期">
                            ${commonStore.language.home.investmentPeriod}
                        </span>
                    </div>
                    <div style="width: 33.333333%; text-align: center;">
                        <span 
                            style="color: black; font-weight: 900; display: block; width: 100%; text-align: center;">
                            ${quantity}
                        </span>
                        <span style="color: #808080; font-size: 1rem;" date-name="可投份額數">
                            ${commonStore.language.home.availableInvestment}
                        </span>
                    </div>
                </div>`,
        input: 'number',
        inputPlaceholder: commonStore.language.home.pleaseEnterMinInvestment,//請輸入起投份額數
        showCancelButton: true,
        inputAttributes: {
            min: 0,
            step: 1,
            pattern: '[0-9]*',    // 手機端會觸發數字鍵盤
        },
        confirmButtonText: commonStore.language.home.confirm,//確認
        cancelButtonText: commonStore.language.home.cancel, //取消
        confirmButtonColor: '#3085d6',  // 例如藍色
        cancelButtonColor: '#d33',      // 例如紅色
        inputValidator: (value) => {
            if (!value) {
                return `${commonStore.language.home.cancel}` //請輸入起投份額數
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // ✅ 使用者點了「確認」，你可以在這裡處理輸入結果
            console.log('輸入：', result.value)
            // 例如：呼叫 API、更新畫面等
        } else {
            // 🚫 使用者點了「取消」或關閉視窗
            console.log('取消了')
        }
    })
}

onMounted(() => {
    // commonStore.loadLanguage();
});
</script>


<template>
    <div class="home">
        <Header />
        <div class="wrapper">
            <div class="banner">
                <Swiper :loop="true" :autoplay="{ delay: 3000 }" :modules="[Autoplay]" class="my-swiper">
                    <SwiperSlide v-for="(item, index) in banner" :key="index">
                        <img :src="item.pic" alt="banner image" style="width: 100%; height: auto" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="menu">
                <ul>
                    <li>
                        <img src="https://www.leadfund.cc/img/award.483a8995.png" alt="icon">
                        <span>
                            {{ commonStore.language.home.myBonus }}
                            <!-- 我的獎金 -->
                        </span>
                    </li>
                    <li>
                        <img src="https://www.leadfund.cc/img/charge.739c6a63.png" alt="icon">
                        <span>
                            {{ commonStore.language.home.recharge }}
                            <!-- 我要充值 -->
                        </span>
                    </li>
                    <li>
                        <img src="https://www.leadfund.cc/img/take.a7974511.png" alt="icon">
                        <span>
                            {{ commonStore.language.home.withdraw }}
                            <!-- 提現 -->
                        </span>
                    </li>
                    <li>
                        <img src="https://www.leadfund.cc/img/user.d851c520.png" alt="icon">
                        <span>
                            {{ commonStore.language.home.myInvestment }}
                            <!-- 我的投資 -->
                        </span>
                    </li>
                </ul>
            </div>
            <div class="content">
                <div class="item recommend">
                    <h3>
                        <span>
                            {{ commonStore.language.home.recommendTitle }}
                            <!-- 新手推薦 簡單方便，小白也能投資 -->
                        </span>
                        <a href="javascript:void(0)">
                            {{ commonStore.language.home.more }}
                            <!-- 更多 -->
                        </a>
                    </h3>
                    <div class="item_content">
                        <div class="items name">
                            以太坊 5倍槓桿 （二十五期）-ETH
                        </div>
                        <div class="items quantity">
                            <!-- 起投份額  -->
                            {{ commonStore.language.home.minInvestment }} 1
                        </div>

                        <div class="items period">
                            <h5>以太坊 5倍槓桿 （二十五期</h5>
                            <span class="mb">2%</span>
                        </div>

                        <div class="items day"><!--投資週期-->{{ commonStore.language.home.investmentPeriod }}:240天</div>
                        <div class="items price"><!--單價-->{{ commonStore.language.home.unitPrice }}:$12000</div>
                        <div class="items max_quantity"><!--最大投資份額-->{{ commonStore.language.home.maxInvestment }}:5</div>

                        <div class="items btn">
                            <button @click="showInputAlert('acb123', '以太坊 5倍槓桿 （二十五期）-ETH', '2%', '240', '1')">
                                <!-- 立即投資 -->
                                {{ commonStore.language.home.investNow }}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="item hot">
                    <h3>
                        <span>
                            {{ commonStore.language.home.hotTitle }}
                            <!-- 熱門投資 收益可觀，攻守兼備 -->
                        </span>
                        <a href="javascript:void(0)">
                            {{ commonStore.language.home.more }}
                            <!-- 更多 -->
                        </a>
                    </h3>
                    <div class="item_content">
                        <div class="items name">
                            比特幣 5倍槓桿 （二十三期）-BTC
                        </div>
                        <div class="items day">
                            <!--投資週期-->>{{ commonStore.language.home.investmentPeriod }}:360天
                        </div>
                        <div class="items quantity"> <!--起投份額-->{{ commonStore.language.home.minInvestment }} 1 </div>

                        <div class="items compensate">
                            <span>
                                2%
                            </span>
                            <br>
                            <!-- 日收益率 -->{{ commonStore.language.home.dailyYield }}
                        </div>
                        <div class="items period">
                            <h6>比特幣 5倍槓桿 （二十三期</h6>
                        </div>
                        <div class="items btn">
                            <button @click="showInputAlert('acb123', '以太坊 5倍槓桿 （二十五期）-ETH', '2%', '240', '1')">
                                <!-- 立即投資 -->{{ commonStore.language.home.investNow }}
                            </button>
                            <p class="mt"><!--單價-->{{ commonStore.language.home.unitPrice }}:$12000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style lang="scss" scoped>
.home {
    margin-top: 45px;
    min-height: calc(100vh - 45px - 60px);
    background-color: rgba(255, 146, 18, .15);

    .banner {
        background-color: #fff;
        margin-left: -15px;
        margin-right: -15px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .menu {
        background-color: #fff;
        margin-left: -15px;
        margin-right: -15px;
        padding-left: 15px;
        padding-right: 15px;

        ul {
            display: flex;
            padding-top: 15px;
            padding-bottom: 15px;

            li {
                width: 25%;
                text-align: center;

                img {
                    width: 35px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }

                span {
                    display: block;
                    width: 100%;
                    margin-top: 5px;
                    font-size: 12px;
                    font-weight: 600;
                }
            }
        }
    }

    .content {
        padding-top: 15px;

        h3 {
            font-size: 14px;
            padding-left: 10px;
            margin-bottom: 15px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &::before {
                content: "";
                width: 2.5px;
                height: calc(100% + 2.5px);
                background-color: #f90;
                position: absolute;
                top: -2.5px;
                left: 0;
            }

            a {
                color: #888;
                text-decoration: none;
                font-weight: 400;
            }
        }

        .item {
            .item_content {
                padding: 15px;
                background-color: #fff;
                margin-bottom: 15px;
                border-radius: 5px;

                .items {
                    font-size: 12px;
                    color: #888;
                    text-align: center;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    align-content: center;

                    h5 {
                        margin-top: 30px;
                        width: 100%;
                        color: #000;
                        font-size: 18px;
                        font-weight: 600;
                        margin-bottom: 15px;
                        cursor: pointer;
                    }

                    h6 {
                        margin-top: 30px;
                        width: 100%;
                        color: #000;
                        font-size: 14px;
                        font-weight: 600;
                        margin-bottom: 15px;
                        cursor: pointer;
                    }

                    p {
                        display: block;
                        width: 100%;

                        &.mt {
                            margin-top: 15px;
                        }
                    }

                    span {
                        width: 100%;
                        font-size: 20px;
                        font-weight: 600;
                        color: #ef4949;

                        &.mb {
                            margin-bottom: 30px;
                        }
                    }

                    button {
                        margin-top: 30px;
                        width: 60%;
                        min-width: 60px;
                        background: #f90;
                        color: #fff;
                        padding: 10px 0;
                        border-radius: 10px;
                        border: none;
                        cursor: pointer;
                    }
                }
            }

            &.recommend {
                .item_content {
                    display: grid;
                    grid-auto-columns: 1fr;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                    grid-template-rows: auto auto auto auto auto;
                    gap: 0;
                    grid-template-areas:
                        "name name name quantity quantity quantity"
                        "period period period period period period"
                        "day day price price max_quantity max_quantity"
                        "btn btn btn btn btn btn";

                    .max_quantity {
                        grid-area: max_quantity;
                    }

                    .price {
                        grid-area: price;
                    }

                    .day {
                        grid-area: day;
                    }

                    .btn {
                        grid-area: btn;
                    }

                    .period {
                        grid-area: period;
                    }

                    .name {
                        grid-area: name;
                    }

                    .quantity {
                        grid-area: quantity;
                    }


                }
            }

            &.hot {
                .item_content {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr 1fr;
                    grid-auto-columns: 1fr;
                    gap: 0px 0px;
                    grid-auto-flow: row;
                    grid-template-areas:
                        "name day quantity"
                        "compensate period btn"
                        "income . price";

                    .name {
                        grid-area: name;
                    }

                    .day {
                        grid-area: day;
                    }

                    .quantity {
                        grid-area: quantity;
                    }

                    .compensate {
                        grid-area: compensate;
                    }

                    .period {
                        grid-area: period;
                    }

                    .btn {
                        grid-area: btn;
                    }

                }
            }
        }

    }
}
</style>
