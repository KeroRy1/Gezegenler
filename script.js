// Keşfe Başla butonu
document.getElementById("exploreBtn").addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("planets").offsetTop,
    behavior: "smooth"
  });
});

// Gezegen Bilgisi Gösterme
const planets = document.querySelectorAll(".planet");
const planetInfo = document.getElementById("planetInfo");

planets.forEach(planet => {
  planet.addEventListener("click", () => {
    const info = planet.getAttribute("data-info");
    planetInfo.textContent = info;
    planetInfo.style.display = "block";

    setTimeout(() => {
      planetInfo.style.display = "none";
    }, 4000);
  });
});

// İletişim Formu
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mesajınız gönderildi! 🚀");
  form.reset();
});
