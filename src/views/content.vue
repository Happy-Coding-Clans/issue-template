<template>
    <div class="issue-content">
        <div class="issue-content-warpper">
            <el-form
                label-position="top"
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item
                            style="width:100%"
                            :label="tLabel['repositoryType']"
                            prop="repositoryType"
                        >
                            <el-select
                                v-model="ruleForm.repositoryType"
                                placeholder=""
                            >
                                <el-option
                                    v-for="item in repositoryOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item
                            style="width:100%"
                            :label="tLabel['issueType']"
                            prop="issueType"
                        >
                            <el-radio-group
                                v-model="ruleForm.issueType"
                                size="medium"
                            >
                                <el-radio-button label="Bug"></el-radio-button>
                                <el-radio-button
                                    label="Feature"
                                ></el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item
                            style="width:100%"
                            :label="tLabel['issueTitle']"
                            prop="issueTitle"
                        >
                            <el-input v-model="ruleForm.issueTitle"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- is bug form start -->
                <div class="bug-report" v-show="isBug">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item
                                v-if="isBug"
                                :label="
                                    `${tLabel['repositoryVersion']}（${ruleForm.repositoryType}）`
                                "
                                prop="repositoryVersion"
                            >
                                <el-select
                                    style="width:100%"
                                    filterable
                                    v-model="ruleForm.repositoryVersion"
                                >
                                    <el-option
                                        v-for="version in repositoryVersions"
                                        :key="version"
                                        :label="version"
                                        :value="version"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>

                        <el-col :span="12">
                            <el-form-item
                                v-if="isBug"
                                :label="tLabel['vueVersion']"
                                prop="vueVersion"
                            >
                                <el-select
                                    style="width:100%"
                                    filterable
                                    v-model="ruleForm.vueVersion"
                                >
                                    <el-option
                                        v-for="version in vueVersions"
                                        :key="version"
                                        :label="version"
                                        :value="version"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <div class="item-desc">
                                {{ tLabel["vueVersionDesc"] }}
                            </div>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item
                                v-if="isBug"
                                :label="tLabel['browserType']"
                                prop="browserType"
                            >
                                <el-input
                                    v-model="ruleForm.browserType"
                                ></el-input>
                            </el-form-item>
                            <div class="item-desc">
                                {{ tLabel["browserTypeDesc"] }}
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item
                                v-if="isBug"
                                :label="tLabel['systemType']"
                                prop="systemType"
                            >
                                <el-input
                                    v-model="ruleForm.systemType"
                                ></el-input>
                            </el-form-item>
                            <div class="item-desc">
                                {{ tLabel["systemTypedesc"] }}
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="24">
                            <el-form-item
                                v-if="isBug"
                                :label="tLabel['reproductionLink']"
                                prop="reproductionLink"
                            >
                                <el-input v-model="ruleForm.reproductionLink">
                                </el-input>
                            </el-form-item>
                            <div class="item-desc">
                                <p v-html="tLabel['reproductionLinkDesc1']" />
                                <p v-html="tLabel['reproductionLinkDesc2']" />
                                <p v-html="tLabel['reproductionLinkDesc3']" />
                            </div>
                        </el-col>
                    </el-row>

                    <el-form-item
                        v-if="isBug"
                        :label="tLabel['reproductionStep']"
                        prop="reproductionStep"
                    >
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 3 }"
                            v-model="ruleForm.reproductionStep"
                        >
                        </el-input>
                    </el-form-item>
                    <div
                        class="item-desc"
                        v-html="tLabel['reproductionStepdesc']"
                    ></div>

                    <el-form-item
                        v-if="isBug"
                        :label="tLabel['expectedResult']"
                        prop="expectedResult"
                    >
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 2 }"
                            v-model="ruleForm.expectedResult"
                        >
                        </el-input>
                    </el-form-item>

                    <el-form-item
                        v-if="isBug"
                        :label="tLabel['actualResult']"
                        prop="actualResult"
                    >
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 2 }"
                            v-model="ruleForm.actualResult"
                        >
                        </el-input>
                    </el-form-item>

                    <el-form-item
                        v-if="isBug"
                        :label="tLabel['supply']"
                        prop="supply"
                    >
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 2 }"
                            v-model="ruleForm.supply"
                        >
                        </el-input>
                    </el-form-item>
                </div>
                <!-- is bug form end -->

                <!-- is feature form start -->
                <div class="feature-report" v-show="isFeature">
                    <el-form-item
                        v-if="isFeature"
                        :label="tLabel['solution']"
                        prop="solution"
                    >
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 2 }"
                            v-model="ruleForm.solution"
                        >
                        </el-input>
                    </el-form-item>
                    <div
                        class="item-desc"
                        v-html="tLabel['solutionDesc']"
                    ></div>

                    <el-form-item
                        v-if="isFeature"
                        :label="tLabel['solutionApi']"
                        prop="solutionApi"
                    >
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 2 }"
                            v-model="ruleForm.solutionApi"
                        >
                        </el-input>
                    </el-form-item>
                    <div
                        class="item-desc"
                        v-html="tLabel['solutionApiDesc']"
                    ></div>
                </div>
                <!-- is feature form end -->

                <el-form-item style="width:100%">
                    <el-button type="primary" @click="submitForm('ruleForm')">{{
                        t["previewBtn"]
                    }}</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- preview -->
        <Preview
            @beforeClose="
                () => {
                    dialogVisible = false;
                }
            "
            :dialogVisible="dialogVisible"
            :formValue="previewForm"
        />
    </div>
