/* ----- [09/36] DATA-PATCH v18 ----- */
try{
/*DATA-PATCH v18*/
(function(){
var PRU={"Osgiliath_Ithilien":[["Osgiliath Veteran with Shield",1],["Ranger of Gondor",1],["Warrior of Minas Tirith with Bow",1],["Warrior of Minas Tirith with Shield",1],["Warrior of Minas Tirith with Spear & Shield",2]],
"Erebor_Dale":[["Warrior of Erebor with shield",2],["Warrior of Erebor with spear",1],["Warrior of Dale with Shield and spear",1],["Warrior of Dale with Esgaroth bow",2]]};
var PROF={"Corsair of Umbar with Light shield and Throwing weapons":[6,4,4,3,3,1,1,7,7,4],
"Ranger of the North with Armour":[6,4,3,4,4,1,1,6,6,11]};
for(var n in PROF)D.profiles[n]=PROF[n].slice();
D.presets=D.presets||{};
for(var id in PRU){D.presets[id]=D.presets[id]||{};D.presets[id].u=PRU[id].map(function(u){return[u[0],u[1]]})}
try{render()}catch(e){}
})();
}catch(e){console.error('[DATA-PATCH v18]',e)}
;
