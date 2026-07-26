# 齐梓桐 · Zitong Qi — bilingual portfolio

面向老师、同学、科研合作者与招聘者的中英双语个人网站。技术栈为
Next.js 16（App Router）+ TypeScript + 原生 CSS；内容在构建期生成，无数据库、
无公网 API、无 CMS、无分析脚本。

## 推荐入口

- 当前生产站：<https://zitong-qi-portfolio.wiggly-lynx-0873.chatgpt.site>
- 中文首页：`/zh/`
- English home: `/en/`
- 根路径 `/`：OpenNext/Workers 环境返回到 `/zh/` 的重定向；纯静态环境使用同页
  JavaScript + `meta refresh` 回退。
- 项目详情：`/{lang}/projects/{slug}/`

四个首发项目：

1. `safecommunity-ai`
2. `medical-multimodal-alignment`
3. `dcic-forgery-analysis`
4. `kaiwu-reinforcement-learning`

## 本地运行

要求 Node.js 20.9 或更高版本。

```bash
npm install
npm run dev
```

打开 `http://localhost:3000/zh/`。常用质量命令：

```bash
npm run check          # Next 路由类型 + TypeScript + ESLint
npm run build          # 标准 Next 生产构建，产物 .next/
npm run build:static   # 可选纯静态构建，产物 out/
npm run build:sites    # Sites 静态 Worker 产物 .open-next/
npm run build:open-next # 可选完整 Next/OpenNext Node 运行时
```

## 两种发布目标

| 目标 | 命令 | 产物 | 适用场景 |
|---|---|---|---|
| Codex Sites（首发推荐） | `npm run build:sites` | `.open-next/worker.js` + `.open-next/assets/` | 以静态导出为真源，由极小 Worker 处理根路径跳转、404 与安全响应头 |
| Cloudflare Pages 纯静态迁移 | `npm run build:static` | `out/` | 只有静态资源、不需要 Worker 的备用路线 |
| 完整 Next/OpenNext | `npm run build:open-next` | `.open-next/worker.js` + Node 运行时 | 仅供未来确有 SSR / Server Actions 需求时重新验证 |

默认 `npm run build` **不会**启用 `output: "export"`，供 OpenNext 与 Sites
继续处理标准 Next 产物。只有 `STATIC_EXPORT=1`（脚本已通过 `cross-env`
封装）时，`next.config.ts` 才会启用静态导出。

原规划里的 Astro `dist/` 目录在框架切换后不再适用。Cloudflare Pages
若采用纯静态路线，应把构建命令设为 `npm run build:static`、输出目录设为
`out`，不要填 `dist`。

### Codex Sites

项目已经绑定 `.openai/hosting.json` 中的既有 Sites `project_id`。该文件是
托管系统的身份信息，不要删除、重建或手动替换 ID。保存 Sites 版本前应：

1. 运行 `npm run check`。
2. 运行 `npm run build:sites`，确认 `.open-next/worker.js` 与
   `.open-next/assets/` 存在。
3. 提交并推送与构建完全一致的源码状态。
4. 由 Sites 使用该 commit 和同一源码状态生成的归档保存版本。

### Cloudflare Workers

`wrangler.jsonc` 已配置 Worker 入口、静态资源目录、`nodejs_compat` 和当前
兼容日期。首发站点没有 SSR、数据库或 Server Actions，因此 Sites 使用
`npm run build:sites` 生成的静态 Worker：页面来自 Next 静态导出，Worker 只
负责根路径跳转、正式 404 与安全响应头。这比加载完整 Node 运行时更小、更稳。

`open-next.config.ts` 与 `npm run build:open-next` 仍保留，供未来确有动态
服务端需求时迁移；届时应在 Linux CI 和目标 Worker 环境重新做运行时验证。

```bash
npm run preview # 构建并本地预览 Sites 静态 Worker；不会上线
npm run deploy  # 生产部署，有外部影响，确认后再执行
```

Cloudflare Workers Builds 可使用：

- Build command: `npm run build:open-next`
- Deploy command: `npx wrangler deploy`

