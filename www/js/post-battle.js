/* ----- [37/37] RATING-ADV v90 (vantaggi da differenza di rating) ----- */
try{
(function(){
var KITS={
"Healer's Kit":[["Wondrous Cram",5],["Healing Herbs (Hero Only)",2]],
"Explorer's Kit":[["Scroll of Hidden Paths (Hero Only)",1],["Mountain Boots",3],["Woodland Belt",3],["Map (Hero Only)",1]],
"Scholar's Kit":[["Ring of Warding",1],["Badge of Courage",1],["Lucky Talisman (Hero Only)",1],["Seeing Stone (Unique, Hero Only)",1]],
"Hunter's Kit":[["Envenom Weapon (Evil Only)",5],["Trophy Pelt",1],["Concealing Cloak",1]],
"Raider's Kit":[["Torching Brand",5],["Climbing ropes",5],["Dwarven Brew",1]]};
var OPTS=[
{k:'infl',min:15,t:'Influenza',d:'+2 punti influenza in caso di vittoria, +1 in caso di pareggio o sconfitta.'},
{k:'rr',min:15,t:'Reroll',d:'Due rilanci, ciascuno utilizzabile in qualsiasi momento per rilanciare un singolo dado o nei tiri dopo la partita.'},
{k:'xp',min:30,t:'Esperienza',d:'+2 XP aggiuntivi per ogni modello in caso di vittoria, +1 XP per tutti i modelli in caso di sconfitta o pareggio.'},
{k:'tk',min:30,t:'Tool kit',d:'Scegli uno dei 5 kit di equipaggiamento.'},
{k:'amb',min:30,t:'Ambush!',d:'Scegli tu lo scenario.'},
{k:'wd',min:70,t:'Wanderers',d:'Recluti temporaneamente un mercenario per la partita.'}];
var short=function(n){return String(n).replace(/\s*\(.*\)\s*$/,'')};
var kitTxt=function(n){return KITS[n].map(function(x){return x[1]+'× '+short(x[0])}).join(' · ')};
var lastOpp='';
var css=document.createElement('style');
css.textContent='#advMdl .mb{max-height:88vh;overflow:auto}#advMdl h3{margin:0 0 8px}#advMdl .advo{display:block;width:100%;text-align:left;margin:6px 0;padding:10px 12px;white-space:normal}#advMdl .advo small{display:block;font-weight:500;opacity:.78;margin-top:3px;line-height:1.3}#advMdl .advwho{padding:8px 10px;border-radius:10px;margin:8px 0;font-size:14px}#advMdl .advwho.me{background:rgba(18,184,134,.16)}#advMdl .advwho.op{background:rgba(224,49,49,.14)}#advMdl .advrow{display:flex;gap:8px;margin-top:12px}#advMdl .advrow .btn{flex:1;margin:0}#tkPanel{position:sticky;top:6px;z-index:6;margin-bottom:10px}#tkPanel .tkc{display:inline-block;margin:3px 6px 3px 0;padding:4px 9px;border-radius:999px;border:1px solid var(--bd);font-size:13px}#tkPanel .tkc.done{opacity:.55;text-decoration:line-through}.tkrow{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}.tkrow .btn{margin:0}.tkchip{display:inline-block;padding:3px 8px;border-radius:999px;border:1px dashed var(--bd);font-size:12px}';
document.head.appendChild(css);

function myRating(){try{return rH()+rT()+rW()}catch(e){return 0}}
function modal(html,onAct){
closeM();
var o=document.createElement('div');o.className='mdl';o.id='advMdl';
o.innerHTML='<div class="mb" role="dialog" aria-modal="true">'+html+'</div>';
o.addEventListener('click',function(e){e.stopPropagation();var b=e.target.closest&&e.target.closest('[data-a]');if(b)onAct(b.dataset.a,o)});
document.body.appendChild(o);return o}
function closeM(){var m=document.getElementById('advMdl');if(m)m.remove()}
function notice(lines,cb){
modal('<h3>Vantaggio da rating</h3>'+lines.map(function(l){return '<p>'+esc(l)+'</p>'}).join('')+'<div class="advrow"><button class="btn pri" data-a="ok">OK</button></div>',function(){closeM();if(cb)cb()})}
function startTimer(){
var m=S.tm=S.tm||{run:false,t0:0,acc:0,fired:false};
if(!m.run){m.t0=Date.now();m.run=true;S.sc=[0,0]}
try{save()}catch(e){}render();scrollTo(0,0)}

/* 1) punteggio avversario */
function step1(){
var mine=myRating();
modal('<h3>Inserisci il punteggio dell\'avversario</h3><p class="mu" style="margin:0 0 8px">Il tuo rating: <b>'+mine+'</b></p><input id="advOpp" type="number" inputmode="numeric" min="0" step="1" value="'+esc(lastOpp)+'" placeholder="Rating avversario" style="width:100%;box-sizing:border-box;font-size:20px;text-align:center"><div class="advrow"><button class="btn" data-a="no">Annulla</button><button class="btn pri" data-a="ok">Conferma</button></div>',function(a,o){
if(a==='no'){if(window.__tutOpen)return;closeM();return}
var inp=document.getElementById('advOpp'),v=parseInt(inp.value,10);
if(isNaN(v)||v<0){inp.focus();inp.style.outline='2px solid #e03131';return}
if(window.__tutOpen&&v!==200){inp.style.outline='2px solid #e03131';toast('Nel tutorial inserisci 200');return}
lastOpp=String(v);closeM();
var diff=Math.abs(mine-v);
if(diff<15){S.adv={kind:'none',opp:v,mine:mine,diff:diff};toast('Differenza di '+diff+' punti: nessun vantaggio');startTimer();return}
step2(mine,v,diff)});
if(!window.__tutOpen)setTimeout(function(){var i=document.getElementById('advOpp');if(i)i.focus()},50)}

/* 2) scelta del vantaggio */
function step2(mine,opp,diff){
var own=mine<opp,av=OPTS.filter(function(o){return diff>=o.min});
modal('<h3>Vantaggio da rating</h3><p style="margin:0">Differenza: <b>'+diff+'</b> punti (tu '+mine+' · avversario '+opp+')</p><p class="advwho '+(own?'me':'op')+'">Il vantaggio è <b>'+(own?'tuo':'dell\'avversario')+'</b> (rating più basso).'+(own?'':'<br><b>Nessuna modifica verrà applicata alla tua armata.</b>')+'</p><p class="mu" style="margin:0 0 4px">Scegli 1 opzione:</p>'+av.map(function(o){return '<button class="btn advo" data-a="o:'+o.k+'"><b>'+o.t+'</b><small>'+o.d+'</small></button>'}).join('')+'<div class="advrow"><button class="btn" data-a="no">Annulla</button></div>',function(a){
if(a==='no'){if(window.__tutOpen)return;closeM();return}
if(window.__tutOpen&&a!=='o:rr')return;
pick(a.slice(2),mine,opp,diff,own)})}

function base(k,mine,opp,diff,own){return{kind:k,opp:opp,mine:mine,diff:diff,mineLow:own}}
function pick(k,mine,opp,diff,own){
if(!own){S.adv={kind:'none',opp:opp,mine:mine,diff:diff};closeM();toast('Vantaggio dell\'avversario: nessuna modifica alla tua armata');startTimer();return}
var who=own?[]:['(Vantaggio dell\'avversario: nessuna modifica per il tuo roster.)'];
if(k==='infl'||k==='xp'){S.adv=base(k,mine,opp,diff,own);closeM();notice(['I modificatori saranno applicati a fine partita.'].concat(who),startTimer)}
else if(k==='rr'){S.adv=base(k,mine,opp,diff,own);S.adv.rr=[0,0];closeM();if(window.__tutOpen){startTimer();return}notice(['In fondo trovi le caselle spuntabili per tenere traccia dell\'utilizzo.'],startTimer)}
else if(k==='amb'){S.adv=base(k,mine,opp,diff,own);closeM();notice([own?'Perfetto, scegli tu lo scenario!':'L\'avversario sceglie lo scenario.'],startTimer)}
else if(k==='tk'){
modal('<h3>Tool kit</h3><p class="mu" style="margin:0 0 4px">Scegli il kit:</p>'+Object.keys(KITS).map(function(n,i){return '<button class="btn advo" data-a="k:'+i+'"><b>'+n+'</b><small>'+kitTxt(n)+'</small></button>'}).join('')+'<div class="advrow"><button class="btn" data-a="back">Indietro</button><button class="btn" data-a="no">Annulla</button></div>',function(a){
if(a==='no'){closeM();return}if(a==='back'){step2(mine,opp,diff);return}
var name=Object.keys(KITS)[+a.slice(2)];S.adv=base('tk',mine,opp,diff,own);S.adv.kit=name;closeM();
if(!own){notice(['Kit scelto dall\'avversario: '+name+'.'].concat(who),startTimer);return}
S.adv.phase='tk';S.adv.need={};KITS[name].forEach(function(x){S.adv.need[x[0]]=x[1]});
try{save()}catch(e){}tab='h';render();scrollTo(0,0);toast('Assegna gli elementi del '+name+' a eroi o truppe')})}
else if(k==='wd'){
modal('<h3>Wanderers</h3><p class="mu" style="margin:0 0 4px">Scegli il wanderer:</p>'+D.wanderers.map(function(n,i){return '<button class="btn advo" data-a="w:'+i+'"><b>'+esc(n)+'</b></button>'}).join('')+'<div class="advrow"><button class="btn" data-a="back">Indietro</button><button class="btn" data-a="no">Annulla</button></div>',function(a){
if(a==='no'){closeM();return}if(a==='back'){step2(mine,opp,diff);return}
var name=D.wanderers[+a.slice(2)];S.adv=base('wd',mine,opp,diff,own);S.adv.wdn=name;closeM();
if(!own){notice(['Wanderer dell\'avversario: '+name+'.'].concat(who),startTimer);return}
S.adv.wd=name;notice([name+' è stato aggiunto alla sezione Eroi e verrà rimosso a fine battaglia.'],startTimer)})}}

/* intercetta "Inizio battaglia" e il play del cronometro PRIMA delle altre patch */
window.addEventListener('click',function(e){
var t=e.target&&e.target.closest?e.target.closest('#endb,#tgo'):null;if(!t)return;
var m=S.tm||{};if(m.run||tmNow()>0)return;
if(window.advPendingInj&&advPendingInj()){e.stopImmediatePropagation();e.preventDefault();toast('Risolvi prima le ferite: tocca le croci rosse sulle schede');return}
if(t.id==='tgo'&&S.adv)return;
e.stopImmediatePropagation();e.preventDefault();
if(S.adv&&S.adv.phase==='tk'){tab='h';render();return}
step1()},true);

/* assegnazione degli elementi del kit */
function totNeed(a){var n=0;for(var k in a.need)n+=a.need[k];return n}
function tkHTML(k,u,i){
var a=S.adv,list=((u.g&&u.g.tk)||[]).filter(Boolean),ph=a&&a.phase==='tk';
if(!list.length&&!ph)return '';
var h='<div class="tkrow">';
if(ph&&(u.model||u.name)&&!u.miss)KITS[a.kit].forEach(function(x,idx){var r=a.need[x[0]];if(r>0&&(k==='h'||!/Hero Only/.test(x[0])))h+='<button class="btn sm" data-tkadd="'+k+'.'+i+'.'+idx+'">＋ '+esc(short(x[0]))+' <b>'+r+'</b></button>'});
list.forEach(function(n,j){h+=ph?'<button class="btn sm" data-tkdel="'+k+'.'+i+'.'+j+'" title="Rimuovi">🎒 '+esc(short(n))+' ✕</button>':'<span class="tkchip">🎒 '+esc(short(n))+'</span>'});
return h+'</div>'}
function wrapCard(name,k){var f=window[name];window[name]=function(u,i){var s=f.apply(this,arguments);try{var x=tkHTML(k,u,i);if(x){var m=s.match(/^\s*<div class="card[^>]*>/);return m?s.replace(m[0],m[0]+x):s+x}}catch(e){}return s}}
wrapCard('heroCard','h');wrapCard('troopCard','t');
function finishKit(){
S.adv.phase='done';tab='bat';toast('Kit assegnato completamente');startTimer()}
window.addEventListener('click',function(e){
var b=e.target&&e.target.closest?e.target.closest('[data-tkadd],[data-tkdel],[data-tkcancel],[data-tab]'):null;if(!b)return;
var a=S.adv;if(!a||a.phase!=='tk')return;
if(b.dataset.tab){if(b.dataset.tab!=='h'&&b.dataset.tab!=='t'){e.stopImmediatePropagation();e.preventDefault();toast('Assegna prima tutti gli elementi del kit (puoi spostarti solo tra Eroi e Truppe)')}return}
e.stopImmediatePropagation();e.preventDefault();
var y=scrollY;
if(b.dataset.tkcancel!==undefined){confirmBox('Annullare la scelta del kit? Gli elementi già assegnati verranno rimossi e la battaglia non inizierà.',function(){S.h.concat(S.t).forEach(function(u){if(u.g)u.g.tk=Array(12).fill('')});S.adv=null;tab='bat';try{save()}catch(e2){}render();scrollTo(0,0)});return}
var q=(b.dataset.tkadd||b.dataset.tkdel).split('.'),u=(q[0]==='h'?S.h:S.t)[+q[1]];if(!u)return;
u.g=u.g||{};u.g.tk=(u.g.tk||[]).filter(Boolean);
if(b.dataset.tkadd!==undefined){var nm=KITS[a.kit][+q[2]][0];if(!(a.need[nm]>0))return;if(q[0]!=='h'&&/Hero Only/.test(nm))return;u.g.tk.push(nm);a.need[nm]--}
else{var nm2=u.g.tk.splice(+q[2],1)[0];if(nm2)a.need[nm2]=(a.need[nm2]||0)+1}
try{save()}catch(e3){}
if(totNeed(a)===0){finishKit();return}
render();scrollTo(0,y)},true);
function mountPanel(){
var old=document.getElementById('tkPanel');if(old)old.remove();
var a=S.adv;if(!a||a.phase!=='tk'||(tab!=='h'&&tab!=='t'))return;
var app=document.getElementById('app');if(!app)return;
var d=document.createElement('div');d.id='tkPanel';d.className='card';
d.innerHTML='<h3 style="margin:0 0 6px">🎒 '+esc(a.kit)+' · da assegnare ('+totNeed(a)+')</h3>'+KITS[a.kit].map(function(x){var r=a.need[x[0]];return '<span class="tkc'+(r===0?' done':'')+'">'+esc(short(x[0]))+' <b>'+r+'</b>/'+x[1]+'</span>'}).join('')+'<div style="margin:6px 0 8px;font-size:13px;opacity:.8">Tocca ＋ sulle schede di eroi e truppe (gli oggetti Hero Only solo sugli eroi). Puoi muoverti solo tra Eroi e Truppe; la battaglia inizia appena hai assegnato tutto.</div><button class="btn sm" data-tkcancel="1">✕ Annulla kit</button>';
app.insertBefore(d,app.firstChild)}
var _r=window.render;
window.render=function(){if(S&&S.adv&&S.adv.phase==='tk'&&tab!=='h'&&tab!=='t')tab='h';var x=_r.apply(this,arguments);try{mountPanel()}catch(e){}return x};

/* wanderer temporaneo come scheda extra (senza +70 pt) */
var _ex=window.extras;
window.extras=function(){
var E=_ex.apply(this,arguments);
try{var a=S.adv;if(a&&a.wd&&D.profiles[a.wd]){var sv=S.wand;S.wand=a.wd;var E2;try{E2=_ex.apply(this,arguments)}finally{S.wand=sv}
var w=E2.h.find(function(x){return x.key==='w'});if(w)E.h.push(Object.assign({},w,{key:'aw',temp:true}))}}catch(e){}
return E};

/* riepilogo vantaggio + caselle reroll, prima del punteggio di partita */
function advCard(){
var a=S.adv;if(!a||a.kind==='none')return '';
var nm={infl:'Influenza',xp:'Esperienza',rr:'Reroll',tk:'Tool kit'+(a.kit?' · '+a.kit:''),amb:'Ambush!',wd:'Wanderers'+(a.wdn?' · '+a.wdn:'')}[a.kind]||'';
var h='<div class="card" style="margin-top:12px"><h3>⚖ Vantaggio da rating</h3><p class="mu" style="margin:0 0 4px">Tu '+a.mine+' · avversario '+a.opp+' · vantaggio '+(a.mineLow?'tuo':'dell\'avversario')+'</p><p style="margin:0;font-weight:700">'+esc(nm)+'</p>';
if(a.kind==='rr')h+=[0,1].map(function(i){return '<label class="tgl" style="display:flex;gap:8px;align-items:center;margin:8px 0 0"><input type="checkbox" data-advrr="'+i+'"'+(a.rr[i]?' checked disabled':'')+'> Reroll '+(i+1)+(a.mineLow?'':' (avversario)')+'</label>'}).join('');
return h+'</div>'}
var _ss=window.scoreSec;
window.scoreSec=function(){return advCard()+_ss.apply(this,arguments)};
window.addEventListener('change',function(e){
var el=e.target;if(!el||!el.dataset||el.dataset.advrr===undefined)return;
e.stopImmediatePropagation();
var a=S.adv;if(!a||!a.rr)return;
if(el.checked){a.rr[+el.dataset.advrr]=1;try{save()}catch(e2){}var y=scrollY;render();scrollTo(0,y)}else{el.checked=true}},true);

/* fine battaglia: applica modificatori, poi pulisce tutto il temporaneo */
var _eb=window.endBattle;
window.endBattle=function(){
var a=S.adv,m=+(S.sc&&S.sc[0])||0,o=+(S.sc&&S.sc[1])||0,res=m>o?'w':(m===o?'d':'l');
var r=_eb.apply(this,arguments);
try{
var ups=[];
if(a&&a.mineLow&&a.kind==='infl'){var g=res==='w'?2:1;S.infl=(+S.infl||0)+g;toast('Vantaggio Influenza: +'+g+' punti influenza')}
if(a&&a.mineLow&&a.kind==='xp'){var bn=res==='w'?2:1,n=0;
S.h.concat(S.t).forEach(function(u){if((u.model||u.name)&&!u.miss){var x0=Math.max(0,parseInt(u.xp)||0);u.xp=x0+bn;n++;if(Math.floor(u.xp/5)>Math.floor(x0/5)&&!u.lvUp){u.lvUp=true;ups.push(u.name||u.model)}}});
toast('Vantaggio Esperienza: +'+bn+' XP a '+n+' unità')}
S.h.concat(S.t).forEach(function(u){if(u.g&&u.g.tk)u.g.tk=Array(12).fill('')});
if(S.ex)delete S.ex.aw;
S.adv=null;
try{save()}catch(e){}
render();
if(ups.length)infoBox(ups.map(function(x){return 'Attenzione: '+x+' è salito di livello'}))
}catch(e){console.error('[RATING-ADV end]',e)}
return r};
})();
}catch(e){console.error('[RATING-ADV v90]',e)}
;/* ----- [38/38] INJURIES v91 (gestione ferite a fine battaglia) ----- */
try{
(function(){
var FATE_CAP=3; /* per ora 3 per tutti i path: da rendere dipendente dal path in futuro */
var CAP={arm:2,leg:2,hon:3};
var NAME={arm:'Ferita al braccio',leg:'Ferita alla gamba',hon:'Onore infranto'};
var css=document.createElement('style');
css.textContent='.card.hasinj{position:relative}.card.hasinj>h3{padding-right:46px}.injx{position:absolute;top:8px;right:8px;z-index:4;width:34px;height:34px;padding:0;border-radius:50%;border:2px solid #d6001c;background-color:#fff;background-image:linear-gradient(#d6001c,#d6001c),linear-gradient(#d6001c,#d6001c);background-size:16px 5px,5px 16px;background-position:center;background-repeat:no-repeat;cursor:pointer;animation:injPulse 1.1s ease-in-out infinite}.injx::after{content:"";position:absolute;inset:-2px;border-radius:50%;border:2px solid #d6001c;animation:injRing 1.1s ease-out infinite;pointer-events:none}@keyframes injPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.14)}}@keyframes injRing{0%{opacity:.8;transform:scale(1)}100%{opacity:0;transform:scale(1.9)}}.hinj{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}.hinj .hij{padding:4px 9px;border-radius:999px;border:1px solid #d6001c;font-size:13px}.hinj .hij b{color:#d6001c}.hinjn{margin:6px 0;padding:6px 9px;border-radius:8px;border:1px dashed #d6001c;font-size:12px;line-height:1.35}#injMdl .mb{max-height:88vh;overflow:auto}#injMdl h3{margin:0 0 8px}#injMdl .advrow{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}#injMdl .advrow .btn{flex:1;margin:0;min-width:120px}#injMdl .advo{display:block;width:100%;text-align:left;margin:6px 0;padding:10px 12px;white-space:normal}#injMdl .advo small{display:block;font-weight:500;opacity:.78;margin-top:3px;line-height:1.3}';
document.head.appendChild(css);

/* ---- stato/utilità ---- */
function hi(u){return u.hi=u.hi||{arm:0,leg:0,hon:0}}
function nm(u){return u.name||u.model||'Unità'}
function kindOf(u){return S.h.indexOf(u)>=0?'h':'t'}
function wnd(u,k){var m=+(k==='h'?hero(u).tot[6]:troop(u).p[6])||0;var c=u.bt&&u.bt[3]!=null?Math.min(u.bt[3],m):m;return{c:c,m:m}}
window.advPendingInj=function(){return S.h.concat(S.t).some(function(u){return u.inj})};
var shieldNo=function(n){return !/Shield/.test(n)};

/* ---- ferita al braccio: lo scudo non dà il +1 a Difesa ---- */
var _hero=window.hero;
window.hero=function(h){
var r=_hero.apply(this,arguments);
try{if(h&&h.hi&&h.hi.arm>0){var d=shieldLoss(h.g);if(d)r.tot[4]-=d}}catch(e){}
try{if(h&&h.hi&&h.hi.leg>0&&h.model&&!h.miss){var cp=CST[0]*h.hi.leg;r.c.stat+=cp;r.c.rating+=cp}}catch(e){}
return r};
function shieldLoss(g){var g2={aw:g.aw.filter(shieldNo),bw:g.bw.filter(shieldNo)};return dm(g,1)-dm(g2,1)}
function shieldNote(u){if(!(u.hi&&u.hi.arm>0))return '';var d=0;try{d=shieldLoss(u.g)}catch(e){}
return '<div class="hinjn">⚠ Ferita al braccio: lo scudo non fornisce il +1 a Difesa'+(d>1?' (bonus effettivo dello scudo: −'+d+')':'')+'; statistica ridotta come se lo scudo non fosse equipaggiato.</div>'}
window.hinjHTML=function(u){
var h=u.hi;if(!h||!(h.arm||h.leg||h.hon))return '';
return '<div class="hinj">'+['arm','leg','hon'].filter(function(x){return h[x]>0}).map(function(x){return '<span class="hij">🩹 '+NAME[x]+' <b>'+h[x]+'</b>/'+CAP[x]+(x==='hon'&&h[x]>=2?' · Timore':'')+'</span>'}).join('')+'</div>'};

/* ---- croce rossa + contatori sulle schede ---- */
function cross(k,i){return '<button class="injx" data-injx="'+k+'.'+i+'" aria-label="Gestisci ferite" title="Gestisci ferite"></button>'}
function addCross(s,k,i,u){
if(!u.inj)return s;
var m=s.match(/^\s*<div class="card[^"]*"/);if(!m)return s;
var open=s.indexOf('>',m[0].length)+1;
return s.slice(0,m[0].length-1)+' hasinj"'+s.slice(m[0].length,open)+cross(k,i)+s.slice(open)}
window.injWrap=function(k,i,u,s){
try{
if(k!=='h'&&k!=='t')return s;
if(k==='h'&&!/cmpc/.test(s.slice(0,60))){
s=s.replace(/(<div class="st bst">[\s\S]*?<\/div>)/,'$1'+shieldNote(u));
var ij=hinjHTML(u);if(ij){var p=s.lastIndexOf('</div>');s=s.slice(0,p)+ij+s.slice(p)}}
return addCross(s,k,i,u)}catch(e){return s}};
function wrapCard(name,k){var f=window[name];window[name]=function(u,i){var s=f.apply(this,arguments);try{
if(k==='h')s=s.replace('Riga evidenziata: totali</div>','Riga evidenziata: totali</div>'+shieldNote(u));
return addCross(s,k,i,u)}catch(e){return s}}}
wrapCard('heroCard','h');wrapCard('troopCard','t');

/* ---- popup ---- */
function closeM(){var m=document.getElementById('injMdl');if(m)m.remove()}
function modal(html,on){closeM();var o=document.createElement('div');o.className='mdl';o.id='injMdl';o.innerHTML='<div class="mb" role="dialog" aria-modal="true">'+html+'</div>';o.addEventListener('click',function(e){e.stopPropagation();var b=e.target.closest&&e.target.closest('[data-a]');if(b)on(b.dataset.a,o)});document.body.appendChild(o);return o}
function notice(lines){modal('<h3>Ferite</h3>'+lines.map(function(l){return '<p>'+esc(l)+'</p>'}).join('')+'<div class="advrow"><button class="btn pri" data-a="ok">OK</button></div>',closeM)}
function askNum(title,text,min,max,cb){
modal('<h3>'+esc(title)+'</h3><p>'+esc(text)+'</p><input id="injIn" type="number" inputmode="numeric" min="'+min+'" max="'+max+'" step="1" placeholder="'+min+'–'+max+'" style="width:100%;box-sizing:border-box;font-size:20px;text-align:center"><div class="advrow"><button class="btn" data-a="no">Annulla</button><button class="btn pri" data-a="ok">Conferma</button></div>',function(a){
if(a==='no'){if(window.__tutOpen)return;closeM();return}
var inp=document.getElementById('injIn'),v=parseInt(inp.value,10);
if(isNaN(v)||v<min||v>max){inp.focus();inp.style.outline='2px solid #e03131';return}
if(window.__tutOpen&&title.indexOf('Ferite')===0&&v!==7){inp.style.outline='2px solid #e03131';toast('Nel tutorial inserisci 7');return}
closeM();cb(v)});
if(!window.__tutOpen)setTimeout(function(){var i=document.getElementById('injIn');if(i)i.focus()},50)}

/* ---- effetti ---- */
function skipNext(u){u.miss=true;u.injSkip=true}
function finish(u,lines){u.inj=0;try{save()}catch(e){}render();notice(lines)}
function retire(k,u,why){
var i=S[k==='h'?'h':'t'].indexOf(u),n=nm(u);
if(i>=0){var a=k==='h'?'h':'t';S[a].splice(i,1);Object.keys(OP).forEach(function(x){if(x.indexOf(a+'.')===0)delete OP[x]})}
try{save()}catch(e){}render();notice([n+': '+why,'L\'unità e tutti i suoi equipaggiamenti sono stati rimossi dal roster.'])}
function recovery(u,lines){
var h=hi(u),av=['arm','leg','hon'].filter(function(x){return h[x]>0});
if(!av.length){finish(u,lines.concat(['Recupero completo: può giocare la prossima partita come al solito.']));return}
modal('<h3>Recupero completo</h3><p>'+esc(nm(u))+' può guarire una ferita già ottenuta. Vuoi guarirne una?</p>'+av.map(function(x){return '<button class="btn advo" data-a="h:'+x+'"><b>'+NAME[x]+'</b><small>Attuale: '+h[x]+'/'+CAP[x]+'</small></button>'}).join('')+'<button class="btn advo" data-a="no"><b>Nessuna</b></button>',function(a){
closeM();var l=lines.concat(['Recupero completo: può giocare la prossima partita come al solito.']);
if(a!=='no'){var x=a.slice(2);h[x]--;if(x==='leg'){u.mod=u.mod||[];u.mod[0]=(+u.mod[0]||0)+1}l.push('Guarita: '+NAME[x]+' ('+h[x]+'/'+CAP[x]+').')}
finish(u,l)})}
function heroRes(u,r,rr){
var h=hi(u);
if(r===2)return retire('h',u,'Morto.');
if(r===3){h.arm++;if(h.arm>=CAP.arm)return retire('h',u,'Seconda ferita al braccio: ritiro forzato.');return finish(u,['Ferita al braccio ('+h.arm+'/'+CAP.arm+').','Non può più beneficiare di uno scudo, usare armi a due mani, picche, archi o balestre. Può portare lo Standard con le normali penalità e combattere con un\'arma a mano.'])}
if(r===4){h.leg++;if(h.leg>=CAP.leg)return retire('h',u,'Seconda ferita alla gamba: ritiro forzato.');u.mod=u.mod||[];u.mod[0]=(+u.mod[0]||0)-1;return finish(u,['Ferita alla gamba ('+h.leg+'/'+CAP.leg+').','Movimento permanentemente ridotto di 1" (applicato ai modificatori).'])}
if(r===5){h.hon++;if(h.hon>=CAP.hon)return retire('h',u,'Terzo onore infranto: ritiro forzato.');return finish(u,['Onore infranto ('+h.hon+'/'+CAP.hon+').','Non può più offrire "Resisti!" né influenzare i membri della compagnia con le Azioni Eroiche.'].concat(h.hon>=2?['Ottiene la regola speciale Timore.']:[]))}
if(r===6){
if(rr){skipNext(u);return finish(u,['Risultato 6 dopo il rilancio: salta la prossima partita.'])}
return modal('<h3>È solo un graffio</h3><p>Risultato 6: '+esc(nm(u))+' deve saltare la prossima partita. In alternativa puoi rilanciare: il secondo risultato si applicherà in ogni caso, anche se peggiore.</p><div class="advrow"><button class="btn" data-a="keep">Mantieni il risultato</button><button class="btn pri" data-a="re">Rilancia</button></div>',function(a){
if(a==='keep'){closeM();skipNext(u);finish(u,['È solo un graffio: salta la prossima partita.'])}
else{closeM();askNum('Secondo tiro','Inserisci il risultato del nuovo tiro sulla tabella delle ferite eroi (2–12). Verrà applicato in ogni caso.',2,12,function(r2){heroRes(u,r2,true)})}})}
if(r<=10)return recovery(u,[]);
if(r===11){var l=[];if((u.mfw[2]|0)<FATE_CAP){u.mfw[2]=(u.mfw[2]|0)+1;l.push('Protezione dei Valar: +1 punto Fato (massimo '+FATE_CAP+').')}else l.push('Protezione dei Valar: punti Fato già al massimo ('+FATE_CAP+').');return recovery(u,l)}
return askNum('Ferite di un Eroe','Risultato 12: inserisci il risultato del D6 per i Punti Influenza extra (1–6).',1,6,function(d){S.infl=(+S.infl||0)+d;recovery(u,['L\'armata ottiene '+d+' punti influenza extra.'])})}
function warRes(u,r){
if(r<=3)return retire('t',u,'Morto.');
if(r<=5){skipNext(u);return finish(u,['Ferito: salta la prossima partita a cui partecipa l\'armata.'])}
if(r<=11)return finish(u,['Guarigione completa: può combattere nella prossima battaglia come al solito.']);
askNum('Lezione appresa','Risultato 12: inserisci il risultato del tiro per l\'esperienza (D3, inserisci il valore del dado 1–6: verrà dimezzato per eccesso).',1,6,function(v){
var d3=Math.ceil(v/2),x0=Math.max(0,parseInt(u.xp)||0),l=['Lezione appresa: guarigione completa.','Esperienza ottenuta: +'+d3+' (dado '+v+' → D3 = '+d3+').'];
u.xp=x0+d3;if(Math.floor(u.xp/5)>Math.floor(x0/5)){u.lvUp=true;l.push('Attenzione: '+nm(u)+' è salito di livello')}
finish(u,l)})}
function openInj(k,i){
var u=(k==='h'?S.h:S.t)[i];if(!u)return;
askNum('Ferite · '+nm(u),'Inserisci il risultato del tiro sulla tabella delle ferite '+(k==='h'?'degli eroi':'dei guerrieri')+' (2–12).',2,12,function(r){k==='h'?heroRes(u,r,false):warRes(u,r)})}
window.addEventListener('click',function(e){
var b=e.target&&e.target.closest?e.target.closest('[data-injx]'):null;if(!b)return;
e.stopImmediatePropagation();e.preventDefault();
var q=b.dataset.injx.split('.');openInj(q[0],+q[1])},true);

/* ---- fine battaglia: segna chi è a 0 ferite, libera i "salta partita" automatici ---- */
var _eb=window.endBattle;
window.endBattle=function(){
var zero=[];
try{S.h.concat(S.t).forEach(function(u){if((u.model||u.name)&&!u.miss){var k=kindOf(u),w=wnd(u,k);if(w.m>0&&w.c===0)zero.push(u)}})}catch(e){}
var r=_eb.apply(this,arguments);
try{
S.h.concat(S.t).forEach(function(u){if(u.injSkip){u.miss=false;u.injSkip=false}});
zero.forEach(function(u){u.inj=1});
try{save()}catch(e){}
render();
if(zero.length)toast(zero.length+(zero.length===1?' unità a 0 ferite':' unità a 0 ferite')+': tocca la croce rossa sulla scheda')
}catch(e){console.error('[INJURIES end]',e)}
return r};
})();
}catch(e){console.error('[INJURIES v91]',e)}
;
