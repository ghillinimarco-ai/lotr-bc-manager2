/* ----- [23/36] PATH-HA v42 ----- */
try{
/*PATH-HA v42*/
(function(){
/* fonte: Azioni_eroiche.xlsx - Path scelto -> azione eroica caricata di default */
var PHA={"Accuracy":"Heroic Accuracy","Challenge":"Heroic Challenge","Channeling":"Heroic Channeling","Defence":"Heroic Defence","March":"Heroic March","Resolve":"Heroic Resolve","Strength":"Heroic Strength","Strike":"Heroic Strike"};
document.addEventListener('change',function(e){
var p=e.target&&e.target.dataset?e.target.dataset.p:null;if(!p)return;
var m=p.match(/^h\.(\d+)\.path$/);if(!m)return;
var h=S.h[+m[1]];if(!h)return;
var ha=PHA[h.path];if(!ha)return;
h.g.ha=h.g.ha||[];
if(h.g.ha.indexOf(ha)>=0)return;
var idx=-1;for(var i=0;i<h.g.ha.length;i++){if(!h.g.ha[i]){idx=i;break}}
if(idx<0){if(h.g.ha.length<4)idx=h.g.ha.length;else return}
h.g.ha[idx]=ha;
try{save()}catch(err){}
render();
},false);
function emptyTabs(){
if(typeof S==='undefined'||!S)return;
if(S.bc)return;
if(tab!=='h'&&tab!=='t')return;
var app=document.getElementById('app');if(!app)return;
app.innerHTML='<p class="mu" style="padding:34px 12px;text-align:center;font-style:italic;font-size:13px">Nessuna Battle Company selezionata: scegli una BC per popolare Eroi e Truppe.</p>';
}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);emptyTabs();return x};
emptyTabs();
})();
}catch(e){console.error('[PATH-HA v42]',e)}
;
