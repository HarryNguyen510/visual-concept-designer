# Visual Concept Designer (视觉概念设计师)

<p align="left">
  <a href="README.md">English</a> •
  <a href="README.vi.md">Tiếng Việt</a> •
  <a href="README.es.md">Español</a> •
  <a href="README.ja.md">日本語</a> •
  <b>简体中文</b>
</p>

---

Visual Concept Designer 是一个智能体技能 (Agent Skill)，可将笔记、文章、框架、工作流和业务想法转化为清晰的手绘风格插图 (Sketchnote)、Bento 网格布局和极简文章封面 —— 支持生成图像、SVG 矢量图或复制即用的提示词。

它适用于：

- 长内容（博客、PPT、社交媒体帖子）的视觉总结
- 极简文章封面：标题 + 副标题 + 抽象主题图案
- 工作坊和演讲图形
- 业务框架和战略地图
- 越南语和英语输出（严格处理变音符号）

## 工作原理

粘贴内容并向智能体提问即可。本技能将自动执行：

1. **内容提炼 (Distill)**：将长内容提炼为核心信息和符合风格的精确标签（绝不捏造事实）。
2. **选择风格**：从以下 8 种风格中选择最合适的一种（或使用您指定的风格）。
3. **生成提示词**：根据该风格的机器可读规范（精确的配色方案、布局、负向提示词列表）生成图像提示词。
4. **验证渲染**：校验生成的文本（包括越南语声调），若有错误则进行修正并重新生成。

您也可以只请求获取提示词，然后自行粘贴到任何图像生成工具中。

## 我需要哪种风格？

- **博客/文章封面（仅标题 + 副标题）？** → `WEC`
- **对比图、手动对比 AI 挂钩？** → `ACD`
- **单条引用或单个洞察？** → `SBS`
- **教训或技巧列表？** → `SB`
- **逐步工作流 / SOP？** → `FBW`
- **教育备忘单 / 多个概念卡？** → `EIS`
- **业务框架 / 系统地图？** → `BLD`
- **深度知识地图？** → `VTK`

| 代码 | 风格 | 最适用于 |
| --- | --- | --- |
| ACD | AI Contrast Drama (AI对比剧场) | 挂钩、封面、对比、手动对比 AI |
| WEC | Watercolor Editorial Cover (水彩编辑封面) | 宁静的封面、活动总结、高级横幅 |
| SBS | Sketchnote Blue Story (蓝色故事草图) | 单个洞察、引用、反思教训 |
| SB | Sketchnote Blue (蓝色草图) | 多个教训、总结、想法列表 |
| FBW | FlowBot Watercolor (水彩流程机器人) | 工作流、SOP、自动化流程 |
| EIS | Educational Infographic Sketchnote (教育信息图草图) | 备忘单、概念解释、教育海报 |
| BLD | Business Line Diagram (业务线图) | 框架、系统、架构图 |
| VTK | Visual Thinking Knowledge (视觉思维知识) | 深度分析和知识地图 |

您无需费心选择 —— 技能会自动为您挑选最合适的风格。

## 安装

可安装的技能文件位于 `skill/visual-concept-designer` 中，并遵循标准的智能体技能格式（带有 YAML 前导板块的 `SKILL.md`），因此适用于任何支持该格式的运行时。

**Codex** (Windows PowerShell):

```powershell
Copy-Item -Recurse .\skill\visual-concept-designer $HOME\.agents\skills\visual-concept-designer
```

**Claude Code:**

```powershell
Copy-Item -Recurse .\skill\visual-concept-designer $HOME\.claude\skills\visual-concept-designer
```

**其他智能体 (Gemini CLI 等):** 将 `skill/visual-concept-designer` 复制到您的运行时技能目录中。

安装后重启您的智能体。要验证是否安装成功，请向其提问：`Use visual-concept-designer to create a sketchnote for: "Tools amplify the workflow you already have."`

图像后端：首选 GPT Image 2，备用 Gemini Nano Banana 2；如果您的智能体完全无法生成图像，本技能将返回复制即用的提示词或原始 SVG 代码。详情请参阅 `docs/installation.md`。

## 快速使用

生成图像：

```text
Use visual-concept-designer to create an illustration for this business framework: ...
```

越南语博客封面（复制并替换标题/副标题）：

```text
Use visual-concept-designer to create a minimal cover for my blog post.
Title: 7 điểm chính từ buổi Cafe Talk Online
Subtitle: Ngày 28/05/2026
```

仅获取提示词（自行粘贴到 ChatGPT 或任何图像工具中）：

```text
Use visual-concept-designer and return only the image prompt for this article: ...
```

一整套文章插图（封面 + 每个小节一张插图）：

```text
Use visual-concept-designer to create a cover plus one illustration per section for this article: ...
```

更多模式请参考 `docs/usage.md`。示例输入：`examples/input/`。示例提示词：`examples/prompts/`。

## 支持与赞助

如果您觉得这个项目对您有所帮助，欢迎支持我的工作或请我喝杯咖啡：

- **Ko-fi**: [通过 Ko-fi 支持](https://ko-fi.com/harry_ai)
- **PayPal**: [通过 PayPal 赞助](https://paypal.me/nganhtuan)

支持与反馈：
- 渲染异常（越南语声调错误、布局偏差、风格不符）？ → 参阅 `docs/troubleshooting.md`
- 问题与建议 → 提交 GitHub Issue
- 想要添加新风格？ → 参阅 `docs/authoring-new-styles.md` 和 `CONTRIBUTING.md`

## 仓库状态

持续开发中。每个发布版本都会通过结构检查和评估标准 —— 参见 `docs/release-process.md` 和 `CHANGELOG.md`。

## 许可证

代码和文档采用 MIT 许可证。模板资产为 AI 生成，并遵循 `ASSET_LICENSE.md` 的规定。
