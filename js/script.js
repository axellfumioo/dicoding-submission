// tahun di footer otomatis
document.getElementById("tahun").textContent = new Date().getFullYear();

// tandai menu yang sedang dilihat saat scroll
const sections = document.querySelectorAll("article section");
const links = document.querySelectorAll("nav a[href^='#']");

window.addEventListener("scroll", function () {
  let current = "";

  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  links.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});
