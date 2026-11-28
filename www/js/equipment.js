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
