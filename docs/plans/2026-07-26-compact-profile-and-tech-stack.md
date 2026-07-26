# 齐梓桐个人网站紧凑化与技术栈改版计划

> 日期：2026-07-26  
> 状态：已实施，待视觉验收与生产发布批准  
> 目标仓库：`outputs/zitong-qi-portfolio`  
> 技术基线：Next.js 16、TypeScript、原生 CSS、双语静态内容  
> 本计划只定义改动、顺序和验收标准，不包含页面代码修改或部署。

## 1. 改版目标

这次改版集中解决四件事：

1. 按最新批注修正论文状态、经历名称、机构归属和文字层级。
2. 在首页新增有本机项目证据支撑的技术栈区，不照搬参考图中的技术名词。
3. 压缩首页和项目详情页的纵向留白，让信息更快进入视野，其中荣誉区高度约减半。
4. 继续降低模板感和 AI 味道，保留正式、学术、求职都适用的克制风格。

完成后，桌面端应明显比当前版本紧凑，但正文、时间、角色和机构名称更容易读。移动端不得通过缩小字体来换取紧凑。

## 2. 已确认的内容决策

| 区域 | 当前状态 | 目标状态 | 验收方式 |
|---|---|---|---|
| ACVF 论文 | 中文页显示 `Under Review` | 中文改为 `在投`，会议信息保留 `IEEE BIBM 2026`；英文仍为 `Under Review` | 中文精选成果和详情页均不再出现英文状态 |
| SafeCommunity 经历 | 经历标题为 `SafeCommunity AI` | 改为 `甬江实验室（乐橙实习）`，项目区仍保留项目名 `SafeCommunity AI` | 经历与项目的命名职责分开，不互相替换 |
| EAST Lab 经历 | `EAST Lab · 张伟老师课题组` | 机构行增加东方理工大学 EIT，组名改为 `EAST Lab · 张伟课题组` | 页面中不再出现“张伟老师课题组” |
| 经历时间 | 11px，较难识别 | 桌面和移动端统一提高到约 13px | 1440px 和 390px 截图中都能清楚读取 |
| 经历蓝字 | 角色文字为 13px | 提高到约 15px，保持蓝色但不做胶囊标签 | 角色比说明文字醒目，不增加大块留白 |
| 荣誉 | 四行内容占据较大高度 | 标题、四行荣誉合计高度压缩约 45% 至 55% | 与当前同宽截图对比 |
| 研究之外 | 已是文本行，但区间较松 | 保持文本行，进一步压缩标题间距和行高 | 不改回卡片 |
| SafeCommunity 图片 | 空白占位 | 使用用户提供的项目总览成品图 | 首页和详情页均完整显示，不裁切 |
| 交互 | 已取消大部分动画 | 所有按钮、项目行、Logo 和技术栈均无位移、缩放、滚动或循环动画 | 键盘焦点仍清楚，hover 仅允许颜色或下划线变化 |

### 经历区建议文案

中文顺序保持按时间排列：

1. `宁波大学`
   - 时间：`2024.09 至 2028.06`
   - 角色：`数学与应用数学本科`
2. `甬江实验室（乐橙实习）`
   - 时间：`2026.01 至 2026.03`
   - 角色：`核心算法与系统工程`
   - 说明：保留多路视频接入、检测跟踪、规则告警、异常识别和 VLM 复核等已公开事实。
3. `东方理工大学 EIT`
   - 时间：`2026.06 至今`
   - 组别：`EAST Lab · 张伟课题组`
   - 角色：`研究助理`
   - 说明：保留 VLN 评测复现、模型行为分析和具身模型轻量化。

英文对应为：

- `Yongjiang Laboratory (Lecheng Internship)`
- `Eastern Institute of Technology, Ningbo (EIT)`
- `EAST Lab · Wei Zhang Group`

实施时先以官方 Logo 来源页核对机构的最新中英文全称。若官方仍使用“暂名”，页面展示名与官方素材保持一致，不自行简写或改名。

## 3. 本机技术栈审计结论

本轮只读检查了 Windows 开发工具、`D:\PythonProject` 中的自有项目、依赖清单和直接源码引用。扫描排除了虚拟环境、第三方上游仓库、模型权重、日志、输出目录和认证文件。

### 有实际项目证据，可进入公开技术栈

