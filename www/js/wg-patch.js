/* ----- [02/36] WG-PATCH v8 ----- */
try{
/*WG-PATCH v8*/
(function(){
var W={"Grand_Army_of_the_South":["Light Armour","Light Shield","Throwing Weapon"],"Lake_Town":["Light Armour"],"Sharkeys_Rogues":["Whip"],"Wanderers_in_the_Wild":["1.5H Weapon","Short Bow"],"Halls_of_Thranduil":["1H Weapon"]};
for(var id in W){var b=D.bcs.find(function(x){return x.id===id});if(b)W[id].forEach(function(v){if(b.wargear.indexOf(v)<0)b.wargear.push(v)})}
var RM=["Galadhrim Warrior Elven Spear (Elf Only)","Galadhrim Warrior with Elf bow"];
var LB=D.bcs.find(function(x){return x.id==='Lothorien'});
if(LB){LB.wargear=LB.wargear.filter(function(v){return RM.indexOf(v)<0});
RM.forEach(function(v){if(LB.models.indexOf(v)<0)LB.models.push(v)});
RM.forEach(function(v){["base","heroLo","heroHi"].forEach(function(t){if(D.wg[t][v]===0)delete D.wg[t][v]})})}
if(D.wg.base['Whip']==null)D.wg.base['Whip']=1;
if(D.wg.heroLo['Whip']==null)D.wg.heroLo['Whip']=1;
if(D.wg.heroHi['Whip']==null)D.wg.heroHi['Whip']=1;
if(D.wg.base['Twin Blades']==null)D.wg.base['Twin Blades']=1;
if(D.wg.heroLo['Twin Blades']==null)D.wg.heroLo['Twin Blades']=1;
if(D.wg.heroHi['Twin Blades']==null)D.wg.heroHi['Twin Blades']=1;
var sp='Rivendell Warrior with Elf bow',dp='High Elf Warrior with Elf bow';
if(D.profiles[sp]){D.profiles[dp]=D.profiles[sp].slice();if(D.bwbase&&D.bwbase[sp])D.bwbase[dp]=D.bwbase[sp].slice()}
render();
})();
}catch(e){console.error('[WG-PATCH v8]',e)}
;
