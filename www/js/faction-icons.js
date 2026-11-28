/* ----- [CUSTOM-02] SCHIERAMENTI-FOTO ----- */
try{
(function(){
function enhance(root){return;
if(!root||!root.querySelectorAll)return;
var els=root.querySelectorAll('[style*="data:image/svg+xml;base64"]');
for(var i=0;i<els.length;i++){
var el=els[i];
if(el.getAttribute('data-schier-enh'))continue;
var st=el.getAttribute('style')||'';
var m=st.match(/url\((['"]?)(data:image\/svg\+xml;base64,[^'")]+)\1\)/i);
if(!m)continue;
el.setAttribute('data-schier-enh','1');
el.style.backgroundImage='none';
el.style.setProperty('--schier-url','url("'+m[2]+'")');
el.classList.add('schier-enh');
}
}
function enhanceAll(){try{enhance(document);}catch(e){}}
if(window.MutationObserver){try{var mo=new MutationObserver(function(muts){for(var i=0;i<muts.length;i++){var added=muts[i].addedNodes;for(var j=0;j<added.length;j++){var n=added[j];if(n&&n.nodeType===1){enhance(n);if(n.querySelectorAll)enhance(n);}}}});mo.observe(document.documentElement,{childList:true,subtree:true});}catch(e){}}
if(window.openPanel){var _op=window.openPanel;window.openPanel=function(){var r=_op.apply(this,arguments);setTimeout(enhanceAll,0);return r;};}
if(window.build){var _b=window.build;window.build=function(){var r=_b.apply(this,arguments);setTimeout(enhanceAll,0);return r;};}
setTimeout(enhanceAll,0);
})();
}catch(e){console.error('[SCHIERAMENTI-FOTO]',e)}
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
