# 推推云文档

一个无需构建、下载后即可打开的静态云文档工作台原型。界面和说明可以使用中文，GitHub 不限制项目文件或 README 使用中文。

## 直接运行

1. 下载或克隆本仓库。
2. 双击打开 `index.html`，或在仓库根目录运行任意静态服务器：

   ```bash
   python3 -m http.server 8000
   ```

3. 浏览器访问 `http://localhost:8000/`。

项目没有 npm、编译器或后端依赖；`index.html` 和 `assets/catalog/` 是运行所需的全部网站文件。

## 目录

```text
index.html             # 网站入口
assets/catalog/        # 专家与连接器图片资源
README.md              # 使用说明
```

设计稿、截图、历史版本、项目管理记录和本地工作资料保留在开发者本地，不属于运行包，也不会上传到 GitHub。

线上预览：[tuitui-cloud-docs](https://huybio9566.github.io/tuitui-cloud-docs/)

## 版本规划

项目使用 Git 提交记录保存每一次改动，使用 GitHub Tag 标记可以直接下载的稳定版本。版本号遵循：

```text
主版本.功能版本.修复版本
例如：v1.3.2
```

- 主版本：整体产品或交互发生较大变化时递增。
- 功能版本：增加一组新功能或较大的页面模块时递增。
- 修复版本：样式调整、问题修复和小范围优化时递增。

当前稳定版本：`v1.3.2`

## 下载历史版本

在 GitHub 项目页点击 **Releases → Tags**，选择对应版本即可下载 ZIP。也可以直接使用：

```text
https://github.com/HuYbio9566/tuitui-cloud-docs/archive/refs/tags/v1.3.2.zip
```

将链接末尾的版本号替换成其他 Tag，就能下载其他稳定版本。

## 回到历史版本

如果只是想临时查看旧版本：

```bash
git fetch --tags
git switch --detach v1.3.2
```

如果确认要让本地工作区回到旧版本，建议先保存当前改动，再创建一个新分支：

```bash
git switch -c restore-v1.3.2 v1.3.2
```

这样不会破坏 `main`，可以随时切回最新版本：

```bash
git switch main
git pull
```

不建议直接删除或覆盖 `main`；优先使用 Tag 和恢复分支，方便比较和撤销。
