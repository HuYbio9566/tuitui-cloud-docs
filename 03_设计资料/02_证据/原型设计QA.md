# Design QA — 云文档整套目录页

## Source truth

- 技能：`/var/folders/lx/m6jhyf_j7rj62zr076tmjckr0000gn/T/codex-clipboard-86cb4c90-f0cb-4bd9-a6bd-1eb5ff1bc316.png`
- 专家：`/var/folders/lx/m6jhyf_j7rj62zr076tmjckr0000gn/T/codex-clipboard-66cf5aad-9d5c-43c2-b19e-4bbc95fa025e.png`
- 连接器：`/var/folders/lx/m6jhyf_j7rj62zr076tmjckr0000gn/T/codex-clipboard-6f933e9c-7fd3-403b-a5ea-8c5c4037bca8.png`

## Implementation evidence

- Desktop viewport: `1728 × 907`
  - `qa/skills-implementation-v2.png`
  - `qa/experts-implementation-v2.png`
  - `qa/connectors-implementation-v2.png`
- Side-by-side comparison:
  - `qa/skills-comparison-v2.png`
  - `qa/experts-comparison-v2.png`
  - `qa/connectors-comparison-v2.png`
- Responsive evidence:
  - `qa/skills-final-1280-v2.png` — 1280px 默认桌面宽度，两列回流
  - `qa/skills-mobile-390.png`
  - `qa/experts-mobile-390.png`
  - `qa/connectors-mobile-390-v2.png`

## Comparison result

- 三页均复现最新版的页头、筛选标签、搜索入口、卡片结构、密度、圆角、边界与留白关系。
- 数据内容与截图一致：15 个技能、8 个专家、13 个连接器；专家头像和连接器品牌图标使用从源图提取的真实资产。
- 技能页保留“官方 / 企业 / 我的”及分类筛选；专家页保留“最近 / 全部 / 深度研究”；连接器使用语义正确的链路图标进入。
- 现有推推产品的全局 rail 与云文档侧栏被保留，因此主内容起点比独立参考页更靠右；这是复用现有信息架构的有意差异。
- 响应式规则：大屏三列，`≤1360px` 两列，`≤760px` 单列；390px 下三个页面均无横向溢出。

## Interaction evidence

- 技能：分类筛选 `15 → 1 → 15`；搜索 “NDA” 得到 1 项；添加“类案检索”后按钮切换为“使用类案检索”。
- 专家：“最近”显示 3 项，“全部”恢复 8 项。
- 连接器：搜索 “Figma” 得到 1 项；清空恢复 13 项；连接“元典法律”后按钮切换为管理状态。
- 浏览器控制台错误：0。

## Findings and fixes

1. `P1` 技能卡片的添加/使用按钮最初被网格自动放到右下角，与源图不符。已固定到第 1 行右上角。
2. `P1` 移动端技能、连接器页面标题最初回退为“知识工具”。已按子模块显示“技能”或“连接器”。
3. `P1` 1280px 默认桌面宽度下三列卡片文案过挤。已增加独立目录页断点，在 `≤1360px` 回流为两列。
4. `P2` 连接器旧入口曾使用分享语义图标。当前一级导航统一为链路语义图标，卡片内使用真实品牌资产。

## 2026-07-19 — 标题栏通栏与文档图标

### Source visual truth

- 知识库：`/var/folders/lx/m6jhyf_j7rj62zr076tmjckr0000gn/T/codex-clipboard-d64d38f4-6856-40b3-bfc5-9758294f839d.png`
- 文档：`/var/folders/lx/m6jhyf_j7rj62zr076tmjckr0000gn/T/codex-clipboard-31c5bdbc-6eca-4f95-b0db-61ea7c92fbbc.png`
- 云盘：`/var/folders/lx/m6jhyf_j7rj62zr076tmjckr0000gn/T/codex-clipboard-e96059e3-c8f2-4c57-ae6d-d8feb3ca9d10.png`
- 技能：`/var/folders/lx/m6jhyf_j7rj62zr076tmjckr0000gn/T/codex-clipboard-33d8654c-594d-4847-b172-18b413fede59.png`
- 专家：`/var/folders/lx/m6jhyf_j7rj62zr076tmjckr0000gn/T/codex-clipboard-44a69223-8523-4b7c-87eb-cbd02dc977c3.png`
- 工具：`/var/folders/lx/m6jhyf_j7rj62zr076tmjckr0000gn/T/codex-clipboard-3ada706d-1678-4351-ac67-e463d0b85bd1.png`
- 连接器：`/var/folders/lx/m6jhyf_j7rj62zr076tmjckr0000gn/T/codex-clipboard-d39fedeb-17a5-4bec-8826-fb77f3b1639b.png`
- 文档图标：`/var/folders/lx/m6jhyf_j7rj62zr076tmjckr0000gn/T/codex-clipboard-ad76b2ff-071c-4d95-ad1e-6dca98206803.png`

### Implemented

- `knowledge / docs / spaces / drive / tools / discover` 目录页统一启用 `directory-topbar`。
- 标题栏固定为 `#FFFFFF`，移除底部分割线、投影、透明和模糊，形成连续白底通栏。
- 技能、专家、连接器重新显示独立标题与右侧操作；连接器内容区删除重复的“连接”标题，只保留说明和搜索。
- 左侧“文档”入口由 `folder` 图标切换为现有统一线性 `doc` 图标。
- 静态断言全部通过；内联 JavaScript 语法检查通过。

### Verification status

- Intended viewport: desktop default + `390 × 844` responsive check.
- Browser-rendered implementation screenshot: unavailable in this iteration.
- Full-view comparison: blocked.
- Focused comparison: blocked.
- Blocker: 本地预览地址被应用内浏览器 URL 安全策略拒绝，无法按同一视口捕获修改后的实现图；未使用其他浏览器或自动化方式绕过限制。
- Console errors: not available because the page could not be opened by the selected browser.

## Final result

blocked
