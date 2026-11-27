/* ----- [08/36] ORO-PRESET v17 ----- */
try{
/*ORO-PRESET v17*/
(function(){
var ORO={"Minas_Tirith":4,"Osgiliath_Ithilien":4,"Fiefdoms":0,"Fornost":1,"Arnor":4,"The_Last_Alliance":1,"Rohan":2,"Helms_Deep":1,"Paths_of_the_Druadan":5,"Erebor_Dale":3,"Defenders_of_the_North":0,"Lothorien":3,"Rivendell":2,"Halls_of_Thranduil":4,"Durins_Folk":6,"Iron_Hills":1,"Lake_Town":1,"Wanderers_in_the_Wild":0,"Rangers_of_the_North":0,"Shire":0,"Mordor":0,"Cirith_Ungol":0,"Minas_Morgul":0,"Angmar_Carn_Dum":4,"Burning_of_the_Westfold":0,"Muster_of_Isengard":0,"Wolves_of_Isengard":3,"Hill_Tribes_of_Dunland":0,"Sharkeys_Rogues":0,"Moria":0,"Mirkwood":0,"Harad":4,"City_of_Umbar":0,"Easterlings":3,"Grand_Army_of_the_South":3,"Dol_Goldur":1,"Goblin_town":0,"Gundabad":0};
D.presets=D.presets||{};
for(var id in ORO){D.presets[id]=D.presets[id]||{};D.presets[id].o=ORO[id];D.presets[id].u=D.presets[id].u||[]}
function syncInput(){var i=document.querySelector('input[data-p="oro"]');if(i&&document.activeElement!==i)i.value=(S.oro||0)}
function force(){if(!S.bc)return;S.oro=ORO[S.bc]||0;try{save()}catch(e){}syncInput()}
function forceIfNoModal(){if(document.querySelector('.mdl'))return;force()}
if(S.bc&&(S.oro==null||S.oro===''))force();
document.addEventListener('change',function(e){var p=e.target.dataset&&e.target.dataset.p;
if(p==='bc'){setTimeout(forceIfNoModal,0);return}
if(e.target.id==='asel'){setTimeout(function(){if(S.bc&&(S.oro==null||S.oro===''))force()},0)}
},false);
document.addEventListener('click',function(e){var t=e.target,c=t.closest?function(s){return t.closest(s)}:function(){return null};
if(c('[data-q="ok"]')){setTimeout(force,0);return}
if(c('[data-oro]')){setTimeout(syncInput,0);return}
if(c('[data-act="new"],[data-act="dup"]')){setTimeout(function(){if(S.bc&&(S.oro==null||S.oro===''))force()},0);return}
},true);
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);syncInput();return x};
syncInput();
})();
}catch(e){console.error('[ORO-PRESET v17]',e)}
;
