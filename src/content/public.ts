import type { SiteProfile, WorkEntry, ExperienceEntry, SkillGroup, SkillLogo, AchievementEntry, InterestEntry } from "./types";

export const siteProfiles: SiteProfile[] = [
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "name": "齐梓桐",
    "alternateName": "Zitong Qi",
    "field": "具身智能 · 多模态学习 · 模型压缩",
    "eyebrow": "宁波大学 · 数学与应用数学本科生",
    "introduction": "宁波大学数学与应用数学专业本科生（2024—2028），现为东方理工 EAST-Lab 张伟课题组科研助理，研究方向为具身智能、多模态学习与模型压缩。曾在甬江实验室（乐橙科技）从事智能视频分析研发，并在美国 TReNDS Center 开展远程科研。",
    "availability": "寻找具身智能、多模态学习与模型压缩方向的科研助理 / 研究实习机会。",
    "current": "宁波大学 · 数学与应用数学",
    "location": "中国 · 宁波",
    "github": "https://github.com/fingercd",
    "focus": [
      "具身智能",
      "多模态学习",
      "模型压缩"
    ],
    "publicationSummary": "目前参与 5 篇在投论文，其中 3 项为核心研究：ACVF、PairSelect 为共同第一作者（第一顺位），ReInsVLN 为第二作者（核心贡献者）。获腾讯开悟强化学习竞赛国家三等奖。",
    "interestsSummary": "业余爱好包括力量训练、徒步与骑行。",
    "skillsSummary": "主要使用 Python、PyTorch、Transformers 与 PEFT/QLoRA 开展模型训练和适配，研究方法涉及 SigLIP 对比学习、PPO 强化学习、弱监督 MIL 与视觉 token 压缩；具有 Habitat/VLN-CE 导航评测、Unitree SDK2 机器人接入，以及 MONAI、NiBabel 脑影像处理经验。项目开发涉及 OpenCV、FastAPI/Flask、SQLite、NumPy/pandas、scikit-learn/XGBoost、Linux/SSH 和 Web 界面实现。"
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "name": "Zitong Qi",
    "alternateName": "齐梓桐",
    "field": "Embodied AI · Multimodal Learning · Model Compression",
    "eyebrow": "Mathematics undergraduate at Ningbo University",
    "introduction": "I am an undergraduate in Mathematics and Applied Mathematics at Ningbo University (2024–2028) and a research assistant in Prof. Wei Zhang’s group at EAST-Lab, Eastern Institute of Technology. My research focuses on embodied intelligence, multimodal learning and model compression. Previous experience includes video-analysis R&D at Yongjiang Laboratory and remote research at TReNDS Center, USA.",
    "availability": "Open to research assistant and internship opportunities in embodied AI, multimodal learning and model compression.",
    "current": "Ningbo University · Mathematics",
    "location": "Ningbo, China",
    "github": "https://github.com/fingercd",
    "focus": [
      "Embodied AI",
      "Multimodal learning",
      "Model compression"
    ],
    "publicationSummary": "I have co-authored five submitted papers, including three core studies: ACVF and PairSelect as first-listed co-first author, and ReInsVLN as second author and core contributor. I received a National Third Prize in the Tencent Kaiwu Reinforcement Learning Competition.",
    "interestsSummary": "Outside research, I enjoy strength training, hiking and cycling.",
    "skillsSummary": "I use Python, PyTorch, Transformers and PEFT/QLoRA for model training and adaptation, with experience in SigLIP contrastive learning, PPO, weakly supervised MIL and visual-token compression. My work includes Habitat/VLN-CE evaluation, Unitree SDK2 integration, and brain-imaging pipelines with MONAI and NiBabel. Engineering tools include OpenCV, FastAPI/Flask, SQLite, NumPy/pandas, scikit-learn/XGBoost, Linux/SSH and web interfaces."
  }
];

