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
