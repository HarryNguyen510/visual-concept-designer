# Visual Concept Designer

<p align="left">
  <a href="README.md">English</a> •
  <a href="README.vi.md">Tiếng Việt</a> •
  <a href="README.es.md">Español</a> •
  <b>日本語</b> •
  <a href="README.zh.md">简体中文</a>
</p>

---

Visual Concept Designerは、メモ、記事、フレームワーク、ワークフロー、およびビジネスアイデアを、明確なスケッチノート風イラスト、Bentoグリッド（弁当グリッド）、およびミニマルな記事カバー（生成された画像、SVG、またはコピーしてそのまま使用できるプロンプト）に変換するエージェントスキルです。

主な用途：

- 長文コンテンツのビジュアル要約（ブログ、スライド、SNS投稿など）
- ミニマルな記事カバー：タイトル + サブタイトル + 抽象的なモチーフ
- ワークショップやプレゼンテーション用のグラフィック
- ビジネスフレームワークと戦略マップ
- ベトナム語および英語の出力（厳密な発音区別符号の処理）

## 動作の仕組み

コンテンツを貼り付けて依頼するだけで、スキルが以下の処理を実行します。

1. **抽出 (Distill)**: 長文コンテンツを1つのコアメッセージと、スタイルに合った正確なラベルに絞り込みます（事実の捏造は行いません）。
2. **スタイルの選択**: 以下の8つのスタイルから最適なものを選択します（または指定されたスタイルを使用します）。
3. **プロンプトの作成**: スタイルの機械読み取り可能な仕様（正確なカラーパレット、レイアウト、ネガティブプロンプトのリスト）に基づいて画像を生成します。
4. **文字の検証**: ベトナム語のアクセントマークを含め、描画されたテキストを検証し、誤りがある場合は修正して再生成します。

また、プロンプトのみを要求し、任意の画像生成ツールに自分で貼り付けることも可能です。

## どのスタイルを選べば良いですか？

- **ブログ・記事のカバー（タイトル＋サブタイトルのみ）？** → `WEC`
- **Before/After、マニュアル vs AIの対比？** → `ACD`
- **引用や単一のインサイト？** → `SBS`
- **教訓やヒントのリスト？** → `SB`
- **ステップ・バイ・ステップのワークフロー / SOP？** → `FBW`
- **教育用のチートシート / 複数のコンセプトカード？** → `EIS`
- **ビジネスフレームワーク / システムマップ？** → `BLD`
- **ディープダイブ知識マップ？** → `VTK`

| コード | スタイル | 最適な用途 |
| --- | --- | --- |
| ACD | AI Contrast Drama (AIコントラスト・ドラマ) | フック、カバー、Before/After、手動 vs AI |
| WEC | Watercolor Editorial Cover (水彩風エディトリアルカバー) | 落ち着いたカバー、イベント要約、プレミアムバナー |
| SBS | Sketchnote Blue Story (スケッチノート・ブルー・ストーリー) | 1つのインサイト、引用、振り返りの教訓 |
| SB | Sketchnote Blue (スケッチノート・ブルー) | 複数の教訓、要約、アイデアリスト |
| FBW | FlowBot Watercolor (フローボット水彩風) | ワークフロー、SOP、自動化フロー |
| EIS | Educational Infographic Sketchnote (教育用インフォグラフィック) | チートシート、概念説明、教育用ポスター |
| BLD | Business Line Diagram (ビジネスライン図) | フレームワーク、システム、アーキテクチャマップ |
| VTK | Visual Thinking Knowledge (ビジュアルシンキング知識) | 深い分析と知識マップ |

自分で選ぶ必要はありません。スキルが最適なものを自動的に選択します。

## インストール

インストール可能なスキルファイルは `skill/visual-concept-designer` にあり、標準的なエージェントスキルフォーマット（YAMLフロントマター付きの `SKILL.md`）に従っているため、同フォーマットをサポートするあらゆるランタイムで動作します。

**Codex** (Windows PowerShell):

```powershell
Copy-Item -Recurse .\skill\visual-concept-designer $HOME\.agents\skills\visual-concept-designer
```

**Claude Code:**

```powershell
Copy-Item -Recurse .\skill\visual-concept-designer $HOME\.claude\skills\visual-concept-designer
```

**その他のエージェント (Gemini CLIなど):** `skill/visual-concept-designer` を使用しているエージェントのスキルディレクトリにコピーしてください。

インストール後にエージェントを再起動します。検証するには、エージェントに「`Use visual-concept-designer to create a sketchnote for: "Tools amplify the workflow you already have."`」と尋ねてください。

画像バックエンド：最初に GPT Image 2 を試行し、フォールバックとして Gemini Nano Banana 2 を使用します。エージェントが画像を生成できない場合、コピー可能なプロンプトまたは生のSVGコードを返します。詳細は `docs/installation.md` を参照してください。

## クイックスタート

画像を生成する：

```text
Use visual-concept-designer to create an illustration for this business framework: ...
```

ベトナム語のブログカバー（タイトルとサブタイトルをコピーして置き換える）：

```text
Use visual-concept-designer to create a minimal cover for my blog post.
Title: 7 điểm chính từ buổi Cafe Talk Online
Subtitle: Ngày 28/05/2026
```

プロンプトのみ（コピーしてChatGPTや他の画像生成ツールに貼り付ける）：

```text
Use visual-concept-designer and return only the image prompt for this article: ...
```

記事一式のビジュアル（カバー + 各セクションに1つのイラスト）：

```text
Use visual-concept-designer to create a cover plus one illustration per section for this article: ...
```

その他のパターン：`docs/usage.md`。サンプル入力：`examples/input/`。サンプルプロンプト：`examples/prompts/`。

## サポート & 寄付

このプロジェクトが役に立った場合は、活動を支援するか、コーヒーを一杯おごっていただけると幸いです：

- **Ko-fi**: [Ko-fiで支援する](https://ko-fi.com/harry_ai)
- **PayPal**: [PayPalで寄付する](https://paypal.me/nganhtuan)

サポートと開発への貢献：
- 表示の不具合（ベトナム語のアクセント、レイアウト、スタイル） → `docs/troubleshooting.md`
- 質問またはバグ → GitHubのIssueを作成してください
- スタイルを追加したい場合 → `docs/authoring-new-styles.md` および `CONTRIBUTING.md`

## リポジトリのステータス

アクティブに開発中。各リリースは構造チェックと評価基準によって検証されます。`docs/release-process.md` および `CHANGELOG.md` を参照してください。

## ライセンス

コードおよびドキュメントはMITライセンスのもとで提供されています。テンプレートアセットはAIによって生成され、`ASSET_LICENSE.md` が適用されます。
