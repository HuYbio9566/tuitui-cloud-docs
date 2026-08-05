# Design QA — 技能页一级页签上移

## Comparison target

- Source visual truth: `/var/folders/lx/m6jhyf_j7rj62zr076tmjckr0000gn/T/codex-clipboard-f2a6aeb6-5f91-46d0-92de-5721c19862fd.png`
- Annotated current state: `/var/folders/lx/m6jhyf_j7rj62zr076tmjckr0000gn/T/codex-clipboard-ad216734-ac22-4951-a4e2-0f2d092bcd48.png`
- Implementation: `05_网站程序（电脑使用）/当前工作稿/Cloud Docs Redesign v5 AI Modes.html`
- Implementation screenshot: unavailable because browser automation cannot refresh/capture the local `file://` page.
- Intended viewport: desktop, approximately 2048 × 1064.
- State: 技能页，官方技能 / 全部。

## Static checks

- Passed: 独立“技能”页标题不再渲染于技能页左上角。
- Passed: “官方技能 / 企业技能 / 我的技能”使用与文档页相同的 `topbar-module-tabs`，直接进入标题栏。
- Passed: 技能内容区只保留“全部 / 法律法务 / developer-tools”二级筛选和右侧搜索框。
- Passed: 一级页签点击后会同步重绘标题栏和内容列表，选中态不会滞后。
- Passed: 二级筛选与搜索合并为同一行；移动端自动改为纵向排列。
- Passed: HTML 内联 JavaScript 语法检查通过。

## Fidelity surfaces

- Typography: 一级页签复用文档页字号、字重与激活态。
- Spacing/layout: 一级页签与操作按钮处于同一标题栏；二级筛选位于内容区首行。
- Colors/tokens: 完全复用现有 `topbar-module-tab` 和目录页颜色令牌。
- Image quality: 本次无图像资产变更。
- Copy/content: 三个技能来源和三个分类文案保持不变。
- Accessibility: 一级与二级页签保留 `role="tab"`、`aria-selected`，并可键盘聚焦。

## Findings

- [Blocked] 缺少修改后同视口截图，无法完成完整和聚焦区域并排比较。
  - Follow-up: 用户手动刷新当前标签页检查标题栏；若提供可自动化访问的预览地址，再完成像素级复核。

## Comparison history

- Iteration 1: 将技能来源页签从内容区移到标题栏，并修复切换后的标题栏选中态同步；静态检查通过。

final result: blocked
