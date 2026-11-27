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
