<template>
    <el-dialog
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :title="`${t['previewTitle']}`"
        :visible.sync="dialogVisible"
        width="700px"
        :before-close="() => $emit('beforeClose')"
    >
        <div v-html="issueHTML" />
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="handleCreate">{{
                t["createBtn"]
            }}</el-button>
        </span>
    </el-dialog>
</template>
<script>
import marked from "marked";
import kebabCase from "lodash/kebabCase";
import i18n from "@/locale/i18n";
import I18nMixins from "@/mixins/i18n-mixins";
export default {
    mixins: [I18nMixins],
    props: {
        dialogVisible: Boolean,
        formValue: Object
    },
    data() {
        return {
            issueContentKeys: [
                "repositoryType",
                "issueType",
                "issueTitle",
                "repositoryVersion",
                "vueVersion",
                "browserType",
                "systemType",
                "reproductionLink",
                "reproductionStep",
                "expectedResult",
                "actualResult",
                // 补充
                "supply",
                //-------is feature attrs--------
                "solution",
                "solutionApi"
            ]
        };
    },
    computed: {
        // trans label
        tLabel() {
            return i18n[this.currentDocLang]["label"];
        },
        // issue title
        title() {
            let type =
                this.formValue.issueType === "Bug"
                    ? "[Bug Report]"
                    : "[Feature Request]";
            return `${type} ${this.formValue.issueTitle}`;
        },
        issueMD() {
            let issue = "";
            this.issueContentKeys.forEach(key => {
                if (!this.formValue[key]) return;
                issue += this.formatToMarkdown(key, this.formValue[key]);
            });
            return issue;
        },
        body() {
            return encodeURIComponent(this.issueMD).replace(/%2B/gi, "+");
        },
        issueHTML() {
            return marked(this.issueMD);
        }
    },
    watch: {
        issueHTML: {
            handler() {
                this.$nextTick(() => {
                    let links = document.querySelectorAll(".preview a");
                    links.forEach(dom => {
                        if (!dom.getAttribute("target")) {
                            dom.setAttribute("target", "_blank");
                        }
                    });
                });
            },
            immediate: true
        }
    },
    methods: {
        handleCreate() {
            window.open(
                `https://github.com/Happy-Coding-Clans/${kebabCase(
                    this.formValue.repositoryType
                )}/issues/new?title=${this.title}&body=${this.body}`
            );
        },

        formatToMarkdown(key) {
            switch (key) {
                case "reproductionLink":
                    return `
### ${this.tLabel[key]}
<a href="${this.formValue[key]}" target="_blank">${this.formValue[key]}</a>
`;

                default:
                    return `
### ${this.tLabel[key]}
${this.formValue[key]}
`;
            }
        }
    }
};
</script>
