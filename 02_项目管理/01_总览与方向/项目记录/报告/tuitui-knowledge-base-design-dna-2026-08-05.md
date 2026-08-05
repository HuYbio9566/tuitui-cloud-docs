# 推推（360家）知识库线上版 Design DNA 调研报告

> 给老板的结论：线上知识库的核心不是“漂亮卡片”，而是一套冷静、可信、高密度的企业知识工作台。云文档第三次升级应沿用三段式导航、白色内容画布、单一蓝色操作色和轻边界组件；AI 必须明确当前知识范围和来源，不能把知识库做成泛聊天页。

## 1. 调研范围与证据边界

本次在 /Applications/360家.app（窗口标题“推推”）打开知识库模块，直接观察到全局导航：消息、通讯录、项目、广场、团队、连接云、云文档、知识库、云盘、更多；知识工作台子导航：新任务、知识库、技能、专家、连接器、云盘、更多、历史。

页面直接看到“我的知识库 / 知识广场”、全部、已加入、文档库、FAQ库、术语库、推荐、分类筛选和“搜索知识库”。列表卡片显示知识库名称、类型、简介、来源、文档数量和已加入状态。实测库包括 SkillHub使用指南、智维表使用指南、AI人才招聘标准、内网SKILL统一认证：开发者指南、360智盾-大模型内容安全护栏、智效WisCode资料库、商标常见问题指引、360智探手机取证分析系统等。

证据截图：[E-2026-08-05-tuitui-knowledge-list.png](../证据/E-2026-08-05-tuitui-knowledge-list.png)。

证据等级说明：列表页为客户端直接观察；颜色是截图像素近似值；字号、间距、圆角是视觉测量建议；本轮未取得可靠的库详情、库内文档、本库问答和来源引用截图，原因是点击详情时客户端焦点切回 Codex，因此这些部分只能列为待验收，不能冒充已证实能力。

## 2. 视觉系统一句话

“银白工作桌 + 深蓝文字 + 单一动作蓝 + 轻边界白卡片 + 高信息密度”。它服务企业内部检索、管理和协作，不是营销展示。

## 3. 完整 Design DNA JSON

以下 JSON 按 design-dna 技能要求覆盖三维结构：design_system（可测 token）、design_style（感受与品牌语言）、visual_effects（特殊渲染与动效）。

### 核心结构化值（可直接用于开发）

> 说明：下面的完整字段附录覆盖 design-dna schema 的三大维度；核心值先给老板快速阅读。

- 颜色：背景 #F0F8F8，卡片 #FFFFFF，主蓝 #2078B0，深蓝文字 #182030，次级文字 #607080，边界 #E8E8E8，浅蓝选中 #C8D8F0。
- 字体：系统无衬线；标题 600；正文 14px / 1.6；标签 12-13px。
- 间距：4px 基础单位；常用 8 / 12 / 16 / 20 / 24 / 32px。
- 形状：6px 小圆角、8px 控件圆角、10-12px 卡片圆角、1px 轻边界。
- 动效：120-190ms、功能性反馈、hover 只改背景/边界或抬升 1px。
- 视觉效果：subtle-accent / lightweight / CSS transitions + lightweight JS；未观察到 Canvas、WebGL、3D、粒子、shader、玻璃拟态或复杂滚动动画。

## 4. 给云文档第三次升级的直接约束

### 必须保留

1. 三段式连续骨架：全局导航 → 产品工作台侧栏 → 主内容。三段不要改成互相漂浮的卡片。
2. 当前范围必须始终可见：当前模块、当前知识库/文件夹、当前筛选。
3. 单一交互蓝：选中、主按钮、链接和焦点都走同一蓝色体系。
4. 对象信息要密集但可读：标题、类型、简介、来源、文档数、已加入状态同屏可见。
5. 长列表优先行布局；只有独立点击或比较对象才使用卡片。

### 明确不要做

- 不做紫蓝渐变、彩色卡片墙、营销式大图和大面积装饰留白。
- 不用多套阴影和玻璃拟态堆层级。
- 不把“本库问答”做成没有范围提示的泛聊天窗口。
- 不让 AI 静默扩大检索范围；回答必须能显示来源、文档名、更新时间和权限状态。

## 5. 开发落地建议

建议组件：WorkbenchShell、GlobalRail、ProductSidebar、ModuleTabs、ScopeFilter、KnowledgeCard、KnowledgeListRow、StatusTag、SearchKnowledgeInput、DocumentList、SourceCitation、AskInKnowledgeBase、SaveAsDocumentDialog。

建议数据字段：

- KnowledgeBase: id, name, type, description, source, documentCount, joined, category, updatedAt, permission
- Document: id, knowledgeBaseId, title, type, source, updatedAt, permission, status
- Answer: id, scopeType, scopeId, question, answer, citations[], generatedAt, confidence, canSaveAsDocument
- Citation: documentId, documentTitle, excerpt, location, updatedAt, permission

