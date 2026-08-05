# 首页 AI 三模式 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 新建一个本地 v5 HTML 原型，在推推云文档首页内完成对话，并融入任务、写作和 AI 历史能力。

**Architecture:** 以现有单文件 v4 原型为基线复制为 v5，沿用其状态驱动渲染和事件委托方式。首页启动态由 `homeAiMode` 控制三种内容，对话发送后由 `homeConversationActive` 切换为原位消息工作台；任务和写作分别进入新任务页与既有编辑器，AI 历史通过独立页面统一恢复三种记录。

**Tech Stack:** 单文件 HTML、CSS、原生 JavaScript、现有内联图标系统、Playwright 浏览器验证。

## Global Constraints

- 只修改推推项目，不读取或修改 `../云盘`。
- 新建 `Cloud Docs Redesign v5 AI Modes.html`，不覆盖 v4。
- 仅生成本地文件，不提交或推送 GitHub。
- 首页默认对话模式；首页对话不打开 AI 抽屉。
- 任务模式进入完整任务工作台；写作模式进入文档编辑器。
- 使用推推主色 `#3873FA`、小圆角、浅分隔线和克制阴影。
- 桌面端 1440px 和移动端 390px 不得重叠、裁切或横向溢出。

---

### Task 1: 创建 v5 基线与状态模型

**Files:**
- Create: `05_网站程序（电脑使用）/当前工作稿/Cloud Docs Redesign v5 AI Modes.html`
- Source: `04_历史资料/历史原型/方案演进/03-Autoplan-Cloud Docs Redesign v4.html`

**Interfaces:**
- Produces: `state.homeAiMode`, `state.homeAiDrafts`, `state.homeConversationActive`, `state.homeConversationMessages`, `state.selectedTaskTemplate`, `state.selectedWritingTemplate`, `state.selectedWritingCategory`。
- Produces: `homeModeConfigs`, `homeTaskTemplates`, `homeWritingTemplates`, `aiHistoryItems` 数据常量。

- [ ] **Step 1: 复制 v4 为 v5**

Run:

```bash
cp '04_历史资料/历史原型/方案演进/03-Autoplan-Cloud Docs Redesign v4.html' '05_网站程序（电脑使用）/当前工作稿/Cloud Docs Redesign v5 AI Modes.html'
```

Expected: v4 与 v5 初始 SHA-256 相同。

- [ ] **Step 2: 扩展状态和数据**

Add to `state`:

```js
homeAiMode: "chat",
homeAiDrafts: { chat: "", task: "", writing: "" },
homeConversationActive: false,
homeConversationMessages: [],
selectedTaskTemplate: "",
selectedWritingTemplate: "",
selectedWritingCategory: "all",
selectedHistoryTab: "all"
```

Add mode metadata with exact IDs `chat`, `task`, `writing`; task template IDs `project-summary`, `risk-review`, `knowledge-organize`, `weekly-report`; writing template IDs `work-summary`, `proposal`, `meeting-notes`。

- [ ] **Step 3: 增加导航和标题映射**

Add `{ id: "aiHistory", label: "AI 历史", icon: "comment" }` immediately after the knowledge-base item. Add titles for `aiHistory` and `aiTask`.

- [ ] **Step 4: 运行 JavaScript 语法检查**

Run a Node script that extracts the final inline `<script>` body and passes it to `new Function(script)`.

Expected: prints `syntax-ok`.

---

### Task 2: 构建三模式首页启动态

**Files:**
- Modify: `05_网站程序（电脑使用）/当前工作稿/Cloud Docs Redesign v5 AI Modes.html`

**Interfaces:**
- Consumes: `state.homeAiMode`, mode/template constants.
- Produces: `renderHomeStart()`, `renderHomeModeContent()`, `renderHomeComposer()`.

- [ ] **Step 1: 添加三模式 CSS**

Implement classes `.home-mode-switch`, `.home-mode-button`, `.home-mode-content`, `.home-template-grid`, `.home-template-card`, `.home-mode-composer`, `.home-composer-tools`。The AI start card remains 410px high; all mode templates use stable grid tracks and 8px maximum card radius.

- [ ] **Step 2: 实现模式切换区域**

Render a segmented control with exact labels `对话模式`, `任务模式`, `写作模式` and `data-home-mode` attributes. Only the current mode uses blue text and a pale-blue background.

- [ ] **Step 3: 实现对话模式**

Keep the knowledge-scope picker and four existing question presets. Keep the three trust anchors `推荐范围`, `过滤可解释`, `一键沉淀` but reduce them to a compact single row so the composer remains the visual focus.

- [ ] **Step 4: 实现任务模式**

Render four templates: `汇总项目进展`, `审阅合规风险`, `整理知识库`, `生成工作周报`. Render composer controls `工作范围`, `资料来源`, `连接器`, `技能`.

- [ ] **Step 5: 实现写作模式**

Render category tabs `全部`, `工作`, `汇报`, `公文`, `学习/教育`; show `工作总结`, `汇报方案`, `会议纪要` by default. Render composer controls `知识范围`, `输出到新文档`, `写作要求`.