参考：
[Cloudflare Next.js 指南](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/)、
[OpenNext Cloudflare 指南](https://opennext.js.org/cloudflare/get-started)。

### Cloudflare Pages（备用）

```bash
npm run build:static
```

Pages 设置：

- Framework preset: Next.js (Static HTML Export)，或不选 preset
- Build command: `npm run build:static`
- Output directory: `out`

站点所有语言和项目动态段都有 `generateStaticParams`，因此可导出为纯静态
HTML。`public/_headers` 会随静态资源复制；根页自带浏览器端重定向回退。

## 内容更新

- 公开事实与双语正文：`src/content/public.ts`
- 内容类型：`src/content/types.ts`
- 导航、栏目和界面文案：`src/content/ui.ts`
- 公开门禁与双语一致性检查：`src/lib/content.ts`
- 页面组件：`src/components/`
- 页面路由与 SEO：`src/app/`
- 项目图：`public/images/`
- 机构与技术图标来源：`docs/asset-sources.md`
- 公网简历：`public/cv/qi-zitong-cv-zh.pdf` 和
  `public/cv/zitong-qi-cv-en.pdf`

精选项目的中英文条目必须使用相同 `key` 和 `slug`。任何一侧缺失、slug
不一致或 locale 内重复，构建会直接失败，避免双语版本漂移。
首页结构为首屏、代表工作、经历、技术栈、荣誉、研究之外和联系。技术栈
来自项目与本机仓库的只读审计，分为编程、深度学习、多模态、计算机视觉、
具身仿真、强化学习和数据建模；不在浏览器或构建过程中扫描个人电脑。

## 隐私与 visibility 规则

每条内容都有：

- `visibility: "public" | "review" | "private"`
- `locale`
- `featured`
- `updatedAt`

页面只读取 `visibility === "public"` 的条目。更重要的是，`review` 和
`private` 草稿必须放在被 Git 忽略、且不被应用 import 的 `content-drafts/`
目录；这能确保草稿不会进入 Worker bundle 或静态产物。visibility 过滤是
第二层保护，不是敏感信息脱敏工具。

禁止复制到公开源码的内容包括：手机号、学号、家庭住址、证件编号、认证
信息、受控数据、未审查合作方、未发表稿件的投稿去向和未经授权的内部指标。

首发版本不公开邮箱，联系 CTA 统一指向 GitHub。自定义域名与独立域名邮箱
开通并验证可收件后，再在一次单独的公开审查中配置；不得使用用户名包含
手机号的旧邮箱替换。

## SEO 与可访问性

- 每页独立 title、description、canonical、Open Graph、Twitter Card。
- 中英文首页和项目详情互设 `hreflang`，并包含 `x-default`。
- 自动生成 `/sitemap.xml` 与 `/robots.txt`。
- Person / CreativeWork JSON-LD。
- 语义化标题、跳转链接、键盘焦点、图片替代文本。
- 320px 起响应式布局；移动端折叠菜单中，简历和语言切换始终可见。
- 支持 `prefers-reduced-motion`，无自动播放和复杂动画。

## 验证状态

| 检查 | 状态 |
|---|---|
| 内容隐私与双语结构审查 | 已完成 |
| 公开 GitHub 链接核验 | 已完成 |
| `npm run check` | 2026-07-26 已通过：Next route types、TypeScript、ESLint（0 warnings） |
| `npm run build` | 已通过：15 个 Static / SSG 页面 |
| `npm run build:static` | 2026-07-26 已通过：`out/`、404、双语与 8 个项目详情完整 |
| `npm run build:sites` | 2026-07-26 已通过：由 `out/` 生成静态 Worker 与完整 assets，并通过 Wrangler 本地运行时验证 |
| `npm run build:open-next` | 保留为未来动态迁移入口；首发生产站不加载完整 Node 运行时 |
| 渲染产物隐私检索 | 已通过：手机号、旧邮箱、`mailto:` 均为零匹配 |
| SEO 产物检查 | 已通过：canonical、alternate/hreflang、OG、JSON-LD、sitemap、robots |
| 390 / 768 / 1440 浏览器视觉检查 | 2026-07-26 已通过：新版中英文首页与 SafeCommunity 详情页无横向溢出、失败图片或控制台错误 |
| Lighthouse（历史基线） | 上一生产版桌面四项均为 100，移动端性能中位数 92；本次内容改版尚未重新跑分 |
| 生产部署 | 由 `.openai/hosting.json` 绑定的 Codex Sites 版本流程管理；源码不保存令牌或其他部署凭据 |
