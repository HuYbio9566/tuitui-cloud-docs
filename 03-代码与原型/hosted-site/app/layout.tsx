import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "云文档 · 企业知识工作台",
  description: "云文档产品交互原型，覆盖知识问答、任务、文档、技能与连接器。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