</template>

<script>
import axios from "axios";
import i18n from "@/locale/i18n";
import I18nMixins from "@/mixins/i18n-mixins";
import Preview from "./preview";
export default {
    components: { Preview },
    mixins: [I18nMixins],
    data() {
        return {
            dialogVisible: false,
            versionApi: {
                repositoryVersion: "https://registry.npm.taobao.org",
                vueVersion: "https://registry.npm.taobao.org/vue"
            },
            repositoryOptions: [
                {
                    value: "vue-easytable",
                    label: "vue-easytable"
                }
            ],
            // vue-easytable versions
            repositoryVersions: [],
            vueVersions: [],
            ruleForm: {
                /*  repositoryType: "vue-easytable",
                issueType: "Bug",
                issueTitle: "",
                repositoryVersion: "",
                vueVersion: "",
                browserType: "",
                systemType: "",
                reproductionLink: "",
                stepToReproduce: "",
                expectedResult: "",
                actualResult: "",
                // 补充
                supply: "",
                //-------is feature attrs--------
                solution: "",
                solutionApi: "" */
            },
            commonFormKeys: {
                repositoryType: "vue-easytable",
                issueType: "Bug",
                issueTitle: ""
            },
            bugFormKeys: {
                repositoryVersion: "",
                vueVersion: "",
                browserType: "",
                systemType: "",
                reproductionLink: "",
                stepToReproduce: "",
                expectedResult: "",
                actualResult: "",
                // 补充
                supply: ""
            },
            featureFormKeys: {
                solution: "",
                solutionApi: ""
            },
            previewForm: {}
        };
    },
    computed: {
        // trans label
        tLabel() {
            return i18n[this.currentDocLang]["label"];
        },
        isBug() {
            return this.ruleForm.issueType === "Bug";
        },
        isFeature() {
            return !this.isBug;
        },
        rules() {
            let messages = i18n[this.currentDocLang]["errorMessage"];

            return {
                repositoryType: [
                    {
                        required: true,
                        essage: messages["repositoryType"],
                        trigger: "blur"
                    }
                ],
                issueType: [
                    {
                        required: true,
                        message: messages["issueType"],
                        trigger: "blur"
                    }
                ],
                issueTitle: [
                    {
                        required: true,
                        message: messages["issueTitle"],
                        trigger: "blur"
                    },
                    {
                        min: 3,
                        max: 100,
                        message: messages["issueTitleLength"],
                        trigger: "blur"
                    }
                ],
                repositoryVersion: [
                    {
                        required: true,
                        message: messages["repositoryVersion"],
                        trigger: "blur"
                    }
                ],
                vueVersion: [
                    {
                        required: true,
                        message: messages["vueVersion"],
                        trigger: "blur"
                    }
                ],
                browserType: [
                    {
                        required: true,
                        message: messages["browserType"],
                        trigger: "blur"
                    }
                ],
                systemType: [
                    {
                        required: true,
                        message: messages["systemType"],
                        trigger: "blur"
                    }
                ],
                reproductionLink: [
                    {
                        required: true,
                        message: messages["reproductionLink"],
                        trigger: "blur"
                    }
                ],
                reproductionStep: [
                    {
                        required: true,
                        message: messages["reproductionStep"],
                        trigger: "blur"
                    },
                    {
                        min: 5,
                        message: messages["reproductionStepLength"],
                        trigger: "blur"
                    }
                ],
                expectedResult: [
                    {
                        required: true,
                        message: messages["expectedResult"],
                        trigger: "blur"
                    },
                    {
                        min: 5,
                        message: messages["expectedResultLength"],
                        trigger: "blur"
                    }
                ],
                actualResult: [
                    {
                        required: true,
                        message: messages["actualResult"],
                        trigger: "blur"
                    },
                    {
                        min: 5,
                        message: messages["actualResultLength"],
                        trigger: "blur"
                    }
                ],
                //-------is feature attrs--------
                solution: [
                    {
                        required: true,
                        message: messages["solutionDesc"],
                        trigger: "blur"
                    },
                    {
                        min: 5,
                        message: messages["solutionDescLength"],
                        trigger: "blur"
                    }
                ],
                solutionApi: [
                    {
                        required: true,
                        message: messages["solutionAPI"],
                        trigger: "blur"
                    },
                    {
                        min: 5,
                        message: messages["solutionAPILength"],
                        trigger: "blur"
                    }
                ]
            };
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    const {
                        ruleForm,
                        commonFormKeys,
                        bugFormKeys,
                        featureFormKeys
                    } = this;

                    this.previewForm = {};
                    let previewForm = {};

                    Object.keys(commonFormKeys).forEach(key => {
                        previewForm[key] = ruleForm[key];
                    });

                    if (this.isBug) {
                        Object.keys(bugFormKeys).forEach(key => {
                            previewForm[key] = ruleForm[key];
                        });
                    } else {
                        Object.keys(featureFormKeys).forEach(key => {
                            previewForm[key] = ruleForm[key];
                        });
                    }

                    this.previewForm = previewForm;
                    this.dialogVisible = true;
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        /*  resetForm(formName) {
            this.$refs[formName].resetFields();
        }, */

        async fetchRepositoryVersions() {
            const apiUrl = `${this.versionApi.repositoryVersion}/${this.ruleForm.repositoryType}`;
            const { data } = await axios.get(apiUrl);
            this.repositoryVersions = Object.keys(data.versions);

            this.ruleForm.repositoryVersion = this.repositoryVersions[0];
        },
        async fetchVueVersions() {
            const { data } = await axios.get(this.versionApi.vueVersion);
            const versions = Object.keys(data.versions);

            this.vueVersions = versions.filter(v => {
                return v.indexOf("3.0.") === -1;
            });

            this.ruleForm.vueVersion = this.vueVersions[0];
        }
    },
    created() {
        this.ruleForm = Object.assign(
            {},
            this.commonFormKeys,
            this.bugFormKeys,
            this.featureFormKeys
        );

        this.fetchRepositoryVersions();
        this.fetchVueVersions();
    }
};
</script>
<style lang="less">
.el-form-item,
.el-row {
    &:not(:first-child) {
        margin-top: 25px;
    }
    margin-bottom: 5px;
}

.issue-content {
    width: 100%;
    /*  padding: 10px; */
    .issue-content-warpper {
        background: #fff;
        width: 1000px;
        margin: 0 auto;
        padding: 20px;
        margin-top: 25px;
        border-radius: 4px;

        .item-desc {
            margin-top: 20px;
            line-height: 1;
            font-size: 14px;
            color: #999;
        }
    }
}
</style>
