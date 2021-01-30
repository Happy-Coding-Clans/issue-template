import { DOC_LANG } from "@/utils/constant.js";
import i18n from "@/locale/i18n";

export default {
    computed: {
        // current doc lang
        currentDocLang() {
            return this.$route.path.split("/")[1] || DOC_LANG.EN;
        },
        // current locale
        t() {
            return i18n[this.currentDocLang];
        }
    }
};
