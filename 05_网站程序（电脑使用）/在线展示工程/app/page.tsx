import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "云文档 · 统一知识工作台 · v1.3.1",
  description: "云文档 1.3.1 视觉迁移原型，保留原信息结构并采用推推知识工作台 Design DNA。",
};

export default function Home() {
  return (
    <main className="site-shell">
      <iframe
        className="product-frame"
        src="/cloud-docs.html"
        title="云文档 · 统一知识工作台 · v1.3.1"
      />
    </main>
  );
}
