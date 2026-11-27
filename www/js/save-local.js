/* ----- [24/36] SAVE-LOCAL v43 ----- */
try{
/*SAVE-LOCAL v43*/
(function(){
var memHandle=null;
function idbOpen(){return new Promise(function(res){try{var r=indexedDB.open('roster-fs',1);r.onupgradeneeded=function(){r.result.createObjectStore('h')};r.onsuccess=function(){res(r.result)};r.onerror=function(){res(null)}}catch(e){res(null)}})}
function idbGet(){return idbOpen().then(function(db){if(!db)return null;return new Promise(function(res){try{var q=db.transaction('h','readonly').objectStore('h').get('dir');q.onsuccess=function(){res(q.result||null)};q.onerror=function(){res(null)}}catch(e){res(null)}})})}
function idbSet(h){idbOpen().then(function(db){if(!db)return;try{db.transaction('h','readwrite').objectStore('h').put(h,'dir')}catch(e){}})}
function perm(h){return h.queryPermission({mode:'readwrite'}).then(function(p){if(p==='granted')return true;return h.requestPermission({mode:'readwrite'}).then(function(q){return q==='granted'})}).catch(function(){return false})}
function ensureDir(force){
if(!force&&memHandle)return perm(memHandle).then(function(ok){if(ok)return memHandle;memHandle=null;return ensureDir(true)});
if(!force)return idbGet().then(function(h){if(!h)return ensureDir(true);return perm(h).then(function(ok){if(ok){memHandle=h;return h}return ensureDir(true)})});
return window.showDirectoryPicker({mode:'readwrite'}).then(function(d){memHandle=d;idbSet(d);return d});
}
function slug(s){return String(s||'armata').replace(/[\\/:*?"<>|]+/g,'-').trim()||'armata'}
function fallback(fn,txt){var u=URL.createObjectURL(new Blob([txt],{type:'application/json'}));var a=document.createElement('a');a.href=u;a.download=fn;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},4000)}
function exportJSON(force){
var fn=slug(S.name)+'.json';
var txt=JSON.stringify(S,null,2);
if(!window.showDirectoryPicker){fallback(fn,txt);return}
ensureDir(force).then(function(dir){return dir.getFileHandle(fn,{create:true})}).then(function(fh){return fh.createWritable().then(function(w){return w.write(new Blob([txt],{type:'application/json'})).then(function(){return w.close()})})}).then(function(){try{toast('💾 Salvato in locale: '+fn)}catch(e){}}).catch(function(err){if(err&&err.name==='NotAllowedError'){try{toast('Salvataggio annullato')}catch(e){}}else{fallback(fn,txt)}});
}
window.__exportJSON=exportJSON;
document.addEventListener('click',function(e){
var t=e.target&&e.target.closest?e.target.closest('[data-act="export"]'):null;
if(!t&&e.target&&e.target.closest){var mb=e.target.closest('.mn button');if(mb&&/esporta/i.test(mb.textContent||''))t=mb}
if(!t)return;
e.stopPropagation();e.preventDefault();
if(typeof mo!=='undefined')mo=false;
exportJSON(!!e.shiftKey);
try{render()}catch(err){}
},true);
})();
}catch(e){console.error('[SAVE-LOCAL v43]',e)}
;
