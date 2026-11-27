const K='lotr_bc_v1',TAB0='sum';let tab=TAB0;
const HS={bw:['Wargear base',5],aw:['Wargear aggiuntivo',5],eq:['Equipaggiamento / Creature',6],mn:['Regole minori',4],sp:['Regole speciali',5],cu:['Upgrade di compagnia',1],spl:['Incantesimi (Channeling)',6],ha:['Azioni eroiche',5],inj:['Infortuni',2],tk:['Kit (temporaneo)',12]};
const TS={bw:['Wargear base',6],aw:['Wargear aggiuntivo',6],eq:['Equipaggiamento',6],inj:['Infortuni',2],tk:['Kit (temporaneo)',12]};
const mk=(S)=>{const g={};for(const k in S)g[k]=Array(S[k][1]).fill('');return g};
const newH=()=>({name:'',model:'',rank:'',path:'',mod:Array(9).fill(0),mfw:[0,0,0],g:mk(HS),xp:'',miss:false,img:''});
const newT=()=>({name:'',model:'',rank:'',g:mk(TS),xp:'',miss:false,img:''});
const fresh=()=>({bc:'',infl:0,wand:'',notes:'',h:Array.from({length:3},newH),t:Array.from({length:5},newT)});
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,5);
let DB;try{DB=JSON.parse(localStorage.getItem('lotr_bc_v2'))}catch(e){}
if(!DB||!DB.list||!DB.list.length){let o;try{o=JSON.parse(localStorage.getItem(K))}catch(e){}DB={cur:'',list:[{id:uid(),name:'Armata 1',data:o||fresh()}]};DB.cur=DB.list[0].id}
const army=()=>DB.list.find(a=>a.id===DB.cur)||DB.list[0];
const emp=x=>!x.name&&!x.model&&!x.img&&!x.xp&&Object.values(x.g).every(a=>a.every(v=>!v))&&(x.mfw||[]).every(v=>!v)&&(x.mod||[]).every(v=>!v);
DB.list.forEach(a=>{const d=a.data;while(d.h.length>3&&emp(d.h[d.h.length-1]))d.h.pop();while(d.t.length>5&&emp(d.t[d.t.length-1]))d.t.pop()});
const ALIAS=D.alias||{},hasK=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
function raceTheme(d){const B=D.bcs.find(b=>b.id===d.bc),rm=(D.themes&&D.themes[d.bc]&&D.themes[d.bc].c1&&D.themes[d.bc])||(B&&D.racemeta&&D.racemeta[B.race]);
 if(!rm){if(d.cAuto){delete d.c1;delete d.c2;delete d.cAuto}return}
 if((!d.c1&&!d.c2)||d.cAuto){d.c1=rm.c1;d.c2=rm.c2;d.cAuto=true}}
let aliasN=0;DB.list.forEach(a=>{aliasN+=applyAlias(a.data);raceTheme(a.data)});
let S=army().data,pend='',mo=false,mc=false,mb=false;const OP={};
const save=()=>{try{localStorage.setItem('lotr_bc_v2',JSON.stringify(DB))}catch(e){if(!save.w){save.w=1;alert('Memoria del browser piena: le ultime modifiche non verranno salvate. Rimuovi qualche immagine.')}}};
function applyAlias(d){let n=0;const A=(c,v)=>{const m=ALIAS[c];if(v&&m&&hasK(m,v)&&m[v]&&m[v]!==v){n++;return m[v]}return v},L=(g,k,c)=>{if(Array.isArray(g[k]))g[k]=g[k].map(v=>A(c,v))};
 d.bc=A('bc',d.bc);d.wand=A('wanderers',d.wand);
 d.h.forEach(h=>{h.model=A('profiles',h.model);h.path=A('paths',h.path);const g=h.g;L(g,'bw','wargear');L(g,'aw','wargear');L(g,'eq','equip');L(g,'mn','minor');L(g,'sp','special');L(g,'cu','comp');L(g,'spl','spells');L(g,'ha','heroic');L(g,'inj','injuries')});
 d.t.forEach(t=>{t.model=A('profiles',t.model);const g=t.g;L(g,'bw','wargear');L(g,'aw','wargear');L(g,'eq','equip');L(g,'inj','injuries')});return n}
