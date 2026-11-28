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

    /* ----- [CUSTOM-10] RESTORE v1 (BC_RESTORE) ----- */
    try{
    (function(){
    if(window.__bcRestore){return;} window.__bcRestore=1;
    var PROPS=['display','visibility','opacity','position','left','top','right','bottom','width','height','z-index','pointer-events','filter','transform','clip-path','mask-image','-webkit-mask-image','isolation','contain'];
    function imp(n,p){ try{ return n.style.getPropertyPriority(p)==='important'; }catch(e){ return false; } }
    function val(n,p){ try{ return n.style.getPropertyValue(p); }catch(e){ return ''; } }
    function del(n,p){ try{ n.style.removeProperty(p); }catch(e){} }
    function menuIsh(n){
      try{
        if(n.querySelector&&n.querySelector('input[type="file"]'))return true;
        var t=String(n.textContent||'').toLowerCase();
        return (t.indexOf('duplica armata')>=0||t.indexOf('carica sfondo')>=0||t.indexOf('galleria')>=0||t.indexOf('fotocamera')>=0);
      }catch(e){ return false; }
    }
    function run(){
      try{
        var b=document.getElementById('bgl');
        if(b&&b.style){
          for(var i=0;i<PROPS.length;i++){ if(imp(b,PROPS[i]))del(b,PROPS[i]); }
        }
        var roots=[document.body,document.documentElement];
        for(var r=0;r<roots.length;r++){
          var n=roots[r];
          if(!n||!n.style)continue;
          for(var k=0;k<PROPS.length;k++){
            var p=PROPS[k];
            if(imp(n,p))del(n,p);
          }
          var z=parseInt(val(n,'z-index'),10);
          if(!isNaN(z)&&z>=99990)del(n,'z-index');
          if(val(n,'position')==='relative'&&!imp(n,'position'))del(n,'position');
          try{ n.removeAttribute('data-tut-menu'); }catch(e){}
        }
        if(document.body){
          var kids=document.body.children;
          for(var j=0;j<kids.length;j++){
            var c=kids[j];
            if(!c.style||c.id==='bgl')continue;
            if(imp(c,'z-index')&&val(c,'z-index')==='1')del(c,'z-index');
            if(imp(c,'position')&&val(c,'position')==='relative')del(c,'position');
            if(menuIsh(c)){
              if(imp(c,'visibility')&&val(c,'visibility')==='hidden')del(c,'visibility');
              if(imp(c,'pointer-events')&&val(c,'pointer-events')==='none')del(c,'pointer-events');
              if(imp(c,'display')&&val(c,'display')==='block')del(c,'display');
              var inner=c.querySelectorAll('[style]');
              for(var q=0;q<inner.length;q++){
                var s=inner[q];
                if(imp(s,'visibility')&&val(s,'visibility')==='hidden')del(s,'visibility');
                if(imp(s,'pointer-events')&&val(s,'pointer-events')==='none')del(s,'pointer-events');
              }
            }
          }
        }
        var st=document.querySelectorAll('style');
        for(var y=0;y<st.length;y++){
          var tx=st[y].textContent||'';
          if(tx.indexOf('BC_LEGACY_SPLASH_OFF')>=0){ try{ st[y].parentNode.removeChild(st[y]); }catch(e){} }
        }
        try{ document.body.classList.remove('tut-menu-open'); }catch(e){}
      }catch(e){}
    }
    function boot(){
      run();
      setTimeout(run,250);
      setTimeout(run,900);
      setTimeout(run,2000);
      setTimeout(run,4000);
    }
    if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',boot); }
    else { boot(); }
    })();
    }catch(e){console.error('[RESTORE]',e)}

    /* ----- [CUSTOM-11] FILE-PICKER-GUARD v1 (BC_FILE_PICKER) ----- */
    try{
    (function(){
    if(window.__bcFilePicker){return;} window.__bcFilePicker=1;
    var PICK_RE=/galleria|fotocamera|scatta con la|scatta foto|scegli dalla/;
    var active=false, cleaned=false, tick=null, mo=null, paused=false, scheduled=false;

    function txt(el){ return String((el&&el.textContent)||'').replace(/\s+/g,' ').trim().toLowerCase(); }
    function vis(n){
      if(!n||!document.contains(n))return false;
      try{
        var cs=getComputedStyle(n);
        if(cs.display==='none')return false;
        var r=n.getBoundingClientRect();
        return r.width>4&&r.height>4;
      }catch(e){ return false; }
    }
    function pickerButtons(){
      var out=[];
      var bs=document.querySelectorAll('button,a,[role="button"],.btn,summary,label');
      for(var i=0;i<bs.length;i++){
        var t=txt(bs[i]);
        if(!t||t.length>60)continue;
        if(!PICK_RE.test(t))continue;
        if(!vis(bs[i]))continue;
        out.push(bs[i]);
      }
      return out;
    }
    function pause(){ if(mo){ try{ mo.disconnect(); }catch(e){} } }
    function resume(){ if(mo&&document.body){ try{ mo.observe(document.body,{childList:true,subtree:true}); }catch(e){} } }
    function quiet(fn){ var was=paused; paused=true; pause(); try{ fn(); }catch(e){} paused=was; resume(); }

    /* rimuove SOLO le regole !important scritte dalle nostre vecchie patch */
    function unlockChain(btns){
      /* __bcUnlockQuiet */ if(window.__tutOpen)return;
      var seen=[];
      for(var i=0;i<btns.length;i++){
        var n=btns[i], d=0;
        while(n&&n!==document.documentElement&&d<14){
          if(seen.indexOf(n)<0){
            seen.push(n);
            try{
              if(n.style){
                if(n.style.getPropertyPriority('pointer-events')==='important'&&n.style.getPropertyValue('pointer-events')==='none')n.style.removeProperty('pointer-events');
                if(n.style.getPropertyPriority('visibility')==='important'&&n.style.getPropertyValue('visibility')==='hidden')n.style.removeProperty('visibility');
                if(n.style.getPropertyPriority('display')==='important'&&n.style.getPropertyValue('display')==='none')n.style.removeProperty('display');
                if(n.style.getPropertyPriority('opacity')==='important'&&n.style.getPropertyValue('opacity')==='0')n.style.removeProperty('opacity');
                var z=parseInt(n.style.getPropertyValue('z-index'),10);
                if(!isNaN(z)&&z>=99990&&n.style.getPropertyPriority('z-index')==='important')n.style.removeProperty('z-index');
              }
              if(n.removeAttribute)n.removeAttribute('data-tut-menu');
            }catch(e){}
          }
          n=n.parentElement; d++;
        }
      }
      var inner=document.querySelectorAll('input[type="file"]');
      for(var j=0;j<inner.length;j++){
        var f=inner[j];
        try{
          if(f.style.getPropertyPriority('pointer-events')==='important')f.style.removeProperty('pointer-events');
          if(f.style.getPropertyPriority('visibility')==='important')f.style.removeProperty('visibility');
        }catch(e){}
      }
    }

    function evaluate(){
      var btns=pickerButtons();
      var on=btns.length>0;
      if(on){
        window.__bcMenuLock=true;
        window.__bcDialogOpen=false;
        if(!active||!cleaned){
          quiet(function(){ unlockChain(btns); });
          cleaned=true;
          setTimeout(function(){ var b=pickerButtons(); if(b.length)quiet(function(){ unlockChain(b); }); },140);
          setTimeout(function(){ var b=pickerButtons(); if(b.length)quiet(function(){ unlockChain(b); }); },420);
        }
        active=true;
      } else if(active){
        active=false; cleaned=false;
        window.__bcMenuLock=false;
      }
    }
    function schedule(d){
      if(scheduled||paused)return;
      scheduled=true;
      setTimeout(function(){ scheduled=false; try{ evaluate(); }catch(e){} }, d||50);
    }

    document.addEventListener('click',function(e){
      var t=e.target;
      var ctl=(t&&t.closest)?t.closest('button,a,[role="button"],.btn,summary,label'):null;
      if(ctl&&PICK_RE.test(txt(ctl))&&txt(ctl).length<=60){
        setTimeout(function(){ try{ unlockChain([ctl]); }catch(e){} },0);
        window.__bcMenuLock=true;
      }
      schedule(0);
      setTimeout(function(){ schedule(0); },200);
    },true);

    document.addEventListener('change',function(e){
      if(e.target&&e.target.type==='file'){ setTimeout(function(){ schedule(0); },150); }
    },true);
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'){ setTimeout(function(){ schedule(0); },80); } });

    function boot(){
      evaluate();
      mo=new MutationObserver(function(){ schedule(70); });
      resume();
      if(!tick)tick=setInterval(function(){ try{ evaluate(); }catch(e){} },500);
      setTimeout(function(){ schedule(0); },250);
      setTimeout(function(){ schedule(0); },1000);
    }
    if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',boot); }
    else { boot(); }
    })();
    }catch(e){console.error('[FILE-PICKER-GUARD]',e)}
