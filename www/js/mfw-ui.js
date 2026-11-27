try{
document.addEventListener('click',function(e){
var t=e.target&&e.target.closest?e.target.closest('[data-mfw]'):null;if(!t)return;
var p=t.getAttribute('data-mfw').split('.');var h=S.h[+p[0]];if(!h)return;
h.mfw[+p[1]]=Math.max(0,(+h.mfw[+p[1]]||0)+(+p[2]));
save();render();
});
}catch(e){console.error('[MFW-UI]',e)}
