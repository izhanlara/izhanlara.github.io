window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");

  const handleScroll = () => {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (!sectionId) return;

      const navLink = document.querySelector<HTMLAnchorElement>(
        `nav a[href*="#${sectionId}"]`
      );

      if (!navLink) return;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
});
