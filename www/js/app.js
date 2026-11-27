/* ==========================================================================
   LOTR Battle Company Roster - SCRIPT UNICO (v82)
   Consolida in un solo blocco il core (dati + logica) e le 36 patch v6-v81,
   mantenendo lo stesso ordine di esecuzione dell'originale.
   Ogni patch gira in un proprio try/catch: un errore in una patch non
   blocca le successive (come accadeva con i blocchi separati).
   ========================================================================== */

document.addEventListener('toggle',e=>{const d=e.target;if(d.dataset&&d.dataset.k)OP[d.dataset.k]=d.open},true);
document.addEventListener('input',e=>{const i=e.target.id;if(i==='c1'||i==='c2'){S[i]=e.target.value;delete S.cAuto;applyTheme();save()}
 if(i==='bgo'||i==='bgb'){S[i]=+e.target.value;e.target.style.setProperty('--p',i==='bgo'?S[i]:Math.round(S[i]/12*100));applyBg();const l=document.getElementById(i==='bgo'?'bgov':'bgbv');if(l)l.textContent=S[i]+(i==='bgo'?'%':'px');save()}});
document.addEventListener('change',e=>{const el=e.target,p=el.dataset.p;
 if(el.id==='bgt'){S.bgt=el.checked;render();return}
 if(el.dataset.bx){const[k,i,j]=el.dataset.bx.split('.'),u=(k==='h'?S.h:S.t)[+i];u.bx=u.bx||[false,false,false,false];u.bx[+j]=el.checked;const y=scrollY;render();scrollTo(0,y);return}
 if(el.id==='imp'){const f=el.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const n=importText(String(r.result));mo=false;render();toast(n>0?`Importate ${n} armat${n>1?'e':'a'}`:'File non valido: nessuna armata importata')};r.onerror=()=>toast('Lettura del file non riuscita');r.readAsText(f);return}
 if(el.id==='asel'){DB.cur=el.value;S=army().data;render();scrollTo(0,0);return}
 if(el.id==='aname'){army().name=el.value.trim()||'Senza nome';render();return}if(el.dataset.img){const[a,i]=el.dataset.img.split('.'),f=el.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,(a==='bg'?1280:480)/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*s);c.height=Math.round(im.height*s);c.getContext('2d').drawImage(im,0,0,c.width,c.height);const u=c.toDataURL('image/jpeg',a==='bg'?.78:.82);if(a==='logo')S.logo=u;else if(a==='bg'){S.bg=u;if(S.bgo==null)S.bgo=40;if(S.bgb==null)S.bgb=0}else if(a==='ex')exs(i).img=u;else S[a][i].img=u;render()};im.src=r.result};r.readAsDataURL(f);return}if(!p)return;const v=el.dataset.t==='c'?el.checked:el.dataset.t==='n'?(+el.value||0):el.value;
 const k=p.split('.');let o=S;for(let i=0;i<k.length-1;i++)o=o[k[i]];o[k[k.length-1]]=v;
 if(p==='h.'+k[1]+'.path'&&k[2]==='path'){S.h[k[1]].g.sp=Array(5).fill('');S.h[k[1]].g.spl=Array(6).fill('')}
 if(p==='bc')raceTheme(S);const y=scrollY;render();scrollTo(0,y)});
