function copyLTC(){
  navigator.clipboard.writeText("YOUR_LTC_WALLET");
  document.getElementById("copy-alert").style.opacity=1;
  setTimeout(()=>document.getElementById("copy-alert").style.opacity=0,1500);
}

// particles
const container=document.getElementById("particles");
for(let i=0;i<40;i++){
  let d=document.createElement("div");
  d.classList.add("p");
  d.style.left=Math.random()*100+'%';
  d.style.top=Math.random()*100+'%';
  d.style.animationDelay=Math.random()*5+'s';
  container.appendChild(d);
}