| 类别 | 技术 | 证据来源 |
|---|---|---|
| 编程与脚本 | Python、JavaScript、TypeScript、HTML/CSS、Bash/PowerShell | SafeCommunity、AutoAI、VLN 和当前个人网站源码 |
| 深度学习与多模态 | PyTorch、TorchVision、Transformers、PEFT、LoRA/QLoRA、Accelerate、DeepSpeed | SafeCommunity、DCIC、VLN 训练与评测代码 |
| 视觉与视频 | OpenCV、YOLOv8、VideoMAE v2、CLIP、Qwen-VL、SAM 2 | SafeCommunity 和 DCIC |
| 具身与导航 | Habitat-Lab、Habitat-Sim、VLN-CE、Isaac Lab、Isaac Sim | VLN 配置、评测脚本、项目说明与用户确认 |
| 数据与传统建模 | NumPy、Pandas、SciPy、scikit-learn、XGBoost | AutoAI、医学多模态和评测代码 |
| 强化学习 | PPO、Actor-Critic、分层策略、多目标奖励、LSTM/Transformer Policy、Reward Shaping | 腾讯开悟项目 |

### 暂不进入公开技术栈

- ROS 2 与 Unitree Go2：代码中有接口适配证据，但位于 StreamVLN fork。未确认本人完成实际部署前，只作为审核项。
- ByteTrack：适合继续出现在 SafeCommunity 项目技术列表中，不占用全站技能区。
- DeepSpeed：有训练证据，但首屏信息已经足够，先不放入紧凑版总览。
- VS Code、PyCharm、uv、GitHub CLI：属于环境工具，不代表研究能力，不需要展示。
- 具体显卡、驱动、Python 小版本和本机路径：不公开。

### 明确排除

参考图中的 TensorFlow、C/C++、Docker、CMake、MMDetection、Depth Anything、Gazebo、Nav2、URDF、MJCF、Open3D 不直接照搬。当前没有足够的本人项目证据，或本机仅存在第三方代码和文档。

## 4. 技术栈区内容与版式

### 页面位置

新增 `skills` 区，放在“经历”之后、“荣誉”之前。桌面导航改为：

`代表工作 | 经历 | 技术栈 | 荣誉`

英文为：

`Selected Work | Experience | Skills | Recognition`

### 六组公开内容

1. 编程与脚本  
   `Python · TypeScript/JavaScript · HTML/CSS · Bash/PowerShell`
2. 深度学习与多模态  
   `PyTorch · Transformers · PEFT/QLoRA · CLIP · Qwen-VL`
3. 计算机视觉  
   `OpenCV · YOLOv8 · VideoMAE v2 · SAM 2 · ByteTrack`
4. 具身智能与仿真  
   `Habitat-Lab · Habitat-Sim · VLN-CE · Isaac Lab · Isaac Sim`
5. 强化学习与决策  
   `PPO/Actor-Critic · 分层策略 · 多目标奖励 · LSTM/Transformer Policy · Reward Shaping`
6. 数据分析与建模  
   `NumPy · Pandas · SciPy · scikit-learn · XGBoost`

栏目说明建议使用：

> 这些工具都在我的项目或研究代码中实际用过。

英文：

> Tools I have used in projects or research code.

### 视觉规则

- 桌面端使用两列、三行的平面信息网格，移动端改为一列。
- 单元格只使用细边框和统一内边距，不使用浮起卡片、阴影、大圆角或 hover 位移。
- 组名为 15px 至 16px，内容为 14px 至 15px，行高约 1.55。
- 每组最多两行，不添加熟练度百分比、进度条或“精通”标签。
- 底部使用单行静态 Logo 带，放置 Python、PyTorch、Hugging Face、OpenCV、NVIDIA/Isaac 与 NumPy。
- Logo 实际显示高度约 26px 至 34px，间距统一。移动端允许自然换行，不做跑马灯。
- Logo 使用本地静态 SVG 或透明 PNG，不依赖外部 CDN。

## 5. 机构 Logo 处理方案

本机的 `D:\PythonProject`、Desktop、Documents、Downloads 和当前仓库中均未找到可确认的 EIT 或甬江实验室官方 Logo。用户提供的 P4 截图只作为布局和名称参考，不从截图裁图上线。

实施时按以下顺序处理：

