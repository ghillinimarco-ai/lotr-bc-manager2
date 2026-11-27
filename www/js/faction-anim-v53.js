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
