// ----- Generate glow particles -----
const container = document.getElementById("glow-container");

for (let i = 0; i < 40; i++) {
  let dot = document.createElement("div");
  dot.classList.add("glow-dot");

  dot.style.left = Math.random() * 100 + "%";
  dot.style.top = Math.random() * 100 + "%";
  dot.style.animationDelay = Math.random() * 5 + "s";
  dot.style.opacity = Math.random() * 0.7 + 0.3;

  container.appendChild(dot);
}


// ----- LTC Copy Function -----
const litecoinAddress = "YOUR_LITECOIN_ADDRESS";

function copyLTC() {
  navigator.clipboard.writeText(litecoinAddress);
  const alert = document.getElementById("copied-alert");
  alert.style.opacity = 1;

  setTimeout(() => {
    alert.style.opacity = 0;
  }, 1500);
}
