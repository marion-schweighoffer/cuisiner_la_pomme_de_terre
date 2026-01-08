const popup = document.getElementById("welcomePopup");

function closePopup() {
  if (!popup) return;
  popup.style.display = "none";
  popup.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (e) => {
  // CLILC SUR LA CROIX
  if (e.target.matches("[data-close]")) closePopup();

  // CLICL SUR LE VOILE (EN DEHORS DE LA BOITE)
  if (popup && e.target === popup) closePopup();
});

// TOUCHE ESPACE
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePopup();
});


