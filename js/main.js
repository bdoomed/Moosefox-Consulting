(function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (!menuToggle || !mobileNav) {
    return;
  }

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    mobileNav.hidden = true;
  }

  menuToggle.addEventListener("click", function () {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    mobileNav.hidden = isOpen;
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });
})();
