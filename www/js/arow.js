/* ----- [18/36] AROW v36 ----- */
try{
/*AROW v36*/
(function(){
function fix(){
var sel=document.getElementById('asel')||document.querySelector('header select');
if(!sel)return;
var row=sel.parentElement;
if(row&&row.tagName==='DIV'&&!row.classList.contains('arow36'))row.classList.add('arow36');
if(!sel.classList.contains('sel36'))sel.classList.add('sel36');
var inp=row?row.querySelector('input[readonly]'):null;
if(inp&&!inp.classList.contains('anm36'))inp.classList.add('anm36');
if(row){var bs=row.querySelectorAll('button');for(var i=0;i<bs.length;i++){var b=bs[i];
if(b.closest&&b.closest('.mn'))continue;
var t=(b.textContent||'').trim();
var cls=/Nuova/i.test(t)?'nb36':((t==='⋮'||t==='︙'||/mbtn|menubtn|menu/i.test(b.id||''))?'mb36':(b.classList.contains('warn')?'wb36':'ab36'));
if(!b.classList.contains(cls))b.classList.add(cls);
}}
var mn=(row&&row.querySelector('.mn'))||document.querySelector('.mn');
if(mn&&!mn.classList.contains('mn36'))mn.classList.add('mn36');
}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);fix();return x};
fix();
})();
}catch(e){console.error('[AROW v36]',e)}
;
/* ----- [19/36] AROW-FIX v37 ----- */
try{
/*AROW-FIX v37*/
(function(){
var css=document.createElement('style');css.id='arow37css';
css.textContent='.arow36{overflow:visible}.mn36,.arow36 .mn{position:absolute;top:calc(100% + 6px);right:0;z-index:95;min-width:230px;display:flex;flex-direction:column;overflow:visible}.arow36 button{position:relative;z-index:2}';
document.head.appendChild(css);
document.addEventListener('click',function(e){
var b=e.target&&e.target.closest?e.target.closest('#mbtn,.arow36 button.mb36'):null;
if(!b)return;
if(b.dataset.v37pass){delete b.dataset.v37pass;return}
e.stopPropagation();e.preventDefault();
if(typeof mo!=='undefined'){mo=!mo;try{render()}catch(err){}}
else{b.dataset.v37pass='1';b.click()}
},true);
})();
}catch(e){console.error('[AROW-FIX v37]',e)}
;
/* ----- [20/36] AROW-FIX v38 ----- */
try{
/*AROW-FIX v38*/
(function(){
function fix(){
var sel=document.getElementById('asel')||document.querySelector('header select');
if(!sel)return;
var row=document.getElementById('ar')||sel.closest('#ar')||sel.parentElement;
if(!row)return;
if(!row.classList.contains('arow36'))row.classList.add('arow36');
var inp=row.querySelector('input[readonly]')||document.querySelector('header input[readonly]');
var mbtn=document.getElementById('mbtn')||null;
if(!mbtn){var hb=document.querySelectorAll('header button');for(var i=0;i<hb.length;i++){var t=(hb[i].textContent||'').trim();if(t==='⋮'||t==='︙'||hb[i].classList.contains('mb36')){mbtn=hb[i];break}}}
var nuova=null;var rb=row.querySelectorAll('button');for(var j=0;j<rb.length;j++){if(/Nuova/i.test(rb[j].textContent||'')){nuova=rb[j];break}}
if(sel.parentElement!==row)row.appendChild(sel);
if(inp&&inp.parentElement!==row)row.appendChild(inp);
if(nuova&&nuova.parentElement!==row)row.appendChild(nuova);
if(mbtn&&mbtn.parentElement!==row)row.appendChild(mbtn);
var mn=row.querySelector('.mn')||document.querySelector('header .mn');
if(mn&&mn.parentElement!==row)row.appendChild(mn);
if(!sel.classList.contains('sel36'))sel.classList.add('sel36');
if(inp&&!inp.classList.contains('anm36'))inp.classList.add('anm36');
if(nuova&&!nuova.classList.contains('nb36'))nuova.classList.add('nb36');
if(mbtn&&!mbtn.classList.contains('mb36'))mbtn.classList.add('mb36');
if(mn&&!mn.classList.contains('mn36'))mn.classList.add('mn36');
var nav=document.getElementById('nav');
var header=row.closest('header')||document.querySelector('header');
if(nav&&header){var pos=row.compareDocumentPosition(nav);if(!(pos&4)){header.insertBefore(row,nav)}}
}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);fix();return x};
fix();
})();
}catch(e){console.error('[AROW-FIX v38]',e)}
;
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
