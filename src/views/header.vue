<template>
    <div class="header">
        <div class="header-wrapper">
            <span class="item logo">Issue Template Generater</span>
            <span
                @click="langChang(item)"
                :class="[
                    'item menu',
                    { 'is-active': item.value === currentDocLang }
                ]"
                :key="item.value"
                v-for="item in menus"
                >{{ item.name }}</span
            >
        </div>
    </div>
</template>

<script>
import I18nMixins from "@/mixins/i18n-mixins";
export default {
    mixins: [I18nMixins],
    data() {
        return {
            menus: [
                {
                    name: "中文",
                    value: "zh"
                },
                {
                    name: "English",
                    value: "en"
                }
            ]
        };
    },

    methods: {
        // lang change
        langChang(item) {
            const { matched } = this.$route;

            const lang = item.value;

            if (matched[0].path !== `/${lang}`) {
                const path = this.$route.path.replace(
                    this.currentDocLang,
                    lang
                );
                this.$router.push(path);
            }
        }
    }
};
</script>
<style lang="less" scoped>
.header {
    width: 100%;
    height: 65px;
    background: #001529;
    .header-wrapper {
        width: 1000px;
        margin: 0 auto;
        height: 65px;
        background: #001529;
        /* padding: 0 30px; */

        .item {
            display: inline-block;
            height: 100%;
            line-height: 65px;

            &.logo {
                width: 200px;
                color: #fff;
            }

            &.menu {
                float: right;
                width: 65px;
                color: rgba(255, 255, 255, 0.65);
                text-align: center;
                cursor: pointer;

                &.is-active {
                    color: #fff;
                    background: #1890ff;
                }
            }
        }
    }
}
</style>
