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
