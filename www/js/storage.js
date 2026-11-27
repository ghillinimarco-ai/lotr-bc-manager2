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