- [ ] **Step 6: 验证启动态**

Use Playwright to click each `[data-home-mode]` and assert each mode's unique template text is visible and the main card top/bottom positions differ by no more than 2px.

Expected: all three mode assertions pass.

---

### Task 3: 首页原位连续对话

**Files:**
- Modify: `05_网站程序（电脑使用）/当前工作稿/Cloud Docs Redesign v5 AI Modes.html`

**Interfaces:**
- Consumes: `state.homeConversationActive`, `state.homeConversationMessages`, `state.homeAiDrafts.chat`.
- Produces: `renderHomeConversation()`, `renderConversationRail()`.

- [ ] **Step 1: 添加对话工作台 CSS**

Implement `.home-conversation`, `.conversation-head`, `.conversation-stream`, `.message-user`, `.message-ai`, `.conversation-citations`, `.conversation-composer`, `.conversation-context-rail`. The stream must have a minimum height of 460px and the composer must remain visible at its bottom.

- [ ] **Step 2: 实现首次发送切换**

When chat mode sends, append a user message and a deterministic prototype answer, set `homeConversationActive = true`, clear only the chat draft, and rerender the homepage. Do not set `aiDrawerOpen`.

- [ ] **Step 3: 实现连续追问**

Handle `[data-home-followup]` by appending another user/AI pair. Keep citations and filtering explanation in each AI answer.

- [ ] **Step 4: 实现对话态右栏**

Replace `继续你的工作` with `本次对话`; show current scope, three cited sources, `沉淀到文档`, `保存为知识`, and `退出对话`. Exiting clears `homeConversationActive` but preserves the conversation in history.

- [ ] **Step 5: 验证不打开抽屉**

Playwright: send the default question, assert `.home-conversation` is visible, `.assistant-drawer` count is `0`, message count increases after a follow-up, and exiting restores `继续你的工作`.

Expected: all assertions pass.

---

### Task 4: 任务工作台、写作路径和 AI 历史

**Files:**
- Modify: `05_网站程序（电脑使用）/当前工作稿/Cloud Docs Redesign v5 AI Modes.html`

**Interfaces:**
- Produces: `renderAiTask()`, `renderAiHistory()`.
- Updates: `renderContent()` screen map and shared click delegation.

- [ ] **Step 1: 实现任务工作台**

Create an `aiTask` screen containing task title, four-step plan, source scope, current progress, manual confirmation and return-home action. Sending task mode sets `state.screen = "aiTask"`.

- [ ] **Step 2: 实现写作进入编辑器**

Sending writing mode sets the editor title from the selected template, sets `state.screen = "editor"`, and opens the existing editor with writing-oriented AI suggestions. It must not open the homepage conversation or AI drawer.

- [ ] **Step 3: 实现 AI 历史页**

Render tabs `全部`, `对话`, `任务`, `写作`; every item displays type, title, context, update time and status. Conversation entries reopen the homepage conversation, task entries open `aiTask`, writing entries open `editor`.

- [ ] **Step 4: 更新首页继续工作**

Add a compact `最近 AI 记录` subsection with one item per mode, while keeping recent documents and owner todos visible.

- [ ] **Step 5: 验证三条路径**

Playwright: task send reaches the task workbench; writing send reaches the editor; AI history filters change visible record types and each record resumes the correct screen.

Expected: all route assertions pass.

---

### Task 5: 响应式、可访问性与完成审计

**Files:**
- Modify: `05_网站程序（电脑使用）/当前工作稿/Cloud Docs Redesign v5 AI Modes.html`

**Interfaces:**
- Verifies all prior task outputs.

- [ ] **Step 1: 添加移动端规则**

At widths below 900px, use one column, place the right rail after the AI workbench, keep the mode switch on one line, use two-column task templates and one-column writing templates, and prevent horizontal overflow.

- [ ] **Step 2: 补齐语义和焦点状态**

Use `aria-pressed` on mode buttons, `aria-live="polite"` on conversation stream, labels on icon-only buttons, and visible `:focus-visible` outlines.

- [ ] **Step 3: 运行静态检查**

Run JavaScript syntax validation and search for duplicate IDs, unfinished placeholder markers, and references to the sibling cloud-drive project path.

Expected: syntax passes; no duplicate IDs, placeholders, or cross-project paths.

- [ ] **Step 4: 运行桌面端视觉验证**

Capture 1440x900 screenshots for chat start, chat active, task start, writing start, task workbench and AI history. Assert `document.documentElement.scrollWidth === document.documentElement.clientWidth`.

- [ ] **Step 5: 运行移动端视觉验证**

Capture 390x844 screenshots for chat start, chat active and task start. Assert no horizontal overflow and all mode buttons are visible.

- [ ] **Step 6: 完成需求审计**

Check every acceptance criterion in `03_设计资料/规格与计划/方案/2026-07-15-home-ai-three-modes-design.md` against the actual rendered v5 file. Record any mismatch and fix it before completion.
