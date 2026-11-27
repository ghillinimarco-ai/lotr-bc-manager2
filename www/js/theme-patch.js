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
