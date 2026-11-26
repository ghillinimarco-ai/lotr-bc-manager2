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
