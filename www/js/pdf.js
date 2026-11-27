/* ===== PDF (stampa) ===== */
const PW=595,PH=842,PM=36,CWd=523;
const hx=h=>{h=(h||'#000').replace('#','');return[0,2,4].map(i=>parseInt(h.substr(i,2),16)/255)};
const dk=(h,f)=>'#'+hx(h).map(v=>Math.round(Math.min(1,v*f)*255).toString(16).padStart(2,'0')).join('');
let _cx;const tw=(s,sz,b)=>{try{_cx=_cx||document.createElement('canvas').getContext('2d');_cx.font=(b?'bold ':'')+sz+'px Helvetica,Arial,sans-serif';return _cx.measureText(String(s)).width}catch(e){return String(s).length*sz*.53}};
const WA={'’':146,'‘':145,'“':147,'”':148,'–':150,'—':151,'•':149,'…':133,'€':128,'−':45,'≤':60};
const win=s=>{let o='';for(const ch of String(s)){const c=ch.charCodeAt(0);o+=c>=32&&c<128||c>=160&&c<256?ch:String.fromCharCode(WA[ch]||(c<32?32:63))}return o.replace(/[\\()]/g,m=>'\\'+m)};
const JC=new Map();
function jp(url){if(JC.has(url))return JC.get(url);let r=null;if(/^data:image\/jpe?g;base64,/.test(url||'')){try{const bin=atob(url.split(',')[1]),n=bin.length,b=new Uint8Array(n);for(let i=0;i<n;i++)b[i]=bin.charCodeAt(i);let i=2,w=0,h=0,c=3;
 while(i<n-9){if(b[i]!==255){i++;continue}const m=b[i+1];if(m===255){i++;continue}if(m===1||m>=0xD0&&m<=0xD9){i+=2;continue}
  if(m>=0xC0&&m<=0xCF&&m!==0xC4&&m!==0xC8&&m!==0xCC){h=b[i+5]<<8|b[i+6];w=b[i+7]<<8|b[i+8];c=b[i+9];break}i+=2+(b[i+2]<<8|b[i+3])}
 if(w&&h&&(c===1||c===3))r={b,w,h,c,n:'Im'+(JC.size+1)}}catch(e){}}JC.set(url,r);return r}
