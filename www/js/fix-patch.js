/* ----- [03/36] FIX-PATCH v9 ----- */
try{
/*FIX-PATCH v9*/
(function(){
var P={"Galadhrim Warrior Elven Spear (Elf Only)":[6,5,3,3,3,1,1,5,5,6],"Galadhrim Warrior with Elf bow":[6,5,3,3,3,1,1,5,5,6],"Galadhrim Warrior with Shield":[6,5,3,3,3,1,1,5,5,6],"Galadhrim Warrior with Shield and Elven Spear (Elf Only)":[6,5,3,3,3,1,1,5,5,6],"Lorien Guard with Elven Spear":[6,5,3,3,3,1,1,5,5,7],"Lorien Guard with Elf Bow":[6,5,3,3,3,1,1,5,5,7],"Lorien Guard with Shield":[6,5,3,3,3,1,1,5,5,7],"Lorien Guard with Shield and Spear":[6,5,3,3,3,1,1,5,5,7]};
var B={"Galadhrim Warrior Elven Spear (Elf Only)":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elven Spear (Elf Only)","Galadhrim Warrior with Elf bow":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elf Bow","Galadhrim Warrior with Shield":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Shield","Galadhrim Warrior with Shield and Elven Spear (Elf Only)":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elven Spear (Elf Only)|Shield","Lorien Guard with Elven Spear":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elven Spear (Elf Only)","Lorien Guard with Elf Bow":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elf Bow","Lorien Guard with Shield":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Shield","Lorien Guard with Shield and Spear":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elven Spear (Elf Only)|Shield"};
var hk=function(o,k){return Object.prototype.hasOwnProperty.call(o,k)};
for(var n in P)if(!hk(D.profiles,n))D.profiles[n]=P[n];
D.bwbase=D.bwbase||{};for(var m in B)if(!D.bwbase[m])D.bwbase[m]=B[m].split('|');
var LM=["Galadhrim Warrior Elven Spear (Elf Only)","Galadhrim Warrior with Elf bow","Galadhrim Warrior with Shield","Galadhrim Warrior with Shield and Elven Spear (Elf Only)","Lorien Guard with Elven Spear","Lorien Guard with Elf Bow","Lorien Guard with Shield","Lorien Guard with Shield and Spear"];
var lb=D.bcs.find(function(x){return x.id==='Lothorien'});
if(lb)LM.forEach(function(v){if(lb.models.indexOf(v)<0)lb.models.push(v)});
render();
})();
}catch(e){console.error('[FIX-PATCH v9]',e)}
;
