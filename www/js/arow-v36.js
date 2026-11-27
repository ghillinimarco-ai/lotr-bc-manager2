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
