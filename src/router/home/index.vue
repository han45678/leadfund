<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import Footer from '@/components/Footer.vue';
import Header from './components/Header.vue';

const banner = ref([
    { pic: 'http://placehold.jp/768x200.jpg' },
    { pic: 'http://placehold.jp/768x200.jpg' },
    { pic: 'http://placehold.jp/768x200.jpg' },
    { pic: 'http://placehold.jp/768x200.jpg' }
])

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
                        <span>我的獎金</span>
                    </li>
                    <li>
                        <img src="https://www.leadfund.cc/img/charge.739c6a63.png" alt="icon">
                        <span>我要充值</span>
                    </li>
                    <li>
                        <img src="https://www.leadfund.cc/img/take.a7974511.png" alt="icon">
                        <span>提現</span>
                    </li>
                    <li>
                        <img src="https://www.leadfund.cc/img/user.d851c520.png" alt="icon">
                        <span>我的投資</span>
                    </li>
                </ul>
            </div>
            <div class="content">
                <div class="item recommend">
                    <h3>
                        <span>新手推薦 簡單方便，小白也能投資</span>
                        <a href="javascript:void(0)">更多</a>
                    </h3>
                    <div class="item_content">
                        <div class="r_item name">
                            以太坊 5倍槓桿 （二十五期）-ETH
                        </div>
                        <div class="r_item quantity">
                            起投份額 1
                        </div>

                        <div class="r_item period">
                            <h5>以太坊 5倍槓桿 （二十五期</h5>
                            <span>2%</span>
                        </div>

                        <div class="r_item day">投資週期:240天</div>
                        <div class="r_item price">單價:$12000</div>
                        <div class="r_item max_quantity">最大投資份額:5</div>

                        <div class="r_item btn">
                            <button> 立即投資 </button>
                        </div>
                    </div>
                </div>
                <div class="item hot">
                    <h3>
                        <span>熱門投資 收益可觀，攻守兼備</span>
                        <a href="javascript:void(0)">更多</a>
                    </h3>
                    <div class="item_content">
                        <div class="name"></div>
                        <div class="day"></div>
                        <div class="quantity"></div>
                        <div class="compensate"></div>
                        <div class="period"></div>
                        <div class="btn"></div>
                        <div class="income"></div>
                        <div class="price"></div>
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
                    width: 5vw;
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

                    .r_item {
                        font-size: 12px;
                        color: #888;
                        text-align: center;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: center;

                        h5 {
                            margin-top: 30px;
                            width: 100%;
                            color: #000;
                            font-size: 18px;
                            font-weight: 600;
                            margin-bottom: 15px;
                            cursor: pointer;
                        }

                        span {
                            margin-bottom: 30px;
                            width: 100%;
                            font-size: 20px;
                            font-weight: 600;
                            color: #ef4949;
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
                    grid-auto-columns: 1fr;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr 1fr 1fr;
                    gap: 0px 0px;
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

                    .income {
                        grid-area: income;
                    }

                    .price {
                        grid-area: price;
                    }
                }
            }
        }

    }
}
</style>
