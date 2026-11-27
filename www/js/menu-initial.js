/* ----- [35/36] MENU-INITIAL v78 ----- */
try{
/*MENU-INITIAL v78*/
(function(){
var css=document.createElement('style');css.id='anim78css';
css.textContent='.hid78{display:none!important}';
document.head.appendChild(css);
function norm(s){return String(s==null?'':s).replace(/\s+/g,' ').trim()}
var P={'Gestione BC':1,'Battaglia':1};
function cntP(node){var s=norm(node.textContent),c=0;for(var k in P){if(s.indexOf(k)>=0)c++}return c}
function fixSpacing(){
try{
var tiles=document.querySelector('.tiles');
var ban=document.querySelector('.ban')||document.querySelector('header');
if(!tiles||!ban)return;
var tr=tiles.getBoundingClientRect();
var br=ban.getBoundingClientRect();
var gapTop=tr.top-br.bottom;
if(!(gapTop>0))return;
var under=tiles.nextElementSibling,ut=null;
while(under){
var cs=getComputedStyle(under);
if(cs.display!=='none'&&under.offsetHeight>0){ut=under.getBoundingClientRect().top;break}
under=under.nextElementSibling;
}
if(ut==null)return;
var curGap=ut-tr.bottom;
var deficit=gapTop-curGap;
if(deficit>1){tiles.style.marginBottom=Math.round(deficit)+'px'}
}catch(e){}
}
function sync(){
try{
var stale=document.querySelectorAll('.hid78,.hid77,.hid76,.hid75c,.hid75b,.hid75');
for(var i=0;i<stale.length;i++){stale[i].classList.remove('hid78','hid77','hid76','hid75c','hid75b','hid75')}
var t0=document.querySelector('.tiles');if(t0)t0.style.marginBottom='';
var hasBC=(typeof S!=='undefined'&&S&&S.bc);
if(hasBC)return;
var all=document.querySelectorAll('body *');
for(var j=0;j<all.length;j++){
var el=all[j];var t=norm(el.textContent);
if(!P[t])continue;
var cur=el;
while(cur.parentElement&&cur.parentElement!==document.body&&cntP(cur.parentElement)===1){cur=cur.parentElement}
cur.classList.add('hid78');
}
var hls=document.querySelectorAll('.hl');
for(var m=0;m<hls.length;m++){
if(hls[m].querySelector('.hlc'))hls[m].classList.add('hid78');
}
fixSpacing();
}catch(e){}
}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);sync();return x};
setTimeout(sync,300);
sync();
})();
}catch(e){console.error('[MENU-INITIAL v78]',e)}
;
