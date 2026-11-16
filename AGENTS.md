# AGENTS.md — NurseLearn 外科護理知識教學平台

## 專案目標與使用者
NurseLearn 是一個以繁體中文呈現的外科護理學習網站，供新進護理師、實習學生與臨床護理人員複習基礎照護知識。此專案採用純 HTML、CSS、JavaScript 與 JSON，不使用後端、資料庫、API 金鑰或付費服務，可直接部署 GitHub Pages。

## AI 每次開始工作時
1. 先閱讀本檔案、`README.md`、`data/topics.json`，以及會受到影響的程式碼。
2. 先確認使用者要新增主題、修改主題、修正介面或調整規則；最小化更動範圍。
3. 禁止虛構來源或臨床標準；若缺少可靠依據，使用「待查證」標記，請人員審核後才作為正式教材。
4. 每次完成工作後，列出修改檔案、驗收結果及仍待人工確認之處。

## 成品與技術
- `index.html`：教學主題列表、搜尋及分類篩選。
- `pages/topic.html?slug=<slug>`：共用教學內容頁範本。
- `data/topics.json`：所有主題之唯一資料來源。
- `css/style.css`：所有頁面共用設計。
- `js/main.js`：首頁載入及互動。
- `js/topic.js`：主題頁內容渲染。
- `README.md`：使用說明、發布方式與驗收流程。
- `AGENTS.md`：專案工作規則。
- `assets/`：未來可放置經授權的圖片。
- 網站使用相對路徑，以相容 GitHub Pages 專案子路徑。

## 視覺與體驗規範
- 繁體中文（`zh-Hant`），不可自動轉為簡體。
- 粉藍、白、淺灰的乾淨卡片式風格；使用系統字體，字級清楚。
- 響應式排版，手機及桌面皆可使用。
- 導覽、顏色、卡片及按鈕共用 `css/style.css`，不得為新主題重複建立另一套樣式。
- 使用語意化 HTML；按鈕可鍵盤操作，對比合理。

## 教學主題資料結構
`data/topics.json` 是 JSON 陣列。每個物件至少包含：
- `slug`：唯一識別碼，英文小寫加連字號，例如 `postoperative-pain`。
- `title`：繁體中文標題。
- `category`：分類，例如「管路照護」「病人安全」「術後照護」。
- `summary`：簡短介紹。
- `objectives`：字串陣列，學習目標。
- `sections`：陣列，每項包含 `heading` 及 `items`（字串陣列），依序描述基礎知識、照護重點、注意事項。
- `questions`：字串陣列，自我檢核問題。
- `references`：字串陣列；若尚未核對文獻請使用「待查證：...」，不可捏造文獻。
- `reviewStatus`：`示範內容・待臨床審閱` 或 `已審閱`；只有人工確認後可改為 `已審閱`。

## 新增主題標準作業程序
1. 讀取現有 JSON，檢查 `slug` 是否重複。
2. 依上述完整 schema 建立主題，內容清晰、可教學、可查證。
3. 只新增 `data/topics.json` 中一筆主題；除非需新功能，不要複製 HTML 或修改 JS。
4. 首頁由程式自動列出新主題，主題頁使用共用範本 `pages/topic.html`。
5. 檢查主題卡、分類、搜尋、頁面連結、回首頁、手機版及 console 錯誤。
6. 更新 README 的主題數量或紀錄（如有必要），回報變更與待確認資訊。

## 修改規則與限制
- 不刪除其他主題、不任意變更現有 `slug`（會破壞既有連結）。
- 不能上傳病人個資、內部機密、未授權院內教材、帳號密碼或 API 金鑰。
- 不得將教育教材寫成對特定患者的醫囑；不得宣稱網站可以取代院內 SOP、醫囑或專業判斷。
- 臨床內容有分歧時標示需依院內制度與最新指引核對，不可自行補造劑量或療程。
- 修改 JS/CSS 須確認所有現有頁面未被破壞。

## 完成定義（驗收）
- `data/topics.json` 可被正確解析，每筆 `slug` 唯一且必要欄位齊全。
- 首頁可列出所有主題；文字搜尋與分類篩選正常。
- 每個主題可開啟共用教學頁；缺少主題時有清楚提示。
- 各頁無水平溢出，手機和桌面易讀，使用繁體中文。
- 網站在 GitHub Pages（HTTPS）公開後可用直接網址瀏覽。
- 主題內容的事實與來源已標示審核狀態，無病人資料。

<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#eaf5fb"><title>NurseLearn｜外科護理知識教學平台</title><link rel="stylesheet" href="css/style.css"></head><body><header class="nav"><a class="brand" href="index.html"><span class="brand-icon">✚</span> NurseLearn</a><span class="nav-label">外科護理知識教學平台</span></header><main class="container"><section class="hero"><div class="eyebrow">NURSING EDUCATION · LEARNING HUB</div><h1>讓臨床學習<br><em>更清楚，也更有系統。</em></h1><p>整理常見外科護理知識、照護重點與自我檢核問題，提供新進護理人員與學習者使用的示範教學平台。</p><a class="cta" href="#topics">探索教學主題 <span aria-hidden="true">↗</span></a></section><section id="topics" class="learning"><div class="section-heading"><div><div class="eyebrow">EXPLORE LESSONS</div><h2>護理知識主題</h2><p>選擇主題，循序複習護理觀念與重要提醒。</p></div><span id="topicCount" class="count">讀取中…</span></div><div class="tools"><label class="search-box"><span aria-hidden="true">⌕</span><input id="search" type="search" placeholder="搜尋主題或關鍵字" aria-label="搜尋教學主題"></label><select id="category" aria-label="篩選教學分類"><option value="">所有分類</option></select></div><div id="cards" class="cards" aria-live="polite"></div></section><section class="how"><div class="eyebrow">LEARN · REVIEW · GROW</div><h2>簡單三步驟，建立自己的學習節奏</h2><div class="steps"><div><b>01</b><h3>選擇教學主題</h3><p>從日常照護出發，找到想複習的內容。</p></div><div><b>02</b><h3>閱讀重點整理</h3><p>依學習目標、照護重點與注意事項閱讀。</p></div><div><b>03</b><h3>自我檢核</h3><p>用開放式問題回想重要原則。</p></div></div></section><p class="notice">教學聲明：本站目前為課程作業示範內容，尚未完成臨床專家審閱，不可取代醫囑、院內標準作業程序或專業判斷。</p></main><footer>© NurseLearn · 學習網站示範專案 · <a href="AGENTS.md">AI 開發規則</a></footer><script src="js/main.js" defer></script></body></html>

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