export const projects: WorkEntry[] = [
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "reinsvln",
    "slug": "reinsvln",
    "order": 1,
    "methods": [
      "PyTorch",
      "StreamVLN",
      "InternVLA-N1",
      "Habitat / R2R",
      "Unitree Go2 / G1"
    ],
    "title": "ReInsVLN",
    "subtitle": "免训练视觉语言导航",
    "venue": "ICRA 2027",
    "role": "第二作者（核心贡献者）",
    "summary": "让导航模型保留关键的历史线索，并在需要时重新利用它们。",
    "challenge": "长轨迹带来冗余视觉上下文；即使线索仍在历史中，模型也可能没有在决策时使用。",
    "homepageContribution": "负责视觉压缩模块的前期探索与接入，推进功能实现并协同迭代历史压缩策略；协同构建大小脑框架，适配多款 VLN 模型并打通推理与机器人执行的数据链路，完成 Go2 / G1 部署并参与实物实验。",
    "contributions": [
      "压缩历史观测：在进入语言模型前减少时间冗余，并保护已有记忆未充分覆盖的内容。",
      "按指令筛选：在语言模型内部结合语义相关性与位置，保留关键视觉 token 并恢复原始顺序。",
      "提醒与执行：按预设节奏回顾历史，将原生模型决策接入机器人执行链路。"
    ],
    "result": "R2R Val-Unseen 全量 1,839 episodes：StreamVLN / InternVLA-N1 的 SR 达到 64.27% / 64.44%，较原生模型提高 8.48 / 3.37 个百分点。匹配观测测试中，InternVLA-N1 压缩配置的 prefill 延迟降低 21.77%，KV 存储降低 32.25%。",
    "metrics": [
      [
        "+8.48 pp",
        "StreamVLN · SR"
      ],
      [
        "−21.77%",
        "InternVLA-N1 · prefill"
      ],
      [
        "Go2 / G1",
        "四足与人形机器人部署"
      ]
    ],
    "caption": "ReInsVLN 论文 Fig. 4：两阶段视觉压缩与历史回顾提醒。图为论文原图。",
    "kind": "研究论文",
    "year": "2026",
    "status": "在投",
    "links": [],
    "image": {
      "src": "/images/reinsvln-framework.png",
      "alt": "ReInsVLN 论文 Fig. 4：两阶段视觉压缩与历史回顾提醒。图为论文原图。"
    },
    "homepageResult": "R2R Val-Unseen（1,839 episodes）：两类模型 SR 达 64.27% / 64.44%，提高 8.48 / 3.37 个百分点；匹配观测下 InternVLA-N1 的 prefill 延迟降低 21.77%，KV 存储降低 32.25%。"
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "medical-multimodal-alignment",
    "slug": "medical-multimodal-alignment",
    "order": 2,
    "methods": [
      "PyTorch",
      "3D MRI",
      "BioClinicalBERT",
      "SigLIP",
      "MONAI / NiBabel"
    ],
    "title": "ACVF",
    "subtitle": "脑 MRI 与临床语言的多模态融合",
    "venue": "ICASSP 2027",
    "role": "共同第一作者（第一顺位）",
    "summary": "用轻量对齐连接脑影像、解剖结构与临床语言，无需重训预训练骨干。",
    "challenge": "单一 MRI 表征缺少显式解剖与临床语义；融合外部信息时，还需要排除与预测标签直接相关的输入字段。",
    "homepageContribution": "独立设计并实现 MRI、AAL 脑区体积与 BioClinicalBERT 临床文本的三模态融合，以受试者级 SigLIP 对齐连接冻结骨干，完成跨骨干评测与模态消融。",
    "contributions": [
      "编码三种信息：冻结 3D MRI 与 BioClinicalBERT 骨干，提取影像、临床文本和 AAL 脑区体积表征。",
      "受试者级对齐：投影到 256 维共享空间，用 SigLIP 目标连接三种模态。",
      "下游评测：按任务排除标签相关字段，在 1,077 名 ADNI 受试者上进行跨骨干与模态消融。"
    ],
    "result": "排除认知评分输入的 AD 分类中，三个骨干 AUC 平均提升 0.144。BrainIAC 的 ACC 从 64.6% 提升至 84.3%，AUC 从 0.732 提升至 0.922；AnatCL 脑龄 MAE 从 4.924 年降至 4.373 年。",
    "metrics": [
      [
        "+0.144",
        "AD 分类 · 平均 AUC 增益"
      ],
      [
        "0.922",
        "BrainIAC + ACVF · AD AUC"
      ],
      [
        "1,077",
        "ADNI 受试者"
      ]
    ],
    "caption": "ACVF 论文原始架构图：MRI、脑区体积与临床信息的受试者级对齐。AD 指标采用排除认知评分输入的设置。",
    "kind": "研究论文",
    "year": "2026",
    "status": "在投",
    "links": [],
    "image": {
      "src": "/images/acvf-framework.png",
      "alt": "ACVF 论文原始架构图：MRI、脑区体积与临床信息的受试者级对齐。AD 指标采用排除认知评分输入的设置。"
    },
    "homepageResult": "1,077 名 ADNI 受试者；排除认知评分输入的 AD 分类中，三个骨干 AUC 平均提升 0.144，BrainIAC AUC 从 0.732 提升至 0.922。"
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "pairselect",
    "slug": "pairselect",
    "order": 3,
    "methods": [
      "PyTorch",
      "VideoMAEv2",
      "VideoMAE",
      "TimeSformer",
      "CLIP",
      "WSVAD"
    ],
    "title": "PairSelect",
    "subtitle": "弱监督视频异常检测的 token 压缩",
    "venue": "ICASSP 2027",
    "role": "共同第一作者（第一顺位）",
    "summary": "在长视频编码中保留重要 token 和时间覆盖，以更低计算量复用原有检测系统。",
    "challenge": "长视频的持续编码开销较高，压缩还需要维持异常检测依赖的时间覆盖，并适配不同视觉骨干。",
    "homepageContribution": "独立设计并实现局部配对、范数排序与分组配额选择，在第 6 个 Transformer block 后压缩 token；适配四套检测系统，压缩及预算切换无需重训。",
    "contributions": [
      "先建立上下文：保留前 6 个 Transformer block 的密集编码，让 token 充分交互。",
      "再选择 token：执行局部配对、范数排序和分组配额选择，保留原始向量与时序覆盖。",
      "复用检测器：将压缩后的 token 送入后续编码层，直接复用检测权重；压缩与预算切换无需重训。"
    ],
    "result": "UCF-Crime / XD-Violence，batch=32：删除 40% token 时编码器加速 1.22–1.28 倍；VideoMAEv2 的 UCF AUC 从 80.63% 升至 81.02%，TimeSformer 的 XD PR-AUC 从 76.69% 升至 77.37%。删除 60% 时，编码器最高加速 1.47 倍。",
    "metrics": [
      [
        "1.22–1.28×",
        "40% 删除 · 编码器加速"
      ],
      [
        "81.02%",
        "VideoMAEv2 · UCF AUC"
      ],
      [
        "无需重训",
        "压缩与预算切换"
      ]
    ],
    "caption": "PairSelect 论文原始框架图。加速比为 batch=32 下的编码器测量，不能直接等同于端到端加速。",
    "kind": "研究论文",
    "year": "2026",
    "status": "在投",
    "links": [],
    "image": {
      "src": "/images/pairselect-framework.png",
      "alt": "PairSelect 论文原始框架图。加速比为 batch=32 下的编码器测量，不能直接等同于端到端加速。"
    },
    "homepageResult": "删除 40% token、batch=32 时，编码器加速 1.22–1.28 倍；VideoMAEv2 的 UCF AUC 为 80.63% → 81.02%，TimeSformer 的 XD PR-AUC 为 76.69% → 77.37%。"
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": false,
    "updatedAt": "2026-09-27",
    "key": "safecommunity-ai",
    "slug": "safecommunity-ai",
    "order": 4,
    "kind": "工程项目",
    "title": "SafeCommunity AI",
    "year": "2026.01 至 2026.03",
    "status": "公开代码",
    "homepageContribution": "负责核心算法与系统集成，将目标检测与跟踪、ROI 规则、视频异常识别和视觉语言模型复核接入同一套 Web 工作流。",
    "summary": "面向复杂监控场景的多路智能视频分析系统，覆盖目标跟踪、规则告警、异常识别与视觉语言模型复核。",
    "challenge": "传统安防系统依赖固定规则，容易误报，也难以说明事件为什么异常。项目需要同时处理长时序视频、开放集事件和可读的语言解释。",
    "role": "核心算法与系统工程",
    "contributions": [
      "组合 VideoMAE 与 CLIP 表征，并使用 Attention Pooling 和 Top-K MIL 聚合关键片段。",
      "以 QLoRA 适配视觉语言模型，配合结构化提示完成事件复核与解释。",
      "构建多路视频、ROI 规则、跟踪与告警闭环的 Web 展示系统。"
    ],
    "result": "项目完成多路视频接入、告警复核与结果展示。公开仓库包含系统架构和实现。",
    "methods": [
      "PyTorch",
      "VideoMAE",
      "CLIP",
      "Qwen-VL",
      "QLoRA",
      "Flask",
      "ByteTrack"
    ],
    "image": {
      "src": "/images/safecommunity-monitor.png",
      "alt": "SafeCommunity AI 多模态智能视频监控系统的项目总览图"
    },
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/fingercd/SafeCommunity-AI",
        "kind": "github"
      }
    ]
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": false,
    "updatedAt": "2026-09-27",
    "key": "kaiwu-rl",
    "slug": "kaiwu-reinforcement-learning",
    "order": 5,
    "kind": "竞赛项目",
    "title": "腾讯开悟 · 峡谷追猎强化学习",
    "year": "2026",
    "status": "国家三等奖",
    "summary": "面向局部可观测生存博弈的多目标分层 PPO 方案，联合优化生存、收集与探索策略。",
    "challenge": "智能体需要在复杂地图中躲避追击并收集资源，任务同时具有局部可观测、多目标冲突、稀疏奖励和长程规划难题。",
    "role": "队长、强化学习方案与训练工程",
    "contributions": [
      "设计分层 Actor 与多头 Critic，将移动、技能释放和不同任务目标的价值估计解耦。",
      "融合局部观测、目标关系和历史状态，并使用 LSTM / Transformer Policy 维持长短期决策上下文。",
      "围绕生存、资源收集与地图探索设计多目标奖励和阶段化 Reward Shaping，缓解稀疏奖励与目标冲突。",
      "持续迭代采样、评估与训练配置，结合失败回放定位策略坍缩和探索不足问题。"
    ],
    "result": "方案获得东部赛区初赛前列成绩，并获国家三等奖；公开仓库记录了网络、奖励与训练设计。",
    "methods": [
      "PPO",
      "Actor-Critic",
      "Hierarchical policy",
      "LSTM / Transformer Policy",
      "Multi-objective rewards",
      "Reward shaping"
    ],
    "image": {
      "src": "/images/kaiwu.svg",
      "alt": "多目标分层 PPO 的状态编码、策略网络与奖励反馈结构图"
    },
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/fingercd/KAIWU-RLagent--2026",
        "kind": "github"
      }
    ]
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "reinsvln",
    "slug": "reinsvln",
    "order": 1,
    "methods": [
      "PyTorch",
      "StreamVLN",
      "InternVLA-N1",
      "Habitat / R2R",
      "Unitree Go2 / G1"
    ],
    "title": "ReInsVLN",
    "subtitle": "Training-free vision-language navigation",
    "venue": "ICRA 2027",
    "role": "Second author · Core contributor",
    "summary": "Retain useful visual evidence, then help frozen navigators use it at the right moment.",
    "challenge": "Growing histories introduce redundant visual context, while retained landmarks can remain unused in navigation decisions.",
    "homepageContribution": "Led early exploration and integration of visual compression, contributed to its implementation, and collaboratively refined memory selection. Collaboratively built the high-level / low-level coordination framework, adapted multiple VLN models, and connected model inference to robot execution. Deployed models on Go2 and G1 and contributed to robot experiments.",
    "contributions": [
      "Compress observation history before the language model, reducing temporal redundancy while protecting poorly covered content.",
      "Select visual tokens inside the language model using instruction relevance and position, then restore their original order.",
      "Add scheduled history-review cues and connect native navigation decisions to robot execution."
    ],
    "result": "On all 1,839 R2R Val-Unseen episodes, StreamVLN / InternVLA-N1 reach 64.27% / 64.44% SR, gains of 8.48 / 3.37 percentage points. On matched observation workloads, the InternVLA-N1 compression configuration reduces prefill latency by 21.77% and KV storage by 32.25%.",
    "metrics": [
      [
        "+8.48 pp",
        "StreamVLN · SR"
      ],
      [
        "−21.77%",
        "InternVLA-N1 · prefill"
      ],
      [
        "Go2 / G1",
        "Quadruped & humanoid deployment"
      ]
    ],
    "caption": "Original paper, Fig. 4: two-stage visual compression and history-review reminders.",
    "kind": "Research",
    "year": "2026",
    "status": "Submitted",
    "links": [],
    "image": {
      "src": "/images/reinsvln-framework.png",
      "alt": "Original paper, Fig. 4: two-stage visual compression and history-review reminders."
    },
    "homepageResult": "On 1,839 R2R Val-Unseen episodes, SR reaches 64.27% / 64.44% (+8.48 / +3.37 pp). Matched-observation tests reduce InternVLA-N1 prefill latency by 21.77% and KV storage by 32.25%."
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "medical-multimodal-alignment",
    "slug": "medical-multimodal-alignment",
    "order": 2,
    "methods": [
      "PyTorch",
      "3D MRI",
      "BioClinicalBERT",
      "SigLIP",
      "MONAI / NiBabel"
    ],
    "title": "ACVF",
    "subtitle": "Multimodal fusion of brain MRI and clinical language",
    "venue": "ICASSP 2027",
    "role": "Co-first author · First-listed",
    "summary": "Connect brain imaging, anatomy and clinical language through lightweight alignment with frozen backbones.",
    "challenge": "MRI representations lack explicit anatomical and clinical context. Fusion must also exclude task-specific label-related fields.",
    "homepageContribution": "Independently designed and implemented fusion of MRI, AAL regional volumes and BioClinicalBERT text, using subject-level SigLIP alignment with frozen backbones and cross-backbone ablations.",
    "contributions": [
      "Encode MRI, clinical text and AAL regional volumes while keeping the MRI and BioClinicalBERT backbones frozen.",
      "Project features into a shared 256-dimensional space and align the three modalities with a subject-level SigLIP objective.",
      "Exclude task-specific label-related fields and evaluate across backbones and ablations on 1,077 ADNI subjects."
    ],
    "result": "For AD classification excluding cognitive-score inputs, average AUC improves by 0.144 across three backbones. BrainIAC accuracy rises from 64.6% to 84.3% and AUC from 0.732 to 0.922. AnatCL brain-age MAE decreases from 4.924 to 4.373 years.",
    "metrics": [
      [
        "+0.144",
        "Mean AD-classification AUC gain"
      ],
      [
        "0.922",
        "BrainIAC + ACVF · AD AUC"
      ],
      [
        "1,077",
        "ADNI subjects"
      ]
    ],
    "caption": "Original ACVF architecture: subject-level alignment of MRI, regional volumes and clinical information. AD metrics exclude cognitive-score inputs.",
    "kind": "Research",
    "year": "2026",
    "status": "Submitted",
    "links": [],
    "image": {
      "src": "/images/acvf-framework.png",
      "alt": "Original ACVF architecture: subject-level alignment of MRI, regional volumes and clinical information. AD metrics exclude cognitive-score inputs."
    },
    "homepageResult": "Evaluated on 1,077 ADNI subjects. With cognitive-score inputs excluded, AD AUC improves by 0.144 on average across three backbones; BrainIAC rises from 0.732 to 0.922."
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "pairselect",
    "slug": "pairselect",
    "order": 3,
    "methods": [
      "PyTorch",
      "VideoMAEv2",
      "VideoMAE",
      "TimeSformer",
      "CLIP",
      "WSVAD"
    ],
    "title": "PairSelect",
    "subtitle": "Token compression for weakly supervised video anomaly detection",
    "venue": "ICASSP 2027",
    "role": "Co-first author · First-listed",
    "summary": "Reduce long-video encoding cost while retaining original token vectors and temporal coverage.",
    "challenge": "Continuous long-video encoding is expensive. Compression must preserve temporal coverage and work across different visual backbones.",
    "homepageContribution": "Independently developed local pairing, norm ranking and group quotas after Transformer block 6. Adapted four detector systems without retraining for compression or budget changes.",
    "contributions": [
      "Contextualize all tokens through the first six dense Transformer blocks.",
      "Apply local pairing, norm ranking and group quotas, preserving original vectors and temporal coverage.",
      "Run the remaining blocks with fewer tokens and reuse detector weights, without retraining for compression or budget changes."
    ],
    "result": "On UCF-Crime / XD-Violence at batch size 32, 40% token deletion yields 1.22–1.28× encoder speedup. VideoMAEv2 UCF AUC rises from 80.63% to 81.02%; TimeSformer XD PR-AUC rises from 76.69% to 77.37%. At 60% token deletion, the encoder reaches up to 1.47× encoder speedup.",
    "metrics": [
      [
        "1.22–1.28×",
        "40% deletion · encoder"
      ],
      [
        "81.02%",
        "VideoMAEv2 · UCF AUC"
      ],
      [
        "No retraining",
        "Compression & budget changes"
      ]
    ],
    "caption": "Original PairSelect framework. Speedups refer to encoder measurements at batch size 32, not end-to-end acceleration.",
    "kind": "Research",
    "year": "2026",
    "status": "Submitted",
    "links": [],
    "image": {
      "src": "/images/pairselect-framework.png",
      "alt": "Original PairSelect framework. Speedups refer to encoder measurements at batch size 32, not end-to-end acceleration."
    },
    "homepageResult": "At 40% token deletion and batch size 32, encoder speedup is 1.22–1.28×. VideoMAEv2 UCF AUC: 80.63% → 81.02%; TimeSformer XD PR-AUC: 76.69% → 77.37%."
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": false,
    "updatedAt": "2026-09-27",
    "key": "safecommunity-ai",
    "slug": "safecommunity-ai",
    "order": 4,
    "kind": "Engineering",
    "title": "SafeCommunity AI",
    "year": "Jan 2026 to Mar 2026",
    "status": "Public repository",
    "homepageContribution": "Led the core algorithms and system integration, connecting detection and tracking, ROI rules, video anomaly recognition, and vision-language review in one web workflow.",
    "summary": "A multi-channel intelligent video analytics system spanning tracking, rule-based alerts, anomaly recognition, and vision-language review.",
    "challenge": "Rule-only security systems can be brittle, generate false alerts, and provide little explanation. The project needed to connect long-video understanding, open-set events, and readable language feedback.",
    "role": "Core algorithms and system engineering",
    "contributions": [
      "Combined VideoMAE and CLIP representations with Attention Pooling and Top-K MIL for key-segment aggregation.",
      "Adapted a vision-language model with QLoRA and structured prompts for event review and explanation.",
      "Built a web workflow for multi-stream video, ROI rules, tracking, and alert review."
    ],
    "result": "The system connects multi-stream inputs with alert review and result display. The public repository includes the architecture and implementation.",
    "methods": [
      "PyTorch",
      "VideoMAE",
      "CLIP",
      "Qwen-VL",
      "QLoRA",
      "Flask",
      "ByteTrack"
    ],
    "image": {
      "src": "/images/safecommunity-monitor.png",
      "alt": "SafeCommunity AI project overview for a multimodal intelligent video-monitoring system"
    },
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/fingercd/SafeCommunity-AI",
        "kind": "github"
      }
    ]
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": false,
    "updatedAt": "2026-09-27",
    "key": "kaiwu-rl",
    "slug": "kaiwu-reinforcement-learning",
    "order": 5,
    "kind": "Competition",
    "title": "Tencent Kaiwu · Reinforcement Learning",
    "year": "2026",
    "status": "National Third Prize",
    "summary": "A multi-objective hierarchical PPO agent for a partially observable survival game, balancing survival, collection, and exploration.",
    "challenge": "The agent must evade pursuit and collect resources in a complex map, bringing partial observability, conflicting objectives, sparse rewards, and long-horizon planning into one task.",
    "role": "Team lead, reinforcement-learning design, and training engineering",
    "contributions": [
      "Designed hierarchical actors and multi-head critics to separate movement, skill use, and objective-specific value estimates.",
      "Fused local observations, target relations, and state history with an LSTM / Transformer policy for short- and long-horizon context.",
      "Designed multi-objective rewards for survival, resource collection, and exploration, with staged reward shaping for sparse feedback and conflicting goals.",
      "Iterated sampling, evaluation, and training configurations, using failure replays to diagnose policy collapse and insufficient exploration."
    ],
    "result": "The solution placed near the top of the regional qualifier and received a national third prize; the public repository documents the network, rewards, and training design.",
    "methods": [
      "PPO",
      "Actor-Critic",
      "Hierarchical policy",
      "LSTM / Transformer Policy",
      "Multi-objective rewards",
      "Reward shaping"
    ],
    "image": {
      "src": "/images/kaiwu.svg",
      "alt": "Hierarchical multi-objective PPO architecture with state encoding, policies, critics, and reward feedback"
    },
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/fingercd/KAIWU-RLagent--2026",
        "kind": "github"
      }
    ]
  }
];

