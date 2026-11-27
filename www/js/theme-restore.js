/* ----- [34/36] THEME-RESTORE v61 ----- */
try{
/*THEME-RESTORE v61*/
(function(){
var GOLD={'--ac':'#d9a31e','--ac2':'#f2d488','--c1':'#e2a72e','--c2':'#c85a17','--on':'#1a1206'};
function sync(){
try{
var bc=(typeof S!=='undefined'&&S)?(S.bc||''):'';
var els=[document.documentElement,document.body];
var t,k,el;
if(!bc){
for(t=0;t<2;t++){if(!els[t])continue;for(k in GOLD){els[t].style.setProperty(k,GOLD[k],'important')}}
}else{
for(t=0;t<2;t++){if(!els[t])continue;for(k in GOLD){el=els[t];var v=el.style.getPropertyValue(k);if(v&&v.trim()===GOLD[k]){el.style.removeProperty(k)}}}
}
}catch(e){}
}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);sync();return x};
sync();
})();
}catch(e){console.error('[THEME-RESTORE v61]',e)}
;
