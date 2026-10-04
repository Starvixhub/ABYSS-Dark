const button = document.getElementById("enterButton");
const overlay = document.getElementById("overlay");

button.addEventListener("click", () => {
  overlay.classList.add("active");

  setTimeout(() => {
    overlay.querySelector("p").textContent = "WELCOME TO THE ABYSS";
  }, 1800);
});