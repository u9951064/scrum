# The F2E 4th Week3 Scrum 新手村
宇宙充滿未知而令人著迷，如同新手們進入敏捷世界，運用好奇心探索這一切並遨遊於敏捷宇宙中。 在每個知識點星球上，將由 4 位 Scrum 角色外星人，引導新手闖關並探索 Scrum。 期待帶領新手們，透過一系列的遊歷，能更了解Scrum 精神，化身為敏捷宇宙的一份子！
## Authors
- Designer: Joyce
- Developer: Josh

## 開發環境/使用技術/使用工具
- nvm: Node.js 版本管理工具
- vite: 專案建立工具
- vue3: 前端開發框架
- vue-router: Vue 路由管理
- vuex: Vue 儲存器
- TypeScript: 開發語言
- vuedraggable (draggable.js): 拖拉控制套件
- Web APIs (Share API, Clipboard API)

## 第三方服務
- Youtube 音樂播放

## 目錄結構
- index.html 入口檔案
- src 原始碼
  - main.ts 程式入口
  - App.vue 程式起始樣板
  - assets 圖檔/CSS 等檔案目錄
  - view 畫面檔案目錄
  - store 儲存器檔案目錄
  - router 路由設定檔案目錄
  - components 共用元件檔案目錄
  - constants 常數設定檔案目錄
- public 靜態檔案
- dist 編譯目標目錄

## 安裝執行說明
- for developing:
  ```bash
  nvm use && npm ci && npm run dev
  ```
- for build static files
  ```bash
  nvm use && npm ci && npm run build
  ```
- for publish to github page
  ```
  nvm use && sh deploy.sh
  ```

## 活動相關網頁
- [The F2E Home Page](https://2022.thef2e.com/)
- [鈦坦 Scrum 流程參考文件](https://www.titansoft.com/tw/agile_skills/scrum)
- [Jira](https://www.atlassian.com/software/jira)
- [confluence](https://www.atlassian.com/wac/software/confluence)
