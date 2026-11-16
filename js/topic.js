const container = document.querySelector('#topicContent');
const slug = new URLSearchParams(location.search).get('slug');
const el=(tag,cls,txt)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(txt!==undefined)node.textContent=txt;return node;};
function list(items){const ul=el('ul','topic-list');items.forEach(item=>ul.append(el('li','',item)));return ul;}
function renderTopic(t){
  document.title=`${t.title}｜NurseLearn`;container.replaceChildren();
  const hero=el('div','topic-hero');hero.append(el('span','tag',t.category),el('h1','',t.title),el('p','',t.summary),el('span','status',t.reviewStatus));container.append(hero);
  const objectives=el('section','detail-panel');objectives.append(el('h2','','學習目標'),list(t.objectives));container.append(objectives);
  for(const section of t.sections){const panel=el('section','detail-panel');panel.append(el('h2','',section.heading),list(section.items));container.append(panel);}
  const questions=el('section','detail-panel');questions.append(el('h2','','自我檢核'),el('p','muted','請先思考，再與臨床教師或正式教材核對。'));questions.append(list(t.questions));container.append(questions);
  const refs=el('section','detail-panel');refs.append(el('h2','','參考資料與審閱狀態'),list(t.references));refs.append(el('p','muted','本內容為教學架構示範，相關院內規範與來源仍需人工確認。'));container.append(refs);
  container.append(el('p','notice','安全提醒：請依最新醫囑、院內標準作業程序與專業判斷執行臨床照護。'));
}
if(!slug){container.textContent='未指定教學主題。請從首頁選擇教材。';}
else fetch('../data/topics.json').then(r=>{if(!r.ok)throw new Error('載入失敗');return r.json()}).then(data=>{const t=data.find(x=>x.slug===slug);if(!t){container.textContent='找不到這篇教材，請返回首頁重新選擇。';return;}renderTopic(t)}).catch(()=>{container.textContent='教學內容載入失敗。請確認網站已部署至 GitHub Pages 或使用本機伺服器開啟。';});
