/* ----- [21/36] AROW-FIX v39 ----- */
try{
/*AROW-FIX v39*/
(function(){
function clean(){
var hdr=document.querySelector('header');if(!hdr)return;
var mns=hdr.querySelectorAll('.mn,.mn36');
for(var a=0;a<mns.length;a++){mns[a].style.display=mns[a].querySelector('button')?'':'none'}
var rows=hdr.querySelectorAll('.arow36');
var keep=null;
for(var b=0;b<rows.length;b++){if(rows[b].querySelector('select'))keep=rows[b]}
if(keep){for(var c=0;c<rows.length;c++){if(rows[c]!==keep)rows[c].style.display='none'}}
var divs=hdr.querySelectorAll('div');
for(var i=0;i<divs.length;i++){var d=divs[i];
if(d.id==='ar'||d.id==='nav'||d.id==='tot')continue;
if(d.classList.contains('arow36')||d.classList.contains('mn')||d.classList.contains('mn36'))continue;
if(d.querySelector('select,input,button,svg,img,a'))continue;
if((d.textContent||'').trim())continue;
d.style.display='none';
}
}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);clean();return x};
clean();
})();
}catch(e){console.error('[AROW-FIX v39]',e)}
;
