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
/* ----- [31/36] FACTION-ANIM v52 ----- */
try{
/*FACTION-ANIM v52*/
(function(){
var css=document.createElement('style');css.id='anim52css';
css.textContent=
'@keyframes f52spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}'+
'@keyframes f52teng{from{transform:translateX(-8%)}to{transform:translateX(8%)}}'+
'@keyframes f52beat{0%,100%{transform:scale(1)}10%{transform:scale(1.18)}22%{transform:scale(1)}34%{transform:scale(1.1)}46%{transform:scale(1)}}'+
'@keyframes f52glow{0%,100%{box-shadow:0 0 0 0 rgba(255,40,10,0)}50%{box-shadow:0 0 42px 12px rgba(255,40,10,.7)}}'+
'@keyframes f52lava{0%,100%{opacity:.3}50%{opacity:.9}}'+
'@keyframes f52banglow{0%,100%{box-shadow:0 0 0 0 rgba(217,163,30,0)}50%{box-shadow:0 0 30px 5px rgba(217,163,30,.4)}}'+
'.f52spin{animation:f52spin 16s linear infinite;transform-origin:50% 50%}'+
'.f52teng{animation:f52teng 3.5s ease-in-out infinite alternate}'+
'.f52beat{animation:f52beat 1.4s ease-in-out infinite;transform-origin:50% 50%}'+
'.f52glow{animation:f52glow 1.4s ease-in-out infinite;border-radius:16px}'+
'body[data-th="mordor"] .f52ban{position:relative;overflow:hidden}'+
'body[data-th="mordor"] .f52ban::after{content:\'\';position:absolute;inset:0;pointer-events:none;background:linear-gradient(200deg,transparent 35%,rgba(255,110,30,.45) 50%,transparent 65%),linear-gradient(160deg,transparent 50%,rgba(255,60,20,.35) 65%,transparent 80%);animation:f52lava 2.8s ease-in-out infinite}'+
'body[data-th="base"] .f52ban{animation:f52banglow 5s ease-in-out infinite}'+
'@media (prefers-reduced-motion:reduce){.f52spin,.f52teng,.f52beat,.f52glow,.f52ban,.f52ban::after{animation:none!important}}';
document.head.appendChild(css);
function clearTags(){
var els=document.querySelectorAll('.f52spin,.f52beat,.f52glow,.f52ban,.f52teng');
for(var i=0;i<els.length;i++){els[i].classList.remove('f52spin','f52beat','f52glow','f52ban','f52teng')}
}
function tag(){
try{
var bc=(typeof S!=='undefined'&&S)?(S.bc||''):'';
var mode=bc==='Mordor'?'mordor':(bc?'other':'base');
document.body.setAttribute('data-th',mode);
clearTags();
var csv=document.querySelector('header svg');
var ban=document.querySelector('.ban')||document.querySelector('.banner')||document.querySelector('#ban')||document.querySelector('header [class*="ban"]');
var teng=document.querySelector('[class*="teng"]');
if(ban)ban.classList.add('f52ban');
if(teng)teng.classList.add('f52teng');
if(mode==='base'&&csv)csv.classList.add('f52spin');
if(mode==='mordor'&&csv){csv.classList.add('f52beat');if(csv.parentElement)csv.parentElement.classList.add('f52glow')}
}catch(e){}
}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);tag();return x};
tag();
})();
}catch(e){console.error('[FACTION-ANIM v52]',e)}
;
/* ----- [32/36] FACTION-ANIM v53 ----- */
try{
/*FACTION-ANIM v53*/
(function(){
var css=document.createElement('style');css.id='anim53css';
css.textContent=
'@keyframes f53spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}'+
'@keyframes f53teng{from{transform:translateX(-3%)}to{transform:translateX(3%)}}'+
'@keyframes f53pulse{0%,100%{transform:scale(1);filter:drop-shadow(0 0 0 rgba(217,163,30,0))}50%{transform:scale(1.06);filter:drop-shadow(0 0 14px rgba(217,163,30,.55))}}'+
'.f53ring{animation:f53spin 24s linear infinite;transform-origin:50% 50%}'+
'.f52teng,.f53teng{animation:f53teng 10s ease-in-out infinite alternate}'+
'.f53pulse{animation:f53pulse 3s ease-in-out infinite;transform-origin:50% 50%}'+
'body[data-th="base"]::before{animation:f53spin 40s linear infinite}'+
'#f53bg{animation:f53spin 40s linear infinite}'+
'@media (prefers-reduced-motion:reduce){.f53ring,.f53pulse,.f52teng,.f53teng,body[data-th="base"]::before,#f53bg{animation:none!important}}';
document.head.appendChild(css);
function clear53(){
var els=document.querySelectorAll('.f53ring,.f53pulse,.f52spin');
for(var i=0;i<els.length;i++){els[i].classList.remove('f53ring','f53pulse','f52spin')}
}
function richGroup(svg){
var gs=svg.querySelectorAll('g'),best=null,n=0;
for(var i=0;i<gs.length;i++){var c=gs[i].querySelectorAll('*').length;if(c>n){n=c;best=gs[i]}}
return (best&&n>=6)?best:null;
}
function bg53(){
var o=document.getElementById('f53bg');
var pseudo='';
try{pseudo=getComputedStyle(document.body,'::before').backgroundImage||''}catch(e){}
if(/data:image\/svg/.test(pseudo)){if(o)o.style.display='none';return}
if(o){o.style.display='';if(o.dataset.rest!=null)document.body.style.backgroundImage=o.dataset.rest||'none';return}
var bi='';
try{bi=getComputedStyle(document.body).backgroundImage||''}catch(e){}
var m=bi.match(/url\([^)]*data:image\/svg[^)]*\)/);
if(!m)return;
var rest=bi.split(m[0]).join('').replace(/^,\s*/,'').replace(/,\s*$/,'');
var d=document.createElement('div');d.id='f53bg';
d.dataset.rest=rest;
d.style.cssText='position:fixed;inset:0;z-index:-1;pointer-events:none;background-image:'+m[0]+';background-position:center;background-size:contain;background-repeat:no-repeat';
document.body.appendChild(d);
document.body.style.backgroundImage=rest||'none';
}
function tag53(){
try{
clear53();
var mode=document.body.getAttribute('data-th')||'';
if(mode==='base'){
var host=document.querySelector('header svg')||document.querySelector('#crest svg')||document.querySelector('.cr svg');
var container=null;
if(!host){
container=document.querySelector('#crest')||document.querySelector('.cr')||document.querySelector('header [class*="crest"]');
if(container)host=container.querySelector('svg');
}
if(host){
var g=richGroup(host);
if(g)g.classList.add('f53ring');
else (container||host.parentElement||host).classList.add('f53pulse');
}else if(container){container.classList.add('f53pulse')}
bg53();
}else{
var o=document.getElementById('f53bg');if(o)o.style.display='none';
document.body.style.backgroundImage='';
}
}catch(e){}
}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);tag53();return x};
tag53();
})();
}catch(e){console.error('[FACTION-ANIM v53]',e)}
;
