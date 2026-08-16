function showToast(message){
  const t=document.getElementById('toast');
  if(!t) return;
  t.textContent=message;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),1400);
}
function copyText(id){
  const el=document.getElementById(id);
  if(!el) return;
  navigator.clipboard.writeText(el.innerText).then(()=>showToast('Copied for Cronometer'));
}
function copyUrl(){
  navigator.clipboard.writeText(window.location.href).then(()=>showToast('Recipe URL copied'));
}
function copyRecipe(sectionId){
  const el=document.getElementById(sectionId);
  if(!el) return;
  const clone=el.cloneNode(true);
  clone.querySelectorAll('button,.btns').forEach(x=>x.remove());
  const text=clone.innerText.replace(/\n{3,}/g,'\n\n').trim();
  navigator.clipboard.writeText(text).then(()=>showToast('Copied for Cronometer'));
}
function copyRecipeUrl(sectionId){
  const url=window.location.href.split('#')[0]+'#'+sectionId;
  navigator.clipboard.writeText(url).then(()=>showToast('Recipe URL copied'));
}
