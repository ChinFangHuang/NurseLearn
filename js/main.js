const cards = document.querySelector('#cards');
const search = document.querySelector('#search');
const category = document.querySelector('#category');
const topicCount = document.querySelector('#topicCount');
let topics = [];
const text = (value) => String(value ?? '');
const iconFor = (name) => ({'管路照護':'♧','病人安全':'✚','術後照護':'♡'}[name] || '✦');
function render() {
  const query = search.value.trim().toLocaleLowerCase('zh-Hant');
  const selected = category.value;
  const filtered = topics.filter(t => (!selected || t.category === selected) && [t.title,t.summary,t.category].join(' ').toLocaleLowerCase('zh-Hant').includes(query));
  cards.replaceChildren();
  topicCount.textContent = `共 ${filtered.length} 個主題`;
  if (!filtered.length) { const p=document.createElement('p');p.className='empty';p.textContent='找不到符合的主題，試試其他關鍵字。';cards.append(p);return; }
  filtered.forEach((t,i) => {
    const link=document.createElement('a');link.className='lesson-card';link.href=`pages/topic.html?slug=${encodeURIComponent(t.slug)}`;
    const upper=document.createElement('div');upper.className='card-top';
    const symbol=document.createElement('span');symbol.className='lesson-icon';symbol.textContent=iconFor(t.category);
    const index=document.createElement('span');index.className='index';index.textContent=`LESSON ${String(i+1).padStart(2,'0')}`;upper.append(symbol,index);
    const cat=document.createElement('span');cat.className='tag';cat.textContent=t.category;
    const title=document.createElement('h3');title.textContent=t.title;
    const summary=document.createElement('p');summary.textContent=t.summary;
    const more=document.createElement('span');more.className='more';more.textContent='閱讀教材 ↗';
    link.append(upper,cat,title,summary,more);cards.append(link);
  });
}
fetch('data/topics.json').then(r=>{if(!r.ok) throw new Error('載入失敗');return r.json()}).then(data=>{
  if(!Array.isArray(data)) throw new Error('資料格式不正確');topics=data;
  [...new Set(topics.map(t=>t.category))].sort().forEach(c=>{const option=document.createElement('option');option.value=c;option.textContent=c;category.append(option)});
  render();search.addEventListener('input',render);category.addEventListener('change',render);
}).catch(()=>{cards.textContent='無法載入教學主題。請透過 GitHub Pages 或本機伺服器開啟網站。';topicCount.textContent='載入失敗';});
