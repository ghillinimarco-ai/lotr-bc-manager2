/* ----- [16/36] SCORE-PATCH v32 ----- */
try{
/*SCORE-PATCH v32*/
(function(){
DB.list.forEach(function(a){if(!Array.isArray(a.data.sc))a.data.sc=[0,0]});
if(!Array.isArray(S.sc))S.sc=[0,0];
function scoreSec(){
if(!Array.isArray(S.sc))S.sc=[0,0];
var m=+S.sc[0]||0,a=+S.sc[1]||0,es;
if(m===0&&a===0)es='inserisci i punteggi per calcolare l\'esito';
else es=m>a?'VITTORIA · +4 influenza':(m===a?'PAREGGIO · +3 influenza':'SCONFITTA · +2 influenza');
return '<div class="card" style="margin-top:12px"><h3>Punteggio di partita</h3><div class="two"><div><label>Tuo punteggio</label><input data-p="sc.0" data-t="n" type="number" min="0" value="'+m+'"></div><div><label>Punteggio avversario</label><input data-p="sc.1" data-t="n" type="number" min="0" value="'+a+'"></div></div><p class="mu" style="margin:8px 0 0;font-weight:700">Esito: '+es+'</p></div>';
}
window.scoreSec=scoreSec;
var _eb=window.endBattle;
window.endBattle=function(){
var m=+(S.sc&&S.sc[0])||0,a=+(S.sc&&S.sc[1])||0;
var gain=m>a?4:(m===a?3:2);
var r=_eb.apply(this,arguments);
S.infl=(+S.infl||0)+gain;
try{save()}catch(e){}
toast('Esito: '+(m>a?'vittoria':(m===a?'pareggio':'sconfitta'))+' · +'+gain+' punti influenza');
render();
return r};
render();
})();
}catch(e){console.error('[SCORE-PATCH v32]',e)}
;
/* ----- [17/36] SCORE-UI v33 ----- */
try{
/*SCORE-UI v33*/
(function(){
if(!document.getElementById('sc33css')){var st=document.createElement('style');st.id='sc33css';st.textContent='.scbox{text-align:center}.scbox .stp2{justify-content:center;margin-top:4px}.scbox .stp2 input{width:74px}';document.head.appendChild(st)}
function scoreSec(){
if(!Array.isArray(S.sc))S.sc=[0,0];
var m=+S.sc[0]||0,a=+S.sc[1]||0,es;
if(m===0&&a===0)es="inserisci i punteggi per calcolare l'esito";
else es=m>a?'VITTORIA · +4 influenza':(m===a?'PAREGGIO · +3 influenza':'SCONFITTA · +2 influenza');
return '<div class="card" style="margin-top:12px"><h3>Punteggio di partita</h3><div class="two">'+
'<div class="scbox"><label>Tuo punteggio</label><div class="stp2"><button class="btn" data-sc="0.-1" aria-label="Meno">−</button><input data-p="sc.0" data-t="n" type="number" min="0" value="'+m+'"><button class="btn" data-sc="0.1" aria-label="Più">+</button></div></div>'+
'<div class="scbox"><label>Punteggio avversario</label><div class="stp2"><button class="btn" data-sc="1.-1" aria-label="Meno">−</button><input data-p="sc.1" data-t="n" type="number" min="0" value="'+a+'"><button class="btn" data-sc="1.1" aria-label="Più">+</button></div></div>'+
'</div><p class="mu" style="margin:8px 0 0;font-weight:700">Esito: '+es+'</p></div>';
}
window.scoreSec=scoreSec;
document.addEventListener('click',function(e){var b=e.target&&e.target.closest?e.target.closest('[data-sc]'):null;if(!b)return;var q=b.dataset.sc.split('.');var i=+q[0],d=+q[1];if(!Array.isArray(S.sc))S.sc=[0,0];S.sc[i]=Math.max(0,(+S.sc[i]||0)+d);try{save()}catch(e2){}render()},false);
render();
})();
}catch(e){console.error('[SCORE-UI v33]',e)}
;
