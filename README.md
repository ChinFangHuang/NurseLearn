# NurseLearn｜外科護理知識教學平台

這是生成式 AI 課程中「建立自己的 AGENTS.md」作業成果。使用純 HTML、CSS、JavaScript 及 JSON 建立可擴充的護理知識學習網站。

## 目前內容
- 首頁：主題卡片、全文關鍵字搜尋、分類篩選
- 共用教材頁：學習目標、基礎概念、照護重點、注意事項、自我檢核及參考資料
- 三篇示範教材：胸管與水封瓶照護、輸血安全與評估、給藥安全與醫囑核對
- `AGENTS.md`：規定 AI 如何新增教材、命名、驗收與避免破壞既有功能

## 本機預覽
因網站透過 `fetch` 讀取 JSON，**不要直接雙擊 HTML 使用 `file://` 開啟**。
在專案根目錄執行：

```bash
python -m http.server 8000
```

再以瀏覽器開啟 `http://localhost:8000/`。

## GitHub Pages 部署
1. 在 GitHub 新增公開 Repository，例如 `nurselearn`。
2. 將本專案的 **所有檔案與資料夾** 上傳到 Repository 根目錄，確認 `AGENTS.md` 與 `index.html` 都在根目錄。
3. 到 `Settings → Pages → Build and deployment`，選 `Deploy from a branch`，`main` / `(root)`，按 `Save`。
4. 發布後網站網址通常為 `https://<帳號>.github.io/<repository>/`；請以 GitHub Pages 畫面顯示的實際網址為準。
5. 實際測試首頁、搜尋、分類、三篇教材網址及手機版。

## AI 重複使用測試
把整個專案交給可編輯檔案的 AI，輸入：

> 請先閱讀 AGENTS.md，依規則新增「術後疼痛照護」教學主題，更新資料並檢查首頁與教材頁正常顯示。不得修改現有教材的 slug 與既有版面風格。

若新增的 JSON 主題可自動出現在首頁，且可點入共用範本閱讀，代表規則具備延伸性。

## 教學內容聲明
目前內容屬示範性摘要，標為「示範內容・待臨床審閱」，文獻和院內規範仍需由專業人員確認；不可直接作為正式臨床照護指引。不要上傳病人資料、機密 SOP 或未授權素材。
