export default {
    en: {
        name: "English",
        label: {
            repositoryType: "I am opening an issue for",
            issueType: "Issue Type",
            issueTitle: " Issue Title",
            repositoryVersion: "library Version",
            vueVersion: "Vue Type",
            vueVersionDesc: "Vue3.x is not supported at the moment",
            browserType: "Browser Type",
            browserTypeDesc: "like: Chrome 87.0.4280.141",
            systemType: "System version",
            systemTypedesc: "like: Windows",
            reproductionLink: "Reproduction url",
            reproductionLinkDesc1: `1、Please provide a link by forking
            <a target='blank' href="https://codepen.io/">CodePen</a>
            or
            <a target='blank' href="https://codesandbox.io/"
                >CodeSandbox</a
            >.
            `,
            reproductionLinkDesc2: `2、The <a target='blank' href="https://codepen.io/">CodePen</a> template and <a target='blank' href="https://codesandbox.io/"
            >CodeSandbox</a> template of vue-easytable are provided for you.
            `,
            reproductionLinkDesc3:
                "Please do not just fill in a random link. We will close your issue if you do that.",
            reproductionStep: "Step to reproduce",
            reproductionStepdesc:
                "Clear and concise reproduction instructions are important for us to be able to triage your issue in a timely manner. Note that you can use <a target='blank' href='https://guides.github.com/features/mastering-markdown/'>Markdown</a> to format lists and code.",
            expectedResult: "What is expected?",
            actualResult: "What is actually happening?",
            supply: "Any additional comments? (optional)",
            // is feature attrs below
            solution: "What problem does this feature solve?",
            solutionDesc:
                "Explain your use case, context, and rationale behind this feature request.",
            solutionApi: "What does the proposed API look like?",
            solutionApiDesc:
                "Describe how you propose to solve the problem and provide code samples of how the API would work once implemented. Note that you can use <a target='blank' href='https://guides.github.com/features/mastering-markdown/'>Markdown</a> to format your code blocks."
        },
        errorMessage: {
            repositoryType: "Please provide repository type.",
            issueType: "Please provide issue type.",
            issueTitle: "Please provide issue title.",
            issueTitleLength: "The content is 3 to 100 characters long.",
            repositoryVersion: "Please provide repository library version.",
            vueVersion: "Please provide vue repository library version.",
            browserType: "Please provide browser type.",
            systemType: "Please provide system type.",
            reproductionLink: "Please provide reproduction url.",
            reproductionStep: "Please provide reproduction setp.",
            reproductionStepLength:
                "The content length is not less than 5 characters.",
            expectedResult: "Please provide expected result.",
            expectedResultLength:
                "The content length is not less than 5 characters.",
            actualResult: "Please provide actually result.",
            actualResultLength:
                "The content length is not less than 5 characters.",
            // is feature attrs below
            solutionDesc: "Please provide solution description.",
            solutionDescLength:
                "The content length is not less than 5 characters.",
            solutionAPI: "Please provide solution api description.",
            solutionAPILength:
                "The content length is not less than 5 characters."
        },
        previewBtn: "Preview",
        previewTitle: "Issue Preview",
        createBtn: "Create"
    },
    zh: {
        name: "中文",
        label: {
            repositoryType: "选择要提交 issue 的库",
            issueType: "Issue 类型",
            issueTitle: "Issue 标题",
            repositoryVersion: "仓库版本",
            vueVersion: "Vue 版本",
            vueVersionDesc: "暂不支持 vue3.x",
            browserType: "浏览器",
            browserTypeDesc: "例如: Chrome 87.0.4280.141",
            systemType: "系统类型",
            systemTypedesc: "例如： Windows",
            reproductionLink: "重现链接",
            reproductionLinkDesc1: `1、请提供一个尽可能精简的
            <a target='blank' href="https://codepen.io/">CodePen</a>
            或者
            <a target='blank' href="https://codesandbox.io/"
                >CodeSandbox</a
            >
            链接`,
            reproductionLinkDesc2: ` 2、此处为你提供了 vue-easytable的
            <a target='blank' href="https://codepen.io/">CodePen</a>
            模板 和
            <a target='blank' href="https://codesandbox.io/"
                >CodeSandbox</a
            >
            模板`,
            reproductionLinkDesc3:
                "3、请不要乱填一个链接，这会导致你的 issue 被直接关闭",
            reproductionStep: "重现步骤",
            reproductionStepdesc:
                "简洁清晰的重现步骤能够帮助我们更迅速地定位问题所在。支持使用 <a target='blank' href='https://guides.github.com/features/mastering-markdown/'>Markdown</a> 来格式化列表或是代码片段",
            expectedResult: "期望的结果是什么？",
            actualResult: "实际的结果是什么？",
            supply: "补充说明（可选）",
            // is feature attrs below
            solution: "这个功能解决了什么问题？",
            solutionDesc: "请尽可能详尽地说明这个需求的用例和场景",
            solutionApi: "你期望的 API 是什么样的？",
            solutionApiDesc:
                "描述一下你期望这个新功能的 API 是如何使用的，并提供一些代码示例。请用 <a target='blank' href='https://guides.github.com/features/mastering-markdown/'>Markdown</a> 格式化你的代码片段。"
        },
        errorMessage: {
            repositoryType: "请选择Repository类型",
            issueType: "请选择Issue类型",
            issueTitle: "请填写Issue标题",
            issueTitleLength: "长度在 3 到 100 个字符",
            repositoryVersion: "请选择仓库版本",
            vueVersion: "请选择vue仓库版本",
            browserType: "请输入浏览器类型",
            systemType: "请输入系统类型",
            reproductionLink: "请输入重现链接",
            reproductionStep: "请输入重现步骤",
            reproductionStepLength: "长度不少于 5 个字符",
            expectedResult: "请输入希望的结果",
            expectedResultLength: "长度不少于 5 个字符",
            actualResult: "请输入实际的结果",
            actualResultLength: "长度不少于 5 个字符",
            // is feature attrs below
            solutionDesc: "请填写解决方案描述",
            solutionDescLength: "长度不少于 5 个字符",
            solutionAPI: "请填写描述",
            solutionAPILength: "长度不少于 5 个字符"
        },
        previewBtn: "预览",
        previewTitle: "Issue 预览",
        createBtn: "创建"
    }
};
