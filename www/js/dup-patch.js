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
