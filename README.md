# 齐梓桐 · Zitong Qi

中英双语科研个人主页，使用 Next.js、TypeScript 和 CSS 构建，静态发布至 GitHub Pages。

- 默认入口：[fingercd.github.io](https://fingercd.github.io/)（进入中文版）
- 中文：[个人主页](https://fingercd.github.io/zh/) · [完整履历](https://fingercd.github.io/zh/cv/)
- English: [Portfolio](https://fingercd.github.io/en/) · [Full profile](https://fingercd.github.io/en/cv/)

主页包括个人简介、三项核心研究、科研与实践经历和技术方法。研究项目为 ReInsVLN、ACVF、PairSelect，均注明投稿状态与个人贡献。经历按甬江实验室、TReNDS Center、腾讯开悟、东方理工 EAST-Lab 排列。

## 本地开发

使用 Node.js 24：

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3077
```

打开 http://127.0.0.1:3077/zh/。

## 构建与发布

```sh
npm run build:static
```

静态文件输出至 out/。推送 main 后，GitHub Actions 自动构建并发布至 GitHub Pages，网站根路径进入 /zh/。发布不依赖个人电脑保持开机。

## 内容维护

- src/content/public.ts：中英文项目、简介和经历
- src/components/PortfolioPage.tsx：紧凑主页结构
- src/components/FeaturedWorkRow.tsx：左图右文的纵向研究条目
- src/app/globals.css：页面样式
- public/images/：照片和论文流程图
- cv-source/：网站公开版简历的 XeLaTeX 源文件
- public/cv/：网站下载的中英文 PDF
- src/lib/site.ts：正式网址和简历下载路径

网站版简历以 GitHub 作为联系入口。论文图来自作者提供的稿件，个人照片和项目截图由本人提供；第三方机构标志与技术图标来源见 docs/asset-sources.md。
