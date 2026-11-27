/* ----- [33/36] RING-FORENSIC v59 ----- */
try{
/*RING-FORENSIC v59*/
(function(){
var css=document.createElement('style');css.id='anim59css';
css.textContent='@keyframes f59spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes f59osc{from{transform:rotate(-5deg)}to{transform:rotate(5deg)}}@keyframes f59glow{0%,100%{filter:drop-shadow(0 0 0 rgba(217,163,30,0))}50%{filter:drop-shadow(0 0 12px rgba(217,163,30,.6))}}.f59spin{animation:f59spin 24s linear infinite;transform-origin:50% 50%}.f59spinbg{animation:f59spin 40s linear infinite;transform-origin:50% 50%}.f59osc{animation:f59osc 5s ease-in-out infinite alternate;transform-origin:50% 50%}.f59glow{animation:f59glow 3s ease-in-out infinite}#f59host::before,#f59host::after{animation:f59spin 40s linear infinite;transform-origin:50% 50%}@media (prefers-reduced-motion:reduce){.f59spin,.f59spinbg,.f59osc,.f59glow,#f59host::before,#f59host::after{animation:none!important}}';
document.head.appendChild(css);
var EXCL='nav,button,label,.tm2,.mn,.mdl,.stp2,.hlc,.card,.cmpc,.brow,.vtog';
function hasRing(s){return /url\(\s*(["']?)(data:image\/svg|blob:)/.test(s||'')}
function urlOf(s){var m=(s||'').match(/url\(\s*(["']?)([^)"']+)\1\s*\)/);return m?m[2]:''}
function escRe(s){return String(s).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
function richGroup(svg){var gs=svg.querySelectorAll('g'),best=null,n=0;for(var i=0;i<gs.length;i++){var c=gs[i].querySelectorAll('*').length;if(c>n){n=c;best=gs[i]}}return (best&&n>=6)?best:null}
function bigSquare(el){var r=el.getBoundingClientRect();if(r.width<120||r.height<120)return false;return !(r.width/r.height>2.2||r.height/r.width>2.2)}
function pathOf(el){var parts=[];var n=el;while(n&&n.nodeType===1&&n!==document.documentElement){var i=1;var s=n.previousElementSibling;while(s){s=s.previousElementSibling;i++}parts.unshift(n.tagName.toLowerCase()+':nth-child('+i+')');n=n.parentElement}return 'html>'+parts.join('>')}
function lab(el){return el.tagName.toLowerCase()+((el.className&&typeof el.className==='string')?'.'+el.className.split(' ')[0]:'')}
var DESC=null,ov=null,report='',tick=0,toastDone=false;
function scan(){
var out={crest:null,bg:null};var rep=[];
var svgs=document.querySelectorAll('svg');
for(var i=0;i<svgs.length;i++){var el=svgs[i];if(el.closest&&el.closest(EXCL))continue;var r=el.getBoundingClientRect();if(r.width<80||r.height<80)continue;
var g=richGroup(el);
if(r.width>=300&&r.height>=300){rep.push('svg-big:'+Math.round(r.width));if(!out.bg)out.bg={type:'svg',path:pathOf(el),group:!!g};continue}
if(!out.crest){if(g){out.crest={type:'group',path:pathOf(el)};rep.push('svg-crest')}else if(bigSquare(el)){out.crest={type:'pulse',path:pathOf(el)};rep.push('svg-crest-pulse')}}
}
var imgs=document.querySelectorAll('img');
for(var j=0;j<imgs.length;j++){var im=imgs[j];if(!/data:image\/svg|blob:/.test(im.src||''))continue;if(im.closest&&im.closest(EXCL))continue;var r2=im.getBoundingClientRect();if(r2.width<80||r2.height<80)continue;
if(r2.width>=300&&r2.height>=300){rep.push('img-big:'+Math.round(r2.width));if(!out.bg)out.bg={type:'img',path:pathOf(im)};continue}
if(!out.crest&&bigSquare(im)){out.crest={type:'pulse',path:pathOf(im)};rep.push('img-crest')}
}
var all=document.querySelectorAll('body *');
for(var k=0;k<all.length;k++){var el2=all[k];if(el2.closest&&el2.closest(EXCL))continue;
var cs=getComputedStyle(el2);
var layers=[['background',cs.backgroundImage],['mask',(cs.maskImage||cs.webkitMaskImage||'')]];
for(var p=0;p<2;p++){
if(hasRing(layers[p][1])){var r3=el2.getBoundingClientRect();rep.push('el-'+layers[p][0]+':'+lab(el2)+':'+Math.round(r3.width));
if(!out.bg&&(Math.max(r3.width,r3.height)>=250||cs.position==='fixed'||cs.position==='absolute')){
out.bg={type:'el',prop:layers[p][0],path:pathOf(el2),url:urlOf(layers[p][1]),pos:cs.backgroundPosition,size:cs.backgroundSize,rep:cs.backgroundRepeat,maskpos:(cs.webkitMaskPosition||cs.maskPosition||'center'),masksize:(cs.webkitMaskSize||cs.maskSize||'contain'),bgcol:cs.backgroundColor};
}}}
var ps=[[getComputedStyle(el2,'::before'),'::before'],[getComputedStyle(el2,'::after'),'::after']];
for(var q=0;q<2;q++){var csp=ps[q][0],pn=ps[q][1];var hit=null;
if(hasRing(csp.backgroundImage))hit='background';
else if(hasRing(csp.maskImage||csp.webkitMaskImage||''))hit='mask';
else if(/url\(/.test(csp.content||''))hit='content';
if(hit){var r4=el2.getBoundingClientRect();rep.push('pseudo'+pn+'-'+hit+':'+lab(el2)+':'+Math.round(r4.width));
if(!out.bg)out.bg={type:'pseudo',pseudo:pn,prop:hit,path:pathOf(el2)};
}}
}
report=rep.join(' | ')||'none';
try{window.__ringReport=report}catch(e){}
return out;
}
function makeOv(b){
if(ov)return ov;
ov=document.createElement('div');ov.id='f59bgov';
if(b.prop==='mask'){
ov.style.cssText='position:fixed;inset:0;z-index:-1;pointer-events:none;background:'+b.bgcol+';mask-image:url("'+b.url+'");-webkit-mask-image:url("'+b.url+'");mask-position:'+b.maskpos+';-webkit-mask-position:'+b.maskpos+';mask-size:'+b.masksize+';-webkit-mask-size:'+b.masksize+';mask-repeat:no-repeat;-webkit-mask-repeat:no-repeat';
}else{
ov.style.cssText='position:fixed;inset:0;z-index:-1;pointer-events:none;background-image:url("'+b.url+'");background-position:'+b.pos+';background-size:'+b.size+';background-repeat:'+b.rep;
}
ov.classList.add('f59spinbg');
document.body.appendChild(ov);
return ov;
}
function apply(){
try{
var old=document.querySelectorAll('.f59spin,.f59spinbg,.f59osc,.f59glow,.f57spin,.f57spinbg,.f57osc,.f57glow,.f56spin,.f56spinbg,.f55spin,.f55spinbg,.f54spin,.f54spinbg');
for(var i=0;i<old.length;i++){old[i].classList.remove('f59spin','f59spinbg','f59osc','f59glow','f57spin','f57spinbg','f57osc','f57glow','f56spin','f56spinbg','f55spin','f55spinbg','f54spin','f54spinbg')}
var mode=document.body.getAttribute('data-th')||'';
if(ov)ov.style.display=(mode==='base')?'':'none';
if(mode!=='base'){var ph=document.getElementById('f59host');if(ph)ph.removeAttribute('id');return}
tick++;
if(!DESC||(!DESC.bg&&tick%25===0)){DESC=scan()}
if(DESC&&DESC.crest){var ce=document.querySelector(DESC.crest.path);
if(ce){if(DESC.crest.type==='group'){var g=richGroup(ce);(g||ce).classList.add('f59spin')}else{ce.classList.add('f59osc');ce.classList.add('f59glow')}}}
var bk='none';
if(DESC&&DESC.bg){var B=DESC.bg;
if(B.type==='svg'){var se=document.querySelector(B.path);if(se){var gg=richGroup(se);(gg||se).classList.add('f59spinbg');bk='svg'}}
else if(B.type==='img'){var ie=document.querySelector(B.path);if(ie){ie.classList.add('f59spinbg');bk='img'}}
else if(B.type==='pseudo'){var he=document.querySelector(B.path);if(he){he.id='f59host';bk='pseudo'+B.pseudo+'-'+B.prop}}
else if(B.type==='el'){var ho=document.querySelector(B.path);
if(ho){makeOv(B);ov.style.display='';
var cs2=getComputedStyle(ho);
if(B.prop==='background'){var bi=cs2.backgroundImage;var rest=bi.replace(new RegExp('url\\(\\s*["\']?'+escRe(B.url)+'["\']?\\s*\\)[^,]*'),'').replace(/^,\s*/,'').replace(/,\s*$/,'');ho.style.setProperty('background-image',rest||'none','important')}
else{ho.style.setProperty('mask-image','none','important');ho.style.setProperty('-webkit-mask-image','none','important')}
bk='el-'+B.prop;
}}
}
if(!toastDone){toastDone=true;try{toast('🌀 v59: sfondo='+bk+' ['+report.slice(0,70)+']')}catch(e){}}
}catch(e){}
}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);apply();return x};
apply();
})();
}catch(e){console.error('[RING-FORENSIC v59]',e)}
;
