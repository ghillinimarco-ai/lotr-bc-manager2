/* ----- [15/36] BAT-PATCH v25 ----- */
try{
/*BAT-PATCH v25*/
(function(){
var css=document.createElement('style');
css.textContent='#endb.bigstart{display:block;width:100%;margin:10px 0 6px;padding:16px 20px;font-size:20px;font-weight:800;border-radius:16px;letter-spacing:.03em;text-transform:uppercase;box-shadow:0 8px 22px color-mix(in srgb,var(--ac) 40%,transparent)}#endb.bigstart.running{background:linear-gradient(135deg,#c4162a,#7a1212);color:#fff;border-color:#c4162a}';
document.head.appendChild(css);
function started(){var m=S.tm||{};return !!m.run||tmNow()>0}
function fixBattle(){
var card=document.querySelector('.tm2');var endb=document.getElementById('endb');if(!card||!endb)return;
var vtog=document.querySelector('.vtog');var st=started();
endb.textContent=st?'🏁 Concludi battaglia':'▶ Inizio battaglia';
if(!endb.classList.contains('bigstart'))endb.classList.add('bigstart');
endb.classList.toggle('running',st);
card.after(endb);
if(vtog)endb.after(vtog);
}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);fixBattle();return x};
document.addEventListener('click',function(e){
var t=e.target&&e.target.closest?e.target.closest('#endb'):null;if(!t)return;
if(started())return;
e.stopPropagation();e.preventDefault();
var m=S.tm=S.tm||{run:false,t0:0,acc:0,fired:false};
if(!m.run){m.t0=Date.now();m.run=true}
try{save()}catch(err){}
render();
},true);
fixBattle();
})();
}catch(e){console.error('[BAT-PATCH v25]',e)}
;
