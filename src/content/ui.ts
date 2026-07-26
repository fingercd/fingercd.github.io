import type { Locale } from "./types";

export interface UiDictionary {
  localeName: string;
  languageSwitch: string;
  skipToContent: string;
  menuOpen: string;
  menuClose: string;
  nav: {
    research: string;
    work: string;
    experience: string;
    life: string;
    cv: string;
  };
  hero: {
    selectedWork: string;
    downloadCv: string;
    github: string;
    email: string;
    current: string;
    focus: string;
    links: string;
    scroll: string;
  };
  sections: {
    research: {
      label: string;
      title: string;
      description: string;
    };
    work: {
      label: string;
      title: string;
      description: string;
    };
    experience: {
      label: string;
      title: string;
      description: string;
    };
    skills: {
      label: string;
      title: string;
      description: string;
    };
    achievements: {
      label: string;
      title: string;
      description: string;
    };
    interests: {
      label: string;
      title: string;
      description: string;
    };
    contact: {
      label: string;
      title: string;
      description: string;
    };
  };
  project: {
    viewCase: string;
    github: string;
    role: string;
    result: string;
    methods: string;
    overview: string;
    challenge: string;
    contributions: string;
    evidence: string;
    noPublicCode: string;
    back: string;
    next: string;
  };
  footer: {
    note: string;
    updated: string;
    privacy: string;
  };
  notFound: {
    code: string;
    title: string;
    description: string;
    home: string;
  };
}

export const ui: Record<Locale, UiDictionary> = {
  zh: {
    localeName: "中文",
    languageSwitch: "EN",
    skipToContent: "跳到主要内容",
    menuOpen: "打开导航",
    menuClose: "关闭导航",
    nav: {
      research: "研究方向",
      work: "精选成果",
      experience: "经历",
      life: "荣誉与兴趣",
      cv: "简历",
    },
    hero: {
      selectedWork: "查看精选成果",
      downloadCv: "下载简历",
      github: "GitHub",
      email: "邮件联系",
      current: "CURRENT",
      focus: "FOCUS",
      links: "LINKS",
      scroll: "向下了解更多",
    },
    sections: {
      research: {
        label: "01 · RESEARCH",
        title: "从问题出发，而不是从关键词出发",
        description:
          "我关心模型是否理解事件、不同模态是否真正互补，以及研究结论能否经得住可靠评测并进入实际系统。",
      },
      work: {
        label: "02 · SELECTED WORK",
        title: "代表性研究与工程成果",
        description:
          "每个项目都说明问题、个人角色、方法、结果与可验证证据；未发表内容按保守边界展示。",
      },
      experience: {
        label: "03 · EXPERIENCE",
        title: "学习、研究与工程经历",
        description:
          "以时间线记录我如何从数学基础走向视觉与多模态研究，并把模型接入可用系统。",
      },
      skills: {
        label: "METHODS & TOOLS",
        title: "能力不是进度条，而是一组可复用的方法",
        description: "围绕研究、模型与工程三层组织，便于快速理解我能解决的问题。",
      },
      achievements: {
        label: "04 · RECOGNITION",
        title: "荣誉与竞赛",
        description: "只展示已确认、适合公开的奖项与个人贡献。",
      },
      interests: {
        label: "BEYOND WORK",
        title: "研究之外",
        description: "运动、长路线与协作推理，帮助我保持节奏、耐心和对复杂问题的好奇。",
      },
      contact: {
        label: "LET’S CONNECT",
        title: "欢迎交流研究、项目与实习机会",
        description:
          "如果你对视频理解、多模态学习或可靠 AI 系统感兴趣，欢迎通过 GitHub 联系我。",
      },
    },
    project: {
      viewCase: "查看项目",
      github: "查看 GitHub",
      role: "我的角色",
      result: "结果与证据",
      methods: "方法与工具",
      overview: "项目概览",
      challenge: "问题与挑战",
      contributions: "关键贡献",
      evidence: "结果与公开边界",
      noPublicCode: "研究进行中，代码与论文暂未公开。",
      back: "返回精选成果",
      next: "下一个项目",
    },
    footer: {
      note: "以研究问题为起点，以可验证系统为落点。",
      updated: "最后更新：2026 年 7 月",
      privacy: "本网站不包含手机号、住址、受控数据或未审查指标。",
    },
    notFound: {
      code: "404",
      title: "页面没有找到",
      description: "链接可能已经更新，或这项内容尚未公开。",
      home: "返回中文首页",
    },
  },
  en: {
    localeName: "English",
    languageSwitch: "中文",
    skipToContent: "Skip to main content",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
    nav: {
      research: "Research",
      work: "Selected Work",
      experience: "Experience",
      life: "Recognition & Life",
      cv: "CV",
    },
    hero: {
      selectedWork: "Selected Work",
      downloadCv: "Download CV",
      github: "GitHub",
      email: "Email",
      current: "CURRENT",
      focus: "FOCUS",
      links: "LINKS",
      scroll: "Scroll to explore",
    },
    sections: {
      research: {
        label: "01 · RESEARCH",
        title: "Questions first, keywords second",
        description:
          "I care whether models understand events, whether modalities add complementary evidence, and whether a result survives reliable evaluation and real system constraints.",
      },
      work: {
        label: "02 · SELECTED WORK",
        title: "Research and engineering, with evidence",
        description:
          "Each project states the problem, my role, methods, outcome, and public evidence. Unpublished work is intentionally shown at a conservative level.",
      },
      experience: {
        label: "03 · EXPERIENCE",
        title: "Learning, research, and engineering",
        description:
          "A timeline of how I connect a mathematical foundation with computer vision, multimodal research, and working AI systems.",
      },
      skills: {
        label: "METHODS & TOOLS",
        title: "Capabilities are reusable methods, not progress bars",
        description:
          "Organized across research, model tooling, and engineering so the problems I can work on are easy to understand.",
      },
      achievements: {
        label: "04 · RECOGNITION",
        title: "Awards & competitions",
        description:
          "Only confirmed, public-safe recognition and personal contributions are included.",
      },
      interests: {
        label: "BEYOND WORK",
        title: "Outside research",
        description:
          "Training, long routes, and collaborative deduction help me sustain rhythm, patience, and curiosity for complex problems.",
      },
      contact: {
        label: "LET’S CONNECT",
        title: "Open to research, projects, and internships",
        description:
          "If you are working on video understanding, multimodal learning, or reliable AI systems, feel free to reach out on GitHub.",
      },
    },
    project: {
      viewCase: "View project",
      github: "View on GitHub",
      role: "My role",
      result: "Outcome & evidence",
      methods: "Methods & tools",
      overview: "Project overview",
      challenge: "Problem & challenge",
      contributions: "Key contributions",
      evidence: "Outcome & disclosure boundary",
      noPublicCode: "Research in progress; code and manuscript are not public.",
      back: "Back to selected work",
      next: "Next project",
    },
    footer: {
      note: "Start from a research question. Finish with verifiable systems.",
      updated: "Last updated: July 2026",
      privacy:
        "This site excludes phone numbers, home addresses, controlled data, and unreviewed metrics.",
    },
    notFound: {
      code: "404",
      title: "Page not found",
      description: "The link may have changed, or this content is not public yet.",
      home: "Return to English home",
    },
  },
};
