const issueTitle = document.querySelector('input#issue_title');
const issueBody = document.querySelector('textarea#issue_body');

const titleText = '【】';
const bodyText = `## やりたいこと

### 対象ユーザ(表示条件)

### 対象API

### 対象ページ

## なぜやるのか

## 完了の状態

`;

const setButton = document.createElement('button');

setButton.addEventListener('click', function(event) {
  event.preventDefault();
  issueTitle.value = titleText;
  issueBody.value = bodyText;
});
setButton.textContent = "TP"
setButton.classList.add("btn", "btn-sm", "ml-1")

const toolBar = document.querySelector('markdown-toolbar.Details')

if (toolBar) {
  toolBar.prepend(setButton)
}
