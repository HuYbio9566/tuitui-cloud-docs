# 右侧主内容区渐变修复记录（2026-08-05）

用户反馈右侧内容区出现突兀的纯白裁剪。原因是旧版 CSS 同时对外层 content 和内部 catalog-page 设置了纯白背景，覆盖了顶部浅蓝灰过渡。

修复：

- 外层主内容区统一为连续渐变：#F3F5FC → #F7F9FC → #FFFFFF。
- catalog-page、skill-catalog-page、home-launchpad、home-spatial-stage 改为透明，让外层渐变贯穿到底部。
- 卡片、知识库面板、云盘文件面板继续保持纯白，保留信息层级。
- 同步当前首页、当前工作稿、public、dist/client 和 1.3.1 快照。
- npm run build 通过。

