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
