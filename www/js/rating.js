const P=(m)=>D.profiles[m]||[0,0,0,0,0,0,0,0,0,0];
const sum=(a,f)=>a.reduce((s,x)=>s+(x?+f(x)||0:0),0);
const HV=['Heavy Armour','Heavy Dwarf Armour'];const dm=(g,iron)=>sum(g.aw.some(n=>HV.includes(n))?g.bw.filter(n=>/Shield/.test(n)).concat(g.aw):g.bw.concat(g.aw),n=>armor(n,iron));
const armor=(n,iron)=>['Armour','Shield'].includes(n)?1:['Heavy Armour','Heavy Dwarf Armour'].includes(n)?2:(n==='Pavise'||(iron&&n==='Iron Shield'))?3:0;
const CST=[5,5,0,5,5,10,10,0,0];const LBL=['Mv','Fv','Sv','S','D','A','W','C','I'],LOW=[2,7,8];
function hero(h){const p=P(h.model),base=p.slice(0,9);
 const tot=base.map((b,i)=>b+(LOW.includes(i)?-1:1)*(+h.mod[i]||0));
 const hi=tot[5]+tot[6]>2,wt=hi?D.wg.heroHi:D.wg.heroLo,et=hi?D.eq.heroHi:D.eq.heroLo,g=h.g;
 tot[4]+=dm(g,1);
 const c={};c.pr=h.model?p[9]:0;c.stat=sum(h.mod,(m,)=>0)+h.mod.reduce((s,m,i)=>s+(+m||0)*CST[i],0);
 c.mfw=sum(h.mfw,x=>x*5);c.sp=g.sp.filter(Boolean).length*5;const mn=g.mn.filter(Boolean).length;c.mn=mn<=2?mn*5:10;
 c.cu=g.cu[0]?10:0;c.wg=sum(g.aw,n=>wt[n])+sum(g.bw,n=>D.wg.base[n]);c.eq=sum(g.eq,n=>et[n]);
 c.rating=h.miss||!h.model?0:Object.values(c).reduce((a,b)=>a+b,0);return{tot,base,c,hi}}
function troop(t){const p=P(t.model),g=t.g;const d=p[4]+dm(g,1);
 const c={pr:t.model?p[9]:0,wg:sum(g.aw,n=>D.wg.heroLo[n])+sum(g.bw,n=>D.wg.base[n]),eq:sum(g.eq,n=>D.eq.troop[n])};
 c.rating=t.miss||!t.model?0:c.pr+c.wg+c.eq;return{p,d,c}}
const rH=()=>sum(S.h,h=>hero(h).c.rating),rT=()=>sum(S.t,t=>troop(t).c.rating),rW=()=>S.wand?70:0;
