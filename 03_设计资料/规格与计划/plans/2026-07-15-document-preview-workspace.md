# Document Preview Workspace Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将快捷访问中的单文档页面改为带路径、目录和连续正文的只读阅读工作区，并保留进入编辑的明确路径。

**Architecture:** 在现有 `renderEditor()` 中保持预览态和编辑态两个渲染分支。预览态由顶部路径栏、文档目录和正文阅读区组成；编辑态继续复用现有工具栏、画布和 AI 侧栏。所有内容继续保存在单文件 HTML 原型中，不引入依赖。

**Tech Stack:** HTML、CSS、原生 JavaScript、现有推推图标与设计 token。

## Global Constraints

- 仅修改推推项目，不读取或修改同级云盘项目。
- 快捷访问只打开单个文档或知识库内单篇文档。
- 预览态不显示富文本工具栏、选区浮层或编辑辅助侧栏。
- 不提交或推送 GitHub。

---

### Task 1: Preview Data And Layout

**Files:**
- Modify: `05_网站程序（电脑使用）/当前工作稿/Cloud Docs Redesign v5 AI Modes.html`

**Interfaces:**
- Consumes: `state.selectedQuickId`, `quickItems`, `renderEditor()`。
- Produces: `previewDocuments[id]` 文档元数据、目录与正文；`.document-preview-workspace` 阅读布局。

- [x] **Step 1:** 将四个快捷文档的标题、空间、作者、更新时间、目录和正文整理为结构化预览数据。
- [x] **Step 2:** 让 `renderEditor()` 在快捷预览态渲染目录和连续正文，在普通编辑态继续渲染原编辑器。
- [x] **Step 3:** 运行 JavaScript 语法检查，预期无语法错误和重复 ID。

### Task 2: Reading Actions And State Isolation

**Files:**
- Modify: `05_网站程序（电脑使用）/当前工作稿/Cloud Docs Redesign v5 AI Modes.html`

**Interfaces:**
- Consumes: `renderTopbar()`, `navigateToScreen()`。
- Produces: `data-enter-edit`, `data-doc-anchor` 交互；预览与编辑状态隔离。

- [x] **Step 1:** 预览顶栏显示路径、分享、阅读状态、更多操作和进入编辑按钮。
- [x] **Step 2:** 点击目录滚动正文并更新目录选中态；点击进入编辑设置 `editorTitleOverride` 并重新渲染。
- [x] **Step 3:** 验证快捷文件保持只读，新建文档和进入编辑仍显示工具栏及 AI 侧栏。

### Task 3: Responsive And Visual Verification

**Files:**
- Modify: `05_网站程序（电脑使用）/当前工作稿/Cloud Docs Redesign v5 AI Modes.html`

**Interfaces:**
- Consumes: `.document-preview-workspace`, `.document-outline`, `.document-reader`。
- Produces: 桌面和移动端无横向溢出的阅读布局。

- [x] **Step 1:** 桌面端使用固定目录和居中正文；1260px 以下收窄目录，760px 以下隐藏目录并改为单列。
- [x] **Step 2:** 通过本地 DOM 渲染测试验证四个快捷文件、进入编辑和返回预览路径。
- [x] **Step 3:** 完成静态响应式规则检查；受 `file://` 浏览器访问策略限制，本轮未生成自动化截图。
