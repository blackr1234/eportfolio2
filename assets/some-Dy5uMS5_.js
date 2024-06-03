const n=`# 1 Markdown 簡介\r
\r
Markdown（\`.md\`）係一種純文字既檔案，對比起冇任何格式既純文字（\`.txt\`），Markdown 既格式標準畀我地用簡單符號去表達文字格式。\r
\r
GitHub 既 \`README.md\` 就係最佳例子。\r
\r
---\r
\r
# 2 寫法\r
\r
Markdown 既世界，任何兩個 components 之間都應該要隔至少一行。\r
\r
## 2.1 一般文字\r
\r
Code：\r
\r
\`\`\`markdown\r
呢一段係一般文字。呢一段係一般文字。呢一段係一般文字。\r
呢一段係一般文字。呢一段係一般文字。呢一段係一般文字。\r
呢一段係一般文字。呢一段係一般文字。呢一段係一般文字。\r
呢一段係一般文字。呢一段係一般文字。呢一段係一般文字。\r
呢一段係一般文字。呢一段係一般文字。呢一段係一般文字。\r
\r
開新段落要隔一行。開新段落要隔一行。開新段落要隔一行。\r
開新段落要隔一行。開新段落要隔一行。開新段落要隔一行。\r
開新段落要隔一行。開新段落要隔一行。開新段落要隔一行。\r
開新段落要隔一行。開新段落要隔一行。開新段落要隔一行。\r
開新段落要隔一行。開新段落要隔一行。開新段落要隔一行。\r
\`\`\`\r
\r
效果：\r
\r
呢一段係一般文字。呢一段係一般文字。呢一段係一般文字。\r
呢一段係一般文字。呢一段係一般文字。呢一段係一般文字。\r
呢一段係一般文字。呢一段係一般文字。呢一段係一般文字。\r
呢一段係一般文字。呢一段係一般文字。呢一段係一般文字。\r
呢一段係一般文字。呢一段係一般文字。呢一段係一般文字。\r
\r
開新段落要隔一行。開新段落要隔一行。開新段落要隔一行。\r
開新段落要隔一行。開新段落要隔一行。開新段落要隔一行。\r
開新段落要隔一行。開新段落要隔一行。開新段落要隔一行。\r
開新段落要隔一行。開新段落要隔一行。開新段落要隔一行。\r
開新段落要隔一行。開新段落要隔一行。開新段落要隔一行。\r
\r
---\r
\r
## 2.2 格式化文字\r
\r
Code：\r
\r
\`\`\`markdown\r
**粗體文字**\r
\r
_斜體文字_\r
\`\`\`\r
\r
效果：\r
\r
**粗體文字**\r
\r
_斜體文字_\r
\r
---\r
\r
## 2.3 標題\r
\r
Code：\r
\r
\`\`\`markdown\r
# 1 H1 標題\r
\r
## 1.1 H2 標題\r
\r
### 1.1.1 H3 標題\r
\r
#### 1.1.1.1 H4 標題\r
\`\`\`\r
\r
---\r
\r
## 2.4 分隔線\r
\r
Code：\r
\r
\`\`\`markdown\r
---\r
\`\`\`\r
\r
---\r
\r
## 2.5 Code\r
\r
Code：\r
\r
\`\`\`markdown\r
This \`code\` is inline.\r
\`\`\`\r
\r
\`\`\`\`markdown\r
\`\`\`js\r
console.log("This is a code block.");\r
\`\`\`\r
\`\`\`\`\r
\r
\`\`\`\`markdown\r
\`\`\`java\r
System.out.println("This is a code block.");\r
\`\`\`\r
\`\`\`\`\r
\r
註：可以指明用邊隻語言做 syntax highlighting。\r
\r
效果：\r
\r
This \`code\` is inline.\r
\r
\`\`\`js\r
console.log("This is a code block.");\r
\`\`\`\r
\r
\`\`\`java\r
System.out.println("This is a code block.");\r
\`\`\`\r
\r
---\r
\r
## 2.6 引用\r
\r
Code：\r
\r
\`\`\`markdown\r
> Someone said,\r
>\r
> （可以有空行）\r
> Something\r
\`\`\`\r
\r
效果：\r
\r
> Someone said,\r
>\r
> （可以有空行）\r
> Something\r
\r
---\r
\r
## 2.7 List\r
\r
Code：\r
\r
\`\`\`markdown\r
-   Bullet point 1\r
    -   Inner\r
-   [x] Checklist item 1 (checked)\r
-   [ ] Checklist item 2 (unchecked)\r
\`\`\`\r
\r
\`\`\`markdown\r
1. 第一點\r
1. 數字會自動加上去\r
1. 顯示出黎就係 1、2、3\r
\`\`\`\r
\r
效果：\r
\r
-   Bullet point 1\r
    -   Inner\r
-   [x] Checklist item 1 (checked)\r
-   [ ] Checklist item 2 (unchecked)\r
\r
1. 第一點\r
1. 數字會自動加上去\r
1. 顯示出黎就係 1、2、3\r
\r
---\r
\r
## 2.8 Table\r
\r
Code：\r
\r
\`\`\`markdown\r
| Table header - Column 1 | Table header - Column 2 |\r
| ----------------------- | ----------------------- |\r
| Record 1 - Column 1     | Record 1 - Column 2     |\r
| Record 2 - Column 1     | Record 2 - Column 2     |\r
\`\`\`\r
\r
效果：\r
\r
| Table header - Column 1 | Table header - Column 2 |\r
| ----------------------- | ----------------------- |\r
| Record 1 - Column 1     | Record 1 - Column 2     |\r
| Record 2 - Column 1     | Record 2 - Column 2     |\r
\r
---\r
\r
## 2.9 URL\r
\r
Code：\r
\r
\`\`\`markdown\r
[My e-Portfolio](https://blackr1234.github.io/eportfolio/#/)\r
\`\`\`\r
\r
效果：\r
\r
[My e-Portfolio](https://blackr1234.github.io/eportfolio/#/)\r
\r
---\r
\r
## 2.10 圖片\r
\r
Code：\r
\r
\`\`\`markdown\r
![](https://blackr1234.github.io/eportfolio/blog/2021-09/markdown-basics/thumbnail.svg)\r
\`\`\`\r
\r
效果：\r
\r
![](/blog/2021-09/markdown-basics/thumbnail.svg)\r
\r
---\r
\r
## 2.11 HTML\r
\r
部分 Markdown parser 支援 render HTML tags，甚或 CSS（\`<style>\`）。\r
\r
---\r
\r
# 3 推薦 IDE\r
\r
要將 Markdown 檔裡面既格式顯示出黎，就需要可以睇得明 Markdown syntax 既檢視工具：\r
\r
-   Visual Studio Code 支援 Markdown 即時 preview\r
    -   可以裝埋 Prettier 去自動 format \`.md\` 檔既內容\r
-   Chrome 可以安裝 Markdown Viewer\r
    -   設定 COMPILER 用 REMARK，開啟 gfm 模組\r
    -   設定 CONTENT 開啟 autoreload、toc\r
`;export{n as default};
