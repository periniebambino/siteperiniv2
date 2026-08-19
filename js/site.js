(function(){
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      const open=nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded','false');
    }));
    document.addEventListener('keydown',(ev)=>{
      if(ev.key==='Escape'){
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }
})();