1. 从学校或实验室官网、官方媒体中心获取当前版本的 SVG。
2. 没有 SVG 时使用透明 PNG，源图尺寸至少是页面实际显示尺寸的两倍。
3. 核对中英文名称、颜色、安全留白和使用许可。
4. 将素材保存到：
   - `public/images/organizations/eit.svg`
   - `public/images/organizations/yongjiang-laboratory.svg`
5. 在 `docs/asset-sources.md` 记录来源页面、下载日期和必要的许可说明。
6. Logo 未核实前可以制作纯文字本地预览，但不得用截图抠图或 AI 重绘版本替代并上线。

经历条目中的 Logo 使用固定容器，桌面端最大高度约 42px，移动端约 34px。机构名仍以可选中文本呈现，Logo 不承担唯一信息表达。

## 6. 全站紧凑化规格

### 全局尺度

| 项目 | 当前值 | 目标值 |
|---|---:|---:|
| 桌面页头高度 | 72px | 62px 至 64px |
| 首页首屏上下留白 | 84px 至 112px | 56px 至 72px |
| 通用 section 上下留白 | 72px 至 96px | 48px 至 64px |
| 移动端 section 上下留白 | 56px | 40px 至 48px |
| 栏目标题与内容间距 | 36px 至 52px | 24px 至 32px |
| 栏目顶部细线间距 | 20px | 12px 至 14px |

内容宽度继续保持 1120px，正文阅读宽度继续限制在约 720px。紧凑化主要压缩纵向空白，不把整站内容挤成过宽长行。

### 代表工作

- 每条上下留白从 34px 至 52px 改为 24px 至 34px。
- 图文间距从 34px 至 64px 改为 28px 至 44px。
- 保留 16:9 媒体区。SafeCommunity 使用用户提供的项目总览成品图，保持完整显示。
- 标题、摘要、本人贡献和技术列表的段间距压缩约 20%。
- ACVF 中文状态使用 `在投`，会议信息单独显示 `IEEE BIBM 2026`，避免重复两次“在投”。

### 经历

- 删除每条固定 `min-height: 180px`，改为内容驱动高度。
- 每条经历底部留白从 58px 降至约 32px 至 38px。
- 时间字号从 11px 增至 13px，中央时间列从 112px 调整到约 124px 至 132px，避免日期挤压。
- 时间点直径从 11px 增至约 13px，仍使用空心圆。
- 角色蓝字从 13px 增至 15px，组名和角色之间保持 4px 至 6px。
- 机构 Logo、机构名、组名采用一个紧凑的标题块，不额外制作大卡片。
- 1440px 桌面端的三条经历正文总高度目标为 360px 至 440px。
- 860px 以下继续切换为单侧时间线，时间置于正文上方，顺序不变。

### 技术栈

- 栏目总高度控制在约 420px 至 520px，Logo 带计入其中。
- 两列间距 12px 至 16px，单元格内边距 14px 至 16px。
- 不使用单独项目卡、彩色徽章或技术 Logo 大图。

### 荣誉与研究之外

- 荣誉行上下留白从 22px 降至 10px 至 12px。
- 日期、级别、标题、说明在桌面端保持一行主结构，说明最多一行。
- 标题下方间距缩到 24px 左右。
- 从栏目顶部细线到第四条荣誉结束的高度，比当前同宽页面减少约 45% 至 55%。
- “研究之外”与荣誉列表之间的间距从 64px 至 84px 降至 36px 至 44px。
- 兴趣行上下留白从 18px 降至 10px 至 12px，继续使用三条文本行。

### 项目详情与页脚

“整体紧凑”同时覆盖项目详情页：

- 项目 Hero 图片上方间距从 58px 降到约 36px。
- 项目正文区上下留白从 88px 至 148px 降到 56px 至 88px。
- 每个叙事小节底部间距从 78px 降到约 48px 至 56px。
- 下一项目入口高度从 190px 降到约 140px 至 156px。
- 联系行上下留白从 28px 降到约 20px。

这些调整不能改变标题层级、键盘顺序、正文可读宽度和触控目标。移动端按钮及菜单触控区域仍不小于 44px。

## 7. 降低 AI 味道的执行规则

### 视觉

- 不增加渐变、玻璃拟态、粒子、打字机、自动轮播或滚动 Logo。
- 不把荣誉、兴趣和技术栈做成一组悬浮圆角卡片。
- 不为每一行配装饰图标。
- 按钮和 Logo 不做位移、缩放、弹性或发光动画。
- 继续使用细线、自然留白、真实流程图和机构标识。

