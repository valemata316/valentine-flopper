let messageIndex = 0;

const messages = [
  "no 😭",
  "are you sure?",
  "babe plsss 💔",
  "don’t do me like this 😩",
  "okay last chance 🥺",
  "NO IS NOT AN OPTION 😈"
];

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const overlay = document.getElementById("yesOverlay");
const closeOverlay = document.getElementById("closeOverlay");

noBtn.addEventListener("click", handleNoClick);
yesBtn.addEventListener("click", handleYesClick);
closeOverlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

function handleNoClick() {
  noBtn.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${currentSize * 1.25}px`;

  popHearts(6);
}

function handleYesClick() {
  overlay.style.display = "grid";
  popHearts(30);
}

function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";

  const choices = ["💗", "💖", "💕", "💘", "🌸"];
  heart.textContent = choices[Math.floor(Math.random() * choices.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.setProperty("--drift", (Math.random() * 200 - 100) + "px");
  heart.style.fontSize = (18 + Math.random() * 26) + "px";
  heart.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}

function popHearts(n) {
  for (let i = 0; i < n; i++) {
    setTimeout(spawnHeart, i * 60);
  }
}

// Ambient hearts
setInterval(spawnHeart, 450);