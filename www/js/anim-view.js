/* ----- [30/36] ANIM-VIEW v50 ----- */
try{
/*ANIM-VIEW v50*/
(function(){
var lastBVC=null;
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);
try{
var app=document.getElementById('app');
if(app){
var bvc=!!(S&&S.bvc);
if(bvc!==lastBVC){
if(lastBVC!==null){
app.classList.remove('anim-in');void app.offsetWidth;app.classList.add('anim-in');
clearTimeout(window.__v50t);window.__v50t=setTimeout(function(){app.classList.remove('anim-in')},1400);
}
lastBVC=bvc;
}
}
}catch(e){}
return x};
})();
}catch(e){console.error('[ANIM-VIEW v50]',e)}
;
