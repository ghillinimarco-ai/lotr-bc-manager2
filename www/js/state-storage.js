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
let DL=null;try{if(typeof window!=='undefined'&&window.claude&&window.claude.use)window.claude.use('downloads').then(d=>{DL=d}).catch(()=>{})}catch(e){}
const slug=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9]+/g,'-').replace(/^-|-$/g,'').toLowerCase()||'armata';
async function doExport(a){const all=a==='expall',obj={app:'lotr-bc-roster',version:1,dataVersion:D.ver.v,exportedAt:new Date().toISOString(),armies:(all?DB.list:[army()]).map(x=>({name:x.name,data:x.data}))},
 fn=all?`lotr-armate-${new Date().toISOString().slice(0,10)}.json`:`armata-${slug(army().name)}.json`,txt=JSON.stringify(obj,null,2);
 if(DL){try{await DL.save({filename:fn,data:txt});toast('Esportato: '+fn)}catch(e){if(!e||e.code!=='declined')toast('Esportazione non riuscita'+(e&&e.code?' ('+e.code+')':''))}return}
 try{const u=URL.createObjectURL(new Blob([txt],{type:'application/json'})),l=document.createElement('a');l.href=u;l.download=fn;document.body.appendChild(l);l.click();l.remove();setTimeout(()=>URL.revokeObjectURL(u),2000);toast('Esportato: '+fn)}catch(e){toast('Esportazione non disponibile')}}
const normG=(g,SL)=>{const r={};for(const k in SL){const a=Array.isArray(g&&g[k])?g[k].slice():[];while(a.length<SL[k][1])a.push('');r[k]=a}return r};
function normA(d){const o=Object.assign(fresh(),d),ob=x=>x&&typeof x==='object';
 o.h=d.h.filter(ob).map(x=>{const n=Object.assign(newH(),x);n.g=normG(x.g,HS);if(!Array.isArray(n.mod)||n.mod.length!==9)n.mod=Array(9).fill(0);if(!Array.isArray(n.mfw)||n.mfw.length!==3)n.mfw=[0,0,0];return n});
 o.t=d.t.filter(ob).map(x=>{const n=Object.assign(newT(),x);n.g=normG(x.g,TS);return n});
 if(!o.h.length)o.h=fresh().h;if(!o.t.length)o.t=fresh().t;return o}
function importText(txt){let o;try{o=JSON.parse(txt)}catch(e){return -1}
 const list=Array.isArray(o)?o:o&&Array.isArray(o.armies)?o.armies:o&&Array.isArray(o.h)&&Array.isArray(o.t)?[{name:o.name,data:o}]:null;if(!list)return -1;
 let n=0;for(const a of list){const d=a&&(a.data||(Array.isArray(a.h)&&Array.isArray(a.t)?a:null));if(!d||!Array.isArray(d.h)||!Array.isArray(d.t))continue;
  const base=String(a.name||'Armata importata').slice(0,60);let name=base,k=0;while(DB.list.some(x=>x.name===name)){k++;name=base+' (importata'+(k>1?' '+k:'')+')'}
  const nd=normA(d);applyAlias(nd);raceTheme(nd);DB.list.push({id:uid(),name,data:nd});n++}
 if(n){DB.cur=DB.list[DB.list.length-1].id;S=army().data}return n}
