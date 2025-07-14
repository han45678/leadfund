import { defineStore } from 'pinia';
import axios from 'axios';

export const useCommonStore = defineStore('common', {
    state: () => ({
        language: {
            home: {
                myBonus: "",
                recharge: "",
                withdraw: "",
                myInvestment: "",
                recommendTitle: "",
                hotTitle: "",
                more: ""
            },
            footer: {
                market: "",
                news: "",
                homePage: "",
                wealth: "",
                profile: ""
            }
        }, // 儲存語言資料
        isLanguageLoaded: false
    }),
    actions: {
        async loadLanguage() {
            try {
                const response = await axios.get('/language/zh_hk.json');
                this.language = response.data;
                this.isLanguageLoaded = true;
            } catch (error) {
                console.error('載入語言檔時發生錯誤:', error);
            }
        }
    }
});
