# GitHub 发布流程

## 首次发布前需确认

- GitHub 仓库地址：
- 仓库可见性：公开 / 私有
- 默认分支：
- Pages 来源：
- 在线地址：

## 每次发布

```text
确认验收 → 更新 当前版本.txt → 保存快照 → git commit
→ 创建 vX.Y.Z tag → push → GitHub Pages 验证 → 更新版本台账
```

## 回滚

优先使用 Git tag 回滚，不直接从 Eagle 或临时文件覆盖当前工作稿。
