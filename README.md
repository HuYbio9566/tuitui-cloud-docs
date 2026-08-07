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
