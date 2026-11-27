/* ==========================================================================
   LOTR Battle Company Roster - SCRIPT UNICO (v82)
   Consolida in un solo blocco il core (dati + logica) e le 36 patch v6-v81,
   mantenendo lo stesso ordine di esecuzione dell'originale.
   Ogni patch gira in un proprio try/catch: un errore in una patch non
   blocca le successive (come accadeva con i blocchi separati).
   ========================================================================== */

const tick=()=>{const m=S.tm;if(m&&m.run&&m.mode==='down'&&!m.fired&&tmNow()>=(m.dur||3600000)){m.fired=true;save();alarm()}
 const v=document.getElementById('tv');if(v&&m&&m.run){const w=tmView(),r=document.getElementById('rg'),l=document.getElementById('tlb');v.textContent=w.t;v.classList&&v.classList.toggle('ov',w.over);if(r&&r.style){r.style.strokeDashoffset=(CIR*(1-w.f)).toFixed(1);r.classList.toggle('ov',w.over)}if(l)l.textContent=w.l}};setInterval(tick,250);document.addEventListener('visibilitychange',tick);
render();if(aliasN){save();toast(`Aggiornate ${aliasN} voci rinominate nelle armate salvate`)}
;
/* ----- [CUSTOM-01] MFW-UI ----- */
function mfwStep(i,j,v){v=+v||0;var N=['Might','Will','Fate'][j];
return '<div class="mfwc"><div class="mfwh">'+N+'</div><div class="mfwrow"><button type="button" class="mfwb" data-mfw="'+i+'.'+j+'.-1">&#8722;</button><div class="mfwv"><b>'+v+'</b><span>/'+v+'</span></div><button type="button" class="mfwb" data-mfw="'+i+'.'+j+'.1">+</button></div></div>';}
