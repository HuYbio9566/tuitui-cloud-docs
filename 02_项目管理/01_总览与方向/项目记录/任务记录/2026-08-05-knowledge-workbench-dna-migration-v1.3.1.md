# 任务：知识工作台 Design DNA 迁移到云文档 v1.3.1

## 目标

保留云文档当前信息结构和交互关系，把用户提供的参考图视觉气质、token 和组件质感迁移到云文档所有页面，并启用新产品版本 1.3.1。

## 已完成

- 读取并使用 design-dna 技能。
- 从参考图提取：#F5F5F7 工作区、#FFFFFF 内容面、#1D1D1F 主文字、#6E6E73 次级文字、#0271E4 单一动作蓝、#EAF3FF 选中背景、#DFE0E4 轻边界、8-12px 圆角、低阴影、功能性动效。
- 在当前工作稿加入 --dna-* token，并增加最终 cascade lock，覆盖 rail、sidebar、topbar、content、card、button、search、tab、AI composer、文档行、详情页和移动端。
- 保留已有页面入口、知识库/文档/技能/云盘内容、搜索、打开、编辑、问答和状态结构。
- 复制新快照：05_网站程序（电脑使用）/产品快照/1.3.1/Cloud Docs Redesign v1.3.1 Knowledge Workbench.html。
- 更新当前版本.txt、老板版本情况、版本台账和工作稿说明。

## 验证结果

- npm run build：通过。
- 追加修复：发现展示工程同时存在 public 和 dist 两个 HTML 入口，之前只同步 public，导致实际预览仍显示旧主题；现已把当前工作稿同步到 public、dist/client 和 1.3.1 快照，四份文件 SHA-1 一致。
- 追加修复：根据用户补充截图重新校准为冷蓝灰主题：主蓝 #2F6BDB、工作区 #F7F9FC、浅选中 #E0E9FA、边界 #CDDBF2、文字 #1F2530/#677080。
- npm test：项目原有测试未通过，失败原因是测试仍期待 codex-preview=development 和缺失的 app/_sites-preview/SkeletonPreview.tsx；不是本次页面视觉迁移引入的语法错误。

## 仍需验收

- 在浏览器中逐页目测：新任务、知识库、文档、技能、云盘、单文档、AI 助手、详情/弹窗。
- 确认参考图的白色内容面和浅灰工作区在不同屏幕下对比度舒适。
- 如要正式线上发布，另行执行发布检查、Git commit/tag 和地址验证；本任务没有执行外部发布。
