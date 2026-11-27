/* ----- [06/36] ORO-FIX v13 ----- */
try{
/*ORO-FIX v13*/
(function(){
if(typeof S!=='undefined'&&S&&(!isFinite(S.oro)||S.oro==null))S.oro=+S.oro||0;
function fixNest(){var o=document.querySelector('.hlc.o');if(!o)return;var p=o.parentNode;
if(p&&!p.classList.contains('hl')){var hl=document.querySelector('.hl');if(hl){hl.insertBefore(o,hl.children[1]||null)}}}
function syncOro(){fixNest();var i=document.querySelector('input[data-p="oro"]');if(i&&document.activeElement!==i)i.value=(S.oro||0)}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);syncOro();return x};
document.addEventListener('click',function(e){var t=e.target;window.__og={pre:S.oro,allow:!!(t&&t.hasAttribute&&t.hasAttribute('data-oro'))}},true);
document.addEventListener('change',function(e){var t=e.target,p=t&&t.dataset?t.dataset.p:null;window.__og={pre:S.oro,allow:p==='oro'}},true);
function guard(){var g=window.__og;window.__og=null;if(g&&!g.allow&&S.oro!==g.pre){S.oro=g.pre;render()}}
document.addEventListener('click',guard,false);
document.addEventListener('change',guard,false);
syncOro();render();
})();
}catch(e){console.error('[ORO-FIX v13]',e)}
;