export const experiences: ExperienceEntry[] = [
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "safecommunity-ai",
    "order": 1,
    "period": "2026.01 至 2026.03",
    "organization": "甬江实验室（乐橙科技）",
    "group": "SafeCommunity AI",
    "role": "研发工程师 · 智能监控研发",
    "summary": "构建弱监督异常检测与 VLM 复核管线，使用 QLoRA 微调 Qwen3.5-VL；ECVA 测试准确率由 65.68% 提升至 78.53%。",
    "highlights": [],
    "methods": [],
    "logo": {
      "src": "/images/organizations/yongjiang-lab.svg",
      "alt": "甬江实验室标志"
    }
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "east-lab-vln",
    "order": 4,
    "period": "2026.06 至今",
    "organization": "宁波东方理工大学 EIT",
    "group": "EAST-Lab · 张伟课题组",
    "role": "研究助理",
    "summary": "开展 ReInsVLN 研究，负责视觉压缩模块的前期探索与接入，推进功能实现；协同构建大小脑框架，完成 Go2 / G1 部署并参与实物实验。",
    "highlights": [],
    "methods": [],
    "logo": {
      "src": "/images/organizations/eit-logo.png",
      "alt": "宁波东方理工大学 EIT 校徽与中英文校名"
    }
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "safecommunity-ai",
    "order": 1,
    "period": "Jan 2026 to Mar 2026",
    "organization": "Yongjiang Laboratory / Imou",
    "group": "SafeCommunity AI",
    "role": "R&D Engineer · Intelligent Video Surveillance",
    "summary": "Built a weakly supervised anomaly-detection and VLM-verification pipeline; QLoRA tuning of Qwen3.5-VL improved ECVA test accuracy from 65.68% to 78.53%.",
    "highlights": [],
    "methods": [],
    "logo": {
      "src": "/images/organizations/yongjiang-lab.svg",
      "alt": "Yongjiang Laboratory logo"
    }
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "east-lab-vln",
    "order": 4,
    "period": "Jun 2026 to present",
    "organization": "Eastern Institute of Technology, Ningbo (EIT)",
    "group": "EAST-Lab · Prof. Wei Zhang’s group",
    "role": "Research Assistant",
    "summary": "Worked on ReInsVLN: led early exploration and integration of visual compression, contributed to its implementation, collaboratively built high-level / low-level coordination, deployed models on Go2/G1, and participated in robot experiments.",
    "highlights": [],
    "methods": [],
    "logo": {
      "src": "/images/organizations/eit-logo.png",
      "alt": "Eastern Institute of Technology, Ningbo (EIT) logo and wordmark"
    }
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "kaiwu-competition",
    "order": 3,
    "period": "2026.04 — 2026.05",
    "organization": "腾讯开悟 · 峡谷追猎强化学习竞赛",
    "role": "国家三等奖",
    "summary": "设计 17-token Transformer 策略与 PPO 训练流程，结合三路价值估计、GAE、BFS 逃生特征和多目标奖励优化生存、收集与探索。",
    "highlights": [],
    "methods": [
      "PPO",
      "Transformer Policy",
      "GAE",
      "BFS"
    ]
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "kaiwu-competition",
    "order": 3,
    "period": "2026.04 — 2026.05",
    "organization": "Tencent Kaiwu · Reinforcement Learning Competition",
    "role": "National Third Prize",
    "summary": "Designed a 17-token Transformer policy and PPO training with three value estimates, GAE, BFS escape features and rewards for survival, collection and exploration.",
    "highlights": [],
    "methods": [
      "PPO",
      "Transformer Policy",
      "GAE",
      "BFS"
    ]
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "trends-center",
    "order": 2,
    "period": "2026.03 — 2026.05",
    "organization": "TReNDS Center",
    "group": "Georgia State University · Georgia Institute of Technology · Emory University, USA",
    "role": "远程科研助理",
    "summary": "开展 ACVF 脑 MRI 多模态研究，负责方法设计、代码实现、跨骨干实验与模态消融。",
    "highlights": [
      "构建 MRI、AAL 脑区体积、BioClinicalBERT 临床文本的三模态融合流程。",
      "围绕 AD 分类等下游任务完成跨骨干评测、模态消融和标签相关输入控制。"
    ],
    "methods": [
      "PyTorch",
      "3D MRI",
      "BioClinicalBERT",
      "SigLIP"
    ]
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "trends-center",
    "order": 2,
    "period": "Mar 2026 — May 2026",
    "organization": "TReNDS Center",
    "group": "Georgia State University · Georgia Institute of Technology · Emory University, USA",
    "role": "Remote Research Assistant",
    "summary": "Conducted ACVF research on multimodal brain MRI, including method design, implementation, cross-backbone experiments and modality ablations.",
    "highlights": [
      "Built a three-modal pipeline for MRI, AAL regional volumes and BioClinicalBERT clinical text.",
      "Evaluated across backbones and modality ablations for AD diagnosis and other tasks, with task-specific control of label-related inputs."
    ],
    "methods": [
      "PyTorch",
      "3D MRI",
      "BioClinicalBERT",
      "SigLIP"
    ]
  }
];