document.addEventListener('click',e=>{const lvb=e.target.closest&&e.target.closest('[data-lv]');if(lvb){const id=lvb.dataset.lv,u=(id[0]==='h'?S.h:S.t)[+id.slice(2)];if(u&&u.lvUp){u.lvUp=false;const y=scrollY;render();scrollTo(0,y)}return}
 const exb=e.target.closest&&e.target.closest('[data-ex]');if(exb){const k=exb.dataset.ex;BX.has(k)?BX.delete(k):BX.add(k);const op=BX.has(k),y=scrollY;render();const tg=document.querySelector(op?`[data-exw="${k}"]`:`[data-cmp="${k}"]`);if(tg)tg.scrollIntoView({block:'start',behavior:'smooth'});else scrollTo(0,y);return}
 const vwb=e.target.closest&&e.target.closest('[data-vw]');if(vwb){S.bvc=vwb.dataset.vw==='1';const y=scrollY;render();scrollTo(0,y);return}
 const kb=e.target.closest&&e.target.closest('[data-kl]');if(kb){const[k,i,d]=kb.dataset.kl.split('.'),u=(k==='h'?S.h:S.t)[+i];u.kl=Math.max(0,(+u.kl||0)+(+d));const y=scrollY;render();scrollTo(0,y);return}
 if(e.target.id==='endb'){confirmBox('Attenzione: i contatori saranno ripristinati e 1xp sarà assegnato a ogni partecipante. Gli xp aggiuntivi saranno calcolati e assegnati in base alle caselle fleggate. Confermare il punteggio di '+((S.sc||[0,0])[0]||0)+' - '+((S.sc||[0,0])[1]||0)+'?',function(){var part=S.h.concat(S.t).filter(function(u){return (u.model||u.name)&&!u.miss});if(!part.some(function(u){return u.bx&&u.bx[3]})){infoBox(["Attenzione scegliere l'MVP prima di concludere la battaglia"]);return}endBattle()});return}
 if(e.target.id==='afix'){if(pend!=='fix'){pend='fix';render();setTimeout(()=>{if(pend==='fix'){pend='';render()}},3000);return}pend='';const n=audit(S).map(i=>i.clear()).length;render();toast(`Rimosse ${n} voci non valide`);return}
 if(e.target.closest&&e.target.closest('#mbb')){mb=!mb;render();return}
 if(e.target.closest&&e.target.closest('#mcb')){mc=!mc;render();return}
 const inf=e.target.closest&&e.target.closest('[data-inf]');if(inf){S.infl=Math.max(0,(+S.infl||0)+(+inf.dataset.inf));const y=scrollY;render();scrollTo(0,y);return}
 const xb=e.target.closest&&e.target.closest('[data-xp]');if(xb){const[k,i,d]=xb.dataset.xp.split('.'),u=(k==='h'?S.h:S.t)[+i];u.xp=Math.max(0,(parseInt(u.xp)||0)+(+d));const y=scrollY;render();scrollTo(0,y);return}
 if(e.target.id==='tgo'){const m=S.tm=S.tm||{run:false,t0:0,acc:0};if(m.run){m.acc=tmNow();m.run=false}else{m.t0=Date.now();m.run=true}render();return}
 if(e.target.id==='trs'){const o=S.tm||{};S.tm={mode:o.mode,dur:o.dur,run:false,t0:0,acc:0,fired:false};render();return}
 const tm=e.target.closest&&e.target.closest('[data-tm]');if(tm){const[a,b]=tm.dataset.tm.split(':'),o=S.tm||{},dur=o.dur||3600000;
  if(a==='mode')S.tm={mode:b,dur,run:false,t0:0,acc:0,fired:false};
  else{const m=S.tm=Object.assign({mode:'down',run:false,t0:0,acc:0},o);m.dur=Math.min(43200000,Math.max(60000,/^[+-]/.test(b)?dur+(+b)*60000:(+b)*60000));if(tmNow()<m.dur)m.fired=false}
  render();return}
 if(e.target.id==='mbtn'){mo=!mo;render();return}
 if(mo&&!(e.target.closest&&e.target.closest('.mn'))){mo=false;render()}
 if(e.target.id==='bres'){S.h.concat(S.t).forEach(u=>{delete u.bt;u.kl=0;u.bx=[]});Object.values(S.ex||{}).forEach(x=>delete x.bt);render();return}
 const bt=e.target.closest&&e.target.closest('[data-bt]');if(bt){const[k,i,j,d]=bt.dataset.bt.split('.');let u;if(k==='x'){const ex=exFind(i);if(!ex)return;u=exs(i);u.model=ex.model;u.mfw=ex.mfw}else u=(k==='h'?S.h:S.t)[+i];u.bt=u.bt||[null,null,null,null];u.bt[+j]=Math.max(0,Math.min(mx(u,k,+j),cur(u,k,+j)+(+d)));const y=scrollY;render();scrollTo(0,y);return}
 if(e.target.id==='cr'){delete S.c1;delete S.c2;delete S.cAuto;raceTheme(S);render();return}
 const z=e.target.closest&&e.target.closest('[data-zoom]');if(z){const o=document.createElement('div');o.style.cssText='position:fixed;inset:0;background:#000d;z-index:99;display:flex;align-items:center;justify-content:center;padding:16px;cursor:zoom-out';o.innerHTML=`<img src="${z.src}" style="max-width:100%;max-height:100%;border-radius:8px">`;o.onclick=()=>o.remove();document.body.appendChild(o);return}
 const ac=e.target.closest('[data-act]');
 if(ac){const a=ac.dataset.act;if(a==='pdf'){mo=false;render();doPdf();return}
  if(a==='exp1'||a==='expall'){mo=false;render();doExport(a);return}
  if(a==='addh'||a==='addt'){a==='addh'?S.h.push(newH()):S.t.push(newT());render();return}if(a==='del'&&pend!=='del'){pend='del';render();setTimeout(()=>{pend='';render()},3000);return}pend='';mo=false;
  if(a==='new'||a==='dup'){const n={id:uid(),name:a==='new'?'Armata '+(DB.list.length+1):army().name+' (copia)',data:a==='new'?fresh():JSON.parse(JSON.stringify(S))};DB.list.push(n);DB.cur=n.id}
  if(a==='del'){if(DB.list.length>1){DB.list=DB.list.filter(x=>x.id!==DB.cur);DB.cur=DB.list[0].id}else army().data=fresh()}
  S=army().data;render();scrollTo(0,0);return}const rm=e.target.closest('[data-rm]');if(rm){const[a,i]=rm.dataset.rm.split('.');if(a==='logo')S.logo='';else if(a==='bg')S.bg='';else if(a==='ex')exs(i).img='';else S[a][i].img='';render();return}
 const pr=e.target.closest('[data-pro]');if(pr){const id=pr.dataset.pro;if(pend!=='p'+id){pend='p'+id;render();setTimeout(()=>{if(pend==='p'+id){pend='';render()}},3000);return}pend='';const i=+id.split('.')[1],x=S.t[i],cp=k=>{const v=x.g[k].filter(Boolean);while(v.length<HS[k][1])v.push('');return v};
  const h=Object.assign(newH(),{name:x.name,model:x.model,xp:x.xp,img:x.img||'',miss:!!x.miss,mfw:[1,1,1]});h.g=Object.assign(mk(HS),{bw:cp('bw'),aw:cp('aw'),eq:cp('eq'),inj:cp('inj')});
  let j=S.h.findIndex(emp);if(j<0){j=S.h.length;S.h.push(h)}else S.h[j]=h;S.t.splice(i,1);Object.keys(OP).forEach(k=>{if(k.startsWith('t.')||k.startsWith('h.'+j+'.'))delete OP[k]});render();return}
 const dl=e.target.closest('[data-del]');if(dl){const id=dl.dataset.del;if(pend!=='d'+id){pend='d'+id;render();setTimeout(()=>{if(pend==='d'+id){pend='';render()}},3000);return}pend='';const[a,i]=id.split('.');S[a].splice(+i,1);Object.keys(OP).forEach(k=>{if(k.startsWith(a+'.'))delete OP[k]});render();return}const t=e.target.closest('[data-tab]');if(t){tab=t.dataset.tab;render();scrollTo(0,0)}
 if(e.target.id==='rs'){if(pend!=='rs'){pend='rs';e.target.textContent='Conferma azzeramento?';setTimeout(()=>{pend='';render()},3000)}else{pend='';army().data=S=fresh();render()}}});
