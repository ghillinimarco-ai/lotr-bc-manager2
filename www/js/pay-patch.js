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