export const skills: SkillGroup[] = [
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "learning",
    "order": 1,
    "title": "深度学习与模型适配",
    "items": [
      "Python",
      "PyTorch",
      "Transformers",
      "PEFT / QLoRA",
      "AMP / DDP"
    ],
    "evidence": "实习中的 VLM 微调；ACVF 跨骨干训练与评测。"
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "embodied",
    "order": 2,
    "title": "导航与机器人部署",
    "items": [
      "Habitat / VLN-CE",
      "StreamVLN",
      "InternVLA-N1",
      "Unitree SDK2",
      "RGB 推理链路 / PID / MPC"
    ],
    "evidence": "ReInsVLN 压缩接入、大小脑协同与 Go2 / G1 部署。"
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "vision",
    "order": 3,
    "title": "视觉理解与压缩",
    "items": [
      "VideoMAE / VideoMAEv2",
      "CLIP",
      "TimeSformer",
      "MIL",
      "OpenCV",
      "Token Selection"
    ],
    "evidence": "PairSelect 四骨干压缩；安防视频异常检测与复核。"
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "medical",
    "order": 4,
    "title": "医学多模态学习",
    "items": [
      "3D MRI",
      "BioClinicalBERT",
      "SigLIP",
      "MONAI",
      "NiBabel"
    ],
    "evidence": "ACVF 影像、脑区体积、临床文本对齐与标签泄漏控制。"
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "rl",
    "order": 5,
    "title": "强化学习与决策",
    "items": [
      "PPO / Actor-Critic",
      "Transformer Policy",
      "GAE",
      "Reward Shaping",
      "BFS"
    ],
    "evidence": "腾讯开悟：局部可观测场景下的生存、收集与探索。"
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "engineering",
    "order": 6,
    "title": "实验平台与数据工程",
    "items": [
      "FastAPI / Flask",
      "SQLite",
      "NumPy / pandas",
      "scikit-learn / XGBoost",
      "JavaScript / HTML / CSS",
      "Linux / SSH"
    ],
    "evidence": "AutoAI 建模与训练任务队列、VLN 批量评测、机器人服务集成。"
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "learning",
    "order": 1,
    "title": "Deep learning & adaptation",
    "items": [
      "Python",
      "PyTorch",
      "Transformers",
      "PEFT / QLoRA",
      "AMP / DDP"
    ],
    "evidence": "VLM fine-tuning in the internship; cross-backbone ACVF experiments."
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "embodied",
    "order": 2,
    "title": "Navigation & robot deployment",
    "items": [
      "Habitat / VLN-CE",
      "StreamVLN",
      "InternVLA-N1",
      "Unitree SDK2",
      "RGB inference pipeline / PID / MPC"
    ],
    "evidence": "ReInsVLN integration, high-level / low-level coordination and Go2 / G1 deployment."
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "vision",
    "order": 3,
    "title": "Visual understanding & compression",
    "items": [
      "VideoMAE / VideoMAEv2",
      "CLIP",
      "TimeSformer",
      "MIL",
      "OpenCV",
      "Token Selection"
    ],
    "evidence": "Four-backbone PairSelect compression; surveillance anomaly detection and verification."
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "medical",
    "order": 4,
    "title": "Medical multimodal learning",
    "items": [
      "3D MRI",
      "BioClinicalBERT",
      "SigLIP",
      "MONAI",
      "NiBabel"
    ],
    "evidence": "ACVF alignment of imaging, regional volumes and clinical text, with task-aware leakage controls."
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "rl",
    "order": 5,
    "title": "Reinforcement learning & decisions",
    "items": [
      "PPO / Actor-Critic",
      "Transformer Policy",
      "GAE",
      "Reward Shaping",
      "BFS"
    ],
    "evidence": "Tencent Kaiwu: survival, collection and exploration under partial observability."
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "engineering",
    "order": 6,
    "title": "Experiment platforms & data engineering",
    "items": [
      "FastAPI / Flask",
      "SQLite",
      "NumPy / pandas",
      "scikit-learn / XGBoost",
      "JavaScript / HTML / CSS",
      "Linux / SSH"
    ],
    "evidence": "AutoAI modeling and training queues, batch VLN evaluation and robot-service integration."
  }
];