最小状态机：未加入 → 已加入 → 打开知识库 → 浏览文档 → 发起本库问答 → 有引用 / 无引用 / 权限不足 → 沉淀为文档（待确认）。

## 6. 下一轮必须补验的页面

知识库详情顶部（返回、名称、类型、简介、加入/退出、权限）；库内文档（字段、排序、筛选、打开、文档菜单）；热门问题；本库问答（范围提示、空状态、加载中、无答案、引用、失败重试）；AI 来源引用（展开、文档、定位）；文档沉淀（保存前确认、目标知识库、重复文档、权限冲突）。

## 7. 验收标准（老板看得懂版）

- 3 秒内看得出“我在哪个模块、哪个范围、下一步做什么”。
- 不问技术人员，也能从列表看懂一个知识库是什么、来自哪里、里面有多少文档。
- AI 每个结论都能回答“依据哪份文档”。
- 没有权限时，页面告诉用户怎么补救，不只显示红色报错。
- 低性能设备关闭动效后，功能和层级仍完整。

## 8. 完整 Design DNA 字段附录

### design_system（可测 token）

- color：palette_type=analogous；surface.background=#F0F8F8；surface.card=#FFFFFF；surface.elevated=#F8F8F8；primary=#2078B0；secondary=#206898；accent=#C8D8F0；neutral scale=#F8F8F8、#F0F8F8、#F0F0F0、#E8E8E8、#D0E0F0、#989898、#607080、#182030；semantic success=#2E9B62、warning=#C98620、error=#C64545、info=#2078B0；contrast=dark-on-light dominant with subtle layers。
- typography：display 30-34/600/1.16；heading1 22-24/600/1.3；heading2 18-20/600/1.4；heading3 15-16/600/1.45；body 14/400/1.6；small 13/400/1.5；caption 12/400/1.4；overline 11/600/1.3；字体为系统无衬线，mono=SFMono-Regular/Menlo。
- spacing：base_unit=4px；scale=4/8/12/16/20/24/32px；density=compact-to-comfortable；rhythm=16-24px sections、12-16px list items、36px nav。
- layout：global rail → product sidebar → main；main max 1200-1440px；目录 2-3 列，长列表单行；gutter 16-24px；≤1180px 3列降2列，≤760px 单列；strict grid / left aligned。
- shape：radius 6/8/10-12/999px；1px subtle border；low-contrast cool-gray divider。
- elevation：static cards no shadow；popover soft layered shadow；depth by surface contrast + border + restrained shadow。
- iconography：semantic linear icons，1.5-2px，16px navigation、18-20px feature、12-14px metadata。
- motion：cubic-bezier(.23,1,.32,1)，120/160-190/240ms，fade/subtle slide，minimal functional。
- components：32px compact buttons、8px radius；white bordered cards、8-12px radius；search input；persistent rail + sidebar；opaque modal；dense list rows/cards；one blue only。

### design_style（定性风格）

- aesthetic：mood=calm/professional/credible/precise/restrained；genre=corporate knowledge-work SaaS；metaphor=安静、可检索的银白企业工作桌；personality=meticulous/dependable/efficient/quietly confident。
- visual_language：complexity=moderate；ornamentation=subtle accents；whitespace=functional；focal=distributed interest with progressive filtering；contrast=medium-high text / low surface；texture=none。
- composition：hierarchy=typographic + color weight + spatial grouping；balance=asymmetric grid-disciplined；flow=left-to-right then top-to-bottom；grouping=module tabs → category filters → knowledge objects → search；negative space separates scopes。
- imagery：no marketing photography；functional illustration only；semantic line icons；small rounded thumbnails；no decorative patterns。
- interaction_feel：immediate/local/state-based；hover changes background/border or lifts 1px；snappy smooth glide；quiet skeleton/spinner；low-medium microinteraction density。
- brand_voice：direct/useful/enterprise-practical；professional not bureaucratic；direct imperative CTA；empty states explain missing data + next action；errors specific/calm/recoverable。

### visual_effects（特殊渲染）

- overview：effect_intensity=subtle-accent；performance_tier=lightweight；fallback=static CSS；primary_technology=CSS transitions + lightweight JS。
- background_effects、particle_systems、3d_elements、shader_effects、parallax、scroll_triggered_animations、scroll_morphing、text_effects、cursor_effects、image_effects、canvas_drawings、svg_animations、glassmorphism_neumorphism：均为 none/disabled，依据为列表页静态观察；未发现 Canvas、WebGL、3D、粒子、shader、玻璃拟态或复杂滚动动画。
- composite_notes：signature effect is hierarchy, not rendering；selection fill、local hover、status tags、restrained depth 是主要视觉效果。

## 9. 证据与风险

本报告可以直接作为云文档合并第三次升级的视觉基线，但不能替代接口文档、权限模型和真实线上验收。当前最重要的未知项是详情页和本库问答的真实信息架构；补验前不应锁死开发接口。
