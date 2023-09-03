document.addEventListener("DOMContentLoaded", () => {
  const sandwichMenu = document.getElementById("iconHeader");
  const headerMenu = document.getElementById("headerMobile");
  const overlay = document.getElementById("overlay");
  const navLinks = document.querySelectorAll(".nav-header ul li a");

  sandwichMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("active");
    overlay.style.display = "block";
  });

  overlay.addEventListener("click", () => {
    headerMenu.classList.remove("active");
    overlay.style.display = "none";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      headerMenu.classList.remove("active");
      overlay.style.display = "none";
    });
  });
});
