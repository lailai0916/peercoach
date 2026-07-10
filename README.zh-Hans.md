<div align="center">
  <h1>peercoach</h1>
  <p><a href="README.md">English</a> | 简体中文</p>
  <p>
    <img src="https://img.shields.io/github/last-commit/lailai0916/peercoach?style=flat-square" alt="last commit" />
    <img src="https://img.shields.io/github/languages/top/lailai0916/peercoach?style=flat-square" alt="top language" />
    <img src="https://img.shields.io/github/repo-size/lailai0916/peercoach?style=flat-square" alt="repo size" />
    <img src="https://img.shields.io/badge/license-CC_BY--NC--SA_4.0-blue?style=flat-square" alt="license" />
  </p>
</div>

**知心陪练 PeerCoach** 反转了常见的心理陪伴智能体:不是 AI 安慰学生,而是 AI 扮演
来倾诉的同学,你练习成为那个接得住 TA 的人,同时一位督导 AI 为你的每句回应打分。

针对我国校园的朋辈互助缺口:班级心理委员每班都有,却几乎没受过回应训练。知心陪练
借鉴医学教育的标准化病人方法,把「会安慰人」从天赋变成可教、可练、可测的技能。

## 特性

🔄 **角色反转** — 学生是助人者,不是被服务者。能力沉淀在学生身上,而非 AI。

🎭 **标准化来访者** — 案例智能体按双层剧本(表层困扰 + 隐藏心事)扮演有困扰的同学,
回应质量够高才逐层吐露真心事。

📊 **信任值** — 回应质量实时驱动 0–100 信任条:共情让 TA 敞开,说教评判让 TA 关门。

👩‍🏫 **督导评分** — 第二个智能体按倾听、共情、提问、边界、转介五维为每句回应打分,
生成雷达图与逐句复盘。

🚨 **危机一票否决** — 终极案例考核危机信号识别,唯一通关路径是接住并立刻连接可信任
的大人;其它任何回应都判负,无论其余表现多好。

🤖 **真 AI 或离线** — 默认剧本引擎离线可用;填入任意 OpenAI 兼容接口(实测 DeepSeek)
即由大模型驱动整场会谈。

🏫 **课堂模式与教师端** — 点评先讨论后揭晓的课堂模式;学生导出记录,教师批量导入生成
班级看板与需重训名单。

## 快速开始

网页训练场是单个零依赖 HTML 文件,直接打开即可:

```bash
open app/index.html          # macOS,双击同样可用
```

启用真 AI 模式:打开「设置」,填入 OpenAI 兼容接口(如
`https://api.deepseek.com/v1/chat/completions`)、你的 API Key 与模型名(如
`deepseek-chat`)。密钥仅存于本机浏览器。

重新编译 LaTeX 文档:

```bash
export PATH="/Library/TeX/texbin:$PATH"
cd docs/tex
xelatex 设计报告.tex && xelatex 设计报告.tex   # 跑两遍以生成目录
xelatex 过程性证明材料.tex
```

## 结构

```text
peercoach/
├── agent/                            扣子(Coze)双智能体搭建包
│   ├── 案例智能体-人设与回复逻辑.md   # 案例智能体(扮演来访者)
│   ├── 督导智能体-人设与回复逻辑.md   # 督导智能体(逐句评分)
│   ├── 案例剧本库.md                 # 4 个分级案例 + 编写规范
│   ├── 案例示例-自定义导入.json       # 可导入的第 5 个案例范例
│   └── 工作流与搭建步骤.md            # 工作流、数据库、搭建步骤
├── app/
│   └── index.html                    # 网页训练场(约 1200 行,零依赖)
├── docs/
│   ├── 设计报告.pdf                  # 设计报告(16 页,LaTeX)
│   ├── 过程性证明材料.pdf             # 过程性证明材料(11 页,LaTeX)
│   ├── tex/                          # LaTeX 源码与配图
│   ├── 系统截图/                     # 13 张真实界面截图
│   ├── 数据采集指南.md               # 问卷、前后测、评分量规
│   ├── 朋辈互助现状调研问卷.md         # 问卷(导入格式 + 统计对照表)
│   ├── 问卷-可直接发放版.md           # 可直接发放的纯问卷
│   └── 附件一基本信息表(已填作品部分).docx
├── 提交清单.md                       # 提交清单
├── LICENSE
└── README.md
```

原始问卷与实验数据(采集自未成年人)通过 `.gitignore` 排除在仓库外,由作者本地留存
以供现场查验。

## 背景

2025–2026 学年全国青少年心理成长知识与应用创新大赛(「小小心理学家」智能体应用方向)
参赛作品。效果以真实数据度量:200 份调研问卷、20 名学生前后测实验(回应质量 +34.9%,
配对 _t_(19) = 12.21,_p_ < 0.001;危机识别 30% → 80%)、六场景技术测试。完整方法与
统计见设计报告。

## 许可协议

采用 [CC BY-NC-SA 4.0](LICENSE) 许可。
