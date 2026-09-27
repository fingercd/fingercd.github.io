import type { Locale } from "./types";

export interface UiDictionary {
  localeName: string;
  languageSwitch: string;
  skipToContent: string;
  menuOpen: string;
  menuClose: string;
  nav: {
    work: string;
    experience: string;
    skills: string;
    life: string;
    cv: string;
  };
  hero: {
    selectedWork: string;
    downloadCv: string;
    github: string;
  };
  sections: {
    work: {
      title: string;
      description: string;
    };
    experience: {
      title: string;
      description: string;
    };
    skills: {
      title: string;
      description: string;
    };
    achievements: {
      title: string;
      description: string;
    };
    interests: {
      title: string;
      description: string;
    };
    contact: {
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
      work: "代表工作",
      experience: "经历",
      skills: "技术栈",
      life: "荣誉",
      cv: "简历",
    },
    hero: {
      selectedWork: "代表工作",
      downloadCv: "简历",
      github: "GitHub",
    },
    sections: {
      work: {
        title: "代表工作",
        description: "ReInsVLN、ACVF 与 PairSelect 三项近期研究。",
      },
      experience: {
        title: "经历",
        description: "宁波大学、甬江实验室与宁波东方理工大学 EIT。",
      },
      skills: {
        title: "技术栈",
        description: "来自实际项目与本机仓库的工具、方法和训练经验。",
      },
      achievements: {
        title: "荣誉",
        description: "竞赛与奖学金记录。",
      },
      interests: {
        title: "研究之外",
        description: "力量训练、长路线与协作解谜。",
      },
      contact: {
        title: "联系",
        description: "研究交流与实习联系请通过 GitHub。",
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
      evidence: "实验结果",
      noPublicCode: "研究进行中，代码与论文暂未公开。",
      back: "返回代表工作",
      next: "下一个项目",
    },
    footer: {
      note: "具身智能 · 多模态学习 · 模型压缩",
      updated: "更新于 2026.09.27",
      privacy: "公开版不含手机号、住址、受控数据或未审查指标。",
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
      work: "Selected Work",
      experience: "Experience",
      skills: "Skills",
      life: "Recognition",
      cv: "CV",
    },
    hero: {
      selectedWork: "Selected Work",
      downloadCv: "CV",
      github: "GitHub",
    },
    sections: {
      work: {
        title: "Selected Work",
        description: "ReInsVLN, ACVF and PairSelect.",
      },
      experience: {
        title: "Experience",
        description:
          "Ningbo University, Yongjiang Laboratory, and Eastern Institute of Technology, Ningbo.",
      },
      skills: {
        title: "Technical Skills",
        description:
          "Methods and tools evidenced by project work and local repositories.",
      },
      achievements: {
        title: "Recognition",
        description: "Competition awards and scholarship.",
      },
      interests: {
        title: "Outside Research",
        description: "Strength training, long routes, and collaborative puzzles.",
      },
      contact: {
        title: "Contact",
        description: "For research conversations or internships, reach out on GitHub.",
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
      evidence: "Experimental results",
      noPublicCode: "Research in progress; code and manuscript are not public.",
      back: "Back to selected work",
      next: "Next project",
    },
    footer: {
      note: "Embodied AI · Multimodal Learning · Model Compression",
      updated: "Updated 27 Sep 2026",
      privacy:
        "The public site excludes phone numbers, home addresses, controlled data, and unreviewed metrics.",
    },
    notFound: {
      code: "404",
      title: "Page not found",
      description: "The link may have changed, or this content is not public yet.",
      home: "Return to English home",
    },
  },
};
