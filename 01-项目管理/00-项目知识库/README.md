# 推推项目知识库

这是“推推优化”项目的共享上下文入口。每次在本项目新开任务，先读取本文件，再按任务类型读取对应资料。

## 新任务启动顺序

1. 阅读 [PROJECT_BRIEF.md](PROJECT_BRIEF.md)，确认产品范围、目标用户和当前阶段。
2. 阅读 [DECISIONS.md](DECISIONS.md)，避免重复讨论已经确定的方案。
3. 阅读 [../../../VERSION_HISTORY.md](../../../VERSION_HISTORY.md)，确认当前版本和可回滚点。
4. 如果涉及视觉或交互，阅读 [../../../02-产品与设计/设计规范/DESIGN.md](../../../02-产品与设计/设计规范/DESIGN.md) 和 [EVIDENCE_INDEX.md](EVIDENCE_INDEX.md)。
5. 使用 [TASK_BRIEF.md](TASK_BRIEF.md) 建立本次任务的目标、范围、验收标准和复盘记录。

## 知识库目录

| 文件 | 用途 | 什么时候读 |
| --- | --- | --- |
| [PROJECT_BRIEF.md](PROJECT_BRIEF.md) | 项目背景、产品价值、范围和角色 | 所有任务 |
| [DECISIONS.md](DECISIONS.md) | 已确认的产品、设计、版本和技术决策 | 所有变更任务 |
| [EVIDENCE_INDEX.md](EVIDENCE_INDEX.md) | 截图、参考稿、QA 证据和来源说明 | 设计/体验/复盘任务 |
| [TASK_BRIEF.md](TASK_BRIEF.md) | 新任务启动与交付模板 | 每次新任务 |
| [RETRO_TEMPLATE.md](RETRO_TEMPLATE.md) | 任务结束复盘模板 | 任务完成时 |
| [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) | 未决问题、待确认决策和风险 | 规划/评审任务 |
| [CHANGELOG.md](CHANGELOG.md) | 项目级变更摘要 | 发布/回滚/交接 |

## 维护规则

- 只记录推推产品，不记录同级独立云盘项目。
- 用户确认的方案写入 `DECISIONS.md`，不要只留在聊天记录里。
- 新截图先判断是否能支持具体设计决策、验收结论或复盘；只有有复用价值的截图才放到 `evidence/YYYY-MM-DD/`，并在 `EVIDENCE_INDEX.md` 增加来源、用途和结论。
- 版本变化同时更新 `VERSION`、`VERSION_HISTORY.md` 和 `CHANGELOG.md`。
- 任务完成后，把结果、验证命令、遗留问题写入任务文件或复盘记录。
- 不把临时目录 `/var/folders/...` 作为长期证据路径。

## 当前入口

- 当前版本：读取项目根目录 [VERSION](../../../VERSION)。
- 当前工作文件：[Cloud Docs Redesign v5 AI Modes.html](../../../03-代码与原型/工作稿/Cloud%20Docs%20Redesign%20v5%20AI%20Modes.html)。
- 当前稳定回滚快照：[Cloud Docs Redesign v1.2.1.html](../../../03-代码与原型/产品快照/1.2.1/Cloud%20Docs%20Redesign%20v1.2.1.html)。
