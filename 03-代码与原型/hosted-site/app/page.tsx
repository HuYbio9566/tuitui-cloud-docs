import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "云文档 · 企业知识工作台",
  description: "云文档产品交互原型，覆盖知识问答、任务、文档、技能与连接器。",
};

export default function Home() {
  return (
    <main className="site-shell">
      <iframe
        className="product-frame"
        src="/cloud-docs.html"
        title="云文档 · 企业知识工作台"
      />
    </main>
  );
}
