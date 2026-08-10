
function copyText(id){
  const el=document.getElementById(id);
  navigator.clipboard.writeText(el.innerText).then(()=>{
    const t=document.getElementById('toast');
    t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'),1400);
  });
}
function copyUrl(){
  navigator.clipboard.writeText(window.location.href).then(()=>{
    const t=document.getElementById('toast');
    t.textContent='Recipe URL copied';
    t.classList.add('show');
    setTimeout(()=>{t.classList.remove('show');t.textContent='Copied for Cronometer';},1400);
  });
}
