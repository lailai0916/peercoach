<div align="center">
  <h1>peercoach</h1>
  <p>English | <a href="README.zh-Hans.md">简体中文</a></p>
  <p>
    <img src="https://img.shields.io/github/last-commit/lailai0916/peercoach?style=flat-square" alt="last commit" />
    <img src="https://img.shields.io/github/languages/top/lailai0916/peercoach?style=flat-square" alt="top language" />
    <img src="https://img.shields.io/github/repo-size/lailai0916/peercoach?style=flat-square" alt="repo size" />
    <img src="https://img.shields.io/badge/license-CC_BY--NC--SA_4.0-blue?style=flat-square" alt="license" />
  </p>
</div>

**PeerCoach (知心陪练)** flips the usual mental-health chatbot: instead of the AI
comforting a student, the AI plays a classmate confiding in you, and you practice
being the person who can catch them — while a supervisor AI scores every reply.

Built for the peer-support gap in Chinese schools: class mental-health monitors
exist in every classroom but are almost never trained in how to respond. PeerCoach
turns "knowing how to comfort someone" from a talent into a teachable, measurable
skill, by adapting the Standardized Patient method from medical education.

## Features

🔄 **Role Reversal** — The student is the helper, not the helped. Ability stays
with the student, not the AI.

🎭 **Standardized Visitor** — A case agent plays a distressed classmate from a
layered script (surface concern + hidden feelings), revealed only as trust grows.

📊 **Trust Meter** — Response quality drives a live 0–100 trust bar: empathy opens
up, lecturing and judging shut down.

👩‍🏫 **Supervisor Scoring** — A second agent scores every reply across five
dimensions (listening, empathy, questioning, boundaries, referral) with a radar
report and line-by-line review.

🚨 **Crisis Gatekeeping** — The final case tests crisis-signal recognition. The
only pass is to catch it and immediately bring in a trusted adult; anything else
fails, regardless of other scores.

🤖 **Real LLM or Offline** — Runs on a built-in script engine offline, or plug in
any OpenAI-compatible endpoint (tested with DeepSeek) to make the whole session
LLM-driven.

🏫 **Classroom & Teacher Dashboard** — Reveal-after-discussion classroom mode;
students export their records, teachers import them into a class dashboard with a
re-training list.

## Quick Start

The web trainer is a single zero-dependency HTML file. Just open it:

```bash
open app/index.html          # macOS — double-click also works
```

To enable the real-LLM mode, open Settings and fill in an OpenAI-compatible
endpoint (e.g. `https://api.deepseek.com/v1/chat/completions`), your API key, and
a model name (e.g. `deepseek-chat`). Keys are stored only in your browser.

To rebuild the LaTeX documents:

```bash
export PATH="/Library/TeX/texbin:$PATH"
cd docs/tex
xelatex 设计报告.tex && xelatex 设计报告.tex   # run twice for the TOC
xelatex 过程性证明材料.tex
```

## Structure

```text
peercoach/
├── agent/                            Coze dual-agent build kit
│   ├── 案例智能体-人设与回复逻辑.md   # case agent (plays the visitor)
│   ├── 督导智能体-人设与回复逻辑.md   # supervisor agent (scores replies)
│   ├── 案例剧本库.md                 # 4 leveled cases + authoring spec
│   ├── 案例示例-自定义导入.json       # importable 5th case sample
│   └── 工作流与搭建步骤.md            # workflows, database, build steps
├── app/
│   └── index.html                    # web trainer (~1200 lines, zero-dep)
├── docs/
│   ├── 设计报告.pdf                  # design report (16 pp, LaTeX)
│   ├── 过程性证明材料.pdf             # process documentation (11 pp, LaTeX)
│   ├── tex/                          # LaTeX sources + figures
│   ├── 系统截图/                     # 13 real UI screenshots
│   ├── 数据采集指南.md               # survey, pre/post test, rubric
│   ├── 朋辈互助现状调研问卷.md         # survey (import + tally sheet)
│   ├── 问卷-可直接发放版.md           # ready-to-send survey
│   └── 附件一基本信息表(已填作品部分).docx
├── 提交清单.md                       # submission checklist
├── LICENSE
└── README.md
```

Raw survey/experiment data (collected from minors) is kept out of the repo via
`.gitignore` and retained privately by the author for on-site verification.

## Background

Entry for the 2025–2026 National Youth Mental-Health Knowledge & Application
Innovation Competition ("Little Psychologist", AI-Agent track). Effectiveness is
measured with real data: a 200-response survey, a 20-student pre/post training
experiment (response quality +34.9%, paired _t_(19) = 12.21, _p_ < 0.001; crisis
recognition 30% → 80%), and a six-scenario technical test. See the design report
for full methodology and statistics.

## License

Licensed under [CC BY-NC-SA 4.0](LICENSE).
