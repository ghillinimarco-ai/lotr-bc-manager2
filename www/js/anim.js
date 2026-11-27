/* ----- [29/36] ANIM v49 ----- */
try{
/*ANIM v49*/
(function(){
var css=document.createElement('style');css.id='anim49css';
css.textContent=
'@keyframes a48card{from{opacity:0;transform:translateY(10px) scale(.98)}to{opacity:1;transform:none}}'+
'#app.anim-in .grid>*{animation:a48card .55s ease-out both}'+
'#app.anim-in .grid>*:nth-child(2){animation-delay:55ms}#app.anim-in .grid>*:nth-child(3){animation-delay:110ms}#app.anim-in .grid>*:nth-child(4){animation-delay:165ms}#app.anim-in .grid>*:nth-child(5){animation-delay:220ms}#app.anim-in .grid>*:nth-child(6){animation-delay:275ms}#app.anim-in .grid>*:nth-child(7){animation-delay:330ms}#app.anim-in .grid>*:nth-child(8){animation-delay:385ms}#app.anim-in .grid>*:nth-child(9){animation-delay:440ms}#app.anim-in .grid>*:nth-child(10){animation-delay:495ms}#app.anim-in .grid>*:nth-child(11){animation-delay:550ms}#app.anim-in .grid>*:nth-child(n+12){animation-delay:600ms}'+
'@keyframes a48mdl{from{opacity:0}to{opacity:1}}@keyframes a48mb{from{opacity:0;transform:scale(.92) translateY(8px)}to{opacity:1;transform:none}}'+
'.mdl{animation:a48mdl .32s ease-out both}.mdl .mb{animation:a48mb .42s cubic-bezier(.2,.9,.3,1.15) both}'+
'@keyframes a48toast{from{opacity:0;transform:translateY(14px) scale(.96)}to{opacity:1;transform:none}}.toast{animation:a48toast .5s ease-out both}'+
'@keyframes a48shine{from{background-position:-150% 0}to{background-position:250% 0}}'+
'.btn.pri,#endb.bigstart,.arow36 button.nb36,.arow36 button.mb36{position:relative;overflow:hidden}'+
'.btn.pri::after,#endb.bigstart::after,.arow36 button.nb36::after,.arow36 button.mb36::after{content:\'\';position:absolute;inset:0;pointer-events:none;background:linear-gradient(110deg,transparent 32%,rgba(255,255,255,.32) 50%,transparent 68%);background-size:220% 100%;animation:a48shine 6s linear infinite}'+
'.btn:active{transform:scale(.96)}'+
'@keyframes a48pulse{0%,100%{box-shadow:0 0 0 0 color-mix(in srgb,var(--ac) 45%,transparent)}50%{box-shadow:0 0 18px 4px color-mix(in srgb,var(--ac) 55%,transparent)}}'+
'.tm2.on{animation:a48pulse 3s ease-in-out infinite}.tm2 svg circle{transition:stroke-dashoffset .4s linear}'+
'@keyframes a48breathe{0%,100%{box-shadow:0 6px 16px color-mix(in srgb,var(--ac) 25%,transparent)}50%{box-shadow:0 6px 26px color-mix(in srgb,var(--ac) 60%,transparent)}}'+
'#endb.bigstart:not(.running){animation:a48breathe 4s ease-in-out infinite}'+
'@keyframes a48xfade{from{opacity:.25;filter:saturate(.5)}to{opacity:1;filter:none}}body.xfade header,body.xfade #app{animation:a48xfade .8s ease both}'+
'@keyframes a48xp{from{transform:scaleX(0)}to{transform:scaleX(1)}}.xpb i{transition:width .9s cubic-bezier(.3,.8,.3,1);transform-origin:left center}#app.xp-anim .xpb i{animation:a48xp 1s cubic-bezier(.3,.8,.3,1) both}'+
'@keyframes a48shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-7px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(3px)}}.shake48{animation:a48shake .7s ease both}'+
'@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}';
document.head.appendChild(css);
var lastTab=null,lastBC=null,lastXP=null;
function xpSig(){try{return S.h.concat(S.t).map(function(u){return u.xp||0}).join(',')}catch(e){return ''}}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);
try{
var app=document.getElementById('app');
if(app){
if(typeof tab!=='undefined'&&tab!==lastTab){lastTab=tab;app.classList.remove('anim-in');void app.offsetWidth;app.classList.add('anim-in');clearTimeout(window.__a48t);window.__a48t=setTimeout(function(){app.classList.remove('anim-in')},1400)}
var bc=S?S.bc:null;
if(bc!==lastBC){if(lastBC!==null){document.body.classList.add('xfade');clearTimeout(window.__x48t);window.__x48t=setTimeout(function(){document.body.classList.remove('xfade')},900)}lastBC=bc}
var xs=xpSig();
if(xs!==lastXP){if(lastXP!==null){app.classList.remove('xp-anim');void app.offsetWidth;app.classList.add('xp-anim');clearTimeout(window.__xp48t);window.__xp48t=setTimeout(function(){app.classList.remove('xp-anim')},1300)}lastXP=xs}
}
}catch(e){}
return x};
if(typeof infoBox==='function'){var _ib=window.infoBox;window.infoBox=function(){var r=_ib.apply(this,arguments);setTimeout(function(){var mbs=document.querySelectorAll('.mdl .mb');var mb=mbs[mbs.length-1];if(mb&&/insufficienti|scegliere l'MVP/i.test(mb.textContent||'')){mb.classList.remove('shake48');void mb.offsetWidth;mb.classList.add('shake48')}},0);return r}}
})();
}catch(e){console.error('[ANIM v49]',e)}
;
