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
