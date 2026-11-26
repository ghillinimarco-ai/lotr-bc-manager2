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
;