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
