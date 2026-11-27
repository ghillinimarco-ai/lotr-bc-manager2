    /* ----- [CUSTOM-07] DELETE-GUARD v2 (BC_DELETE_GUARD) ----- */
    try{
    (function(){
    if(window.__bcDeleteGuard2){return;} window.__bcDeleteGuard2=1;
    var TRIG=/elimina armata|conferma eliminazione|elimina quest|eliminazione armata|conferma elimin/;
    var locked=false, timers=[], tick=null, until=0;

    function txt(el){ return String((el&&el.textContent)||'').replace(/\s+/g,' ').trim().toLowerCase(); }
    function menuBox(){
      var bs=document.querySelectorAll('button,a,summary,[role="button"],.btn,[data-act]');
      for(var i=0;i<bs.length;i++){
        var el=bs[i];
        if(el.closest&&el.closest('#bcAudioMenu'))continue;
        var t=txt(el);
        if(t.length>70)continue;
        if(t.indexOf('duplica armata')>=0||t.indexOf('elimina armata')>=0||t.indexOf('conferma eliminazione')>=0||t.indexOf('stampa (pdf)')>=0||t.indexOf('esporta armata corrente')>=0){
          var box=el.parentElement;
          if(box&&box!==document.body&&box!==document.documentElement)return box;
        }
      }
      return document.querySelector('.mn .pop')||document.querySelector('.pop')||null;
    }
    function shown(n){
      if(!n||!document.contains(n))return false;
      try{
        var cs=getComputedStyle(n);
        if(cs.display==='none'||cs.visibility==='hidden')return false;
        var r=n.getBoundingClientRect();
        return r.width>8&&r.height>8;
      }catch(e){ return false; }
    }
    function clearTimers(){ for(var i=0;i<timers.length;i++){ try{ clearTimeout(timers[i]); }catch(e){} } timers=[]; }
    function later(fn,ms){ timers.push(setTimeout(fn,ms)); }

    function detachAudio(){
      var b=document.getElementById('bcAudioMenu');
      if(b&&b.parentNode){ try{ b.parentNode.removeChild(b); }catch(e){} }
    }
    function unlift(){
      try{ if(typeof window.__bcUnliftMenu==='function')window.__bcUnliftMenu(); }catch(e){}
      var ns=document.querySelectorAll('[data-tut-menu]');
      for(var i=0;i<ns.length;i++){
        var n=ns[i];
        try{
          var z=parseInt(n.style.zIndex,10);
          if(!isNaN(z)&&z>=99990)n.style.removeProperty('z-index');
          if(n.style.position==='relative')n.style.removeProperty('position');
          n.removeAttribute('data-tut-menu');
        }catch(e){}
      }
      var raised=document.querySelectorAll('[style*="2147483600"]');
      for(var j=0;j<raised.length;j++){
        try{ raised[j].style.removeProperty('z-index'); }catch(e){}
      }
      try{ document.body.classList.remove('tut-menu-open'); }catch(e){}
    }
    function engage(){
      clearTimers();
      locked=true;
      window.__bcMenuLock=true;
      window.__bcDialogOpen=false;
      until=Date.now()+12000;
      detachAudio();
      unlift();
      later(function(){ detachAudio(); unlift(); },60);
      later(function(){ detachAudio(); unlift(); },180);
    }
    function release(){
      clearTimers();
      locked=false;
      window.__bcMenuLock=false;
      until=0;
    }

    document.addEventListener('click',function(e){
      var t=e.target;
      var ctl=(t&&t.closest)?t.closest('button,a,summary,[role="button"],.btn,[data-act],label'):null;
      if(!ctl)return;
      if(ctl.closest&&ctl.closest('#bcAudioMenu'))return;
      var s=txt(ctl);
      if(!s||s.length>70)return;
      if(!TRIG.test(s))return;
      engage();
    },true);

    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'){ later(release,60); }
    });

    function boot(){
      window.__bcMenuLock=false;
      if(!tick){
        tick=setInterval(function(){
          if(!locked)return;
          var box=menuBox();
          if(!box||!shown(box)){ release(); return; }
          if(until&&Date.now()>until){ release(); return; }
          var t=txt(box);
          if(t.indexOf('conferma elimin')<0&&t.indexOf('elimina armata')>=0){ release(); }
        },200);
      }
    }
    if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',boot); }
    else { boot(); }
    })();
    }catch(e){console.error('[DELETE-GUARD]',e)}

