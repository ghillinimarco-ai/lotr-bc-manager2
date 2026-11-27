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
