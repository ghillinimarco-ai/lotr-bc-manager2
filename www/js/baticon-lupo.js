/* ----- [CUSTOM-03] BATICON-LUPO v3 (span background, dynamic top, size=58) ----- */
try{
(function(){
function applyBat(){
var btn=document.querySelector('button[data-tab="bat"]');
if(!btn)return;
var img=btn.querySelector('img');
if(img){img.style.display='none';}
try{if(getComputedStyle(btn).position==='static'){btn.style.position='relative';}}catch(e){}
btn.style.overflow='visible';
var sp=btn.querySelector('.bat-lupo');
if(!sp){sp=document.createElement('span');sp.className='bat-lupo';btn.appendChild(sp);}
var u=window.IMG_LUPO||'';
var S=58;
var lb=btn.querySelector('span:not(.bat-lupo)');
var top=2;
try{if(lb){var br=btn.getBoundingClientRect(),lr=lb.getBoundingClientRect();var band=Math.max(0,lr.top-br.top);top=Math.max(0,Math.round((band-S)/2));}}catch(e){}
sp.style.cssText='position:absolute;left:50%;top:'+top+'px;transform:translateX(-50%);width:'+S+'px;height:'+S+'px;z-index:2147483647;isolation:isolate;mix-blend-mode:normal;filter:none;-webkit-filter:none;-webkit-mask-image:none;mask-image:none;clip-path:none;background-color:transparent;background-image:url("'+u+'"),radial-gradient(closest-side,rgba(255,255,255,.95) 0%,rgba(255,255,255,.95) 58%,rgba(255,255,255,0) 100%);background-repeat:no-repeat,no-repeat;background-position:center,center;background-size:contain,100% 100%;background-blend-mode:normal,normal;pointer-events:none;display:block;';
}
var _r=window.render;
window.render=function(){var x=_r.apply(this,arguments);applyBat();return x;};
setTimeout(applyBat,0);
applyBat();
})();
}catch(e){console.error('[BATICON-LUPO]',e)}
    /* BC_BG_FIX */
    /* BC_BLOCKER_FIX */