export const skillLogos: SkillLogo[] = [
  {
    "key": "python",
    "label": "Python",
    "src": "/images/skills/python.svg"
  },
  {
    "key": "pytorch",
    "label": "PyTorch",
    "src": "/images/skills/pytorch.svg"
  },
  {
    "key": "hugging-face",
    "label": "Hugging Face",
    "src": "/images/skills/huggingface.svg"
  },
  {
    "key": "opencv",
    "label": "OpenCV",
    "src": "/images/skills/opencv.svg"
  },
  {
    "key": "nvidia",
    "label": "NVIDIA / Isaac",
    "src": "/images/skills/nvidia.svg"
  },
  {
    "key": "numpy",
    "label": "NumPy",
    "src": "/images/skills/numpy.svg"
  }
];

export const achievements: AchievementEntry[] = [
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "kaiwu-prize",
    "order": 1,
    "date": "2026",
    "title": "腾讯开悟强化学习竞赛 · 国家三等奖",
    "scope": "国家级",
    "note": "负责分层 PPO、奖励设计与训练迭代。"
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "ascend-prize",
    "order": 2,
    "date": "本科阶段",
    "title": "华为昇腾 AI 创新大赛 · 浙江赛区银奖",
    "scope": "省级",
    "note": "参与方案开发与工程展示。"
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "mcm-awards",
    "order": 3,
    "date": "本科阶段",
    "title": "美国大学生数学建模竞赛 · M / H 奖",
    "scope": "国际竞赛",
    "note": "负责问题建模、数值分析与论文写作。"
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "scholarship",
    "order": 4,
    "date": "本科阶段",
    "title": "宁波大学本科二等奖学金",
    "scope": "校级",
    "note": "基于课程学习与综合表现评定。"
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "kaiwu-prize",
    "order": 1,
    "date": "2026",
    "title": "Tencent Kaiwu Reinforcement Learning · National Third Prize",
    "scope": "National",
    "note": "Led hierarchical PPO, reward design, and training iteration."
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "ascend-prize",
    "order": 2,
    "date": "Undergraduate",
    "title": "Huawei Ascend AI Innovation Competition · Zhejiang Silver Award",
    "scope": "Provincial",
    "note": "Contributed to solution development and the engineering presentation."
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "mcm-awards",
    "order": 3,
    "date": "Undergraduate",
    "title": "MCM/ICM · Meritorious / Honorable Mention",
    "scope": "International",
    "note": "Worked on problem formulation, numerical analysis, and technical writing."
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "scholarship",
    "order": 4,
    "date": "Undergraduate",
    "title": "Ningbo University Second-Class Undergraduate Scholarship",
    "scope": "University",
    "note": "Awarded for coursework and overall performance."
  }
];

export const interests: InterestEntry[] = [
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "training",
    "order": 1,
    "title": "力量训练与户外运动",
    "description": "用规律训练保持长期节奏。"
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "hiking",
    "order": 2,
    "title": "徒步与骑行",
    "description": "喜欢通过长路线认识城市与自然。"
  },
  {
    "locale": "zh",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "mystery",
    "order": 3,
    "title": "剧本推理与协作解谜",
    "description": "享受从有限信息中建立假设并共同判断。"
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "training",
    "order": 1,
    "title": "Strength Training & Outdoor Activity",
    "description": "Regular training helps me keep a steady long-term rhythm."
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "hiking",
    "order": 2,
    "title": "Hiking & Cycling",
    "description": "I enjoy getting to know cities and landscapes through long routes."
  },
  {
    "locale": "en",
    "visibility": "public",
    "featured": true,
    "updatedAt": "2026-09-27",
    "key": "mystery",
    "order": 3,
    "title": "Narrative Deduction & Collaborative Puzzles",
    "description": "I enjoy building hypotheses from limited evidence and reasoning together."
  }
];