function buildPdf(){
 const c1=S.c1||'#0a6cd9',c2=S.c2||'#10c48c',TX='#13212e',MU='#5a6f80',BG='#eef3f8',BD='#cfdbe6',pages=[],title=army().name;let pg,cy;JC.clear();
 const E=s=>pg.c.push(s),rg=h=>hx(h).map(v=>v.toFixed(3)).join(' '),Y=t=>(PH-t).toFixed(2),P=(x,t)=>`${x.toFixed(2)} ${Y(t)}`;
 const rect=(x,t,w,h,f,s,lw)=>E(`${f?rg(f)+' rg ':''}${s?rg(s)+' RG '+(lw||.5)+' w ':''}${x.toFixed(2)} ${Y(t+h)} ${w.toFixed(2)} ${h.toFixed(2)} re ${f&&s?'B':f?'f':'S'}`);
 const txt=(x,t,str,sz,o={})=>{str=String(str);const w=tw(str,sz,o.b);if(o.a==='c')x-=w/2;else if(o.a==='r')x-=w;E(`BT /${o.i?'F3':o.b?'F2':'F1'} ${sz} Tf ${rg(o.c||TX)} rg ${x.toFixed(2)} ${Y(t)} Td (${win(str)}) Tj ET`)};
 const wrap=(s,sz,w,b)=>{const out=[];String(s).split('\n').forEach(p=>{let l='';p.split(/\s+/).filter(Boolean).forEach(wd=>{const t=l?l+' '+wd:wd;if(tw(t,sz,b)>w&&l){out.push(l);l=wd}else l=t});out.push(l)});return out};
 const fit=(s,sz,w,b)=>{s=String(s);if(tw(s,sz,b)<=w)return s;while(s.length>1&&tw(s+'…',sz,b)>w)s=s.slice(0,-1);return s+'…'};
 const shP=(x,t,w,h)=>`${P(x,t)} m ${P(x+w,t)} l ${P(x+w,t+h*.6)} l ${P(x+w/2,t+h)} l ${P(x,t+h*.6)} l h`;
 const pic=(url,x,t,w,h,sh)=>{const im=jp(url);if(!im)return false;const s=Math.max(w/im.w,h/im.h),dw=im.w*s,dh=im.h*s,it=t+(h-dh)*.2,dx=x+(w-dw)/2;pg.im.add(im.n);
  E(`q ${sh?shP(x,t,w,h):`${x.toFixed(2)} ${Y(t+h)} ${w.toFixed(2)} ${h.toFixed(2)} re`} W n ${dw.toFixed(2)} 0 0 ${dh.toFixed(2)} ${dx.toFixed(2)} ${Y(it+dh)} cm /${im.n} Do Q`);return true};
 const np=(sec,full)=>{pg={c:[],im:new Set()};pages.push(pg);if(!full){rect(0,0,PW,30,c1);txt(PM,20,sec,11,{b:1,c:'#ffffff'});txt(PW-PM,20,title,9,{a:'r',c:'#ffffff'})}txt(PW/2,PH-16,`${title} · Pagina ${pages.length} · Dati v${D.ver.v}`,7,{a:'c',c:MU});cy=full?0:46};
 const stat=(x,t,w,h,l,v,hl)=>{rect(x,t,w,h,hl?c1:BG);txt(x+w/2,t+9,l,6.5,{a:'c',b:1,c:hl?'#ffffff':MU});txt(x+w/2,t+h-6,v,12,{a:'c',b:1,c:hl?'#ffffff':TX})};
 const xpbar=(x,t,w,xp)=>{const n=Math.max(0,parseInt(xp)||0),lv=Math.floor(n/5)+1,p=n%5,bx=x+30,bw=w-30;E(`${rg(c1)} rg ${shP(x,t,24,28)} f`);txt(x+12,t+8,'LV',5,{a:'c',b:1,c:'#ffffff'});txt(x+12,t+20,lv,11,{a:'c',b:1,c:'#ffffff'});
  rect(bx,t+6,bw,16,dk(c1,.28));if(p)rect(bx,t+6,bw*p/5,16,c2);for(let i=1;i<5;i++)E(`1 1 1 RG .5 w ${P(bx+bw*i/5,t+6)} m ${P(bx+bw*i/5,t+22)} l S`);txt(bx+bw/2,t+17.5,`${n} XP · ${p}/5`,8,{a:'c',b:1,c:'#ffffff'})};
 const rows=(items,x,t,w,draw)=>{let y=t;items.forEach(([l,s],ri)=>{const ls=wrap(s,9.5,w-142,1),hh=ls.length*12+8,col=l==='Infortuni'?'#c4162a':/Regol|Upgrade|Incantes|Azioni/.test(l)?dk(c2,.3):c1;if(draw){rect(x,y,w,hh,ri%2?'#ffffff':BG);rect(x,y,4,hh,col);txt(x+11,y+10,l,8.5,{b:1,c:col});ls.forEach((q,i)=>txt(x+138,y+10+i*12,q,9.5,{b:1}))}y+=hh});return y-t};
 const lists=(u,SL,ks)=>ks.map(k=>[SL[k][0],u.g[k].filter(Boolean).join(', ')]).filter(a=>a[1]);
 const head=(name,u,isH,pts,miss,x,t)=>{rect(x,t,CWd,30,c1);txt(x+10,t+21,fit(name,14,CWd-110,1),14,{b:1,c:'#ffffff'});txt(x+CWd-10,t+21,typeof pts==='number'?pts+' pt':pts,14,{a:'r',b:1,c:'#ffffff'});
  let cx=x+8;const chip=(s,f,c)=>{s=String(s).toUpperCase();const w=tw(s,8,1)+14;rect(cx,t+36,w,14,f);txt(cx+7,t+46.5,s,8,{b:1,c});cx+=w+6};
  if(u.model)chip(u.model,BG,TX);if(isH&&u.rank)chip(u.rank,'#ffb400','#3a2a00');if(isH&&u.path)chip('Path: '+u.path,c2,'#ffffff');
  if(miss){const s='SALTA PARTITA',w=tw(s,8,1)+14;rect(x+CWd-8-w,t+36,w,14,'#c4162a');txt(x+CWd-8-w/2,t+46.5,s,8,{a:'c',b:1,c:'#ffffff'})}};
 const photo=(img,x,t,s,nm)=>{if(!pic(img,x,t,s,s)){rect(x,t,s,s,BG);txt(x+s/2,t+s/2+10,(nm||'?').charAt(0).toUpperCase(),30,{a:'c',b:1,c:BD})}};
 const HD=52,card=(u,isH)=>{const r=isH?hero(u):troop(u),body=isH?106:78,it=isH?lists(u,HS,['bw','aw','eq','mn','sp','cu',...(u.path==='Channeling'?['spl']:[]),'ha','inj']):lists(u,TS,['bw','aw','eq','inj']),w=CWd-16,H=HD+body+8+rows(it,0,0,w,false)+8;
  if(cy+H>PH-PM-8)np(isH?'Eroi (segue)':'Truppe (segue)');const x=PM,t=cy,nm=u.name||u.model;rect(x,t,CWd,H,'#ffffff',BD,.8);
  head(nm,u,isH,r.c.rating,u.miss,x,t);photo(u.img,x+8,t+HD,body,nm);
  const rx=x+8+body+10,rw=CWd-16-body-10,sw=(rw-16)/9,vals=isH?r.tot:r.p.slice(0,9).map((v,j)=>j===4?r.d:v);
  vals.forEach((v,i)=>stat(rx+i*(sw+2),t+HD,sw,32,LBL[i],v,true));
  if(isH){['Might','Will','Fate'].forEach((n,i)=>stat(rx+i*66,t+HD+38,62,28,n,u.mfw[i]));xpbar(rx,t+HD+72,rw,u.xp)}else xpbar(rx,t+HD+38,rw,u.xp);
  rows(it,x+8,t+HD+body+8,w,true);cy+=H+10};
 const xcard=e=>{const w=e.kind==='Wanderer',body=w?106:78,it=(e.info||[]).filter(a=>a[1]),ww=CWd-16,H=HD+body+8+(it.length?rows(it,0,0,ww,false)+8:0);if(cy+H>PH-PM-8)np(w?'Eroi (segue)':'Truppe (segue)');const x=PM,t=cy,st=(S.ex&&S.ex[e.key])||{};
  rect(x,t,CWd,H,'#ffffff',BD,.8);head(e.name,{model:w?'Wanderer':'Creatura di '+e.owner},false,w?'+70 pt':'inclusa nel costo',e.hmiss,x,t);photo(st.img,x+8,t+HD,body,e.name);
  const rx=x+8+body+10,rw=CWd-16-body-10,sw=(rw-16)/9;e.stats.forEach((v,i)=>stat(rx+i*(sw+2),t+HD,sw,32,LBL[i],v,true));
  if(w)['Might','Will','Fate'].forEach((n,i)=>stat(rx+i*66,t+HD+38,62,28,n,e.mfw[i]));
  txt(rx,t+HD+body-4,(e.star?"Coraggio uguale a quello dell'eroe · ":'')+'Non guadagna XP',7.5,{i:1,c:MU});if(it.length)rows(it,x+8,t+HD+body+8,ww,true);cy+=H+10};
 // ---- Panoramica
 const mdl=n=>n+(n===1?' modello':' modelli'),eh=rH(),et=rT(),w70=rW(),tot=eh+et+w70,hs=S.h.filter(h=>h.model||h.name),ts=S.t.filter(t=>t.model||t.name);
 np('',true);rect(0,0,PW,112,c1);rect(0,92,PW,20,c2);
 if(!pic(S.logo,PM,16,64,74,true))E(`${rg(dk(c1,.55))} rg ${shP(PM,16,64,74)} f`);
 const nm=String(title).toUpperCase();let sz=26;while(sz>12&&tw(nm,sz,1)>PW-PM-(PM+82))sz--;
 txt(PM+82,38,'BATTLE COMPANY'+(bc().race?' · '+bc().race.toUpperCase():''),8,{c:'#e6f2ff'});txt(PM+82,68,nm,sz,{b:1,c:'#ffffff'});txt(PM+82,86,bc().name||'',12,{i:1,c:'#ffffff'});
 cy=128;const tl=[['Rating totale',tot,'punti',1],['Eroi',eh,mdl(hs.filter(h=>h.model).length)],['Truppe',et,mdl(ts.filter(t=>t.model).length)],['Influenza',S.infl||0,'punti'],['Wanderers',w70?'+70':'-',S.wand||'nessuno']],tW=(CWd-32)/5;
 tl.forEach((a,i)=>{const x=PM+i*(tW+8);rect(x,cy,tW,56,a[3]?c1:BG);const f=a[3]?'#ffffff':TX,m=a[3]?'#e6f2ff':MU;txt(x+tW/2,cy+13,a[0],7,{a:'c',b:1,c:m});txt(x+tW/2,cy+36,a[1],20,{a:'c',b:1,c:f});txt(x+tW/2,cy+49,fit(a[2],7,tW-8),7,{a:'c',c:m})});
 cy+=70;const DH=104,dcx=PM+54,dcy=cy+DH/2,dr=32,dth=13,TP=Math.PI*2;rect(PM,cy,CWd,DH,'#ffffff',BD,.8);
 const arc=(a0,a1,col)=>{const n=Math.max(1,Math.ceil((a1-a0)/(Math.PI/2))),st=(a1-a0)/n,k=4/3*Math.tan(st/4);let s=`${rg(col)} RG ${dth} w 0 J `,a=a0;for(let i=0;i<n;i++){const b=a+st,p0=[dcx+dr*Math.cos(a),dcy+dr*Math.sin(a)],p3=[dcx+dr*Math.cos(b),dcy+dr*Math.sin(b)],p1=[p0[0]-k*dr*Math.sin(a),p0[1]+k*dr*Math.cos(a)],p2=[p3[0]+k*dr*Math.sin(b),p3[1]-k*dr*Math.cos(b)];if(i===0)s+=`${P(p0[0],p0[1])} m `;s+=`${P(p1[0],p1[1])} ${P(p2[0],p2[1])} ${P(p3[0],p3[1])} c `;a=b}E(s+'S')};
 arc(-Math.PI/2,-Math.PI/2+TP,BD);if(tot){let a=-Math.PI/2;[[eh,c1],[et,c2],[w70,'#7c4dff']].forEach(([v,c])=>{const sw=v/tot*TP;if(sw>.06)arc(a+.015,a+sw-.015,c);a+=sw})}
 txt(dcx,dcy+4,tot,16,{a:'c',b:1});txt(dcx,dcy+15,'PT',6.5,{a:'c',c:MU});
 [['Eroi',eh,c1],['Truppe',et,c2],['Wanderers',w70,'#7c4dff']].forEach(([l,v,c],i)=>{const ry=cy+22+i*26;rect(PM+110,ry,9,9,c);txt(PM+126,ry+8,l,9.5,{b:1});txt(PM+CWd-60,ry+8,v+' pt',10,{a:'r',b:1});txt(PM+CWd-14,ry+8,(tot?Math.round(v/tot*100):0)+'%',10,{a:'r',b:1,c:c1})});
 cy+=DH+16;
 const H1=s=>{if(cy+30>PH-PM)np('Panoramica generale (segue)');txt(PM,cy+10,s,12,{b:1,c:c1});E(`${rg(c1)} RG 1 w ${P(PM,cy+15)} m ${P(PM+CWd,cy+15)} l S`);cy+=24};
 H1('La compagnia');if(!hs.length&&!ts.length){txt(PM,cy+10,'Nessun modello inserito.',9,{c:MU});cy+=20}
 [...hs.map(u=>[u,1]),...ts.map(u=>[u,0])].forEach(([u,isH])=>{if(cy+28>PH-PM-6){np('Panoramica generale (segue)')}const r=isH?hero(u):troop(u);if(!pic(u.img,PM,cy,22,22)){rect(PM,cy,22,22,BG)}
  txt(PM+30,cy+10,fit(u.name||u.model,10,350,1),10,{b:1});txt(PM+30,cy+20,(isH?'Eroe':'Truppa')+' · '+(u.model||'-')+(u.miss?' · salta partita':''),8,{c:MU});txt(PM+CWd,cy+15,r.c.rating+' pt',11,{a:'r',b:1,c:c1});E(`${rg(BD)} RG .3 w ${P(PM,cy+26)} m ${P(PM+CWd,cy+26)} l S`);cy+=28});
 if(S.notes&&S.notes.trim()){cy+=8;H1('Cronache della compagnia');wrap(S.notes,9,CWd,0).forEach(l=>{if(cy+12>PH-PM-6){np('Panoramica generale (segue)')}txt(PM,cy+9,l,9);cy+=12})}
 const EX=extras();if(hs.length||EX.h.length){np('Eroi');hs.forEach(h=>card(h,1));EX.h.forEach(xcard)}
 if(ts.length||EX.t.length){np('Truppe');ts.forEach(t=>card(t,0));EX.t.forEach(xcard)}
 // ---- assemblaggio
 const imgs=[...JC.values()].filter(Boolean),objs=[],A=s=>s;
 objs[1]=['<< /Type /Catalog /Pages 2 0 R >>'];
 const nImg=imgs.length,base=6+nImg;imgs.forEach((im,i)=>{objs[6+i]=[`<< /Type /XObject /Subtype /Image /Width ${im.w} /Height ${im.h} /ColorSpace /${im.c===1?'DeviceGray':'DeviceRGB'} /BitsPerComponent 8 /Filter /DCTDecode /Length ${im.b.length} >>\nstream\n`,im.b,'\nendstream']});
 const kids=[];pages.forEach((p,i)=>{const cn=base+i*2,pn=cn+1,cs=p.c.join('\n');objs[cn]=[`<< /Length ${cs.length} >>\nstream\n${cs}\nendstream`];
  objs[pn]=[`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PW} ${PH}] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> /XObject << ${[...p.im].map(n=>`/${n} ${6+imgs.findIndex(m=>m.n===n)} 0 R`).join(' ')} >> >> /Contents ${cn} 0 R >>`];kids.push(pn+' 0 R')});
 objs[2]=[`<< /Type /Pages /Kids [${kids.join(' ')}] /Count ${pages.length} >>`];
 objs[3]=['<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>'];objs[4]=['<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>'];objs[5]=['<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>'];
 const out=[],offs=[];let len=0;const push=b=>{if(typeof b==='string'){const u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i)&255;b=u}out.push(b);len+=b.length};
 push('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');for(let i=1;i<objs.length;i++){offs[i]=len;push(`${i} 0 obj\n`);objs[i].forEach(push);push('\nendobj\n')}
 const xo=len;push(`xref\n0 ${objs.length}\n0000000000 65535 f \n`+offs.slice(1).map(o=>String(o).padStart(10,'0')+' 00000 n \n').join('')+`trailer\n<< /Size ${objs.length} /Root 1 0 R >>\nstartxref\n${xo}\n%%EOF`);
 const res=new Uint8Array(len);let p=0;out.forEach(b=>{res.set(b,p);p+=b.length});return res}
async function doPdf(){let bytes;try{bytes=buildPdf()}catch(e){console.error(e);toast('Creazione del PDF non riuscita');return}
 const fn=`armata-${slug(army().name)}.pdf`;
 if(DL){try{await DL.save({filename:fn,data:bytes});toast('PDF pronto: '+fn)}catch(e){if(!e||e.code!=='declined')toast('Salvataggio non riuscito'+(e&&e.code?' ('+e.code+')':''))}return}
 try{const u=URL.createObjectURL(new Blob([bytes],{type:'application/pdf'})),l=document.createElement('a');l.href=u;l.download=fn;document.body.appendChild(l);l.click();l.remove();setTimeout(()=>URL.revokeObjectURL(u),2000);toast('PDF pronto: '+fn)}catch(e){toast('Salvataggio non disponibile')}}
