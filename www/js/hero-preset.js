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