### 文案

- 首页每个栏目说明最多一句。
- 经历和项目使用具体动词与对象，例如“接入多路视频”“复现 VLN 评测”“设计防泄漏协议”。
- 删除没有新增事实的套话，例如“赋能”“深耕”“构建完整闭环”“体现综合能力”。
- 避免连续使用相同的三段式句型，也不强行把所有内容凑成三点。
- 不补写未确认指标、内部合作方、模型效果或投稿结果。
- 中文页使用中文状态词，不混入 `Under Review`、`Research in Progress` 等模板化标签。
- 保留第一人称角色，但不使用夸张的“主导一切”“端到端全栈”等表述。

文案实施采用“初稿、AI 痕迹审查、事实核对、终稿”四步。终稿必须保留原有事实数量，不用删信息的方式假装更自然。

## 8. 数据模型与文件改动

### 内容模型

在 `src/content/types.ts` 中：

- 给 `ExperienceEntry` 增加可选的 `group` 和 `logo` 字段。
- `logo` 至少包含 `src` 与 `alt`，不把图片路径写死在组件中。
- 新增 `SkillGroup`，字段包括 `key`、`order`、`title`、`items` 和现有公开元数据。
- 新增 `SkillLogo`，字段包括 `key`、`label`、`src`。
- 在 `LocalizedContent` 中加入 `skills` 和技能 Logo 数据。

### 公开内容

在 `src/content/public.ts` 中：

- 修改 ACVF 中文状态与公开说明。
- 修改中英文经历机构、组名、角色与 Logo。
- 同步更新首页介绍中对 EAST Lab 的机构归属。
- 新增六组中英文技术栈和静态 Logo 清单。
- ROS 2、Unitree Go2 保持 `review` 或不进入公开数据。

### 双语与公开校验

在 `src/lib/content.ts` 中：

- 把技能组纳入 `visibility === "public"` 过滤。
- 校验中英文技能组 key、顺序和数量一致。
- 校验公开经历的中英文 key、顺序和 Logo alt。
- 继续确保 `review` 与 `private` 内容不进入构建产物。

### 页面与导航

在以下文件中实现结构调整：

- `src/components/PortfolioPage.tsx`
  - 经历条目增加机构 Logo 和组名。
  - 在经历与荣誉之间加入技术栈区。
  - 保持荣誉和兴趣为紧凑文本行。
- `src/components/Header.tsx`
  - 新增 `skills` 锚点。
  - 保持桌面静态下划线和移动菜单，无过渡动画。
- `src/components/FeaturedWorkRow.tsx`
  - 只检查中文状态、会议信息和断行，不改变 SafeCommunity 空白图逻辑。
- `src/content/ui.ts`
  - 增加中英文技术栈导航与栏目文案。
  - 更新经历栏目中对机构的描述。

### CSS

在 `src/app/globals.css` 中：

- 按第 6 节统一调整全局间距、经历字号、荣誉行高和项目详情页间距。
- 增加机构标题块、Logo、技术栈网格和 Logo 带样式。
- 清理已不再被组件引用的旧版卡片、研究区和技能卡样式。
- 不继续在文件末尾追加一层覆盖规则。先用 `rg` 确认类名无引用，再删除旧规则并合并当前首页样式。
- 保留 `prefers-reduced-motion`、焦点样式和移动端触控尺寸。

### 素材与文档

- `public/images/organizations/eit.svg`
- `public/images/organizations/yongjiang-laboratory.svg`
- `public/images/skills/*.svg`
- `docs/asset-sources.md`
- `README.md`

README 只更新当前首页结构、技术栈内容来源和最新验证状态，不把本机扫描路径或硬件信息写进公开说明。

## 9. 实施顺序

### 阶段 1：机构素材与公开口径

1. 获取 EIT 与甬江实验室官方 Logo。
2. 核对官方中英文名称及“暂名”口径。
3. 记录素材来源，生成透明、适合浅色背景的本地版本。
4. 确认 `甬江实验室（乐橙实习）` 和 BIBM `在投` 可以公开。

验收：两枚 Logo 清楚、无黑底、无截图压缩痕迹，文字口径与官方来源一致。

### 阶段 2：内容模型与双语数据

