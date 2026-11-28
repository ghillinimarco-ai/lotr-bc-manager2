/* ----- [01/36] PRESET-PATCH v6 ----- */
try{
/*PRESET-PATCH v6*/
(function(){
var P2={"6,3,5,3,3,1,1,8,8,2":"Angmar Orc Warrior with Shield;Angmar Orc Warrior with Orc Bow;Angmar Orc Warrior with Spear;Angmar Orc Warrior with Two-handed weapon;Isengard Orc Warrior with Orc Bow;Isengard Orc Warrior With Shield;Isengard Orc Warrior with Spear;Isengard Orc Warrior with Two-handed weapon;Mordor Orc with Shield;Mordor Orc with Spear;Mordor Orc with Orc bow;Mordor Orc with Two-handed weapon",
"6,3,5,3,3,1,1,8,8,3":"Angmar Warg Rider with Shield and throwing spears;Angmar Warg Rider with Orc bow;Angmar Warg Rider with Shield;Angmar Warg Rider with Throwing spears;Isengard Warg Rider with Shield and Throwing spears;Isengard Warg Rider with Orc Bow;Isengard Warg Rider with Shield;Isengard Warg Rider with Throwing spears;Mordor Warg Rider with Shield and Throwing spears;Mordor Warg Rider with Shield;Mordor Warg Rider With Orc Bow;Mordor Warg Rider with Throwing spears;Warg Rider with Shield and Throwing spears;Warg Rider with Orc bow;Warg Rider with Shield;Warg Rider with Throwing spears",
"6,4,4,3,3,1,1,6,6,6":"Black Dragon Warrior with Easterling Halberd",
"6,4,4,3,3,1,1,7,6,5":"Citadel Guard with Longbow;Citadel Guard with Spear;Easterling Warrior with Easterling Halberd and shield;Easterling Warrior with Bow;Easterling Warrior with Shield",
"6,4,4,3,3,1,1,7,7,6":"Corsair of Umbar with Bow;Corsair of Umbar with Light shield and Throwing weapons;Corsair of Umbar with Spear;Serpent Rider",
"6,3,4,4,3,1,1,7,7,4":"Dunlending Warrior with Bow;Dunlending Warrior with Shield;Dunlending Warrior with Two-handed weapon",
"5,4,3,3,4,1,1,6,6,5":"Dwarf Ranger with Dwarf Longbow;Dwarf Ranger with Throwing Weapon;Dwarf Ranger with Two-handed weapon",
"5,4,4,3,4,1,1,6,6,5":"Dwarf Warrior with Dwarf Bow;Dwarf Warrior with Shield;Dwarf Warrior with Two-handed weapon",
"6,5,3,3,3,1,1,5,5,5":"Galadhrim Knight with Shield;Galadhrim Knight with Elf bow",
"6,5,3,3,3,1,1,5,5,6":"Galadhrim Warrior Elven Spear (Elf Only);Galadhrim Warrior with Elf bow;Galadhrim Warrior with Shield;Galadhrim Warrior with Shield and Elven Spear (Elf Only)",
"5,2,5,3,3,1,1,8,8,4":"Goblin Warrior with Two-handed weapon;Moria Blackshield with Spear",
"6,4,5,4,4,2,1,4,8,12":"Gundabad Berserker with Two-handed weapon",
"6,4,5,4,3,1,1,7,8,6":"Gundabad Orc with Shield;Gundabad Orc with Spear",
"6,5,6,5,5,2,2,8,9,22":"Half Troll with Two-handed weapon",
"6,3,4,3,3,1,1,7,7,3":"Haradrim Raider with Bow and Warspear;Haradrim Raider with Warspear;Haradrim Raider with Bow;Haradrim Warrior with Bow;Haradrim Warrior with Spear",
"6,3,4,4,3,1,1,7,6,4":"Helminga with Shield;Helminga with Shield and Throwing Spear;Helminga with Bow;Rider of Rohan with Throwing Spear",
"6,5,3,3,3,1,1,5,5,6":"High Elf Warrior with Elf bow",
"6,3,4,3,3,1,1,7,8,4":"Hill Tribesman with Light shield and Flaming Brand;Hill Tribesman with Bow;Hill Tribesman with Flaming Brand;Hill Tribesman with Light shield;Hill Tribesman with Spear;Hill Tribesman with Two-handed weapon;Wildman of Dunland with Light shield and Flaming Brand;Wildman of Dunland with Bow;Wildman of Dunland with Light Shield;Wildman of Dunland with Flaming Brand;Wildman of Dunland with Spear;Wildman of Dunland with Two-handed weapon",
"6,3,4,4,3,1,1,8,8,5":"Hunter Orc with Orc Bow;Hunter Orc with Two-handed weapon",
"6,3,4,4,3,1,1,8,8,7":"Hunter Orc Warg Rider with Orc Bow;Hunter Orc Warg Rider with Two-handed weapon",
"5,4,4,4,4,1,1,6,6,7":"Iron Hills Dwarf with shield & spear;Iron Hills Dwarf with mattock;Iron Hills Dwarf with Crossbow",
"6,4,4,3,3,1,1,7,7,4":"Khandish Warrior with Bow",
"6,3,4,3,3,1,1,8,8,4":"Lake-town Guard with Bow;Lake-town Guard with Spear",
"6,2,4,3,3,1,1,7,8,3":"Lake-town Militia with Bow;Lake-town Militia with Light Shield;Lake-town Militia with Spear",
"6,5,3,3,3,1,1,5,5,7":"Lorien Guard with Elven Spear;Lorien Guard with Elf Bow;Lorien Guard with Shield;Lorien Guard with Shield and Spear",
"6,5,3,3,3,1,1,5,6,6":"Lothlorien Warrior with Elven throwing weapons;Lothlorien Warrior with Wood Elf Spear;Lothlorien Warrior with Elf bow",
"6,3,3,4,3,1,1,8,8,4":"Mahûd Warrior with Blowpipe;Mahûd Warrior with Spear",
"6,5,3,4,3,1,1,5,6,6":"Mirkwood Elf with Shield;Mirkwood Elf with Elven-made glaive;Mirkwood Elf with Elf bow",
"6,3,4,4,3,1,1,8,7,5":"Morannon Orc with Shield;Morannon Orc with Shield and Spear;Morannon Orc with Spear",
"6,4,4,4,3,1,1,6,7,5":"Mordor Uruk-hai with Two-handed weapon",
"5,2,5,3,3,1,1,8,8,1":"Moria Goblin Warrior with Orc bow;Moria Goblin Warrior with Shield;Moria Goblin Warrior with Spear",
"8,5,3,3,3,1,1,5,6,8":"Noldorin Exile with Elven throwing weapons;Noldorin Exile with Wood Elf Spear;Noldorin Exile with Elf bow",
"6,4,4,3,3,1,1,6,6,6":"Osgiliath Veteran with Shield;Osgiliath Veteran with Bow;Osgiliath Veteran with Spear",
"6,5,3,3,3,1,1,5,5,9":"Palace Guard with Shield and Elven spear;Palace Guard with Elven spear;Palace Guard with Shield",
"6,4,3,3,3,1,1,7,7,4":"Ranger of Arnor with Spear",
"6,4,3,3,3,1,1,7,6,4":"Ranger of Gondor with Spear",
"6,4,3,4,4,1,1,6,6,8":"Ranger of the North with Armour",
"6,5,3,3,3,1,1,5,5,6":"Rivendell Warrior with Shield;Rivendell Warrior with Elf bow;Rivendell Warrior with Spear and Shield",
"6,3,4,3,3,1,1,7,6,3":"Rohirrim Traitor with Shield and throwing spears;Rohirrim Traitor with Bow;Rohirrim Traitor with Shield",
"6,2,5,3,3,1,1,8,8,4":"Ruffian with Bow;Ruffian with Whip",
"6,4,4,4,3,1,1,7,7,5":"Uruk-hai Scout with Shield;Uruk-hai Scout with Uruk-hai Bow",
"6,4,4,4,3,1,1,7,7,6":"Uruk-hai Warrior with Shield;Uruk-hai Warrior with Pike;Uruk-hai Warrior with Crossbow",
"6,4,4,3,3,1,1,7,7,4":"Warrior of Dale with Esgaroth bow;Warrior of Dale with Shield and spear;Warrior of Dale with Shield",
"5,4,4,3,4,1,1,6,7,6":"Warrior of Erebor with shield;Warrior of Erebor with spear;Warrior of Erebor with shield and spear",
"6,4,4,3,3,1,1,7,7,5":"Warrior of Minas Tirith with Bow;Warrior of Minas Tirith with Spear & Shield;Warrior of Minas Tirith with Shield",
"6,5,4,4,3,1,1,7,7,6":"Warrior of Númenór with Shield;Warrior of Númenór with Shield and Spear;Warrior of Númenór with Longbow",
"6,3,4,3,3,1,1,7,6,3":"Warrior of Rohan with Shield;Warrior of Rohan with Shield and Throwing Spear;Warrior of Rohan with Bow",
"6,3,4,4,3,1,1,7,7,5":"Warriors of Carn Dum with Spear",
"6,4,3,3,3,1,1,7,5,7":"Watcher of Kârna with Bow;Watcher of Kârna with Twin Blades"};
var BW={"Abrakhân Guard":"2H Weapon","Angmar Orc Warrior":"Armour|1H Weapon","Angmar Orc Warrior with Shield":"Armour|1H Weapon|Shield","Angmar Orc Warrior with Orc Bow":"Armour|1H Weapon|Orc Bow","Angmar Orc Warrior with Spear":"Armour|1H Weapon|Spear","Angmar Orc Warrior with Two-handed weapon":"Armour|1H Weapon|2H Weapon","Angmar Warg Rider":"Armour|1H Weapon|Warg","Angmar Warg Rider with Shield and throwing spears":"Armour|1H Weapon|Warg|Shield|Throwing Spear","Angmar Warg Rider with Orc bow":"Armour|1H Weapon|Warg|Orc Bow","Angmar Warg Rider with Shield":"Armour|1H Weapon|Warg|Shield","Angmar Warg Rider with Throwing spears":"Armour|1H Weapon|Warg|Throwing Spear","Axeman of Lossarnach":"Heavy Armour|1H Weapon|Axe of Lossarnach","Battlin’ Brandybuck":"1H Weapon","Black Dragon Warrior":"Heavy Armour|1H Weapon|Shield","Black Dragon Warrior with Easterling Halberd":"Heavy Armour|1H Weapon|Shield|Easterling Halberd","Black Guard of Barad-dûr":"Heavy Armour|1H Weapon|Shield","Black Númenórean":"Heavy Armour|1H Weapon|Shield","Black Númenórean Knight":"Heavy Armour|1H Weapon|Shield|Armoured Horse|Lance","Blackroot Vale Archer":"Armour|1H Weapon|Bow","Citadel Guard with Longbow":"Heavy Armour|1H Weapon|Bow","Citadel Guard with Spear":"Heavy Armour|1H Weapon|Spear","Citadel Guard":"Heavy Armour|1H Weapon","Clansman of Lamedon":"Armour|2H Weapon","Corsair Crossbowman":"1H Weapon|Crossbow|Pavise","Corsair of Umbar":"Light Armour|1H Weapon","Corsair of Umbar with Bow":"Light Armour|1H Weapon|Bow","Corsair of Umbar with Light shield and Throwing weapons":"Light Armour|1H Weapon|Light Shield|Throwing Weapon","Corsair of Umbar with Spear":"Light Armour|1H Weapon|Spear","Corsair Reaver":"1H Weapon","Dragon Cult Acolyte":"Armour|1H Weapon|Throwing Weapon","Dunlending Horseman":"Armour|1H Weapon|Shield|Horse","Dunlending Huscarl":"Heavy Armour|1H Weapon|Dunlending War Axe","Dunlending Warrior with Bow":"Armour|1H Weapon|Bow","Dunlending Warrior with Shield":"Armour|1H Weapon|Shield","Dunlending Warrior with Two-handed weapon":"Armour|1H Weapon|2H Weapon","Dwarf Ranger with Dwarf Longbow":"Armour|1H Weapon|Dwarf Longbow","Dwarf Ranger with Throwing Weapon":"Armour|1H Weapon|Throwing Weapon","Dwarf Ranger with Two-handed weapon":"Armour|1H Weapon|2H Weapon","Dwarf Warrior with Dwarf Bow":"Heavy Armour|1H Weapon|Dwarf Bow","Dwarf Warrior with Shield":"Heavy Armour|1H Weapon|Shield","Dwarf Warrior with Two-handed weapon":"Heavy Armour|1H Weapon|2H Weapon","Easterling Kataphrakt":"Heavy Armour|1H Weapon|Shield|Horse","Easterling Warrior":"Heavy Armour|1H Weapon","Easterling Warrior with Easterling Halberd and shield":"Heavy Armour|1H Weapon|Easterling Halberd|Shield","Easterling Warrior with Bow":"Heavy Armour|1H Weapon|Bow","Easterling Warrior with Shield":"Heavy Armour|1H Weapon|Shield","Feral Uruk-hai":"Light Armour|1H Weapon","Foe Spear Wielder":"Heavy Armour|Foe Spear","Galadhrim Knight":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Galadhrim Steed (Elf Only)","Galadhrim Knight with Shield":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Galadhrim Steed (Elf Only)|Shield","Galadhrim Knight with Elf bow":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Galadhrim Steed (Elf Only)|Elf Bow","Galadhrim Warrior":"Heavy Armour|Elven 1.5H Weapon (Elf Only)","Galadhrim Warrior Elven Spear (Elf Only)":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elven Spear (Elf Only)","Galadhrim Warrior with Elf bow":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elf Bow","Galadhrim Warrior with Shield":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Shield","Galadhrim Warrior with Shield and Elven Spear (Elf Only)":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elven Spear (Elf Only)|Shield","Goblin Mercenary":"Armour|1H Weapon","Goblin Warrior":"1H Weapon","Goblin Warrior with Two-handed weapon":"1H Weapon|2H Weapon","Grimhammer":"Heavy Armour|Mattock|Throwing Weapon","Guard of the Fountain Court":"Heavy Armour|1H Weapon|Spear","Guard of the Galadhrim Court":"Heavy Armour|Elven Pike (Elf Only)","Gundabad Berserker":"Armour|1H Weapon","Gundabad Berserker with Two-handed weapon":"Armour|1H Weapon|2H Weapon","Gundabad Orc":"Heavy Armour|1H Weapon","Gundabad Orc with Shield":"Heavy Armour|1H Weapon|Shield","Gundabad Orc with Spear":"Heavy Armour|1H Weapon|Spear","Half Troll":"Armour|1H Weapon","Half Troll with Two-handed weapon":"Armour|2H Weapon","Haradrim Raider":"Armour|1H Weapon|Horse","Haradrim Raider with Bow and Warspear":"Armour|1H Weapon|Horse|Bow|Warspear","Haradrim Raider with Warspear":"Armour|1H Weapon|Horse|Warspear","Haradrim Raider with Bow":"Armour|1H Weapon|Horse|Bow","Haradrim Warrior":"Armour|1H Weapon","Haradrim Warrior with Bow":"Armour|1H Weapon|Bow","Haradrim Warrior with Spear":"Armour|1H Weapon|Spear","Helminga with Shield":"Armour|1H Weapon|Shield","Helminga with Shield and Throwing Spear":"Armour|1H Weapon|Shield|Throwing Spear","Helminga with Bow":"Armour|1H Weapon|Bow","High Elf Warrior with Elf bow":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elf Bow","Hill Tribesman":"1H Weapon","Hill Tribesman with Light shield and Flaming Brand":"1H Weapon|Light Shield|Flaming Brand","Hill Tribesman with Bow":"1H Weapon|Bow","Hill Tribesman with Flaming Brand":"1H Weapon|Flaming Brand","Hill Tribesman with Light shield":"1H Weapon|Light Shield","Hill Tribesman with Spear":"1H Weapon|Spear","Hill Tribesman with Two-handed weapon":"1H Weapon|2H Weapon","Hobbit Archer":"1H Weapon|Short Bow","Hobbit Militia":"1H Weapon","Hobbit Shiriff":"1.5H Weapon","Hunter Orc":"Armour|1H Weapon","Hunter Orc with Orc Bow":"Armour|1H Weapon|Orc Bow","Hunter Orc with Two-handed weapon":"Armour|1H Weapon|2H Weapon","Hunter Orc Warg Rider":"Armour|1H Weapon|Fell Warg","Hunter Orc Warg Rider with Orc Bow":"Armour|1H Weapon|Fell Warg|Orc Bow","Hunter Orc Warg Rider with Two-handed weapon":"Armour|1H Weapon|Fell Warg|2H Weapon","Iron Guard":"Heavy Armour|1H Weapon|Throwing Weapon","Iron Hills Dwarf with shield & spear":"Heavy Armour|1H Weapon|Shield|Spear","Iron Hills Dwarf with mattock":"Heavy Armour|1H Weapon|Mattock","Iron Hills Dwarf with Crossbow":"Heavy Armour|1H Weapon|Crossbow","Iron Hills Goat Rider":"Heavy Armour|1H Weapon|Warspear|Goat","Iron Shield Bearer":"Heavy Armour|1H Weapon|Iron Shield","Isengard Orc Warrior":"Armour|1H Weapon","Isengard Orc Warrior with Orc Bow":"Armour|1H Weapon|Orc Bow","Isengard Orc Warrior With Shield":"Armour|1H Weapon|Shield","Isengard Orc Warrior with Spear":"Armour|1H Weapon|Spear","Isengard Orc Warrior with Two-handed weapon":"Armour|1H Weapon|2H Weapon","Isengard Warg Rider":"Armour|1H Weapon|Warg","Isengard Warg Rider with Shield and Throwing spears":"Armour|1H Weapon|Warg|Shield|Throwing Spear","Isengard Warg Rider with Orc Bow":"Armour|1H Weapon|Warg|Orc Bow","Isengard Warg Rider with Shield":"Armour|1H Weapon|Warg|Shield","Isengard Warg Rider with Throwing spears":"Armour|1H Weapon|Warg|Throwing Spear","Khandish Horseman":"Armour|1.5H Weapon|1H Weapon|Bow|Horse","Khandish Warrior":"Armour|1.5H Weapon|1H Weapon","Khandish Warrior with Bow":"Armour|Bow|1H Weapon","Khazâd Guard":"2H Weapon|Heavy Dwarf Armour|1H Weapon","Knight of Arnor":"Heavy Armour|1H Weapon|Shield|Horse|Warspear","Knight of Dale":"Heavy Armour|1H Weapon|Shield|Spear","Knight of Dol Amroth":"Heavy Armour|1H Weapon|Shield","Knight of Minas Tirith":"Heavy Armour|1H Weapon|Shield|Horse|Lance","Lake-town Guard":"Armour|1H Weapon","Lake-town Guard with Bow":"Armour|1H Weapon|Bow","Lake-town Guard with Spear":"Armour|1H Weapon|Spear","Lake-town Militia":"Light Armour|1H Weapon","Lake-town Militia with Bow":"Light Armour|1H Weapon|Bow","Lake-town Militia with Light Shield":"Light Armour|1H Weapon|Light Shield","Lake-town Militia with Spear":"Light Armour|1H Weapon|Spear","Lorien Guard":"Heavy Armour|Elven 1.5H Weapon (Elf Only)","Lorien Guard with Elven Spear":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elven Spear (Elf Only)","Lorien Guard with Elf Bow":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elf Bow","Lorien Guard with Shield":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Shield","Lorien Guard with Shield and Spear":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elven Spear (Elf Only)|Shield","Lothlorien Warrior":"Elven Cloak|Elven 1.5H Weapon (Elf Only)","Lothlorien Warrior with Elven throwing weapons":"Elven Cloak|Elven 1.5H Weapon (Elf Only)|Throwing Weapon","Lothlorien Warrior with Wood Elf Spear":"Elven Cloak|Elven 1.5H Weapon (Elf Only)|Wood Elf Spear","Lothlorien Warrior with Elf bow":"Elven Cloak|Elven 1.5H Weapon (Elf Only)|Elf Bow","Mahûd Warrior":"Armour|1H Weapon|Shield","Mahûd Warrior with Blowpipe":"Armour|1H Weapon|Shield|Blowpipe","Mahûd Warrior with Spear":"Armour|1H Weapon|Shield|Spear","Man-at-arms of Dol Amroth":"Heavy Armour|1H Weapon|Pike","Mirkwood Cavalry":"Heavy Armour|1H Weapon|Horse","Mirkwood Elf with Shield":"Heavy Armour|1H Weapon|Shield","Mirkwood Elf with Elven-made glaive":"Heavy Armour|1H Weapon|Elven Glaive","Mirkwood Elf with Elf bow":"Heavy Armour|1H Weapon|Elf Bow","Mirkwood Ranger":"Elven Cloak|Elven 1H Weapon (Elf Only)|Elf Bow","Morannon Orc":"Heavy Armour|1H Weapon","Morannon Orc with Shield":"Heavy Armour|1H Weapon|Shield","Morannon Orc with Shield and Spear":"Heavy Armour|1H Weapon|Shield|Spear","Morannon Orc with Spear":"Heavy Armour|1H Weapon|Spear","Mordor Orc":"Armour|1H Weapon","Mordor Orc with Shield":"Armour|1H Weapon|Shield","Mordor Orc with Spear":"Armour|1H Weapon|Spear","Mordor Orc with Orc bow":"Armour|1H Weapon|Orc Bow","Mordor Orc with Two-handed weapon":"Armour|1H Weapon|2H Weapon","Mordor Uruk-hai":"Armour|1H Weapon","Mordor Uruk-hai with Two-handed weapon":"Armour|1H Weapon|2H Weapon","Mordor Warg Rider":"Armour|1H Weapon|Warg","Mordor Warg Rider with Shield and Throwing spears":"Armour|1H Weapon|Warg|Shield|Throwing Spear","Mordor Warg Rider with Shield":"Armour|1H Weapon|Warg|Shield","Mordor Warg Rider With Orc Bow":"Armour|1H Weapon|Warg|Orc Bow","Mordor Warg Rider with Throwing spears":"Armour|1H Weapon|Warg|Throwing Spear","Morgul Stalker":"Armour|1H Weapon","Moria Blackshield":"Heavy Armour|1H Weapon|Shield","Moria Blackshield with Spear":"Heavy Armour|1H Weapon|Shield|Spear","Moria Goblin Prowler":"Armour|2H Weapon|Throwing Weapon","Moria Goblin Warrior":"Armour|1H Weapon","Moria Goblin Warrior with Orc bow":"Armour|1H Weapon|Orc Bow","Moria Goblin Warrior with Shield":"Armour|1H Weapon|Shield","Moria Goblin Warrior with Spear":"Armour|1H Weapon|Spear","Noldorin Exile":"Elven Cloak|Elven 1.5H Weapon (Elf Only)","Noldorin Exile with Elven throwing weapons":"Elven Cloak|Elven 1.5H Weapon (Elf Only)|Throwing Weapon","Noldorin Exile with Wood Elf Spear":"Elven Cloak|Elven 1.5H Weapon (Elf Only)|Wood Elf Spear","Noldorin Exile with Elf bow":"Elven Cloak|Elven 1.5H Weapon (Elf Only)|Elf Bow","Orc Tracker":"1H Weapon|Orc Bow","Osgiliath Veteran":"Heavy Armour|1H Weapon","Osgiliath Veteran with Shield":"Heavy Armour|1H Weapon|Shield","Osgiliath Veteran with Bow":"Heavy Armour|1H Weapon|Bow","Osgiliath Veteran with Spear":"Heavy Armour|1H Weapon|Spear","Palace Guard with Shield and Elven spear":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Shield|Spear","Palace Guard with Elven spear":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Spear","Palace Guard with Shield":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Shield","Ranger of Arnor":"Armour|1H Weapon|Bow","Ranger of Arnor with Spear":"Armour|1H Weapon|Bow|Spear","Ranger of Gondor":"Armour|1H Weapon|Bow","Ranger of Gondor with Spear":"Armour|1H Weapon|Bow|Spear","Ranger of Ithilien":"Armour|1H Weapon|Bow","Ranger of the North":"1H Weapon|Bow","Ranger of the North with Armour":"1H Weapon|Bow|Armour","Rhûnish War Drake":"Armour","Rider of Rohan":"Armour|1H Weapon|Bow|Shield|Horse","Rider of Rohan with Throwing Spear":"Armour|1H Weapon|Bow|Shield|Throwing Spear|Horse","Rivendell Knight":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elf Bow|Horse|Elven Lance (Elf Only)","Rivendell Warrior":"Heavy Armour|Elven 1.5H Weapon (Elf Only)","Rivendell Warrior with Shield":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Shield","Rivendell Warrior with Elf bow":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elf Bow","Rivendell Warrior with Spear and Shield":"Heavy Armour|Elven 1.5H Weapon (Elf Only)|Elven Spear (Elf Only)|Shield","Rohan Outrider":"Armour|1H Weapon|Bow","Rohan Royal Guard":"Heavy Armour|1H Weapon|Shield","Rohirrim Traitor":"Armour|1H Weapon","Rohirrim Traitor with Shield and throwing spears":"Armour|1H Weapon|Shield|Throwing Spear","Rohirrim Traitor with Bow":"Armour|1H Weapon|Bow","Rohirrim Traitor with Shield":"Armour|1H Weapon|Shield","Ruffian":"1H Weapon","Ruffian with Bow":"1H Weapon|Bow","Ruffian with Whip":"1H Weapon|Whip","Serpent Guard":"Armour|Spear","Serpent Rider":"Armour|Warspear|Horse","Son of Eorl":"Heavy Armour|1H Weapon|Shield|Armoured Horse","Spectre":"Heavy Armour|1H Weapon","Tookish Hunter":"1H Weapon|Short Bow","Uruk-hai Berserker":"Light Armour|Berserker Blade","Uruk-hai Scout":"Armour|1H Weapon","Uruk-hai Scout with Shield":"Armour|1H Weapon|Shield","Uruk-hai Scout with Uruk-hai Bow":"Armour|1H Weapon|Uruk-hai Bow","Uruk-hai Warrior":"Heavy Armour|1H Weapon","Uruk-hai Warrior with Shield":"Heavy Armour|1H Weapon|Shield","Uruk-hai Warrior with Pike":"Heavy Armour|1H Weapon|Pike","Uruk-hai Warrior with Crossbow":"Heavy Armour|1H Weapon|Crossbow","Warg Marauder":"Armour|1H Weapon|Warg|Shield|Orc Bow","Warg Rider":"Armour|1H Weapon|Warg","Warg Rider with Shield and Throwing spears":"Armour|1H Weapon|Warg|Shield|Throwing Spear","Warg Rider with Orc bow":"Armour|1H Weapon|Warg|Orc Bow","Warg Rider with Shield":"Armour|1H Weapon|Warg|Shield","Warg Rider with Throwing spears":"Armour|1H Weapon|Warg|Throwing Spear","Warrior of Arnor":"Heavy Armour|1H Weapon|Shield|Spear","Warrior of Dale with Esgaroth bow":"Armour|1H Weapon|Esgaroth Bow","Warrior of Dale with Shield and spear":"Armour|1H Weapon|Shield|Spear","Warrior of Dale with Shield":"Armour|1H Weapon|Shield","Warrior of Erebor with shield":"Heavy Armour|1H Weapon|Shield","Warrior of Erebor with spear":"Heavy Armour|1H Weapon|Spear","Warrior of Erebor with shield and spear":"Heavy Armour|1H Weapon|Shield|Spear","Warrior of Minas Tirith":"Heavy Armour|1H Weapon","Warrior of Minas Tirith with Bow":"Heavy Armour|1H Weapon|Bow","Warrior of Minas Tirith with Spear & Shield":"Heavy Armour|1H Weapon|Shield|Spear","Warrior of Minas Tirith with Shield":"Heavy Armour|1H Weapon|Shield","Warrior of Númenór":"Armour|1H Weapon","Warrior of Númenór with Shield":"Armour|1H Weapon|Shield","Warrior of Númenór with Shield and Spear":"Armour|1H Weapon|Shield|Spear","Warrior of Númenór with Longbow":"Armour|1H Weapon|Longbow","Warrior of Rohan with Shield":"Armour|1H Weapon|Shield","Warrior of Rohan with Shield and Throwing Spear":"Armour|1H Weapon|Shield|Throwing Spear","Warrior of Rohan with Bow":"Armour|1H Weapon|Bow","Warriors of Carn Dum":"Armour|1H Weapon|Shield","Warriors of Carn Dum with Spear":"Armour|1H Weapon|Shield|Spear","Watcher of Kârna":"Light Armour|1H Weapon","Watcher of Kârna with Bow":"Light Armour|1H Weapon|Bow","Watcher of Kârna with Twin Blades":"Light Armour|1H Weapon|Twin Blades","Wildman of Dunland":"1H Weapon","Wildman of Dunland with Light shield and Flaming Brand":"1H Weapon|Light Shield|Flaming Brand","Wildman of Dunland with Bow":"1H Weapon|Bow","Wildman of Dunland with Light Shield":"1H Weapon|Light Shield","Wildman of Dunland with Flaming Brand":"1H Weapon|Flaming Brand","Wildman of Dunland with Spear":"1H Weapon|Spear","Wildman of Dunland with Two-handed weapon":"1H Weapon|2H Weapon","Wood Elf Sentinel":"Elven Cloak|Elven 1H Weapon (Elf Only)|Elf Bow","Woses Warrior":"1H Weapon|Spear|Blowpipe"};
var M2={"Angmar_Carn_Dum":"Angmar Orc Warrior;Angmar Orc Warrior with Orc Bow;Angmar Orc Warrior with Shield;Angmar Orc Warrior with Spear;Angmar Orc Warrior with Two-handed weapon;Angmar Warg Rider;Angmar Warg Rider with Orc bow;Angmar Warg Rider with Shield;Angmar Warg Rider with Shield and throwing spears;Angmar Warg Rider with Throwing spears;Fell Warg;Spectre;Warriors of Carn Dum;Warriors of Carn Dum with Spear;Werewolf;Wild Warg",
"Arnor":"Knight of Arnor;Ranger of Arnor;Ranger of Arnor with Spear;Warrior of Arnor",
"Burning_of_the_Westfold":"Crebain;Dunlending Warrior with Bow;Dunlending Warrior with Shield;Dunlending Warrior with Two-handed weapon;Feral Uruk-hai;Isengard Orc Warrior;Isengard Orc Warrior with Orc Bow;Isengard Orc Warrior With Shield;Isengard Orc Warrior with Spear;Isengard Orc Warrior with Two-handed weapon;Uruk-hai Scout;Uruk-hai Scout with Shield;Uruk-hai Scout with Uruk-hai Bow;Wildman of Dunland;Wildman of Dunland with Bow;Wildman of Dunland with Flaming Brand;Wildman of Dunland with Light Shield;Wildman of Dunland with Light shield and Flaming Brand;Wildman of Dunland with Spear;Wildman of Dunland with Two-handed weapon",
"Cirith_Ungol":"Giant Mirkwood Spider;Mordor Orc;Mordor Orc with Orc bow;Mordor Orc with Shield;Mordor Orc with Spear;Mordor Orc with Two-handed weapon;Mordor Uruk-hai;Mordor Uruk-hai with Two-handed weapon;Orc Tracker",
"City_of_Umbar":"Black Númenórean;Corsair Crossbowman;Corsair of Umbar;Corsair of Umbar with Bow;Corsair of Umbar with Light shield and Throwing weapons;Corsair of Umbar with Spear;Corsair Reaver;Haradrim Warrior;Haradrim Warrior with Bow;Haradrim Warrior with Spear",
"Defenders_of_the_North":"Knight of Dale;Iron Hills Dwarf with Crossbow;Iron Hills Dwarf with mattock;Iron Hills Dwarf with shield & spear;Warrior of Dale with Esgaroth bow;Warrior of Dale with Shield;Warrior of Dale with Shield and spear",
"Dol_Goldur":"Fell Warg;Hunter Orc;Hunter Orc with Orc Bow;Hunter Orc with Two-handed weapon;Hunter Orc Warg Rider;Hunter Orc Warg Rider with Orc Bow;Hunter Orc Warg Rider with Two-handed weapon;Mirkwood Giant Spider;Mirkwood Hunting Spider",
"Durins_Folk":"Dwarf Ranger with Dwarf Longbow;Dwarf Ranger with Throwing Weapon;Dwarf Ranger with Two-handed weapon;Dwarf Warrior with Dwarf Bow;Dwarf Warrior with Shield;Dwarf Warrior with Two-handed weapon;Foe Spear Wielder;Iron Guard;Iron Shield Bearer;Khazâd Guard",
"Easterlings":"Black Dragon Warrior;Black Dragon Warrior with Easterling Halberd;Dragon Cult Acolyte;Easterling Kataphrakt;Easterling Warrior;Easterling Warrior with Bow;Easterling Warrior with Easterling Halberd and shield;Easterling Warrior with Shield;Rhûnish War Drake",
"Erebor_Dale":"Grimhammer;Warrior of Dale with Esgaroth bow;Warrior of Dale with Shield;Warrior of Dale with Shield and spear;Warrior of Erebor with shield;Warrior of Erebor with shield and spear;Warrior of Erebor with spear",
"Fiefdoms":"Axeman of Lossarnach;Blackroot Vale Archer;Clansman of Lamedon;Knight of Dol Amroth;Man-at-arms of Dol Amroth",
"Fornost":"Hobbit Archer;Knight of Minas Tirith;Ranger of Arnor;Rivendell Warrior;Rivendell Warrior with Elf bow;Rivendell Warrior with Shield;Rivendell Warrior with Spear and Shield;Warrior of Minas Tirith;Warrior of Minas Tirith with Bow;Warrior of Minas Tirith with Shield;Warrior of Minas Tirith with Spear & Shield",
"Goblin_town":"Goblin Mercenary;Goblin Warrior;Goblin Warrior with Two-handed weapon",
"Grand_Army_of_the_South":"Corsair of Umbar;Corsair of Umbar with Bow;Corsair of Umbar with Light shield and Throwing weapons;Corsair of Umbar with Spear;Easterling Warrior;Easterling Warrior with Bow;Easterling Warrior with Easterling Halberd and shield;Easterling Warrior with Shield;Half Troll;Half Troll with Two-handed weapon;Haradrim Raider;Haradrim Raider with Bow;Haradrim Raider with Bow and Warspear;Haradrim Raider with Warspear;Haradrim Warrior;Haradrim Warrior with Bow;Haradrim Warrior with Spear;Khandish Horseman;Khandish Warrior;Khandish Warrior with Bow;Mahûd Warrior;Mahûd Warrior with Blowpipe;Mahûd Warrior with Spear",
"Gundabad":"Goblin Mercenary;Gundabad Berserker;Gundabad Berserker with Two-handed weapon;Gundabad Orc;Gundabad Orc with Shield;Gundabad Orc with Spear",
"Halls_of_Thranduil":"Mirkwood Cavalry;Mirkwood Elf with Elf bow;Mirkwood Elf with Elven-made glaive;Mirkwood Elf with Shield;Mirkwood Ranger;Palace Guard with Elven spear;Palace Guard with Shield;Palace Guard with Shield and Elven spear",
"Harad":"Abrakhân Guard;Haradrim Raider;Haradrim Raider with Bow;Haradrim Raider with Bow and Warspear;Haradrim Raider with Warspear;Haradrim Warrior;Haradrim Warrior with Bow;Haradrim Warrior with Spear;Serpent Guard;Serpent Rider;Watcher of Kârna;Watcher of Kârna with Bow;Watcher of Kârna with Twin Blades",
"Helms_Deep":"Dwarf Warrior with Two-handed weapon;Galadhrim Warrior;Galadhrim Warrior Elven Spear (Elf Only);Galadhrim Warrior with Elf bow;Galadhrim Warrior with Shield;Galadhrim Warrior with Shield and Elven Spear (Elf Only);Helminga with Bow;Helminga with Shield;Helminga with Shield and Throwing Spear;Lothlorien Warrior;Lothlorien Warrior with Elf bow;Lothlorien Warrior with Elven throwing weapons;Lothlorien Warrior with Wood Elf Spear;Ranger of the North;Ranger of the North with Armour;Warrior of Rohan with Bow;Warrior of Rohan with Shield;Warrior of Rohan with Shield and Throwing Spear",
"Hill_Tribes_of_Dunland":"Crebain;Dunlending Horseman;Dunlending Huscarl;Dunlending Warrior;Dunlending Warrior with Bow;Dunlending Warrior with Shield;Dunlending Warrior with Two-handed weapon;Hill Tribesman;Hill Tribesman with Bow;Hill Tribesman with Flaming Brand;Hill Tribesman with Light shield;Hill Tribesman with Light shield and Flaming Brand;Hill Tribesman with Spear;Hill Tribesman with Two-handed weapon",
"Iron_Hills":"Iron Hills Dwarf with Crossbow;Iron Hills Dwarf with mattock;Iron Hills Dwarf with shield & spear;Iron Hills Goat Rider",
"Lake_Town":"Lake-town Guard;Lake-town Guard with Bow;Lake-town Guard with Spear;Lake-town Militia;Lake-town Militia with Bow;Lake-town Militia with Light Shield;Lake-town Militia with Spear",
"Lothorien":"Galadhrim Knight;Galadhrim Knight with Elf bow;Galadhrim Knight with Shield;Galadhrim Warrior;Galadhrim Warrior Elven Spear (Elf Only);Galadhrim Warrior with Elf bow;Galadhrim Warrior with Shield;Galadhrim Warrior with Shield and Elven Spear (Elf Only);Lorien Guard;Lorien Guard with Elf Bow;Lorien Guard with Elven Spear;Lorien Guard with Shield;Lorien Guard with Shield and Spear;Lothlorien Warrior;Lothlorien Warrior with Elf bow;Lothlorien Warrior with Elven throwing weapons;Lothlorien Warrior with Wood Elf Spear",
"Minas_Morgul":"Black Númenórean;Black Númenórean Knight;Mordor Orc;Mordor Orc with Orc bow;Mordor Orc with Shield;Mordor Orc with Spear;Mordor Orc with Two-handed weapon;Morannon Orc;Morannon Orc with Shield;Morannon Orc with Shield and Spear;Morannon Orc with Spear;Morgul Stalker;Orc Tracker;Spectre",
"Minas_Tirith":"Citadel Guard;Citadel Guard with Longbow;Citadel Guard with Spear;Guard of the Fountain Court;Knight of Minas Tirith;Warrior of Minas Tirith;Warrior of Minas Tirith with Bow;Warrior of Minas Tirith with Shield;Warrior of Minas Tirith with Spear & Shield",
"Mirkwood":"Bat Swarm;Mirkwood Giant Spider;Mirkwood Hunting Spider;Mordor Orc;Mordor Orc with Orc bow;Mordor Orc with Shield;Mordor Orc with Spear;Mordor Orc with Two-handed weapon;Mordor Warg Rider;Mordor Warg Rider With Orc Bow;Mordor Warg Rider with Shield;Mordor Warg Rider with Shield and Throwing spears;Mordor Warg Rider with Throwing spears;Moria Goblin Prowler;Moria Goblin Warrior;Moria Goblin Warrior with Orc bow;Moria Goblin Warrior with Shield;Moria Goblin Warrior with Spear;Orc Tracker;Warg Marauder;Wild Warg",
"Mordor":"Black Guard of Barad-dûr;Black Númenórean;Morannon Orc;Morannon Orc with Shield;Morannon Orc with Shield and Spear;Morannon Orc with Spear;Mordor Orc;Mordor Orc with Orc bow;Mordor Orc with Shield;Mordor Orc with Spear;Mordor Orc with Two-handed weapon;Mordor Uruk-hai;Mordor Uruk-hai with Two-handed weapon;Orc Tracker;Warg Rider;Warg Rider with Orc bow;Warg Rider with Shield;Warg Rider with Shield and Throwing spears;Warg Rider with Throwing spears",
"Moria":"Moria Blackshield;Moria Blackshield with Spear;Moria Goblin Prowler;Moria Goblin Warrior;Moria Goblin Warrior with Orc bow;Moria Goblin Warrior with Shield;Moria Goblin Warrior with Spear",
"Muster_of_Isengard":"Feral Uruk-hai;Uruk-hai Berserker;Uruk-hai Scout;Uruk-hai Scout with Shield;Uruk-hai Scout with Uruk-hai Bow;Uruk-hai Warrior;Uruk-hai Warrior with Crossbow;Uruk-hai Warrior with Pike;Uruk-hai Warrior with Shield",
"Osgiliath_Ithilien":"Knight of Minas Tirith;Osgiliath Veteran;Osgiliath Veteran with Bow;Osgiliath Veteran with Shield;Osgiliath Veteran with Spear;Ranger of Gondor;Ranger of Gondor with Spear;Ranger of Ithilien;Warrior of Minas Tirith;Warrior of Minas Tirith with Bow;Warrior of Minas Tirith with Shield;Warrior of Minas Tirith with Spear & Shield",
"Paths_of_the_Druadan":"Rider of Rohan;Rider of Rohan with Throwing Spear;Rohan Outrider;Warrior of Rohan with Bow;Warrior of Rohan with Shield;Warrior of Rohan with Shield and Throwing Spear;Woses Warrior",
"Rangers_of_the_North":"Ranger of the North;Ranger of the North with Armour",
"Rivendell":"Noldorin Exile;Noldorin Exile with Elf bow;Noldorin Exile with Elven throwing weapons;Noldorin Exile with Wood Elf Spear;Rivendell Knight;Rivendell Warrior;Rivendell Warrior with Elf bow;Rivendell Warrior with Shield;Rivendell Warrior with Spear and Shield",
"Rohan":"Rider of Rohan;Rider of Rohan with Throwing Spear;Rohan Outrider;Rohan Royal Guard;Son of Eorl;Warrior of Rohan with Bow;Warrior of Rohan with Shield;Warrior of Rohan with Shield and Throwing Spear",
"Sharkeys_Rogues":"Hill Tribesman;Hill Tribesman with Bow;Hill Tribesman with Flaming Brand;Hill Tribesman with Light shield;Hill Tribesman with Light shield and Flaming Brand;Hill Tribesman with Spear;Hill Tribesman with Two-handed weapon;Rohirrim Traitor;Rohirrim Traitor with Bow;Rohirrim Traitor with Shield;Rohirrim Traitor with Shield and throwing spears;Ruffian;Ruffian with Bow;Ruffian with Whip",
"Shire":"Battlin’ Brandybuck;Hobbit Archer;Hobbit Militia;Hobbit Shiriff;Ranger of the North;Tookish Hunter",
"The_Last_Alliance":"High Elf Warrior with Elf bow;Rivendell Warrior;Rivendell Warrior with Elf bow;Rivendell Warrior with Shield;Rivendell Warrior with Spear and Shield;Warrior of Númenór;Warrior of Númenór with Longbow;Warrior of Númenór with Shield;Warrior of Númenór with Shield and Spear",
"Wanderers_in_the_Wild":"Battlin’ Brandybuck;Dwarf Ranger with Dwarf Longbow;Dwarf Ranger with Throwing Weapon;Dwarf Ranger with Two-handed weapon;Hobbit Archer;Hobbit Militia;Hobbit Shiriff;Lothlorien Warrior with Elf bow;Tookish Hunter;Warrior of Númenór with Longbow;Warrior of Númenór with Shield;Warrior of Númenór with Shield and Spear",
"Wolves_of_Isengard":"Isengard Warg;Isengard Warg Rider;Isengard Warg Rider with Orc Bow;Isengard Warg Rider with Shield;Isengard Warg Rider with Shield and Throwing spears;Isengard Warg Rider with Throwing spears"};
var PR={"Minas_Tirith":[4,"Warrior of Minas Tirith with Bow:2;Warrior of Minas Tirith with Shield:2;Warrior of Minas Tirith with Spear & Shield:2"],
"Osgiliath_Ithilien":[4,"Osgiliath Veteran with Shield:1;Ranger of Gondor:1;Warrior of Minas Tirith with Bow:1;Warrior of Minas Tirith with Shield:2;Warrior of Minas Tirith with Spear & Shield:1"],
"Fiefdoms":[0,"Knight of Dol Amroth:1;Axeman of Lossarnach:1;Blackroot Vale Archer:2;Clansman of Lamedon:3"],
"Fornost":[1,"Rivendell Warrior with Elf bow:1;Warrior of Minas Tirith with Spear & Shield:2;Warrior of Minas Tirith with Shield:2;Hobbit Archer:2"],
"Arnor":[4,"Ranger of Arnor:3;Warrior of Arnor:4"],
"The_Last_Alliance":[1,"Rivendell Warrior:2;High Elf Warrior with Elf bow:1;Warrior of Númenór with Shield:3"],
"Rohan":[2,"Rider of Rohan:1;Warrior of Rohan with Shield:4;Warrior of Rohan with Shield and Throwing Spear:1;Warrior of Rohan with Bow:1"],
"Helms_Deep":[1,"Ranger of the North with Armour:1;Dwarf Warrior with Two-handed weapon:1;Lothlorien Warrior with Elf bow:1;Warrior of Rohan with Shield:1;Warrior of Rohan with Shield and Throwing Spear:1;Galadhrim Warrior:1"],
"Paths_of_the_Druadan":[5,"Warrior of Rohan with Shield:3;Rohan Outrider:2;Woses Warrior:2"],
"Erebor_Dale":[3,"Warrior of Erebor with shield:2;Warrior of Erebor with spear:1;Warrior of Erebor with shield and spear:1;Warrior of Dale with Esgaroth bow:2"],
"Defenders_of_the_North":[0,"Iron Hills Dwarf with mattock:2;Iron Hills Dwarf with shield & spear:1;Warrior of Dale with Esgaroth bow:2;Warrior of Dale with Shield and spear:1"],
"Lothorien":[3,"Lothlorien Warrior:1;Lothlorien Warrior with Elf bow:1;Lothlorien Warrior with Wood Elf Spear:1;Galadhrim Warrior Elven Spear (Elf Only):1;Galadhrim Warrior with Elf bow:1;Galadhrim Warrior:1"],
"Rivendell":[2,"Rivendell Warrior:4;Rivendell Warrior with Elf bow:2"],
"Halls_of_Thranduil":[4,"Mirkwood Elf with Shield:2;Mirkwood Ranger:1;Mirkwood Elf with Elven-made glaive:2"],
"Durins_Folk":[6,"Dwarf Warrior with Shield:2;Dwarf Warrior with Two-handed weapon:2;Dwarf Warrior with Dwarf Bow:2"],
"Iron_Hills":[1,"Iron Hills Dwarf with shield & spear:3;Iron Hills Dwarf with mattock:1;Iron Hills Dwarf with Crossbow:1"],
"Lake_Town":[1,"Lake-town Guard:1;Lake-town Guard with Bow:1;Lake-town Guard with Spear:1;Lake-town Militia with Bow:2;Lake-town Militia with Light Shield:2;Lake-town Militia with Spear:2"],
"Wanderers_in_the_Wild":[0,"Warrior of Númenór with Longbow:1;Hobbit Militia:1;Hobbit Shiriff:1;Battlin’ Brandybuck:1;Tookish Hunter:1"],
"Rangers_of_the_North":[0,"Ranger of the North:3;Ranger of the North with Armour:1"],
"Shire":[0,"Ranger of the North:1;Hobbit Archer:2;Hobbit Militia:10"],
"Mordor":[0,"Mordor Orc with Shield:3;Mordor Orc with Spear:3;Mordor Orc with Orc bow:2;Mordor Orc with Two-handed weapon:2"],
"Cirith_Ungol":[0,"Mordor Uruk-hai:2;Mordor Orc with Shield:1;Mordor Orc with Spear:2;Mordor Orc with Orc bow:1;Giant Mirkwood Spider:1"],
"Minas_Morgul":[0,"Mordor Orc with Shield:2;Mordor Orc with Spear:2;Mordor Orc with Orc bow:2;Black Númenórean:2"],
"Angmar_Carn_Dum":[4,"Angmar Orc Warrior with Orc Bow:1;Angmar Orc Warrior with Shield:1;Angmar Orc Warrior with Spear:1;Angmar Orc Warrior with Two-handed weapon:1;Wild Warg:2;Warriors of Carn Dum:2"],
"Burning_of_the_Westfold":[0,"Uruk-hai Scout with Shield:1;Uruk-hai Scout with Uruk-hai Bow:1;Wildman of Dunland with Flaming Brand:3;Isengard Orc Warrior with Orc Bow:1;Isengard Orc Warrior With Shield:1;Isengard Orc Warrior with Spear:1;Isengard Orc Warrior with Two-handed weapon:1"],
"Muster_of_Isengard":[0,"Uruk-hai Scout with Shield:2;Uruk-hai Scout with Uruk-hai Bow:2;Uruk-hai Scout:3"],
"Wolves_of_Isengard":[3,"Isengard Warg:3;Isengard Warg Rider with Orc Bow:1;Isengard Warg Rider with Shield:2"],
"Hill_Tribes_of_Dunland":[0,"Dunlending Warrior with Shield:1;Dunlending Warrior with Two-handed weapon:1;Dunlending Warrior with Bow:1;Hill Tribesman with Bow:1;Hill Tribesman with Flaming Brand:1;Hill Tribesman with Light shield:1;Hill Tribesman with Spear:2;Hill Tribesman with Two-handed weapon:1"],
"Sharkeys_Rogues":[0,"Ruffian with Bow:2;Ruffian with Whip:5;Hill Tribesman with Bow:1;Hill Tribesman with Light shield:1;Hill Tribesman with Spear:1"],
"Moria":[0,"Moria Goblin Warrior with Orc bow:4;Moria Goblin Warrior with Shield:4;Moria Goblin Warrior with Spear:4"],
"Mirkwood":[0,"Moria Goblin Warrior with Orc bow:1;Moria Goblin Warrior with Spear:2;Mordor Orc with Shield:1;Mordor Orc with Spear:1;Mordor Orc with Orc bow:1;Wild Warg:3"],
"Harad":[4,"Haradrim Warrior with Bow:4;Haradrim Warrior with Spear:4"],
"City_of_Umbar":[0,"Black Númenórean:1;Corsair of Umbar with Light shield and Throwing weapons:2;Haradrim Warrior with Spear:2;Corsair of Umbar with Bow:2"],
"Easterlings":[3,"Black Dragon Warrior:1;Easterling Warrior with Easterling Halberd and shield:2;Easterling Warrior with Bow:2;Easterling Warrior with Shield:1"],
"Grand_Army_of_the_South":[3,"Mahûd Warrior with Blowpipe:1;Khandish Warrior:2;Corsair of Umbar with Light shield and Throwing weapons:2;Haradrim Warrior with Bow:2"],
"Dol_Goldur":[1,"Hunter Orc:2;Hunter Orc with Orc Bow:2;Hunter Orc with Two-handed weapon:1;Fell Warg:2"],
"Goblin_town":[0,"Goblin Warrior:12"],
"Gundabad":[0,"Gundabad Orc with Shield:3;Gundabad Orc with Spear:3"]};
for(var s in P2){var a=s.split(',').map(Number);P2[s].split(';').forEach(function(n){D.profiles[n]=a.slice()})}
D.bwbase={};for(var n in BW){D.bwbase[n]=BW[n].split('|').filter(Boolean)}
for(var id in M2){var b=D.bcs.find(function(x){return x.id===id});if(b)b.models=M2[id].split(';')}
D.presets={};for(var id2 in PR){D.presets[id2]={o:PR[id2][0],u:PR[id2][1].split(';').map(function(p){var q=p.split(':');return[q[0],+q[1]]})}}
D.wg.base['Whip']=1;D.wg.base['Twin Blades']=1;
function fillBW(t){var l=D.bwbase[t.model];if(!l)return;t.g.bw=Array(6).fill('');l.slice(0,6).forEach(function(v,i){t.g.bw[i]=v});t.bwa=1}
function presetTroops(bc){var out=[],pr=D.presets[bc];if(pr)pr.u.forEach(function(u){for(var k=0;k<u[1];k++){var t=newT();t.model=u[0];t.pre=1;fillBW(t);out.push(t)}});return out}
function applyPreset(full){if(full){S.t=presetTroops(S.bc)}else{S.t=S.t.filter(function(t){return t.pre?false:!emp(t)});S.t=S.t.concat(presetTroops(S.bc))}S.tDirty=false}
function ask(msg,ok,no){var o=document.createElement('div');o.className='mdl';o.innerHTML='<div class="mb" role="dialog" aria-modal="true"><p>'+msg+'</p><div><button class="btn" data-q="no">Annulla</button><button class="btn pri" data-q="ok">Conferma</button></div></div>';
o.addEventListener('click',function(e){e.stopPropagation();var q=e.target.dataset&&e.target.dataset.q;if(q){o.remove();if(q==='ok')ok();else if(no)no()}else if(e.target===o){o.remove();if(no)no()}});document.body.appendChild(o)}
var lastBC=S.bc;
if(S.oro==null&&S.bc)S.oro=(D.presets[S.bc]||{}).o||0;
document.addEventListener('change',function(e){var p=e.target.dataset&&e.target.dataset.p;if(!p)return;
if(/^t\./.test(p)){S.tDirty=true;save()}
if(p==='bc'){var nb=S.bc;if(nb===lastBC)return;
if(S.tDirty){ask('Attenzione le truppe saranno ripristinate, confermi?',function(){S.bc=nb;S.oro=(D.presets[nb]||{}).o||0;applyPreset(true);S.h=[newH(),newH(),newH()];S.wand='';lastBC=nb;render();save()},function(){S.bc=lastBC;raceTheme(S);render();save()})}
else{S.oro=(D.presets[nb]||{}).o||0;applyPreset(false);lastBC=nb;render();save()}
return}
var m=p.match(/^t\.(\d+)\.model$/);if(m){var t=S.t[+m[1]];if(t&&(t.bwa||!t.g.bw.some(Boolean))){fillBW(t);render()}return}
if(/^t\.\d+\.g\.bw\./.test(p)){var t2=S.t[+p.split('.')[1]];if(t2)t2.bwa=0}});
document.addEventListener('click',function(e){var x=e.target.closest?e.target.closest('[data-xp],[data-del],[data-pro],[data-act]'):null;if(!x)return;var d=x.dataset;
if((d.xp&&/^t\./.test(d.xp))||(d.del&&/^t\./.test(d.del))||(d.pro&&/^t\./.test(d.pro))||d.act==='addt'){S.tDirty=true;save()}},true);
function injectOro(){var hl=document.querySelector('.hl');if(!hl||hl.dataset.oro)return;hl.dataset.oro=1;hl.style.gridTemplateColumns='repeat(auto-fit,minmax(180px,1fr))';
var b=document.createElement('div');b.className='hlc o';b.innerHTML='<h4><span class="ic">🪙</span>Oro</h4><div class="stp2"><button class="btn" data-oro="-1">−</button><input data-p="oro" data-t="n" type="number" min="0" value="'+(S.oro||0)+'"><button class="btn" data-oro="1">+</button></div>';
hl.insertBefore(b,hl.children[1]||null)}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);injectOro();return x};
document.addEventListener('click',function(e){var b=e.target.closest?e.target.closest('[data-oro]'):null;if(!b)return;S.oro=Math.max(0,(+S.oro||0)+(+b.dataset.oro));render()});
render();
})();
}catch(e){console.error('[PRESET-PATCH v6]',e)}
;
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
/* ----- [04/36] THEME-PATCH v11 ----- */
try{
/*THEME-PATCH v11*/
(function(){
var G=["M0 -16 L0 14 M0 -8 Q11 -8 11 1 Q11 8 0 8","M0 -16 L0 14 M0 -12 Q10 -12 10 -5 Q10 -1 0 -1 M0 -1 Q10 -1 10 6 Q10 11 0 11","M0 -14 Q5 -2 0 14 M0 -6 Q-10 -6 -10 2 Q-10 8 0 8","M0 -16 L0 14 M0 -16 Q7 -22 12 -15 M-4 -24 L-1 -28 M3 -24 L6 -28","M-6 -16 L-6 14 M-6 -6 Q4 -6 4 2 Q4 8 -6 8 M4 -16 L4 14","M0 -14 Q8 -14 8 -4 Q8 6 -2 6 Q-8 6 -8 12 M-8 -20 L-5 -24 M-2 -20 L1 -24"];
var Q=[[0,0,52],[18,3,50],[36,1,53],[54,2,51],[72,4,52],[90,0,50],[108,5,53],[126,1,51],[144,3,52],[162,2,50],[180,4,53],[198,0,51],[216,1,52],[234,5,50],[252,2,53],[270,3,51],[288,4,52],[306,0,50],[324,1,53],[342,5,51]];
var P='';for(var i=0;i<Q.length;i++){P+="<path transform='rotate("+Q[i][0]+" 200 200) translate(200 "+Q[i][2]+")' d='"+G[Q[i][1]]+"'/>"}
function ring(sw,col,glow){return "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>"+(glow?"<defs><filter id='g' x='-30%' y='-30%' width='160%' height='160%'><feGaussianBlur stdDeviation='3' result='b'/><feMerge><feMergeNode in='b'/><feMergeNode in='SourceGraphic'/></feMerge></filter></defs>":"")+"<g "+(glow?"filter='url(#g)' ":"")+"fill='none' stroke='"+col+"' stroke-width='"+sw+"' stroke-linecap='round' stroke-linejoin='round'>"+P+"</g></svg>"}
function enc(s){return 'data:image/svg+xml,'+encodeURIComponent(s)}
var NOISE="<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .55 0'/></filter><rect width='300' height='300' filter='url(#n)' opacity='.5'/></svg>";
var WTOP="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 170 36'><g fill='none' stroke='#ffcf3d' stroke-width='1.8' stroke-linecap='round'><path d='M0 14q6 -7 12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0'/><path d='M20 6l3 -4M23 6l3 -4M78 6l3 -4M81 6l3 -4M136 6l3 -4M139 6l3 -4' stroke-width='1.1'/></g><rect x='0' y='25' width='170' height='1.4' fill='#d9a31e' fill-opacity='.85'/></svg>";
var WBOT="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 170 36'><g fill='none' stroke='#ffcf3d' stroke-width='1.8' stroke-linecap='round'><path d='M0 22q6 7 12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0'/><path d='M20 30l3 4M23 30l3 4M78 30l3 4M81 30l3 4M136 30l3 4M139 30l3 4' stroke-width='1.1'/></g><rect x='0' y='9' width='170' height='1.4' fill='#d9a31e' fill-opacity='.85'/></svg>";
var t=(D.themes&&D.themes[''])||{};
D.themes['']=Object.assign({},t,{emc:'#ffd24a',
bg:'radial-gradient(circle at 50% 32%,rgba(217,163,30,.25) 0,rgba(217,163,30,.08) 20%,transparent 45%), url("'+enc(ring(4.5,'#e8b53a',true))+'") no-repeat center 34%/min(76vw,500px) auto, url("'+enc(NOISE)+'") repeat 0 0/300px 300px, linear-gradient(180deg,#0b2148 0%,#071736 48%,#040d22 100%)',
ban:{bg:(t.ban&&t.ban.bg)||'radial-gradient(circle at 50% 0%,rgba(217,163,30,.22) 0,transparent 55%),linear-gradient(180deg,#123a7a 0%,#0a2450 56%,#061735 100%)',top:enc(WTOP),bot:enc(WBOT),bw:(t.ban&&t.ban.bw)||'170px'}});
var CREST=ring(11,'#ffd24a',false).replace('<svg ',"<svg style='width:88%;height:88%' ");
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);
if(!S.bc&&!S.logo){var c=document.querySelector('.crest');if(c)c.innerHTML=CREST}
return x};
try{raceTheme(S)}catch(e){}
render();
})();
}catch(e){console.error('[THEME-PATCH v11]',e)}
;
/* ----- [05/36] TENG-PATCH v12 ----- */
try{
/*TENG-PATCH v12*/
(function(){
var GL="M30 8L30 32M30 14Q20 14 20 22Q20 28 30 28M30 32Q26 36 22 36 M76 10Q80 20 76 32M76 16Q68 16 68 24Q68 30 76 30M72 4L74 2M80 4L82 2 M124 8L124 32M124 12Q132 12 132 18Q132 22 124 22M124 22Q132 22 132 28Q132 32 124 32 M172 8Q182 8 182 16Q182 24 174 24Q168 24 168 30M168 5L171 2M176 5L179 2 M220 8L220 26Q220 34 212 36M220 14Q229 14 229 21Q229 26 220 26 M268 8L268 32M268 14Q278 14 278 22Q278 28 268 28M268 32Q272 36 276 36 M316 10Q320 20 316 32M316 16Q308 16 308 24Q308 30 316 30M312 4L314 2M320 4L322 2 M50 6L52 4M146 6L148 4M242 6L244 4";
var SVG="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 340 40'><defs><filter id='g' x='-20%' y='-20%' width='140%' height='140%'><feGaussianBlur stdDeviation='1.1' result='b'/><feMerge><feMergeNode in='b'/><feMergeNode in='SourceGraphic'/></feMerge></filter></defs><g filter='url(#g)' fill='none' stroke='#ffd24a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='"+GL+"'/></g></svg>";
var URI='data:image/svg+xml,'+encodeURIComponent(SVG);
function injectTeng(){var ban=document.querySelector('.ban');if(!ban)return;var on=!S.bc&&ban.classList.contains('t-on');var el=ban.querySelector('.tengrow');
if(!on){if(el)el.remove();ban.style.paddingTop='';return}
if(!el){el=document.createElement('div');el.className='tengrow';ban.insertBefore(el,ban.firstChild)}
el.style.cssText='position:absolute;left:0;right:0;top:40px;height:34px;pointer-events:none;z-index:1;background:url("'+URI+'") repeat-x center/auto 100%;opacity:.95';
ban.style.paddingTop='86px'}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);injectTeng();return x};
render();
})();
}catch(e){console.error('[TENG-PATCH v12]',e)}
;
/* ----- [06/36] ORO-FIX v13 ----- */
try{
/*ORO-FIX v13*/
(function(){
if(typeof S!=='undefined'&&S&&(!isFinite(S.oro)||S.oro==null))S.oro=+S.oro||0;
function fixNest(){var o=document.querySelector('.hlc.o');if(!o)return;var p=o.parentNode;
if(p&&!p.classList.contains('hl')){var hl=document.querySelector('.hl');if(hl){hl.insertBefore(o,hl.children[1]||null)}}}
function syncOro(){fixNest();var i=document.querySelector('input[data-p="oro"]');if(i&&document.activeElement!==i)i.value=(S.oro||0)}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);syncOro();return x};
document.addEventListener('click',function(e){var t=e.target;window.__og={pre:S.oro,allow:!!(t&&t.hasAttribute&&t.hasAttribute('data-oro'))}},true);
document.addEventListener('change',function(e){var t=e.target,p=t&&t.dataset?t.dataset.p:null;window.__og={pre:S.oro,allow:p==='oro'}},true);
function guard(){var g=window.__og;window.__og=null;if(g&&!g.allow&&S.oro!==g.pre){S.oro=g.pre;render()}}
document.addEventListener('click',guard,false);
document.addEventListener('change',guard,false);
syncOro();render();
})();
}catch(e){console.error('[ORO-FIX v13]',e)}
;
/* ----- [07/36] WGAV-PATCH v15 ----- */
try{
/*WGAV-PATCH v15*/
(function(){
var TB='Twin Blades';
var d=D.bcs.find(function(x){return x.id==='Durins_Folk'});
if(d)d.awex=['Foe Spear','Iron Shield'];
D.bcs.forEach(function(b){if((b.models||[]).indexOf('Watcher of Kârna with Twin Blades')>=0){b.awadd=b.awadd||[];if(b.awadd.indexOf(TB)<0)b.awadd.push(TB)}});
var W=D.wg;
[['Pavise',1,5],['Elven Cloak',1,5],['Berserker Blade',1,5],[TB,1,1]].forEach(function(e){if(W.base[e[0]]==null)W.base[e[0]]=e[1];if(W.heroLo[e[0]]==null)W.heroLo[e[0]]=e[1];if(W.heroHi[e[0]]==null)W.heroHi[e[0]]=e[2]});
render();
})();
}catch(e){console.error('[WGAV-PATCH v15]',e)}
;
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
/* ----- [10/36] BCUI-PATCH v25 ----- */
try{
/*BCUI-PATCH v25*/
(function(){
var SIDES={"Bene":{"Uomini":["Arnor","Defenders_of_the_North","Fiefdoms","Rohan","Fornost","Minas_Tirith","Osgiliath_Ithilien","Paths_of_the_Druadan","Rangers_of_the_North","Helms_Deep","Lake_Town"],"Elfi":["Halls_of_Thranduil","Lothorien","Rivendell","The_Last_Alliance"],"Nani":["Iron_Hills","Durins_Folk","Erebor_Dale"],"Altri popoli":["Shire","Wanderers_in_the_Wild"]},
"Male":{"Uomini":["Burning_of_the_Westfold","Easterlings","Harad","City_of_Umbar","Grand_Army_of_the_South","Hill_Tribes_of_Dunland","Sharkeys_Rogues"],"Orchi":["Dol_Goldur","Angmar_Carn_Dum","Gundabad","Cirith_Ungol","Minas_Morgul","Mordor","Muster_of_Isengard"],"Goblin":["Moria","Goblin_town"],"Creature":["Mirkwood","Wolves_of_Isengard"]}};
function nameOf(id){var b=D.bcs.find(function(x){return x.id===id});return b?b.name:id}
function esc2(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function lum(h){h=String(h||'#000').replace('#','');if(h.length===3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];var n=parseInt(h,16);if(isNaN(n))return 0;return(.299*(n>>16)+.587*((n>>8)&255)+.114*(n&255))/255}
function onOf(c){return lum(c)>0.62?'#101418':'#ffffff'}
var panel=null,view=null;
function closePanel(){if(panel){panel.remove();panel=null;view=null}}
function pick(id){closePanel();var sel=document.querySelector('select[data-p="bc"]');if(sel){sel.value=id;sel.dispatchEvent(new Event('change',{bubbles:true}))}else{S.bc=id;try{raceTheme(S)}catch(e){}render()}}
var SVG_BENE="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 160'><defs><linearGradient id='s' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#cfe0da'/><stop offset='.5' stop-color='#7fa39b'/><stop offset='.78' stop-color='#2a6b66'/><stop offset='1' stop-color='#123f3c'/></linearGradient><linearGradient id='w' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#3f8f88'/><stop offset='1' stop-color='#0e332f'/></linearGradient><radialGradient id='m' cx='.5' cy='.5' r='.5'><stop offset='0' stop-color='#eaf6f2' stop-opacity='.75'/><stop offset='1' stop-color='#eaf6f2' stop-opacity='0'/></radialGradient><linearGradient id='t' x1='0' y1='0' x2='1' y2='0'><stop offset='0' stop-color='#b7cdc6'/><stop offset='.5' stop-color='#8fa8a2'/><stop offset='1' stop-color='#647d77'/></linearGradient></defs><rect width='320' height='160' fill='url(#s)'/><ellipse cx='160' cy='98' rx='150' ry='30' fill='url(#m)'/><rect y='112' width='320' height='48' fill='url(#w)'/><path d='M0 0L52 0L40 58L48 160L0 160Z' fill='#20302b'/><path d='M320 0L268 0L280 62L272 160L320 160Z' fill='#20302b'/><g stroke='#22403a' stroke-width='1.1' stroke-linejoin='round'><path d='M100 116L98 62Q98 50 106 44L110 26Q114 16 122 16Q130 16 133 26L136 44Q144 50 144 62L142 116Z' fill='url(#t)'/><path d='M112 22L115 13L119 20L122 11L126 20L129 13L132 22Z' fill='#dcece6'/><path d='M136 48L152 22L158 26L144 54Z' fill='url(#t)'/><circle cx='155' cy='24' r='4.5' fill='#dcece6'/><path d='M104 50L95 78L100 81L108 56Z' fill='#647d77'/><path d='M110 68L108 112M120 64L120 114M130 68L132 112' fill='none' stroke='#516a64' stroke-width='1.3'/><path d='M116 30Q122 35 128 30' fill='none' stroke='#516a64' stroke-width='1'/></g><g stroke='#22403a' stroke-width='1.1' stroke-linejoin='round'><path d='M220 116L222 62Q222 50 214 44L210 26Q206 16 198 16Q190 16 187 26L184 44Q176 50 176 62L178 116Z' fill='url(#t)'/><path d='M208 22L205 13L201 20L198 11L194 20L191 13L188 22Z' fill='#dcece6'/><path d='M184 48L168 22L162 26L176 54Z' fill='url(#t)'/><circle cx='165' cy='24' r='4.5' fill='#dcece6'/><path d='M216 50L225 78L220 81L212 56Z' fill='#647d77'/><path d='M210 68L212 112M200 64L200 114M190 68L188 112' fill='none' stroke='#516a64' stroke-width='1.3'/><path d='M204 30Q198 35 192 30' fill='none' stroke='#516a64' stroke-width='1'/></g><path d='M100 120L142 120L138 150L104 150Z' fill='#8fa8a2' opacity='.28'/><path d='M178 120L220 120L216 150L182 150Z' fill='#8fa8a2' opacity='.28'/><path d='M150 138q10 6 24 0l-4 8h-16Z' fill='#0c2b28'/><path d='M118 146q8 4 18 0l-3 6h-12Z' fill='#0c2b28' opacity='.85'/><rect y='104' width='320' height='6' fill='#eaf6f2' opacity='.12'/><rect y='118' width='320' height='5' fill='#eaf6f2' opacity='.08'/></svg>";if(window.IMG_BENE)SVG_BENE=window.IMG_BENE;
var SVG_MALE="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 160'><defs><linearGradient id='k' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#4a4a4a'/><stop offset='.5' stop-color='#2b2b2b'/><stop offset='1' stop-color='#151210'/></linearGradient><radialGradient id='e' cx='.5' cy='.5' r='.5'><stop offset='0' stop-color='#ffd24a'/><stop offset='.35' stop-color='#ff8c1a'/><stop offset='1' stop-color='#ff8c1a' stop-opacity='0'/></radialGradient><linearGradient id='l' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#ff9a3c'/><stop offset='1' stop-color='#7a1d0a' stop-opacity='0'/></linearGradient></defs><rect width='320' height='160' fill='url(#k)'/><ellipse cx='70' cy='30' rx='90' ry='26' fill='#5a5a5a' opacity='.5'/><ellipse cx='240' cy='22' rx='110' ry='30' fill='#3f3f3f' opacity='.6'/><ellipse cx='160' cy='52' rx='140' ry='24' fill='#242424' opacity='.7'/><path d='M320 160L320 60L268 26L214 160Z' fill='#1c1815'/><path d='M268 26L262 60L270 92L262 128L268 160' stroke='url(#l)' stroke-width='6' fill='none'/><path d='M268 26L280 64L274 100L282 140' stroke='url(#l)' stroke-width='4' fill='none' opacity='.8'/><circle cx='268' cy='26' r='16' fill='url(#e)'/><path d='M96 160L100 64L92 60L104 54L102 34L110 30L108 16L118 12L128 16L126 30L134 34L132 54L144 60L136 64L140 160Z' fill='#0b0b0b'/><path d='M104 54L96 40L106 46Z' fill='#0b0b0b'/><path d='M132 54L140 40L130 46Z' fill='#0b0b0b'/><circle cx='118' cy='22' r='14' fill='url(#e)'/><path d='M110 22Q118 14 126 22Q118 30 110 22Z' fill='#ffe9a3'/><circle cx='118' cy='22' r='2.5' fill='#1a0d05'/><path d='M0 160L0 128L40 116L80 132L120 122L160 138L200 126L240 140L280 130L320 142L320 160Z' fill='#0d0b0a'/><ellipse cx='118' cy='158' rx='90' ry='14' fill='#ff8c1a' opacity='.12'/></svg>";if(window.IMG_MALE)SVG_MALE=window.IMG_MALE;
var SCENES={Bene:{svg:SVG_BENE,bd:'rgba(143,198,189,.85)'},Male:{svg:SVG_MALE,bd:'rgba(232,100,28,.7)'}};
function sceneBG(sv){if(typeof sv=="string"&&sv.indexOf("data:")===0)return 'linear-gradient(180deg,rgba(0,0,0,.02) 0%,rgba(0,0,0,.12) 52%,rgba(0,0,0,.66) 100%), url("'+sv+'") center/cover no-repeat';return 'linear-gradient(180deg,rgba(0,0,0,.02) 0%,rgba(0,0,0,.12) 52%,rgba(0,0,0,.66) 100%), url("data:image/svg+xml,'+encodeURIComponent(sv)+'") center/cover no-repeat'}
function build(){
panel=document.createElement('div');panel.className='mdl';
var box=document.createElement('div');box.className='mb';box.style.cssText='max-width:600px;width:100%;max-height:86vh;display:flex;flex-direction:column;padding:14px 16px';
var head=document.createElement('div');head.style.cssText='display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px;flex:none';
var left=document.createElement('div');left.style.cssText='display:flex;align-items:center;gap:8px';
if(view){var back=document.createElement('button');back.className='btn';back.type='button';back.style.margin='0';back.textContent='←';back.addEventListener('click',function(){view=null;refresh()});left.appendChild(back)}
var t=document.createElement('div');t.style.cssText='font-weight:800;font-size:16px';t.textContent=view?view:'Scegli lo schieramento';left.appendChild(t);
var x=document.createElement('button');x.className='btn';x.type='button';x.style.margin='0';x.textContent='✕';x.addEventListener('click',closePanel);
head.appendChild(left);head.appendChild(x);box.appendChild(head);
var body=document.createElement('div');
if(!view){
body.style.cssText='overflow:auto;display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:6px 2px';
['Bene','Male'].forEach(function(s){
var th=SCENES[s];
var b=document.createElement('button');b.type='button';
b.style.cssText='display:flex;align-items:flex-end;justify-content:center;padding:0 10px 12px;min-height:138px;border:1px solid '+th.bd+';border-radius:16px;font-size:22px;font-weight:800;letter-spacing:.05em;cursor:pointer;color:#fff;background:'+sceneBG(th.svg)+';box-shadow:0 8px 22px rgba(0,0,0,.5), inset 0 0 0 1px rgba(255,255,255,.10);text-shadow:0 2px 8px rgba(0,0,0,.9);text-transform:uppercase';
b.textContent=s;
b.addEventListener('click',function(){view=s;refresh()});body.appendChild(b)});
}else{
body.style.cssText='overflow:auto;display:block;padding:4px 2px';
var G=SIDES[view];
for(var g in G){
var wrap=document.createElement('div');wrap.style.cssText='display:block;margin:0 0 12px';
var gh=document.createElement('div');gh.style.cssText='display:block;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.09em;color:var(--ac);margin:8px 0 4px';gh.textContent=g;wrap.appendChild(gh);
G[g].forEach(function(id){
var th=(D.themes||{})[id]||{};
var c1=th.c1||'#3a4652',c2=th.c2||c1,fg=onOf(c1);
var b=document.createElement('button');b.type='button';
b.style.cssText='display:flex;align-items:center;gap:8px;width:100%;margin:3px 0;padding:8px 10px;border-radius:10px;cursor:pointer;text-align:left;font-style:italic;font-size:14px;font-weight:600;border:1px solid '+c1+'88;background:linear-gradient(135deg,'+c1+' 0%,'+c2+' 130%);color:'+fg+(id===S.bc?';box-shadow:0 0 0 2px '+fg+' inset;font-weight:800':'');
var emb=(th.emblem&&th.emblem.d)?'<svg viewBox="'+th.emblem.vb+'" style="width:20px;height:20px;flex:none;opacity:.95" aria-hidden="true"><path fill="'+fg+'" fill-rule="evenodd" d="'+th.emblem.d+'"/></svg>':'';
b.innerHTML='<span style="flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc2(nameOf(id))+'</span>'+emb;
b.addEventListener('click',function(){pick(id)});
wrap.appendChild(b)});
body.appendChild(wrap);
}
}
box.appendChild(body);panel.appendChild(box);
panel.addEventListener('click',function(e){if(e.target===panel)closePanel()});
document.body.appendChild(panel);
}
function refresh(){if(panel){panel.remove();panel=null}build()}
function openPanel(){if(!panel)build()}
function inject(){
var sel=document.querySelector('select[data-p="bc"]');if(!sel)return;
sel.style.display='none';
var host=sel.parentElement;
var btn=host.querySelector('.bcui-btn');
if(!btn){btn=document.createElement('button');btn.type='button';btn.className='btn bcui-btn';btn.addEventListener('click',function(e){e.stopPropagation();openPanel()});host.insertBefore(btn,sel)}
btn.style.cssText='width:100%;font-style:italic;font-weight:700;padding:8px 10px';
btn.textContent=S.bc?nameOf(S.bc):'Scegli la Battle Company…';
}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);inject();return x};
inject();
})();
}catch(e){console.error('[BCUI-PATCH v25]',e)}
;
