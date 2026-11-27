const delb=(id,u)=>`<div class="dr"><label class="skip"><input type="checkbox" data-p="${id}.miss" data-t="c"${u.miss?' checked':''}> Salta prossima partita</label><div>${id[0]==='t'?`<button class="btn" data-pro="${id}">${pend==='p'+id?'Conferma promozione?':'⭐ Promuovi a eroe'}</button> `:''}<button class="btn" data-del="${id}">${pend==='d'+id?'Conferma rimozione?':'✕ Rimuovi'}</button></div></div>`;
const xpBar=(id,xp)=>{const n=Math.max(0,parseInt(xp)||0),lv=Math.floor(n/5)+1,p=n%5,uu=(id[0]==='h'?S.h:S.t)[+id.slice(2)],bl=uu&&uu.lvUp;return`<div class="xpw"><div class="lvl${bl?' blink':''}" data-lv="${id}" title="${bl?'Tocca per confermare il nuovo livello':'Livello'}"><small>LV</small><b>${lv}</b></div><div class="xpb"><i style="width:${p*20}%"></i><span>${n} XP · ${p}/5</span></div><div class="xpc"><button class="btn" data-xp="${id}.-1" aria-label="Meno XP">−</button><button class="btn" data-xp="${id}.1" aria-label="Più XP">+</button></div></div>`};
const pic=(b,im,big)=>`<div class="pic${big?' big':''}">${im?`<img src="${im}" alt="" data-zoom="1">`:'<div class="ph">Nessuna immagine</div>'}<div><label class="btn">📷 ${im?'Cambia':'Carica'}<input type="file" accept="image/*" data-img="${b}" hidden></label>${im?` <button class="btn" data-rm="${b}">✕</button>`:''}</div></div>`;
const bc=()=>D.bcs.find(b=>b.id===S.bc)||{wargear:[],comp:[],models:[],name:''};
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const sel=(p,opts,v,ph='—')=>{opts=opts.slice();if(v&&!opts.includes(v))opts.unshift(v);return`<select data-p="${p}"><option value="">${ph}</option>${opts.map(o=>`<option value="${esc(o)}"${o===v?' selected':''}>${esc(o)}</option>`).join('')}</select>`};
const inp=(p,v,t='text',x='')=>`<input data-p="${p}" data-t="${t}" type="${t==='n'?'number':'text'}" value="${esc(v)}" ${x}>`;
function slots(base,g,S_,opt,open){let o='';for(const k in S_){const list=opt[k];if(!list)continue;
 o+=`<details data-k="${base}.${k}"${(base+'.'+k in OP?OP[base+'.'+k]:open.includes(k))?' open':''}><summary>${S_[k][0]} (${g[k].filter(Boolean).length}/${S_[k][1]})</summary>${g[k].map((v,i)=>sel(`${base}.g.${k}.${i}`,list,v)).join('')}</details>${g[k].some(Boolean)?`<div class="chips">${g[k].filter(Boolean).map(v=>`<span>${esc(v)}</span>`).join('')}</div>`:''}`}return o}
function heroCard(h,i){const r=hero(h),b=bc(),path=D.paths[h.path]||[];
 const opt={bw:b.wargear,aw:b.wargear.filter(v=>!(b.awex||[]).includes(v)).concat(b.awadd||[]),eq:Object.keys(D.eq.heroHi),mn:D.minor,sp:path,cu:b.comp,spl:h.path==='Channeling'?D.spells:null,ha:D.heroic,inj:D.injuries};
 return`<div class="card${h.miss?' miss':''}"><h3><span>Eroe ${i+1}</span><span>${r.c.rating} pt</span></h3>
 ${pic('h.'+i,h.img,1)}${inp(`h.${i}.name`,h.name,'text','placeholder="Nome"')}
 <div class="two"><div><label>Profilo base (${h.model?r.c.pr+' pt':'—'})</label>${sel(`h.${i}.model`,b.models,h.model)}</div><div><label>Rank</label>${sel(`h.${i}.rank`,['Leader','Sargente'],h.rank)}</div></div>
 <label>Path</label>${sel(`h.${i}.path`,Object.keys(D.paths),h.path)}
 <div class="st" style="margin-top:6px">${LBL.map(l=>`<b>${l}</b>`).join('')}${h.mod.map((m,j)=>inp(`h.${i}.mod.${j}`,m,'n','step=1')).join('')}${r.tot.map(x=>`<span class="t tt">${x}</span>`).join('')}</div><div style="font-size:10px;color:var(--mu);margin-top:3px">Riga editabile: modificatori · Riga evidenziata: totali</div>
 <label>Might / Will / Fate</label><div class="mfw">${h.mfw.map((m,j)=>mfwStep(i,j,m)).join('')}</div>
 ${slots(`h.${i}`,h.g,HS,opt,[])}
 ${xpBar('h.'+i,h.xp)}${window.hinjHTML?hinjHTML(h):''}${delb('h.'+i,h)}</div>`}
function troopCard(t,i){const r=troop(t),b=bc();
 const opt={bw:b.wargear,aw:b.wargear.filter(v=>!(b.awex||[]).includes(v)).concat(b.awadd||[]),eq:Object.keys(D.eq.troop),inj:D.injuries};
 return`<div class="card${t.miss?' miss':''}"><h3><span>Truppa ${i+1}</span><span>${r.c.rating} pt</span></h3>
 ${pic('t.'+i,t.img,1)}${inp(`t.${i}.name`,t.name,'text','placeholder="Nome"')}
 <label>Profilo base (${t.model?r.c.pr+' pt':'—'})</label>${sel(`t.${i}.model`,b.models,t.model)}
 <div class="st" style="margin-top:6px">${LBL.map(l=>`<b>${l}</b>`).join('')}${r.p.slice(0,9).map((x,j)=>`<span class="t">${j===4?r.d:x}</span>`).join('')}</div>
 ${slots(`t.${i}`,t.g,TS,opt,[])}
 ${xpBar('t.'+i,t.xp)}${delb('t.'+i,t)}</div>`}
