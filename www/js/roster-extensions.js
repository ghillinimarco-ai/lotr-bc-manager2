/* ----- [11/36] PAY-PATCH v19 ----- */
try{
/*PAY-PATCH v19*/
(function(){
var IC_W={"1.5H Weapon":1,"1H Weapon":1,"2H Weapon":1,"Armour":1,"Armoured Horse":4,"Axe of Lossarnach":1,"Blowpipe":1,"Bow":1,"Crossbow":2,"Dunlending War Axe":1,"Dwarf Armour":1,"Dwarf Bow":1,"Dwarf Longbow":2,"Easterling Halberd":1,"Elf Bow":2,"Elven 1.5H Weapon (Elf Only)":1,"Elven 1H Weapon (Elf Only)":1,"Elven Glaive":1,"Elven Lance (Elf Only)":1,"Elven Pike (Elf Only)":1,"Elven Spear (Elf Only)":1,"Esgaroth Bow":2,"Fell Warg":3,"Flaming Brand":1,"Galadhrim Steed (Elf Only)":4,"Goat":4,"Heavy Armour":1,"Heavy Dwarf Armour":1,"Horse":3,"Lance":1,"Light Armour":1,"Light Shield":1,"Longbow":2,"Mattock":1,"Orc Bow":1,"Pike":1,"Pony (Hobbits only)":2,"Shield":1,"Short Bow":1,"Spear":1,"Throwing Spear":1,"Throwing Weapon":1,"Uruk-hai Bow":1,"War Camel":3,"Warg":3,"Warspear":1,"Whip":1,"Wood Elf Spear":1};
var IC_E={"Backpack":1,"Badge of Courage":2,"Barding":2,"Climbing ropes":1,"Company Drum":3,"Company Horn":3,"Company Standard":3,"Concealing Cloak":2,"Dwarven Brew":1,"Envenom Weapon (Evil Only)":1,"Falcon":3,"Healing Herbs (Hero Only)":2,"Hunting Dog":2,"Lucky Talisman (Hero Only)":2,"Map (Hero Only)":1,"Mountain Boots":1,"Packhorse":2,"Ring of Warding":1,"Scroll of Courage (Hero Only)":1,"Scroll of Hidden Paths (Hero Only)":1,"Seeing Stone (Unique, Hero Only)":4,"Small Shield":1,"Torching Brand":1,"Traps & Snares":4,"Trophy Pelt":2,"Wondrous Cram":2,"Woodland Belt":1};
var IC_T={"Angmar_Carn_Dum":3,"Arnor":3,"Burning_of_the_Westfold":3,"Cirith_Ungol":3,"City_of_Umbar":3,"Defenders_of_the_North":3,"Dol_Goldur":4,"Durins_Folk":3,"Easterlings":3,"Erebor_Dale":3,"Fiefdoms":3,"Fornost":3,"Goblin_town":2,"Grand_Army_of_the_South":3,"Gundabad":3,"Halls_of_Thranduil":4,"Harad":3,"Helms_Deep":3,"Hill_Tribes_of_Dunland":3,"Iron_Hills":4,"Lake_Town":2,"Lothorien":4,"Minas_Morgul":3,"Minas_Tirith":3,"Mirkwood":3,"Mordor":3,"Moria":3,"Muster_of_Isengard":3,"Osgiliath_Ithilien":3,"Paths_of_the_Druadan":3,"Rangers_of_the_North":5,"Rivendell":4,"Rohan":3,"Sharkeys_Rogues":2,"Shire":2,"The_Last_Alliance":4,"Wanderers_in_the_Wild":3,"Wolves_of_Isengard":4};
var GOLD_EQ={"Backpack":2,"Badge of Courage":5,"Barding":10,"Climbing ropes":1,"Company Drum":25,"Company Horn":15,"Company Standard":15,"Concealing Cloak":5,"Dwarven Brew":2,"Envenom Weapon (Evil Only)":1,"Falcon":10,"Healing Herbs (Hero Only)":5,"Hunting Dog":5,"Lucky Talisman (Hero Only)":5,"Map (Hero Only)":5,"Mountain Boots":3,"Packhorse":5,"Ring of Warding":5,"Scroll of Courage (Hero Only)":3,"Scroll of Hidden Paths (Hero Only)":3,"Seeing Stone (Unique, Hero Only)":10,"Small Shield":1,"Torching Brand":1,"Traps & Snares":20,"Trophy Pelt":3,"Wondrous Cram":3,"Woodland Belt":3};
D.profiles['Falcon']=[12,2,0,3,3,1,1,7,7,10];
D.profiles['Hunting Dog']=[8,3,0,3,3,1,1,'*',7,5];
D.profiles['Packhorse']=[10,2,0,3,4,1,1,8,8,5];
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function msg(t){try{if(typeof infoBox==='function'){infoBox([t]);return}}catch(e){}alert(t)}
function setSlot(p,v){var k=p.split('.'),o=S;for(var i=0;i<k.length-1;i++)o=o[k[i]];o[k[k.length-1]]=v}
function pay(cur,c){if(cur==='oro')S.oro=Math.max(0,(+S.oro||0)-c);else S.infl=Math.max(0,(+S.infl||0)-c);try{save()}catch(e){}}
function choice(nv,ci,cg,cb){var o=document.createElement('div');o.className='mdl';o.innerHTML='<div class="mb" role="dialog" aria-modal="true"><p>Con cosa paghi «'+esc(nv)+'»?</p><div><button class="btn" data-c="ann">Annulla</button><button class="btn" data-c="infl">Influenza ('+ci+')</button><button class="btn pri" data-c="oro">Oro ('+cg+')</button></div></div>';
o.addEventListener('click',function(e){e.stopPropagation();var c=e.target&&e.target.dataset?e.target.dataset.c:null;if(c){o.remove();if(c==='oro')cb('oro');else if(c==='infl')cb('infl')}});document.body.appendChild(o)}
document.addEventListener('change',function(e){
var el=e.target,p=el&&el.dataset?el.dataset.p:null;if(!p)return;if(window.__dupVeto&&window.__dupVeto(e)){return}
var mT=p.match(/^t\.(\d+)\.model$/);
if(mT){var t=S.t[+mT[1]];var old=t?t.model:'';var c=IC_T[S.bc]||0;
if(!old&&el.value&&c){if(c>(+S.infl||0)){e.stopImmediatePropagation();e.preventDefault();el.value=old||'';msg('Attenzione, punti influenza insufficienti');return}
pay('infl',c)}
return}
var mS=p.match(/^([ht])\.(\d+)\.g\.(aw|eq)\.(\d+)$/);
if(!mS)return;
var u=(mS[1]==='h'?S.h:S.t)[+mS[2]];if(!u||!u.g[mS[3]])return;
var slot=mS[3],idx=+mS[4],oldV=u.g[slot][idx]||'',nv=el.value;
if(!nv||nv===oldV)return;
if(slot==='aw'){var w=(window.__armCost&&(window.__ARMORS||[]).indexOf(nv)>=0)?window.__armCost(u,nv):(IC_W[nv]||0);if(!w)return;
e.stopImmediatePropagation();e.preventDefault();el.value=oldV||'';
if((+S.oro||0)>=w){setSlot(p,nv);pay('oro',w);render();return}
if((+S.infl||0)>=w){setSlot(p,nv);pay('infl',w);render();return}
msg('Oro/influenza non sufficienti');return}
var ci=IC_E[nv]||0,cg=GOLD_EQ[nv];if(cg==null)cg=ci;
var okG=(+S.oro||0)>=cg,okI=(+S.infl||0)>=ci;
e.stopImmediatePropagation();e.preventDefault();el.value=oldV||'';
if(!okG&&!okI){msg('Oro/influenza non sufficienti');return}
if(okG&&okI){choice(nv,ci,cg,function(cur){setSlot(p,nv);pay(cur,cur==='oro'?cg:ci);render()});return}
if(okG){setSlot(p,nv);pay('oro',cg);render();return}
setSlot(p,nv);pay('infl',ci);render();
},true);
render();
})();
}catch(e){console.error('[PAY-PATCH v19]',e)}
;
/* ----- [12/36] HERO-PRESET v22 ----- */
try{
/*HERO-PRESET v22*/
(function(){
function bwList(m){return (D.bwbase&&D.bwbase[m])||null}
function fillBWHero(h){var l=bwList(h.model);if(!l)return;h.g.bw=h.g.bw||[];for(var i=0;i<5;i++){h.g.bw[i]=l[i]||''}}
function makePresetHeroes(){var pr=D.presets&&D.presets[S.bc];if(!pr)return[];var out=[];pr.u.forEach(function(u){for(var k=0;k<u[1];k++){var h=newH();h.model=u[0];h.mfw=[1,1,1];h.pre=1;fillBWHero(h);out.push(h)}});return out}
function ensureBCWargear(){if(!S||S.bc!=='Wanderers_in_the_Wild')return;var b=D.bcs.find(function(x){return x.id===S.bc});if(!b)return;var pr=D.presets&&D.presets[S.bc];if(!pr)return;pr.u.forEach(function(u){var l=bwList(u[0])||[];l.forEach(function(v){if(v&&b.wargear.indexOf(v)<0)b.wargear.push(v)})})}
function applyWanderers(){
if(!S)return;
if(S.bc==='Wanderers_in_the_Wild'){
var hs=[];
(S.t||[]).forEach(function(t){if(t&&t.pre&&t.model){var h=newH();h.model=t.model;h.mfw=[1,1,1];h.pre=1;fillBWHero(h);hs.push(h)}});
S.t=(S.t||[]).filter(function(t){return !(t&&t.pre)}).filter(function(t){return !emp(t)});
S.h=(S.h||[]).filter(function(h){return h&&!emp(h)&&!h.pre});
S.h=S.h.concat(hs.length?hs:makePresetHeroes());
}else{
S.h=(S.h||[]).filter(function(h){return h&&!emp(h)&&!h.pre});
}
try{save()}catch(e){}
}
document.addEventListener('change',function(e){var p=e.target&&e.target.dataset?e.target.dataset.p:null;if(p==='bc'){ensureBCWargear();applyWanderers();render()}},false);
document.addEventListener('click',function(e){var q=e.target&&e.target.closest?e.target.closest('[data-q="ok"]'):null;if(q){ensureBCWargear();applyWanderers();render()}},false);
ensureBCWargear();render();
})();
}catch(e){console.error('[HERO-PRESET v22]',e)}
;
/* ----- [13/36] DUP-PATCH v23 ----- */
try{
/*DUP-PATCH v23*/
(function(){
var HOOKED=true;
var MSG='Attenzione equipaggiamento già presente nel profilo';
function msgDup(){try{if(typeof infoBox==='function'){infoBox([MSG]);return}}catch(e){}alert(MSG)}
function veto(e){
var el=e.target,p=el&&el.dataset?el.dataset.p:null;if(!p)return false;
var m=p.match(/^([ht])\.(\d+)\.g\.(bw|aw)\.(\d+)$/);if(!m)return false;
var u=(m[1]==='h'?S.h:S.t)[+m[2]];if(!u||!u.g)return false;
var nv=el.value;if(!nv)return false;
var slot=m[3],si=+m[4];
var old=(u.g[slot]||[])[si];
if(nv===old)return false;
var list=[];
['bw','aw'].forEach(function(k){(u.g[k]||[]).forEach(function(v,j){if(v&&!(k===slot&&j===si))list.push(v)})});
if(list.indexOf(nv)<0)return false;
e.stopImmediatePropagation();e.preventDefault();
el.value=old||'';
msgDup();
return true;
}
window.__dupVeto=veto;
if(!HOOKED){document.addEventListener('change',function(e){veto(e)},true)}
})();
}catch(e){console.error('[DUP-PATCH v23]',e)}
;
/* ----- [14/36] ARM-PATCH v24 ----- */
try{
/*ARM-PATCH v24*/
(function(){
var ARMORS=['Armour','Light Armour','Heavy Armour','Heavy Dwarf Armour','Dwarf Armour'];
var NODE={'':0,'Light Armour':0,'Armour':1,'Dwarf Armour':2,'Heavy Armour':3,'Heavy Dwarf Armour':4};
var EDGES=[[0,1,1],[0,2,1],[0,3,2],[0,4,2],[1,3,1],[1,2,1],[2,4,1]];
function dist(a,b){if(a===b)return 0;var D=[99,99,99,99,99];D[a]=0;var q=[a];
while(q.length){var cur=q.shift();for(var i=0;i<EDGES.length;i++){var e=EDGES[i];if(e[0]===cur){var nd=D[cur]+e[2];if(nd<D[e[1]]){D[e[1]]=nd;q.push(e[1])}}}}
return D[b]>=99?0:D[b]}
function baseNode(u){var n=0;(u.g&&u.g.bw||[]).forEach(function(v){if(NODE[v]!=null&&NODE[v]>n)n=NODE[v]});return n}
window.__ARMORS=ARMORS;
window.__armCost=function(u,nv){var t=NODE[nv];if(t==null||t<=0)return 0;return dist(baseNode(u),t)};
function armInc(u,kind){if(!u||!u.model||u.miss)return 0;var added=0;(u.g.aw||[]).forEach(function(v){if(NODE[v]!=null&&NODE[v]>added)added=NODE[v]});if(!added)return 0;var d=dist(baseNode(u),added);return d*(kind==='h'?5:2)}
function armorAwOld(u,r,kind){var s=0;(u.g.aw||[]).forEach(function(v){if(ARMORS.indexOf(v)>=0){var wt=kind==='h'?((r.hi?D.wg.heroHi:D.wg.heroLo)):D.wg.heroLo;s+=+wt[v]||0}});return s}
function reRate(r){var s=0;for(var k in r.c){if(k!=='rating')s+=+r.c[k]||0}r.c.rating=s}
var _hero=window.hero,_troop=window.troop;
window.hero=function(h){var r=_hero(h);var inc=armInc(h,'h');if(inc&&r.c&&r.c.rating){var old=armorAwOld(h,r,'h');r.c.wg=(r.c.wg||0)-old;r.c.arm=inc;reRate(r)}return r};
window.troop=function(t){var r=_troop(t);var inc=armInc(t,'t');if(inc&&r.c&&r.c.rating){var old=armorAwOld(t,r,'t');r.c.wg=(r.c.wg||0)-old;r.c.arm=inc;reRate(r)}return r};
render();
})();
}catch(e){console.error('[ARM-PATCH v24]',e)}
;
