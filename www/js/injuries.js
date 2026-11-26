/* ----- [38/38] INJURIES v91 (gestione ferite a fine battaglia) ----- */
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
