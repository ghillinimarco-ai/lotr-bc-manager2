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

