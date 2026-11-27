/* ----- [22/36] NAV-GC v41 ----- */
try{
/*NAV-GC v41*/
(function(){
var ICON="<img class=\"tic\" src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20300%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23c0202b%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cg%20transform%3D%22rotate(0%20150%20150)%22%3E%3Cpath%20d%3D%22M150%2018L150%2042M150%2024q9%201%209%208q0%206-9%206M150%2042q-4%204-9%204%22%2F%3E%3Ccircle%20cx%3D%22159%22%20cy%3D%2215%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(22.5%20150%20150)%22%3E%3Cpath%20d%3D%22M145%2018L145%2042M145%2023q9%200%209%206q0%205-9%205M154%2029q9%200%209%207q0%206-9%206%22%2F%3E%3Ccircle%20cx%3D%22141%22%20cy%3D%2247%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(45%20150%20150)%22%3E%3Cpath%20d%3D%22M150%2042L150%2022M150%2022a7%207%200%201%201%200.1%200%22%2F%3E%3Ccircle%20cx%3D%22150%22%20cy%3D%2213%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(67.5%20150%20150)%22%3E%3Cpath%20d%3D%22M147%2018L147%2042M147%2027q11-3%2013%204M149%2035q9%202%2010%209%22%2F%3E%3Ccircle%20cx%3D%22157%22%20cy%3D%2215%22%20r%3D%222%22%2F%3E%3Ccircle%20cx%3D%22143%22%20cy%3D%2247%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(90%20150%20150)%22%3E%3Cpath%20d%3D%22M150%2018L150%2042M150%2024q9%201%209%208q0%206-9%206M150%2042q-4%204-9%204%22%2F%3E%3Ccircle%20cx%3D%22159%22%20cy%3D%2215%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(112.5%20150%20150)%22%3E%3Cpath%20d%3D%22M145%2018L145%2042M145%2023q9%200%209%206q0%205-9%205M154%2029q9%200%209%207q0%206-9%206%22%2F%3E%3Ccircle%20cx%3D%22141%22%20cy%3D%2247%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(135%20150%20150)%22%3E%3Cpath%20d%3D%22M150%2042L150%2022M150%2022a7%207%200%201%201%200.1%200%22%2F%3E%3Ccircle%20cx%3D%22150%22%20cy%3D%2213%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(157.5%20150%20150)%22%3E%3Cpath%20d%3D%22M147%2018L147%2042M147%2027q11-3%2013%204M149%2035q9%202%2010%209%22%2F%3E%3Ccircle%20cx%3D%22157%22%20cy%3D%2215%22%20r%3D%222%22%2F%3E%3Ccircle%20cx%3D%22143%22%20cy%3D%2247%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(180%20150%20150)%22%3E%3Cpath%20d%3D%22M150%2018L150%2042M150%2024q9%201%209%208q0%206-9%206M150%2042q-4%204-9%204%22%2F%3E%3Ccircle%20cx%3D%22159%22%20cy%3D%2215%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(202.5%20150%20150)%22%3E%3Cpath%20d%3D%22M145%2018L145%2042M145%2023q9%200%209%206q0%205-9%205M154%2029q9%200%209%207q0%206-9%206%22%2F%3E%3Ccircle%20cx%3D%22141%22%20cy%3D%2247%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(225%20150%20150)%22%3E%3Cpath%20d%3D%22M150%2042L150%2022M150%2022a7%207%200%201%201%200.1%200%22%2F%3E%3Ccircle%20cx%3D%22150%22%20cy%3D%2213%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(247.5%20150%20150)%22%3E%3Cpath%20d%3D%22M147%2018L147%2042M147%2027q11-3%2013%204M149%2035q9%202%2010%209%22%2F%3E%3Ccircle%20cx%3D%22157%22%20cy%3D%2215%22%20r%3D%222%22%2F%3E%3Ccircle%20cx%3D%22143%22%20cy%3D%2247%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(270%20150%20150)%22%3E%3Cpath%20d%3D%22M150%2018L150%2042M150%2024q9%201%209%208q0%206-9%206M150%2042q-4%204-9%204%22%2F%3E%3Ccircle%20cx%3D%22159%22%20cy%3D%2215%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(292.5%20150%20150)%22%3E%3Cpath%20d%3D%22M145%2018L145%2042M145%2023q9%200%209%206q0%205-9%205M154%2029q9%200%209%207q0%206-9%206%22%2F%3E%3Ccircle%20cx%3D%22141%22%20cy%3D%2247%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(315%20150%20150)%22%3E%3Cpath%20d%3D%22M150%2042L150%2022M150%2022a7%207%200%201%201%200.1%200%22%2F%3E%3Ccircle%20cx%3D%22150%22%20cy%3D%2213%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22rotate(337.5%20150%20150)%22%3E%3Cpath%20d%3D%22M147%2018L147%2042M147%2027q11-3%2013%204M149%2035q9%202%2010%209%22%2F%3E%3Ccircle%20cx%3D%22157%22%20cy%3D%2215%22%20r%3D%222%22%2F%3E%3Ccircle%20cx%3D%22143%22%20cy%3D%2247%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23141414%22%20stroke-width%3D%223.4%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M150%2066L150%2036q0-8-3-12%22%2F%3E%3Cpath%20d%3D%22M150%2074L150%2050%22%2F%3E%3Cpath%20d%3D%22M150%2070L150%20150%22%20stroke-width%3D%225%22%2F%3E%3Cpath%20d%3D%22M150%2096q30-4%2044-24q4-6%202-13%22%2F%3E%3Cpath%20d%3D%22M150%20110q40%201%2060-16q7-5%206-13%22%2F%3E%3Cpath%20d%3D%22M150%2082q22-10%2029-30q3-8-1-14%22%2F%3E%3Cpath%20d%3D%22M150%20124q48%207%2076-4q9-3%2010-11%22%2F%3E%3Cpath%20d%3D%22M150%2070q13-13%2016-32q2-9-3-14%22%2F%3E%3Cpath%20d%3D%22M163%2090q11-1%2015-10%22%2F%3E%3Cpath%20d%3D%22M176%20104q11%201%2017-7%22%2F%3E%3Cpath%20d%3D%22M158%2076q9-8%2010-18%22%2F%3E%3Cg%20transform%3D%22translate(300%2C0)%20scale(-1%2C1)%22%3E%3Cpath%20d%3D%22M150%2096q30-4%2044-24q4-6%202-13%22%2F%3E%3Cpath%20d%3D%22M150%20110q40%201%2060-16q7-5%206-13%22%2F%3E%3Cpath%20d%3D%22M150%2082q22-10%2029-30q3-8-1-14%22%2F%3E%3Cpath%20d%3D%22M150%20124q48%207%2076-4q9-3%2010-11%22%2F%3E%3Cpath%20d%3D%22M150%2070q13-13%2016-32q2-9-3-14%22%2F%3E%3Cpath%20d%3D%22M163%2090q11-1%2015-10%22%2F%3E%3Cpath%20d%3D%22M176%20104q11%201%2017-7%22%2F%3E%3Cpath%20d%3D%22M158%2076q9-8%2010-18%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cpath%20d%3D%22M150%2028L146%2058L146%20122L154%20122L154%2058Z%22%20fill%3D%22%23aeb9c4%22%20stroke%3D%22%235d6873%22%20stroke-width%3D%221.2%22%2F%3E%3Cpath%20d%3D%22M150%2032L150%20120%22%20stroke%3D%22%23e7eef4%22%20stroke-width%3D%221.4%22%2F%3E%3Crect%20x%3D%22145%22%20y%3D%22116%22%20width%3D%2210%22%20height%3D%2226%22%20rx%3D%222%22%20fill%3D%22%231d1d1d%22%2F%3E%3Cpath%20d%3D%22M145%20121h10M145%20126h10M145%20131h10M145%20136h10%22%20stroke%3D%22%234a4a4a%22%20stroke-width%3D%221%22%2F%3E%3Cpath%20d%3D%22M116%20148Q119%20141%20130%20143L170%20143Q181%20141%20184%20148Q181%20155%20170%20152L130%20152Q119%20155%20116%20148Z%22%20fill%3D%22%239aa6b2%22%20stroke%3D%22%2356616c%22%20stroke-width%3D%221.2%22%2F%3E%3Cpath%20d%3D%22M143%20152L143%20232L150%20252L157%20232L157%20152Z%22%20fill%3D%22%23aeb9c4%22%20stroke%3D%22%235d6873%22%20stroke-width%3D%221.2%22%2F%3E%3Cpath%20d%3D%22M150%20154L150%20246%22%20stroke%3D%22%23e7eef4%22%20stroke-width%3D%221.6%22%2F%3E%3C%2Fsvg%3E\" alt=\"\">";
var refs={h:null,t:null};
function lbl(b){var s=b&&b.querySelector?b.querySelector('span'):null;return s?(s.textContent||'').trim().toLowerCase():''}
function findNav(){return document.querySelector('header nav')||document.getElementById('nav')}
function locate(){
var nav=findNav();if(!nav)return null;
var bs=nav.querySelectorAll('button');refs.h=null;refs.t=null;var eroi=null,trup=null;
for(var i=0;i<bs.length;i++){var L=lbl(bs[i]);
if(L.indexOf('eroi')>=0){refs.h=bs[i];eroi=bs[i]}
else if(L.indexOf('truppe')>=0||L.indexOf('truppie')>=0){refs.t=bs[i];trup=bs[i]}
}
return {nav:nav,eroi:eroi,trup:trup};
}
function closeMenu(){var m=document.getElementById('gcmenu');if(m)m.remove()}
function openMenu(gc){
closeMenu();
var r=gc.getBoundingClientRect();
var m=document.createElement('div');m.id='gcmenu';
var W=210;var left=Math.max(8,Math.min(r.left,window.innerWidth-W-8));
m.style.cssText='position:fixed;left:'+left+'px;top:'+(r.bottom+6)+'px;width:'+W+'px;z-index:9999;background:rgba(6,10,18,.97);border:1px solid rgba(242,251,255,.35);border-radius:14px;padding:6px;box-shadow:0 14px 34px rgba(0,0,0,.6);display:flex;flex-direction:column;gap:3px';
var items=[['Eroi',refs.h],['Truppe',refs.t]];
items.forEach(function(it){
var b=document.createElement('button');b.type='button';
var act=it[1]&&it[1].classList.contains('on');
b.style.cssText='display:block;width:100%;text-align:left;background:'+(act?'rgba(217,163,30,.22)':'transparent')+';color:'+(act?'#ffd24a':'#eaf2ff')+';border:1px solid '+(act?'rgba(217,163,30,.6)':'transparent')+';border-radius:10px;padding:10px 12px;font-weight:700;font-size:13px;cursor:pointer;font-family:inherit';
b.textContent=it[0];
b.addEventListener('click',function(ev){ev.stopPropagation();closeMenu();if(it[1])it[1].click()});
m.appendChild(b);
});
document.body.appendChild(m);
}
if(!window.__gc41close){window.__gc41close=1;
document.addEventListener('click',function(e){
var m=document.getElementById('gcmenu');if(!m)return;
if(e.target&&e.target.closest&&(e.target.closest('#gcmenu')||e.target.closest('#gcbtn')))return;
closeMenu();
},true);
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu()});
}
function fix(){
var L=locate();if(!L)return;
var gc=document.getElementById('gcbtn');
if(!gc){
gc=document.createElement('button');gc.type='button';gc.id='gcbtn';
gc.innerHTML='<i>'+ICON+'</i><span>Gestione BC</span>';
gc.addEventListener('click',function(e){e.stopPropagation();var o=document.getElementById('gcmenu');if(o)closeMenu();else openMenu(gc)});
if(L.eroi)L.nav.insertBefore(gc,L.eroi);else L.nav.appendChild(gc);
}
if(L.eroi)L.eroi.style.display='none';
if(L.trup)L.trup.style.display='none';
var on=(refs.h&&refs.h.classList.contains('on'))||(refs.t&&refs.t.classList.contains('on'));
gc.classList.toggle('on',!!on);
}
var _r=window.render;window.render=function(){var x=_r.apply(this,arguments);closeMenu();fix();return x};
fix();
})();
}catch(e){console.error('[NAV-GC v41]',e)}
;
