/* ----- [07/36] WGAV-PATCH v15 ----- */
try{
/*WGAV-PATCH v15*/
(function(){
var TB='Twin Blades';
var d=D.bcs.find(function(x){return x.id==='Durins_Folk'});
if(d)d.awex=['Foe Spear','Iron Shield'];
D.bcs.forEach(function(b){if((b.models||[]).indexOf('Watcher of Kârna with Twin Blades')>=0){b.awadd=b.awadd||[];if(b.awadd.indexOf(TB)<0)b.awadd.push(TB)}});
var W=D.wg;
[['Pavise',1,5],['Elven Cloak',1,5],['Berserker Blade',1,5],[TB,1,1]].forEach(function(e){if(W.base[e[0]]==null)W.base[e[0]]=e[1];if(W.heroLo[e[0]]==null)W.heroLo[e[0]]=e[1];if(W.heroHi[e[0]]==null)W.heroHi[e[0]]=e[2]});
render();
})();
}catch(e){console.error('[WGAV-PATCH v15]',e)}
;
