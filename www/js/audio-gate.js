    /* ----- [CUSTOM-05] AUDIO-GATE v3 (menu audio non bloccante, no loop observer) ----- */
    try{
    (function(){
    if(window.__bcAudioGate){return;} window.__bcAudioGate=1;
    var LS_CHOICE='bc.audio.choice', LS_MUTE='bc.audio.muted', LS_VOL='bc.audio.vol';
    var Z_GATE=2147483640;
    var GOLD_A='#f2d488', GOLD_B='#d9a31e', TRACK='rgba(127,127,127,.30)';
    var ctxs=[], unlocked=false, block=null, mo=null, injecting=false, scheduled=false, menuTimer=null;
    var errCount=0, injectOff=false;

    function lsGet(k){ try{ return window.localStorage.getItem(k); }catch(e){ return null; } }
    function lsSet(k,v){ try{ window.localStorage.setItem(k,v); }catch(e){} }
    function media(){ return document.querySelectorAll('audio:not([data-bc-ignore]),video:not([data-bc-ignore])'); }
    function isMuted(){ return lsGet(LS_MUTE)==='1'; }
    function vol(){ var v=parseFloat(lsGet(LS_VOL)); if(isNaN(v))v=0.75; return Math.max(0,Math.min(1,v)); }
    function effVol(){ return isMuted()?0:vol(); }
    function txt(el){ return String(el.textContent||el.value||'').replace(/\s+/g,' ').trim().toLowerCase(); }

    function pauseMO(){ if(mo){ try{ mo.disconnect(); }catch(e){} } }
    function resumeMO(){ if(mo&&document.body){ try{ mo.observe(document.body,{childList:true,subtree:true}); }catch(e){} } }
    function quiet(fn){
      var was=injecting;
      injecting=true; pauseMO();
      try{ fn(); }catch(e){}
      injecting=was; resumeMO();
    }
    function schedule(){
      if(scheduled||injecting)return;
      scheduled=true;
      setTimeout(function(){
        scheduled=false;
        try{ syncMedia(); }catch(e){}
        try{ ensureMenu(); }catch(e){
          errCount++;
          if(errCount>=3){ injectOff=true; }
        }
      },60);
    }

    var ORIG_CONNECT=(window.AudioNode&&AudioNode.prototype&&AudioNode.prototype.connect)?AudioNode.prototype.connect:null;
    function masterFor(ctx){
      if(!ctx)return null;
      if(ctx.__bcMaster)return ctx.__bcMaster;
      if(ctx.__bcMasterBusy)return null;
      ctx.__bcMasterBusy=1;
      var g=null;
      try{
        g=ctx.createGain();
        g.__bcIsMaster=1;
        ctx.__bcMaster=g;
        g.gain.value=effVol();
        if(ORIG_CONNECT)ORIG_CONNECT.call(g,ctx.destination);
      }catch(e){ g=null; try{ ctx.__bcMaster=null; }catch(e2){} }
      try{ ctx.__bcMasterBusy=0; }catch(e){}
      if(ctxs.indexOf(ctx)<0)ctxs.push(ctx);
      return g;
    }
    if(ORIG_CONNECT&&!ORIG_CONNECT.__bcWrapped&&!window.__bcConnectWrapped){
      try{
        var wrapped=function(dest){
          try{
            if(dest&&dest.context&&dest===dest.context.destination&&!dest.__bcIsMaster){
              var m=masterFor(dest.context);
              if(m){ ORIG_CONNECT.call(this,m); return dest; }
            }
          }catch(e){}
          return ORIG_CONNECT.apply(this,arguments);
        };
        wrapped.__bcWrapped=1;
        AudioNode.prototype.connect=wrapped;
        window.__bcConnectWrapped=1;
      }catch(e){}
    }
    var AC=window.AudioContext||window.webkitAudioContext;
    if(AC&&!window.__bcACWrapped){
      try{
        var Wrapped=function(){
          var c=new AC();
          if(ctxs.indexOf(c)<0)ctxs.push(c);
          if(isMuted()){ try{ c.suspend(); }catch(e){} }
          return c;
        };
        Wrapped.prototype=AC.prototype;
        window.__bcACWrapped=1;
        if(window.AudioContext)window.AudioContext=Wrapped;
        if(window.webkitAudioContext)window.webkitAudioContext=Wrapped;
      }catch(e){}
    }

    function syncMedia(){
      var m=isMuted()||!unlocked, v=effVol(), els=media(), i;
      for(i=0;i<els.length;i++){
        try{ if(els[i].muted!==m)els[i].muted=m; }catch(e){}
        try{ if(els[i].volume!==v)els[i].volume=v; }catch(e){}
      }
    }
    function applyAudio(){
      var v=effVol(), m=isMuted(), i;
      syncMedia();
      for(i=0;i<ctxs.length;i++){
        var c=ctxs[i];
        try{ if(c.__bcMaster&&c.__bcMaster.gain.value!==v)c.__bcMaster.gain.value=v; }catch(e){}
        try{ if(m){ if(c.state==='running')c.suspend(); } else if(unlocked&&c.state==='suspended'){ c.resume(); } }catch(e){}
      }
      paintMenu();
      try{ document.dispatchEvent(new CustomEvent('bc:audio-state',{detail:{muted:m,volume:vol()}})); }catch(e){}
    }
    function prime(){
      unlocked=true;
      if(AC){
        try{
          var c=new AC();
          if(ctxs.indexOf(c)<0)ctxs.push(c);
          c.resume();
          var b=c.createBuffer(1,1,22050), s=c.createBufferSource();
          s.buffer=b; s.connect(c.destination); s.start(0);
        }catch(e){}
      }
      var els=media();
      for(var i=0;i<els.length;i++){
        (function(el){
          try{
            el.muted=true;
            var p=el.play();
            if(p&&p.then){ p.then(function(){ try{ el.pause(); el.currentTime=0; }catch(e){} }).catch(function(){}); }
            else { el.pause(); }
          }catch(e){}
        })(els[i]);
      }
      try{ document.dispatchEvent(new CustomEvent('bc:audio-ready',{detail:{enabled:!isMuted()}})); }catch(e){}
    }
    function setVol(v){
      v=Math.max(0,Math.min(1,v));
      lsSet(LS_VOL,String(v));
      if(v>0&&isMuted())lsSet(LS_MUTE,'0');
      if(v===0)lsSet(LS_MUTE,'1');
      if(!unlocked&&v>0)prime();
      applyAudio();
    }
    function setMuted(m){
      lsSet(LS_MUTE,m?'1':'0');
      if(!m&&!unlocked)prime();
      applyAudio();
    }

    var CSS=[
    '#bcAudioGate{position:fixed;inset:0;z-index:'+Z_GATE+';display:flex;align-items:center;justify-content:center;padding:24px;background:radial-gradient(circle at 50% 26%,rgba(217,163,30,.22) 0,rgba(217,163,30,.07) 26%,rgba(11,18,32,.97) 62%),linear-gradient(160deg,#0b1220 0%,#121c2e 52%,#080d16 100%);animation:bcGateIn .5s cubic-bezier(.2,.85,.25,1.02) both;}',
    '#bcAudioGate::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(242,212,136,.14) 1px,transparent 1px);background-size:26px 26px;opacity:.5;animation:bcDrift 26s linear infinite;pointer-events:none;}',
    '#bcAudioGate.bc-out{animation:bcGateOut .42s cubic-bezier(.4,0,.6,1) both;pointer-events:none;}',
    '.bc-gate-card{position:relative;box-sizing:border-box;width:100%;max-width:520px;max-height:calc(100vh - 48px);overflow:auto;text-align:center;padding:34px 30px 26px;border-radius:22px;border:2px solid rgba(242,212,136,.42);background:linear-gradient(180deg,rgba(18,28,46,.96),rgba(9,14,24,.98));box-shadow:0 30px 90px rgba(0,0,0,.7),inset 0 1px 0 rgba(242,212,136,.18);font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#f4ecd8;}',
    '.bc-gate-card::-webkit-scrollbar{width:10px;}',
    '.bc-gate-card::-webkit-scrollbar-track{background:rgba(242,212,136,.07);border-radius:10px;}',
    '.bc-gate-card::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#d9a31e,#c85a17);border-radius:10px;border:2px solid rgba(11,18,32,.9);}',
    '.bc-gate-card::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg,#f2d488,#d9a31e);}',
    '.bc-gate-card{scrollbar-width:thin;scrollbar-color:#d9a31e rgba(242,212,136,.07);}',
    '.bc-gate-ring{width:104px;height:104px;margin:0 auto 18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:44px;line-height:1;background:radial-gradient(circle at 50% 34%,#f2d488,#d9a31e 58%,#8a5a12 100%);border:3px solid rgba(11,18,32,.85);box-shadow:0 0 0 6px rgba(217,163,30,.16),0 14px 34px rgba(0,0,0,.55);animation:bcPulse 3.4s ease-in-out infinite;}',
    '.bc-gate-eyebrow{font-size:11px;font-weight:800;letter-spacing:.26em;text-transform:uppercase;color:#d9a31e;margin:0 0 10px;}',
    '.bc-gate-title{font-size:27px;font-weight:900;line-height:1.15;margin:0 0 12px;color:#fffdf7;text-shadow:0 2px 0 rgba(0,0,0,.45);}',
    '.bc-gate-lead{font-size:15px;font-weight:600;line-height:1.62;margin:0 auto 24px;max-width:400px;color:#c9d6e4;}',
    '.bc-gate-actions{display:flex;flex-direction:column;gap:11px;align-items:center;}',
    '.bc-gate-btn{font:inherit;font-weight:800;font-size:16px;width:100%;max-width:340px;padding:14px 20px;border-radius:14px;cursor:pointer;border:2px solid transparent;transition:transform .14s,filter .18s,box-shadow .18s;}',
    '.bc-gate-btn:hover{filter:brightness(1.07);transform:translateY(-1px);}',
    '.bc-gate-btn:active{transform:translateY(1px);}',
    '.bc-gate-primary{background:linear-gradient(180deg,#f2d488,#d9a31e 62%,#c85a17);color:#1a1206;border-color:rgba(11,18,32,.7);box-shadow:0 8px 0 rgba(11,18,32,.5),0 16px 32px rgba(217,163,30,.24);}',
    '.bc-gate-secondary{background:transparent;color:#9fb3c8;border-color:rgba(159,179,200,.4);font-size:14px;font-weight:700;padding:11px 18px;}',
    '.bc-gate-secondary:hover{color:#f4ecd8;border-color:rgba(242,212,136,.6);background:rgba(242,212,136,.07);}',
    '.bc-gate-foot{font-size:12px;font-weight:600;line-height:1.5;color:#7f93a8;margin:20px 0 0;}',
    '#bcAudioMenu{display:block;box-sizing:border-box!important;width:100%!important;max-width:none!important;min-width:0!important;align-self:stretch!important;flex:0 0 auto!important;grid-column:1 / -1!important;padding:8px 8px 12px;margin:6px 0;border-top:1px dashed rgba(127,127,127,.38);border-bottom:1px dashed rgba(127,127,127,.38);color:inherit;font-family:inherit;}',
    '#bcAudioToggle{box-sizing:border-box;display:flex;align-items:center;gap:8px;width:100%;text-align:left;font-family:inherit;font-size:inherit;font-weight:800;line-height:1.3;background:transparent;border:0;border-radius:9px;padding:7px 6px;margin:0;cursor:pointer;color:inherit;transition:background .16s;}',
    '#bcAudioToggle:hover{background:rgba(127,127,127,.14);}',
    '#bcAudioToggle:focus-visible{outline:2px solid '+GOLD_B+';outline-offset:2px;}',
    '#bcAudioToggle .bc-ico{font-size:15px;line-height:1;flex:0 0 auto;}',
    '#bcAudioToggle[data-off="1"]{opacity:.62;}',
    '.bc-audio-vol-label{display:block;width:100%;box-sizing:border-box;font-size:12.5px;font-weight:600;line-height:1.4;opacity:.82;margin:8px 0 7px;padding:0 6px;}',
    '#bcAudioVol{-webkit-appearance:none;appearance:none;display:block!important;box-sizing:border-box!important;width:100%!important;max-width:none!important;min-width:0!important;align-self:stretch!important;flex:0 0 auto!important;height:22px;margin:2px 0 0;padding:0;background:transparent;cursor:pointer;}',
    '#bcAudioVol:focus{outline:none;}',
    '#bcAudioVol:focus-visible{outline:2px solid '+GOLD_B+';outline-offset:4px;border-radius:999px;}',
    '#bcAudioVol::-webkit-slider-runnable-track{width:100%;height:10px;border-radius:999px;background:linear-gradient(90deg,'+GOLD_A+' 0%,'+GOLD_B+' calc(var(--p,75) * 1%),'+TRACK+' calc(var(--p,75) * 1%),'+TRACK+' 100%);box-shadow:inset 0 1px 2px rgba(0,0,0,.28);}',
    '#bcAudioVol::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;margin-top:-5px;border-radius:50%;background:radial-gradient(circle at 34% 30%,#fbeec2,'+GOLD_B+' 72%);border:2px solid rgba(20,20,20,.55);box-shadow:0 2px 7px rgba(0,0,0,.4);transition:transform .12s;}',
    '#bcAudioVol:hover::-webkit-slider-thumb{transform:scale(1.08);}',
    '#bcAudioVol:active::-webkit-slider-thumb{transform:scale(.96);}',
    '#bcAudioVol::-moz-range-track{width:100%;height:10px;border-radius:999px;background:linear-gradient(90deg,'+GOLD_A+' 0%,'+GOLD_B+' calc(var(--p,75) * 1%),'+TRACK+' calc(var(--p,75) * 1%),'+TRACK+' 100%);}',
    '#bcAudioVol::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:radial-gradient(circle at 34% 30%,#fbeec2,'+GOLD_B+' 72%);border:2px solid rgba(20,20,20,.55);box-shadow:0 2px 7px rgba(0,0,0,.4);}',
    '@keyframes bcGateIn{from{opacity:0}to{opacity:1}}',
    '@keyframes bcGateOut{from{opacity:1}to{opacity:0}}',
    '@keyframes bcPulse{0%,100%{box-shadow:0 0 0 6px rgba(217,163,30,.16),0 14px 34px rgba(0,0,0,.55)}50%{box-shadow:0 0 0 14px rgba(217,163,30,.09),0 14px 34px rgba(0,0,0,.55)}}',
    '@keyframes bcDrift{from{background-position:0 0}to{background-position:260px 260px}}',
    '@media (prefers-reduced-motion:reduce){#bcAudioGate,.bc-gate-ring,#bcAudioGate::before{animation:none!important}}',
    '@media (max-width:420px){.bc-gate-card{padding:26px 20px 20px}.bc-gate-title{font-size:22px}.bc-gate-ring{width:86px;height:86px;font-size:36px}}'
    ].join('');

    function style(){
      if(document.getElementById('bcAudioCss'))return;
      var s=document.createElement('style'); s.id='bcAudioCss'; s.textContent=CSS;
      (document.head||document.documentElement).appendChild(s);
    }

    function menuBox(){
      var bs=document.querySelectorAll('button,a,summary,[role="button"],.btn,[data-act]');
      for(var i=0;i<bs.length;i++){
        var el=bs[i];
        if(el.closest&&el.closest('#bcAudioMenu'))continue;
        var t=txt(el);
        if(t.indexOf('duplica armata')>=0||t.indexOf('elimina armata')>=0){
          var box=el.parentElement;
          if(box&&box!==document.body&&box!==document.documentElement)return box;
        }
      }
      return document.querySelector('.mn .pop')||document.querySelector('.pop')||null;
    }
    /* BC_AUDIO_FULLWIDTH - allunga lo slider a tutta la larghezza del menu */
    function fitWidth(){
      if(window.__bcMenuLock)return;
      if(!block||!document.contains(block))return;
      var box=block.parentElement;
      if(!box)return;
      quiet(function(){
        block.style.setProperty('width','100%','important');
        block.style.setProperty('max-width','none','important');
        block.style.setProperty('min-width','0','important');
        block.style.setProperty('align-self','stretch','important');
        block.style.setProperty('flex','0 0 auto','important');
        block.style.setProperty('box-sizing','border-box','important');
        var tg=block.querySelector('#bcAudioToggle');
        var vl=block.querySelector('#bcAudioVolLabel');
        var sl=block.querySelector('#bcAudioVol');
        if(tg){ tg.style.setProperty('width','100%','important'); tg.style.setProperty('box-sizing','border-box','important'); }
        if(vl){ vl.style.setProperty('width','100%','important'); vl.style.setProperty('box-sizing','border-box','important'); }
        if(!sl)return;
        var inner=0;
        try{
          var bcs=getComputedStyle(block);
          var bp=(parseFloat(bcs.paddingLeft)||0)+(parseFloat(bcs.paddingRight)||0);
          inner=block.clientWidth-bp;
        }catch(e){ inner=0; }
        if(!inner||inner<60){
          try{
            var pcs=getComputedStyle(box);
            var pp=(parseFloat(pcs.paddingLeft)||0)+(parseFloat(pcs.paddingRight)||0);
            inner=box.clientWidth-pp-16;
          }catch(e){ inner=0; }
        }
        if(!inner||inner<60)return;
        sl.style.setProperty('width',Math.round(inner)+'px','important');
        sl.style.setProperty('max-width','none','important');
        sl.style.setProperty('min-width','0','important');
        sl.style.setProperty('display','block','important');
        sl.style.setProperty('align-self','stretch','important');
        sl.style.setProperty('flex','0 0 auto','important');
        sl.style.setProperty('box-sizing','border-box','important');
      });
    }
    function paintMenu(){
      if(window.__bcMenuLock)return;
      if(!block||!document.contains(block)){ block=null; return; }
      var off=isMuted()||!unlocked;
      var pct=Math.round(vol()*100);
      var sig=(off?'1':'0')+'|'+pct;
      if(block.__bcSig===sig)return;
      block.__bcSig=sig;
      var tg=block.querySelector('#bcAudioToggle');
      var ico=block.querySelector('.bc-ico');
      var lab=block.querySelector('.bc-txt');
      var vl=block.querySelector('#bcAudioVolLabel');
      var sl=block.querySelector('#bcAudioVol');
      quiet(function(){
        if(ico){ var ic=off?'\ud83d\udd07':'\ud83d\udd0a'; if(ico.textContent!==ic)ico.textContent=ic; }
        if(lab){ var lt='Musica: '+(off?'disattivata':'attiva'); if(lab.textContent!==lt)lab.textContent=lt; }
        if(vl){ var vt='Volume musica \u00b7 '+pct+'%'; if(vl.textContent!==vt)vl.textContent=vt; }
        if(tg){
          tg.setAttribute('data-off',off?'1':'0');
          tg.setAttribute('aria-pressed',off?'false':'true');
          tg.title=off?'Musica disattivata - tocca per attivare':'Musica attiva - tocca per disattivare';
        }
        if(sl){
          if(document.activeElement!==sl&&sl.value!==String(pct))sl.value=String(pct);
          sl.style.setProperty('--p',String(pct));
          sl.setAttribute('aria-valuetext',pct+' per cento');
        }
      });
    }
    function buildBlock(){
      var d=document.createElement('div');
      d.id='bcAudioMenu';
      var tg=document.createElement('button');
      tg.type='button'; tg.id='bcAudioToggle';
      tg.setAttribute('aria-label','Attiva o disattiva la musica');
      var ico=document.createElement('span'); ico.className='bc-ico';
      var lab=document.createElement('span'); lab.className='bc-txt';
      tg.appendChild(ico); tg.appendChild(lab);
      var vl=document.createElement('span');
      vl.className='bc-audio-vol-label'; vl.id='bcAudioVolLabel';
      var sl=document.createElement('input');
      sl.type='range'; sl.id='bcAudioVol'; sl.min='0'; sl.max='100'; sl.step='1';
      sl.setAttribute('aria-label','Volume della musica');
      d.appendChild(tg); d.appendChild(vl); d.appendChild(sl);
      tg.addEventListener('click',function(e){
        e.preventDefault();
        if(!unlocked){ prime(); setMuted(false); }
        else { setMuted(!isMuted()); }
      });
      sl.addEventListener('input',function(){ setVol(parseFloat(sl.value)/100); });
      sl.addEventListener('change',function(){ setVol(parseFloat(sl.value)/100); });
      d.addEventListener('click',function(e){ e.stopPropagation(); });
      d.addEventListener('mousedown',function(e){ e.stopPropagation(); });
      d.addEventListener('pointerdown',function(e){ e.stopPropagation(); });
      d.addEventListener('touchstart',function(e){ e.stopPropagation(); },{passive:true});
      return d;
    }
    function ensureMenu(){
      if(window.__bcMenuLock)return;
      if(injectOff)return;
      var box=menuBox();
      if(!box){ block=null; return; }
      var ex=box.querySelector('#bcAudioMenu');
      if(ex){ block=ex; fitWidth(); paintMenu(); return; }
      var fresh=buildBlock();
      quiet(function(){
        var kids=box.children, anchor=null, lastArmy=null, i, t;
        for(i=0;i<kids.length;i++){
          if(kids[i].id==='bcAudioMenu')continue;
          t=txt(kids[i]);
          if(t.indexOf('stampa')>=0&&t.length<40){ anchor=kids[i]; break; }
          if(t.indexOf('duplica armata')>=0||t.indexOf('elimina armata')>=0)lastArmy=kids[i];
        }
        box.appendChild(fresh);
      });
      block=fresh; fitWidth();
      errCount=0;
      paintMenu();
    }

    function closeGate(choice){
      lsSet(LS_CHOICE,choice);
      var g=document.getElementById('bcAudioGate');
      if(!g){ schedule(); return; }
      g.classList.add('bc-out');
      setTimeout(function(){ quiet(function(){ try{ g.remove(); }catch(e){} }); schedule(); },440);
    }
    function buildGate(){
      if(!document.body)return;
      if(document.getElementById('bcAudioGate'))return;
      var g=document.createElement('div');
      g.id='bcAudioGate';
      g.setAttribute('role','dialog');
      g.setAttribute('aria-modal','true');
      g.innerHTML='<div class="bc-gate-card">'
        +'<div class="bc-gate-ring">\u2694</div>'
        +'<p class="bc-gate-eyebrow">Roster della Compagnia</p>'
        +'<h1 class="bc-gate-title">Battle Company Roster</h1>'
        +'<p class="bc-gate-lead">Tocca per attivare l\'audio e iniziare.</p>'
        +'<div class="bc-gate-actions">'
        +'<button type="button" class="bc-gate-btn bc-gate-primary" id="bcGateGo">\ud83d\udd0a Tocca per attivare l\'audio</button>'
        +'<button type="button" class="bc-gate-btn bc-gate-secondary" id="bcGateSkip">Salta \u25b8</button>'
        +'</div>'
        +'<p class="bc-gate-foot">Trovi interruttore e volume della musica nel menu con i tre puntini in alto.</p>'
        +'</div>';
      quiet(function(){ document.body.appendChild(g); });
      var go=g.querySelector('#bcGateGo'), sk=g.querySelector('#bcGateSkip');
      go.addEventListener('click',function(){ prime(); setMuted(false); closeGate('on'); });
      sk.addEventListener('click',function(){ setMuted(true); closeGate('skip'); });
      setTimeout(function(){ try{ go.focus(); }catch(e){} },80);
    }

    window.BCAudio={
      mute:function(){ setMuted(true); },
      unmute:function(){ setMuted(false); },
      toggle:function(){ if(!unlocked){ prime(); setMuted(false); } else { setMuted(!isMuted()); } },
      isMuted:function(){ return isMuted()||!unlocked; },
      setVolume:function(v){ setVol(v); },
      getVolume:function(){ return vol(); },
      unlock:function(){ prime(); applyAudio(); }
    };

    function boot(){
      style();
      var legacy=document.getElementById('bcAudioPill');
      if(legacy){ quiet(function(){ try{ legacy.remove(); }catch(e){} }); }
      if(lsGet(LS_VOL)===null)lsSet(LS_VOL,'0.75');
      var choice=lsGet(LS_CHOICE);
      if(choice==='on'){ prime(); applyAudio(); }
      else if(choice==='skip'){ applyAudio(); }
      else { buildGate(); }
      mo=new MutationObserver(function(){ schedule(); });
      resumeMO();
      schedule();
      if(!menuTimer)menuTimer=setInterval(schedule,700);
      window.addEventListener('resize',function(){ try{ fitWidth(); }catch(e){} });
    }
    if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',boot); }
    else { boot(); }
    })();
    }catch(e){console.error('[AUDIO-GATE]',e)}

                