1. 扩展经历与技术栈类型。
2. 修改中英文项目和经历内容。
3. 加入六组技术栈和 Logo 数据。
4. 增加中英文一致性与公开门禁检查。

验收：内容层能够单独通过 TypeScript 和完整性校验，不依赖页面硬编码。

### 阶段 3：结构实现

1. 改造经历标题块。
2. 插入技术栈区。
3. 增加导航锚点和移动菜单项。
4. 将 SafeCommunity 用户提供的成品图接入首页和详情页。

验收：关闭 CSS 后，HTML 顺序仍为首屏、代表工作、经历、技术栈、荣誉、研究之外、联系。

### 阶段 4：紧凑化 CSS

1. 调整全局节奏变量和页头。
2. 压缩首屏、代表工作和经历。
3. 实现技术栈两列网格与静态 Logo 带。
4. 将荣誉区高度压缩约一半。
5. 压缩兴趣、联系和项目详情页。
6. 清理旧版无用样式。

验收：紧凑来自留白和结构优化，不通过把正文缩到 12px 以下实现。

### 阶段 5：文案去模板化

1. 审查首页和两个精选成果详情页的全部可见文案。
2. 标记重复句式、泛化价值判断和没有事实的信息。
3. 在不删事实、不编指标的前提下改成更短、更具体的表达。
4. 同步英文，不做逐字直译。

验收：每段都能回答“做了什么、在哪里、本人负责什么”，没有口号式结尾。

### 阶段 6：质量验证

按顺序运行：

```bash
git status --short
npm run check
npm run build:static
npm run build:sites
```

随后检查：

- 320px、390px、768px、1024px、1440px 无横向滚动。
- 中文和英文首页的栏目、技术组、经历顺序一致。
- 项目详情页、简历、404、语言切换和锚点正常。
- 机构 Logo 不变形，图片均有 alt。
- 键盘焦点清楚，移动菜单可关闭，触控区域不小于 44px。
- 页面不存在按钮位移、缩放、循环动画或滚动 Logo。
- SafeCommunity 成品图完整显示且有中英文替代文本。
- 中文页面不再出现 `Under Review`。
- `review`、`private`、手机号、旧邮箱和本机路径不进入静态产物。
- Lighthouse Performance、Accessibility、Best Practices、SEO 继续以 90 以上为最低线，CLS 目标仍为 0。

视觉对比至少保存 390px、768px、1440px 三组首页截图，以及中英文各一个项目详情页截图。

### 阶段 7：预览与发布

1. 先生成本地与 Sites 预览，不直接覆盖生产版本。
2. 对照五张批注图逐条复核。
3. 用户确认机构名称、Logo、紧凑程度和技术栈后，再保存新版本并部署。

验收：部署前没有未确认的机构 Logo、技术标签或投稿表述。

## 10. 风险与回退

| 风险 | 处理 |
|---|---|
| 官方 Logo 暂时找不到 | 预览使用纯文字，不从截图抠图，不发布伪造 Logo |
| EIT 名称处于变更期 | 以官方素材和官网当日口径为准，并在素材来源文档记录日期 |
| 英文机构名没有官方翻译 | 保留官方英文；没有官方英文时使用拼音，不创造宣传性译名 |
| 技术栈变成关键词墙 | 每组限制一至两行，只放有项目证据的内容 |
| 紧凑化损害移动端可读性 | 不降低正文基准字号，不缩小触控目标，分别调桌面和移动间距 |
| 清理旧 CSS 引发回归 | 每删除一组规则前用 `rg` 确认引用，分阶段验证首页和项目详情 |
| 投稿信息公开范围变化 | 将状态保留在内容数据中，修改一处即可同步首页和详情页 |

实现时建议分成三个可回退提交：

1. `content: update affiliations and evidence-based skills`
2. `ui: add compact experience and skills sections`
3. `style: tighten layout and remove legacy rules`

任何阶段出现视觉回归，只回退对应提交，不重置用户的其他改动。

## 11. 默认执行边界

- 本轮扫描结果只用于人工整理技术栈，网站构建时不会扫描个人电脑。
- SafeCommunity 项目图使用用户提供的成品图。
- ROS 2 与 Unitree Go2 暂不公开。
- 不增加博客、后台、数据库、联系表单、分析脚本、深色模式或复杂动画。
- 不部署，直到预览截图通过人工确认。
