/* ----- [25/36] PHOTO v48 (unifica IMG-RESIZE v44 + CAM-BTN v45 + PHOTO-UX v46/v47) ----- */
try{
(function(){
var MAX=700,MAXBYTES=400*1024,Q=0.82;
var bypass=false; /* true mentre apriamo noi stessi il selettore file: il listener dei click non deve intercettarlo */
function isImgInput(el){
if(!el||el.tagName!=='INPUT'||el.type!=='file')return false;
var d=el.dataset||{};
return /image/i.test(el.accept||'')||!!(d.ph||d.pic)||/\.img$/.test(d.p||'');
}
function openPicker(inp){bypass=true;try{inp.click()}finally{bypass=false}}
function setFiles(el,arr){
try{var dt=new DataTransfer();arr.forEach(function(x){dt.items.add(x)});el.files=dt.files;return true}catch(e){return false}
}
function shrink(f){
return new Promise(function(res){
var url=URL.createObjectURL(f),im=new Image();
im.onload=function(){
var w=im.naturalWidth,h=im.naturalHeight,sc=Math.min(1,MAX/Math.max(w,h));
if(sc===1&&f.size<MAXBYTES){URL.revokeObjectURL(url);res(null);return}
var c=document.createElement('canvas');c.width=Math.max(1,Math.round(w*sc));c.height=Math.max(1,Math.round(h*sc));
c.getContext('2d').drawImage(im,0,0,c.width,c.height);
c.toBlob(function(b){URL.revokeObjectURL(url);if(!b){res(null);return}
try{res(new File([b],'photo.jpg',{type:'image/jpeg'}))}catch(e){res(null)}
},'image/jpeg',Q);
};
im.onerror=function(){URL.revokeObjectURL(url);res(null)};
im.src=url;
});
}
if(!document.getElementById('photocss')){
var st=document.createElement('style');st.id='photocss';
st.textContent='#photoPrev .mb,#photoSheet .mb{border:1px solid color-mix(in srgb,var(--ac,#d9a31e) 55%,transparent)}';
document.head.appendChild(st);
}
/* input "fotocamera" nascosto, creato al bisogno accanto a quello originale (stessi data-*) */
function camInputFor(host){
var nx=host.nextElementSibling;
if(nx&&nx.classList.contains('photocam')){var ci=nx.querySelector('input[type=file]');if(ci)return ci}
var lab=document.createElement('label');lab.className='photocam';lab.style.setProperty('display','none','important');
var ni=document.createElement('input');ni.type='file';ni.accept='image/*';ni.setAttribute('capture','environment');ni.hidden=true;
var orig=host.querySelector('input[type=file]');
if(orig){for(var a=0;a<orig.attributes.length;a++){var at=orig.attributes[a];if(at.name.indexOf('data-')===0)ni.setAttribute(at.name,at.value)}}
lab.appendChild(ni);
host.parentNode.insertBefore(lab,host.nextSibling);
return ni;
}
/* se il pulsante foto sta dentro il menu ⋮, il menu va chiuso: gli input passano in un contenitore nascosto
   (altrimenti render() li distruggerebbe prima che il selettore file si apra) */
function endSession(){var h=document.getElementById('photoHold');if(h)h.remove()}
function leaveMenu(orig,cam){
endSession();
var h=document.createElement('div');h.id='photoHold';h.style.setProperty('display','none','important');
h.appendChild(orig);h.appendChild(cam);document.body.appendChild(h);
orig.addEventListener('cancel',endSession,{once:true});cam.addEventListener('cancel',endSession,{once:true});
try{if(typeof mo!=='undefined'&&mo){mo=false;render()}}catch(e){}
}
function closeSheet(){var s=document.getElementById('photoSheet');if(s)s.remove()}
function closePrev(){var p=document.getElementById('photoPrev');if(p)p.remove()}
function sheet(orig,cam){
closeSheet();
var o=document.createElement('div');o.className='mdl';o.id='photoSheet';
o.innerHTML='<div class="mb" role="dialog" aria-modal="true" style="max-width:320px"><p style="font-weight:800;margin:0 0 10px">📷 Foto</p><div style="display:flex;flex-direction:column;gap:8px"><button class="btn pri" data-pa="cam" style="margin:0">📸 Scatta con la fotocamera</button><button class="btn" data-pa="gal" style="margin:0">🖼 Scegli dalla galleria</button><button class="btn" data-pa="no" style="margin:0">✕ Annulla</button></div></div>';
o.addEventListener('click',function(e){
if(e.target===o){closeSheet();endSession();return}
var c=e.target&&e.target.dataset?e.target.dataset.pa:null;if(!c)return;
e.stopPropagation();closeSheet();if(c==='no')endSession();
if(c==='cam')openPicker(cam);else if(c==='gal')openPicker(orig);
});
document.body.appendChild(o);
}
function preview(el,src){
var f=el.files&&el.files[0];if(!f)return;
var fr=new FileReader();
fr.onload=function(){
closePrev();
var o=document.createElement('div');o.className='mdl';o.id='photoPrev';
o.innerHTML='<div class="mb" role="dialog" aria-modal="true" style="max-width:380px"><p style="font-weight:800;margin:0 0 8px">Anteprima foto</p><img src="'+fr.result+'" style="width:100%;max-height:46vh;object-fit:contain;border-radius:10px;background:rgba(0,0,0,.35)" alt=""><div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap"><button class="btn pri" data-pp="ok" style="margin:0">✔ Applica</button>'+(src==='cam'?'<button class="btn" data-pp="re" style="margin:0">📸 Scatta di nuovo</button>':'')+'<button class="btn" data-pp="no" style="margin:0">✕ Annulla</button></div></div>';
o.addEventListener('click',function(e){
if(e.target===o){closePrev();el.value='';endSession();return}
var c=e.target&&e.target.dataset?e.target.dataset.pp:null;if(!c)return;
e.stopPropagation();closePrev();
if(c==='ok'){el.dataset.photopass='1';el.dispatchEvent(new Event('change',{bubbles:true}));endSession()}
else if(c==='re'){el.value='';openPicker(el)}
else{el.value='';endSession()}
});
document.body.appendChild(o);
};
fr.readAsDataURL(f);
}
/* tocco su "Carica/Cambia foto": mostra il menu fotocamera/galleria */
document.addEventListener('click',function(e){
if(bypass)return;
var t=e.target;if(!t||!t.closest||t.closest('.mdl'))return;
var lab=t.closest('label');if(!lab)return;
var orig=lab.querySelector('input[type=file]');
if(!orig||!isImgInput(orig))return;
var cam=camInputFor(lab);
e.preventDefault();e.stopPropagation();
if(lab.closest('.mn'))leaveMenu(orig,cam);else endSession();
sheet(orig,cam);
},true);
/* file scelto: ridimensiona -> anteprima -> (Applica) -> l'app riceve il change */
document.addEventListener('change',function(e){
var el=e.target;
if(!isImgInput(el))return;
if(el.dataset.photopass){delete el.dataset.photopass;return}
if(!el.files||!el.files[0])return;
e.stopImmediatePropagation();e.preventDefault();
var src=(el.getAttribute('capture')!=null)?'cam':'gal';
shrink(el.files[0]).then(function(nf){
if(nf){if(setFiles(el,[nf])){try{toast('📷 Foto ottimizzata: '+Math.round(nf.size/1024)+' KB')}catch(e){}}else{try{toast('📷 Foto troppo grande: prova con uno scatto più piccolo')}catch(e){}}}
preview(el,src);
}).catch(function(){preview(el,src)});
},true);
})();
}catch(e){console.error('[PHOTO v48]',e)}
;