const tick=()=>{const m=S.tm;if(m&&m.run&&m.mode==='down'&&!m.fired&&tmNow()>=(m.dur||3600000)){m.fired=true;save();alarm()}
 const v=document.getElementById('tv');if(v&&m&&m.run){const w=tmView(),r=document.getElementById('rg'),l=document.getElementById('tlb');v.textContent=w.t;v.classList&&v.classList.toggle('ov',w.over);if(r&&r.style){r.style.strokeDashoffset=(CIR*(1-w.f)).toFixed(1);r.classList.toggle('ov',w.over)}if(l)l.textContent=w.l}};setInterval(tick,250);document.addEventListener('visibilitychange',tick);
render();if(aliasN){save();toast(`Aggiornate ${aliasN} voci rinominate nelle armate salvate`)}
;
/* ----- [CUSTOM-01] MFW-UI ----- */
function mfwStep(i,j,v){v=+v||0;var N=['Might','Will','Fate'][j];
return '<div class="mfwc"><div class="mfwh">'+N+'</div><div class="mfwrow"><button type="button" class="mfwb" data-mfw="'+i+'.'+j+'.-1">&#8722;</button><div class="mfwv"><b>'+v+'</b><span>/'+v+'</span></div><button type="button" class="mfwb" data-mfw="'+i+'.'+j+'.1">+</button></div></div>';}
